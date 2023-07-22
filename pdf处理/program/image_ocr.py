from PIL import Image
import pytesseract

# 加载图像
image = Image.open('../target_img/image_7.jpg')
# 列出支持的语言
print(pytesseract.get_languages(config=''))
text = pytesseract.image_to_string(image, lang='chi_sim')
print(text)
