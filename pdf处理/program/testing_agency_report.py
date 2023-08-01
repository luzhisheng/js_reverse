from program.pdf_base import PDFBase
import pdfplumber
import cv2
import os
import re


class TestingAgencyReport(PDFBase):

    def __init__(self):
        super(TestingAgencyReport, self).__init__()
        self.xlsx_keys = {}
        self.xlsx_keys_list = []
        self.num = 0

    def pdf_images(self, pdf_path, img_path):
        self.download_img(pdf_path, img_path)
        with os.scandir(img_path) as entries:
            for entry in entries:
                if entry.is_file():
                    text_dict = {
                        '方案编号': '',
                        '签发日期': '',
                        '标志': ''
                    }

                    try:
                        lines = self.read_img_ocr(entry.path)
                        valid_time_list = []
                        for line in lines:
                            if 'S$T' in line or 'SST' in line:
                                text_dict['方案编号'] = line.replace('S$T', 'SST').replace('试验方案编号:', '')

                            if 'CNAS' in line:
                                text_dict['标志'] = 'cnas中文,'

                            if '200015344424' in line:
                                text_dict['标志'] = '国cma,'

                            valid_time = self.is_valid_time(line)
                            if valid_time:
                                valid_time_list.append(valid_time)
                        if valid_time_list:
                            text_dict['签发日期'] = max(valid_time_list).strftime("%Y-%m-%d")
                    except cv2.error as c:
                        self.log(c)

                    if text_dict.get('标志'):
                        self.xlsx_keys['标志'] += text_dict.get('标志')
                    if text_dict.get('方案编号'):
                        self.xlsx_keys['方案编号'] = text_dict.get('方案编号')
                    if text_dict.get('签发日期'):
                        self.xlsx_keys['签发日期'] = text_dict.get('签发日期')

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
                    self.xlsx_keys['检测项目'] = line_str.replace('最终报告', '').replace('Final Report', '') \
                        .replace('中国认可国际互认检测', '')

            company_list = company.split()
            for company_str in company_list:
                self.xlsx_keys['公司名称'] += company_str
                self.xlsx_keys['公司名称'] = self.xlsx_keys['公司名称'].replace('中检华通威国际检验(苏州)有限公司', ''). \
                    replace('中检华通威国际检验（苏州）有限公司', '')

    def pdf_all_text(self, pdf_path):
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages[1:]:
                # 提取页面文本
                text = page.extract_text()
                lines = text.split()
                valid_time_list = []
                for line in lines:

                    if 'SST' in line and not self.xlsx_keys['方案编号']:
                        self.xlsx_keys['方案编号'] = line

                    if '签发日期' in line and not self.xlsx_keys['签发日期']:
                        self.xlsx_keys['签发日期'] = line.replace('签发日期', '')

                    if 'GLP' in line:
                        self.xlsx_keys['标志'] += 'GLP,'

                    valid_time = self.is_valid_time(line)
                    if valid_time:
                        valid_time_list.append(valid_time)
                if valid_time_list:
                    self.xlsx_keys['签发日期'] = max(valid_time_list).strftime("%Y-%m-%d")

    def discern(self, pdf_path, img_path, excel_path):
        with os.scandir(pdf_path) as entries:
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
                self.remove_img(img_path)
                if entry.is_file():
                    pdf_path = entry.path
                    file_name = entry.name
                    self.log(file_name)
                    self.xlsx_keys['文件名'] = file_name
                    self.pdf_text(pdf_path)
                    self.pdf_images(pdf_path, img_path)

                    self.pdf_all_text(pdf_path)
                    if not self.xlsx_keys['方案编号']:
                        matches = re.findall(r'SST\d+BB', file_name)
                        if matches:
                            self.xlsx_keys['方案编号'] = matches[0]
                        else:
                            self.log("未找到匹配的模式方案编号")

                self.xlsx_keys_list.append(self.xlsx_keys)
        self.export_excel(self.xlsx_keys_list, excel_path)

    def run(self, pdf_path, img_path, excel_path):
        self.discern(pdf_path, img_path, excel_path)


if __name__ == '__main__':
    testing_agency_report = TestingAgencyReport()
    testing_agency_report.run('../file_test', '../target_img', '../docs')
