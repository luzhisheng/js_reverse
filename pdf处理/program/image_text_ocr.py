from datetime import datetime
from PIL import Image
import pytesseract
import platform


class ImageTextOcr(object):

    def __init__(self):
        current_os = platform.system()
        if current_os == 'Windows':
            pytesseract.pytesseract.tesseract_cmd = r'E:\pc\tesseract-ocr\tesseract.exe'
            print("当前操作系统是 Windows")
        elif current_os == 'Linux':
            print("当前操作系统是 Ubuntu")
        else:
            print(f"当前操作系统是 {current_os}")

    def is_valid_time(self, input_str):
        try:
            valid_time = datetime.strptime(input_str, "%Y-%m-%d")  # 根据实际时间格式调整
            return valid_time
        except ValueError:
            return False

    def image_text_ocr(self, text_dict, path):
        valid_time_list = []
        # 加载图像
        image = Image.open(path)
        result = pytesseract.image_to_string(image, config=r'--oem 3 --psm 6 -l chi_sim+eng')
        lines = result.split('\n')
        for line in lines:
            data_list = line.split(' ')
            for data in data_list:
                if 'S$T' in data or 'SST' in data:
                    text_dict['方案编号'] = data.replace('S$T', 'SST')

                if 'CNAS' in data:
                    text_dict['标志'] = 'cnas中文,'

                if '200015344424' in data:
                    text_dict['标志'] = '国cma,'

                valid_time = self.is_valid_time(data)
                if valid_time:
                    valid_time_list.append(valid_time)

        if valid_time_list:
            text_dict['签发日期'] = max(valid_time_list).strftime("%Y-%m-%d")
        return text_dict

    def run(self, text_dict, path):
        res_list = self.image_text_ocr(text_dict, path)
        return res_list


if __name__ == '__main__':
    image_text_ocr = ImageTextOcr()
    text_dict = {
        '方案编号': '',
        '签发日期': '',
        '标志': ''
    }
    res = image_text_ocr.run(text_dict, '../target_img/image_3.png')
    print(res)
