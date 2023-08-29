import re

import requests
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
        try:
            m_num = re.findall(r'\(m,([0-9]{1})\);m\+\+\)', response.text)[0]
        except Exception as e:
            m_num = re.findall(r'm<=([0-9]{1});m\+\+\)', response.text)[0]
        time_str = re.findall(r'decrypt.*?([0-9]{10})', response.text)[0]
        return time_str, m_num

    def get_sign(self, date_time, m_num):
        data = {
            'sign': str(date_time),
            'm_num': str(m_num)
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign

    def get_task(self, i, time_str, m_num):
        m = self.get_sign(time_str, m_num) + '; path=/'
        url = f"https://match.yuanrenxue.cn/api/match/9?page={i}"
        Headers = {
            "User-Agent": "yuanrenxue.project",
            'Cookie': f'{m}; sessionid=t9dlfwn9s4ed4z1w1sktxg3k55dc3ko6'
        }
        req = requests.get(url, headers=Headers)
        return req.text

    def run(self):
        for i in range(1, 6):
            time_str, m_num = self.get_decrypt()
            res_dict = json.loads(self.get_task(i, time_str, m_num))
            print(res_dict)
            for j in res_dict.get('data'):
                self.sum_value += j.get('value')
        print(self.sum_value / 50)


if __name__ == '__main__':
    a = 实例1()
    a.run()
