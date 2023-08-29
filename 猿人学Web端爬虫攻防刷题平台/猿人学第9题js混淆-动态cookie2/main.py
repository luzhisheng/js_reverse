import re

import requests
import time
import json


class 实例1(object):

    def __init__(self):
        self.sign_url = "http://127.0.0.1:4001/get_sign"
        self.sum_value = 0

    def get_decrypt(self):
        url = "https://match.yuanrenxue.cn/match/9"
        payload = {}
        headers = {
            'Cookie': 'sessionid=t9dlfwn9s4ed4z1w1sktxg3k55dc3ko6'
        }
        response = requests.request("GET", url, headers=headers, data=payload)
        time_str = re.findall(r'decrypt.*?([0-9]{10})', response.text)[0]
        return time_str

    def get_sign(self, date_time):
        data = {
            'sign': str(date_time)
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign

    def get_task(self, i, time_str):
        cookie = self.get_sign(time_str)
        print(cookie)
        url = f"https://match.yuanrenxue.cn/api/match/9?page={i}"
        Headers = {
            "User-Agent": "yuanrenxue.project",
            "cookie": cookie
        }
        req = requests.get(url, headers=Headers)
        return req.text

    def run(self):
        time_str = self.get_decrypt()
        for i in range(2, 6):
            res_dict = json.loads(self.get_task(i, time_str))
            print(res_dict)
            for j in res_dict.get('data'):
                self.sum_value += j.get('value')
        print(self.sum_value)


if __name__ == '__main__':
    a = 实例1()
    a.run()
