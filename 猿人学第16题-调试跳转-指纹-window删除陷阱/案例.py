import requests
import time
import json


class 实例1(object):

    def __init__(self):
        self.url = "https://match.yuanrenxue.com/api/match/4?page={}"
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
        url = f"https://match.yuanrenxue.com/api/match/16?page={i}&m={m}&t={t}"
        Headers = {
            "User-Agent": "yuanrenxue.project",
            "cookie": f"sessionid=uk6bewvxeyklfq35wqquqph7mc4f25n5;",
        }
        req = requests.get(url, headers=Headers)
        return req.text

    def run(self):
        for i in range(1, 6):
            res_dict = json.loads(self.get_task(i))
            for j in res_dict.get('data'):
                self.sum_value += j.get('value')
        print(self.sum_value)


if __name__ == '__main__':
    a = 实例1()
    a.run()
