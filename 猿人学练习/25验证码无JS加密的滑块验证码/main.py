import requests
import base64
from PIL import Image
import os
import numpy as np

headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
                  " Chrome/94.0.4606.71 Safari/537.36",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "origin": "https://www.python-spider.com",
    "referer": "https://www.python-spider.com/api/challenge25",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "sessionid=dxebgqqn0x78r21nk6w19umv3je6pb0n;"
}
ses = requests.session()


def get_slider_offset_method(ori_path, cut_pic_path):
    """比较两张图片是否相似，如果相似并返回缺口位置"""
    pic_img = Image.open(ori_path)
    cut_img = Image.open(cut_pic_path)
    array1 = np.array(pic_img)
    array2 = np.array(cut_img)
    height, width, _ = array1.shape
    threshold = 40
    if np.sum(array1 == array2) > 80000:  # 判断两张图片相似
        for x in range(10, width - 10):  # 从左往右
            for y in range(5, height - 10):  # 从上往下
                pixel1 = pic_img.load()[x, y]
                pixel2 = cut_img.load()[x, y]
                if abs(pixel1[0] - pixel2[0]) < threshold and abs(pixel1[1] - pixel2[1]) < threshold and abs(
                        pixel1[2] - pixel2[2]) < threshold:
                    continue
                else:
                    return x


def request_img():
    url = f"https://www.python-spider.com/api/challenge25verify"
    res = ses.get(url, headers=headers, timeout=10)
    with open(r"./img1.jpg", "wb") as f:
        f.write(base64.b64decode(res.json()["img1"]))
    for item in os.listdir("./img_yuan"):
        ori_path = os.path.join(os.path.abspath("./img_yuan"), item)
        offset = get_slider_offset_method(ori_path, "./img1.jpg")
        if offset:
            form_data = {"distant": offset}
            res = ses.post("https://www.python-spider.com/api/challenge25CheckVerify", data=form_data, headers=headers,
                           timeout=10)
            print("滑块识别率：", offset, res.text)
            if res.json()["success"]:
                return True


def loop_page(page):
    count = 0
    if page > 1:
        if not request_img():
            return
    form_data = {"page": str(page)}
    res = ses.post("https://www.python-spider.com/api/challenge25", data=form_data, headers=headers, timeout=10)
    print(res.status_code, res.text)
    for row in res.json()['data']:
        count += int(row['value'].strip())
    return count


def run():
    s = 0
    for page in range(1, 101):
        s_p = loop_page(page)
        if not isinstance(s_p, int):
            break
        s += s_p
    print(s)


if __name__ == '__main__':
    run()

