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

    def image_text_ocr(self, path):
        text_list = []
        # 加载图像
        image = Image.open(path)
        result = pytesseract.image_to_string(image, lang='chi_sim', output_type=pytesseract.Output.STRING)
        lines = result.split('\n')
        for line in lines:
            data_list = line.split(' ')
            for data in data_list:
                if '试验方案编号' in data:
                    text_list.append(data_list[-1])
                if '报告完成日期' in data:
                    text_list.append(data_list[-1])
        return text_list

    def run(self, path):
        text_list = self.image_text_ocr(path)
        return text_list


if __name__ == '__main__':
    image_text_ocr = ImageTextOcr()
    text_list = image_text_ocr.run('../target_img/image_7.jpg')
    print(text_list)
