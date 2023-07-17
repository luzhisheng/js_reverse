import pdfplumber
from PIL import Image


class Discern(object):

    def __init__(self):
        self.xlsx_keys = {}

    def pdf_text(self, pdf_path):
        with pdfplumber.open(pdf_path) as pdf:
            # 遍历每个页面
            for page in pdf.pages:
                # 提取页面文本
                text = page.extract_text()
                lines = text.split("\n")
                line_str = ''
                for line in lines:
                    line_str += line
                    if '报告编号:' in line:
                        self.xlsx_keys['报告编号'] = line.split("报告编号")[1].strip()
                    if '样品名称:' in line:
                        self.xlsx_keys['样品名称'] = line.split("样品名称")[1].strip()
                    if '公司' in line and '中检华通' not in line and '制造商' not in line:
                        self.xlsx_keys['公司名称'] = line.strip()
                    if '最终报告' in line:
                        self.xlsx_keys['检测项目'] = line_str.replace('最终报告', '')

    def pdf_images(self, pdf_path):
        i = 0
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                images = page.images
                for img in images:
                    # 获取图片的二进制流
                    i += 1
                    image_file = f"../img/image_{i}.png"
                    with open(image_file, "wb") as f:
                        f.write(img['stream'].get_data())

    def run(self):
        self.pdf_text('../docs/2.pdf')
        self.pdf_images('../docs/2.pdf')
        print(self.xlsx_keys)


if __name__ == '__main__':
    discern = Discern()
    discern.run()
