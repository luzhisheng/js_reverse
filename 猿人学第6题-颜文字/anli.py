import requests
import time


class 实例1(object):

    def __init__(self):
        self.url = "https://match.yuanrenxue.com/api/match/6?page={}&m={}&q={}"
        self.sign_url = "http://127.0.0.1:6001/get_sign"

    def get_sign(self, date_time, j):
        data = {
            'sign': str(date_time),
            'page': j
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign

    def get_res(self):
        Headers = {
            "user-agent": "yuanrenxue.project"
        }
        q = ""
        for j in range(1, 6):
            import time
            t = int(time.time()) * 1000
            m = self.get_sign(t, j)
            q += f"{j}-{t}|"
            url = self.url.format(j, m, q)
            print(url)
            res = requests.get(url=url, headers=Headers)
            print(res.json())
            time.sleep(2)


if __name__ == '__main__':
    d = 实例1()
    d.get_res()
