from PIL import Image
from urllib.parse import quote
import base64
import urllib
import requests


API_KEY = "你的API_KEY"
SECRET_KEY = "你的SECRET_KEY"


def get_file_content_as_base64(path, urlencoded=False):
    """
    获取文件base64编码
    :param path: 文件路径
    :param urlencoded: 是否对结果进行urlencoded
    :return: base64编码信息
    """
    with open(path, "rb") as f:
        content = base64.b64encode(f.read()).decode("utf8")
        if urlencoded:
            content = urllib.parse.quote_plus(content)
    return content


def get_access_token():
    """
    使用 AK，SK 生成鉴权签名（Access Token）
    :return: access_token，或是None(如果错误)
    """
    url = "https://aip.baidubce.com/oauth/2.0/token"
    params = {"grant_type": "client_credentials", "client_id": API_KEY, "client_secret": SECRET_KEY}
    return str(requests.post(url, params=params).json().get("access_token"))


def processing_image(img_file, standard=200):
    """ 1.将图片进行降噪处理, 通过二值化去掉后面的背景色并加深文字对比度 """
    img = Image.open(img_file)

    # 灰度转换
    _image = img.convert('L')

    # 二值化: 根据阈值 standard, 将所有像素都置为 0(黑色) 或 255(白色), 便于接下来的分割
    pixels = _image.load()
    for x in range(_image.width):
        for y in range(_image.height):
            if pixels[x, y] > standard:
                pixels[x, y] = 255
            else:
                pixels[x, y] = 0
    return _image


def run():
    image_b = processing_image('./img/1.png')
    image_b.save('./img/1-test.png')
    image_to_base64_res = get_file_content_as_base64('./img/1-test.png')
    image_to_base64_res = quote(image_to_base64_res, 'utf-8')
    url = "https://aip.baidubce.com/rest/2.0/ocr/v1/handwriting?access_token=" + get_access_token()
    payload = f'image={image_to_base64_res}'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.json())
    return response.json()


if __name__ == '__main__':
    run()
