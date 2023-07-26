import pandas as pd
import pdfplumber
import re
import PyPDF2
from datetime import datetime
from base import Base
from image_text_ocr import ImageTextOcr
import os
import cv2


class Discern(Base):

    def __init__(self):
        super(Discern, self).__init__()
        self.image_text_ocr = ImageTextOcr()
        self.xlsx_keys = {}
        self.xlsx_keys_list = []
        self.num = 0

    def export_excel(self, export):
        # 将字典列表转换为DataFrame
        pf = pd.DataFrame(list(export))
        current_time = datetime.now()
        formatted_time = current_time.strftime('%Y-%m-%d-%H-%M-%S')
        file_path = pd.ExcelWriter(f'../docs/无源{formatted_time}.xlsx')
        # 替换空单元格
        pf.fillna(' ', inplace=True)
        # 输出
        pf.to_excel(file_path, index=False)
        # 保存表格
        file_path.close()

    def is_valid_time(self, input_str):
        try:
            valid_time = datetime.strptime(input_str, "%Y-%m-%d")  # 根据实际时间格式调整
            return valid_time
        except ValueError:
            return False

    def pdf_all_text(self, pdf_path):
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages[1:]:
                # 提取页面文本
                text = page.extract_text()
                lines = text.split()
                valid_time_list = []
                for line in lines:
                    if 'SST' in line:
                        self.xlsx_keys['方案编号'] = line

                    if '签发日期' in line:
                        self.xlsx_keys['签发日期'] = line.replace('签发日期', '')

                    valid_time = self.is_valid_time(line)
                    if valid_time:
                        valid_time_list.append(valid_time)
                if valid_time_list:
                    self.xlsx_keys['签发日期'] = max(valid_time_list).strftime("%Y-%m-%d")

    def pdf_text(self, pdf_path):
        with pdfplumber.open(pdf_path) as pdf:
            page = pdf.pages[0]
            # 提取页面文本
            text = page.extract_text()
            lines = text.split("\n")
            line_str = ''
            company = ''
            for line in lines:
                line_str += line
                if 'CSTBB' in line:
                    for li in line.split():
                        if 'CSTBB' in li:
                            self.xlsx_keys['报告编号'] = li.strip().replace('报告编号：', '')
                if '样品名称' in line:
                    try:
                        self.xlsx_keys['样品名称'] = line.split()[1].strip().replace(': ', '')
                    except Exception as e:
                        print(e)
                        self.xlsx_keys['样品名称'] = ''
                if 'Article Name:' in line:
                    self.xlsx_keys['样品名称'] = line.split("Article Name")[1].strip().replace(': ', '')
                if '公司' in line:
                    company += line.strip()
                if '最终报告' in line or 'Final Report' in line:
                    self.xlsx_keys['检测项目'] = line_str.replace('最终报告', '').replace('Final Report', '')\
                        .replace('中国认可国际互认检测', '')
                self.xlsx_keys['标志'] = ''

            company_list = company.split()
            for company_str in company_list:
                self.xlsx_keys['公司名称'] += company_str
                self.xlsx_keys['公司名称'] = self.xlsx_keys['公司名称'].replace('中检华通威国际检验(苏州)有限公司', '').\
                    replace('中检华通威国际检验（苏州）有限公司', '')

    def pdf_images(self, pdf_path):
        self.num = 0
        pdf_reader = PyPDF2.PdfReader(pdf_path)
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            xObject = page['/Resources']['/XObject'].get_object()

            for obj in xObject:
                if xObject[obj]['/Subtype'] == '/Image':
                    size = (xObject[obj]['/Width'], xObject[obj]['/Height'])
                    self.num += 1
                    image_file = f"../target_img/image_{self.num}.png"
                    with open(image_file, "wb") as f:
                        f.write(xObject[obj].get_data())

    def get_images_text(self):
        for i in range(1, self.num + 1):
            text_dict = {
                '方案编号': '',
                '签发日期': '',
                '标志': ''
            }
            try:
                text_dict = self.image_text_ocr.run(text_dict, f'../target_img/image_{i}.png')
            except cv2.error as c:
                self.log(c)
                pass

            if text_dict.get('标志'):
                self.xlsx_keys['标志'] += text_dict.get('标志')
            if text_dict.get('方案编号'):
                self.xlsx_keys['方案编号'] = text_dict.get('方案编号')
            if text_dict.get('签发日期'):
                self.xlsx_keys['签发日期'] = text_dict.get('签发日期')

    def remove_file(self, folder_path):
        with os.scandir(folder_path) as entries:
            for entry in entries:
                if entry.is_file():
                    file_path = entry.path
                    try:
                        os.remove(file_path)
                    except Exception as e:
                        pass

    def run(self, folder_path):
        with os.scandir(folder_path) as entries:
            for entry in entries:
                self.xlsx_keys = {
                    '登记日期': '',
                    '方案编号': '',
                    '样品编号': '',
                    '报告编号': '',
                    '样品名称': '',
                    '检测项目': '',
                    '标志': '',
                    '签发日期': '',
                    '公司名称': ''
                }
                self.remove_file('../target_img')
                if entry.is_file():
                    file_path = entry.path
                    file_name = entry.name
                    self.log(file_name)
                    self.xlsx_keys['文件名'] = file_name
                    self.pdf_text(file_path)
                    self.pdf_images(file_path)
                    self.get_images_text()
                    if not self.xlsx_keys['方案编号'] and not self.xlsx_keys['签发日期']:
                        self.pdf_all_text(file_path)
                    if not self.xlsx_keys['方案编号']:
                        matches = re.findall(r'SST\d+BB', file_name)
                        if matches:
                            self.xlsx_keys['方案编号'] = matches[0]
                        else:
                            self.log("未找到匹配的模式方案编号")
                self.xlsx_keys_list.append(self.xlsx_keys)
        self.export_excel(self.xlsx_keys_list)


if __name__ == '__main__':
    discern = Discern()
    discern.run('../file')
