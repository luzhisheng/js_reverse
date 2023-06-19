from PIL import Image
import re
import base64
import requests
import time
import json


class YuanrenXuan(object):

    def __init__(self):
        self.url = "https://match.yuanrenxue.cn/api/match/8_verify"
        self.sum_value = 0

    def get_task(self, i):
        t = int(time.time()) * 1000
        req = requests.get(self.url)
        img = re.findall(r'<img src="(.*)" alt="">', req.json().get('html'))[0]
        img = img.replace('data:image/jpeg;base64,', '')
        print(img)
        page_content = base64.b64decode(img)
        with open('img/1.png', 'wb') as f:
            f.write(page_content)
        exit()
        return req.text

    def run(self):
        for i in range(1, 6):
            res_dict = json.loads(self.get_task(i))
            for j in res_dict.get('data'):
                self.sum_value += j.get('value')
        print(self.sum_value)


if __name__ == '__main__':
    a = YuanrenXuan()
    a.run()
