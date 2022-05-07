import requests
import time
import json


class App(object):

    def __init__(self):
        self.sign_url = "http://127.0.0.1:3009/get_sign"

    def get_sign(self, date_time):
        data = {
            'sign': str(date_time)
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign

    def get_html(self, m, page):
        Headers = {
            "user-agent": "yuanrenxue.project",
            "cookie": m
        }
        url = f"https://match.yuanrenxue.com/api/match/2?page={page}"
        print(url)
        req = requests.get(url=url, headers=Headers)
        return json.loads(req.text)

    def run(self):
        data_sum = 0
        for page in range(1, 6):
            t = int(time.time()) * 1000
            print(t)
            m = self.get_sign(t)
            print(m)
            res = self.get_html(m, page)
            print(res)
            data_list = res.get('data')
            for data in data_list:
                data_sum += data.get('value')
            time.sleep(1)

        print(data_sum)


if __name__ == '__main__':
    app = App()
    app.run()
