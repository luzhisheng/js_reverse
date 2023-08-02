from datetime import datetime
from extract_from_pages import read_pdf
from base import Base
from PIL import Image
import pandas as pd
import pytesseract
import platform
import os


class PDFBase(Base):

    def __init__(self):
        super(Base, self).__init__()
        current_os = platform.system()
        if current_os == 'Windows':
            pytesseract.pytesseract.tesseract_cmd = r'E:\pc\tesseract-ocr\tesseract.exe'
            self.log("当前操作系统是 Windows")
        elif current_os == 'Linux':
            self.log("当前操作系统是 Ubuntu")
        else:
            self.log(f"当前操作系统是 {current_os}")

    def download_img(self, input_pdf, output_image):
        """
        下载pdf中全部图片
        :param input_pdf:
        :param output_image:
        :return:
        """
        try:
            read_pdf(input_pdf, output_image)
        except Exception as e:
            self.log(f"出现异常：{e}")

    @staticmethod
    def read_img_ocr_binarization(img_path, standard=205):
        """
        二值化读取图片中文字内容
        :param img_path:
        :return:
        """
        img = Image.open(img_path)
        # 在将图片灰度转换，二值化
        img = img.convert('L')
        pixels = img.load()
        for x in range(img.width):
            for y in range(img.height):
                if pixels[x, y] > standard:
                    pixels[x, y] = 255
                else:
                    pixels[x, y] = 0
        # 图像识别
        result = pytesseract.image_to_string(img, config=r'--oem 3 --psm 6 -l chi_sim+eng')
        lines = result.split()
        return lines

    @staticmethod
    def read_img_ocr(img_path):
        """
        读取图片中文字内容
        :param img_path:
        :return:
        """
        img = Image.open(img_path)
        # 图像识别
        result = pytesseract.image_to_string(img, config=r'--oem 3 --psm 6 -l chi_sim+eng')
        lines = result.split()
        return lines

    def remove_img(self, img_path):
        """
        删除当前文件夹下所有的图片
        :param img_path:
        :return:
        """
        with os.scandir(img_path) as entries:
            for entry in entries:
                if entry.is_file():
                    file_path = entry.path
                    try:
                        os.remove(file_path)
                    except Exception as e:
                        self.log(f"错误信息：{e}")

    @staticmethod
    def is_valid_time(input_str):
        """
        判断是否是时间格式
        :param input_str:
        :return:
        """
        try:
            valid_time = datetime.strptime(input_str, "%Y-%m-%d")
            return valid_time
        except ValueError:
            return False

    @staticmethod
    def export_excel(export, excel_path):
        """
        将字典列表转换为DataFrame
        :param export:
        :return:
        """
        pf = pd.DataFrame(list(export))
        current_time = datetime.now()
        formatted_time = current_time.strftime('%Y-%m-%d-%H-%M-%S')
        file_path = pd.ExcelWriter(f'{excel_path}/无源{formatted_time}.xlsx')
        # 替换空单元格
        pf.fillna(' ', inplace=True)
        # 输出
        pf = pf.sort_values(by='样品名称')
        pf.to_excel(file_path, index=False)
        # 保存表格
        file_path.close()


if __name__ == '__main__':
    pdf_base = PDFBase()
    # pdf_base.download_img('../file_test/1.pdf', '../target_img/')
    res = pdf_base.read_img_ocr('../target_img/image-017.png')
    print(res)
