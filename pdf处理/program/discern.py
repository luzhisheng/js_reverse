import image_compare
import pandas as pd
import pdfplumber
import os
import cv2


class Discern(object):

    def __init__(self):
        self.xlsx_keys = {}
        self.xlsx_keys_list = []
        self.num = 0

    def export_excel(self, export):
        # 将字典列表转换为DataFrame
        pf = pd.DataFrame(list(export))
        file_path = pd.ExcelWriter('../docs/结果.xlsx')
        # 替换空单元格
        pf.fillna(' ', inplace=True)
        # 输出
        pf.to_excel(file_path, index=False)
        # 保存表格
        file_path.close()

    def pdf_text(self, pdf_path):
        with pdfplumber.open(pdf_path) as pdf:
            # 遍历每个页面
            page = pdf.pages[0]
            # 提取页面文本
            text = page.extract_text()
            lines = text.split("\n")
            line_str = ''
            for line in lines:
                line_str += line
                if '报告编号:' in line:
                    self.xlsx_keys['报告编号'] = line.split("报告编号")[1].strip().replace(': ', '')
                if '样品名称:' in line:
                    self.xlsx_keys['样品名称'] = line.split("样品名称")[1].strip().replace(': ', '')
                if '公司' in line and '中检华通' not in line and '制造商' not in line:
                    self.xlsx_keys['公司名称'] = line.strip()
                if '最终报告' in line:
                    self.xlsx_keys['检测项目'] = line_str.replace('最终报告', '')
                self.xlsx_keys['标志'] = ''

    def pdf_images(self, pdf_path):
        self.num = 0
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                images = page.images
                for img in images:
                    # 获取图片的二进制流
                    self.num += 1
                    image_file = f"../target_img/image_{self.num}.jpg"
                    with open(image_file, "wb") as f:
                        f.write(img['stream'].get_data())

    def get_sign(self):
        for i in range(1, self.num + 1):
            try:
                cma_flag = image_compare.run(f'../target_img/image_{i}.jpg', '../img/cma.jpg')
                cnas_flag = image_compare.run(f'../target_img/image_{i}.jpg', '../img/cnas.jpg')
            except cv2.error as c:
                pass
            if cma_flag:
                self.xlsx_keys['标志'] = '国cma'
            if cnas_flag:
                self.xlsx_keys['标志'] += ',cnas中文'

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
                    self.xlsx_keys['文件名'] = file_name
                    self.pdf_text(file_path)
                    self.pdf_images(file_path)
                    self.get_sign()
                    self.xlsx_keys_list.append(self.xlsx_keys)
        self.export_excel(self.xlsx_keys_list)


if __name__ == '__main__':
    discern = Discern()
    discern.run('../file')
