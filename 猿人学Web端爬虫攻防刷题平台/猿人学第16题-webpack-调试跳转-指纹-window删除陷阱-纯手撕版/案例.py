import requests
import time
import json


class 实例1(object):

    def __init__(self):
        self.sign_url = "http://127.0.0.1:4001/get_sign"
        self.sum_value = 0

    def get_sign(self, date_time):
        data = {
            'sign': str(date_time)
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign

    def get_task(self, i):
        t = int(time.time()) * 1000
        m = self.get_sign(str(t))
        print(m)
        url = f"https://match.yuanrenxue.cn/api/match/16?page={i}&m={m}&t={t}"
        Headers = {
            "User-Agent": "yuanrenxue.project",
            "cookie": f"sessionid=4jkq6rqs5z8tg86kvh08liq55a3vnmxf;",
        }
        req = requests.get(url, headers=Headers)
        return req.text

    def run(self):
        for i in range(1, 6):
            res_dict = json.loads(self.get_task(i))
            print(res_dict)
            for j in res_dict.get('data'):
                self.sum_value += j.get('value')
        print(self.sum_value)


if __name__ == '__main__':
    a = 实例1()
    a.run()
