import requests
import time
import json


class App(object):

    def __init__(self):
        self.sign_url = "http://127.0.0.1:3001/get_sign"
        self.html_url = "https://www.xiaohongshu.com/discovery/item/5ea02f090000000001001a90"

    def get_sign(self, date_time):
        data = {
            'sign': str(date_time)
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign

    def get_html(self, sign, time_date, page):
        Headers = {
            "user-agent": "yuanrenxue.project",
            "cookie": "Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1648698333,1648863299; "
                      "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1648867785; qpfccr=true; no-alert3=true"
        }
        url = f"https://match.yuanrenxue.com/api/match/1?page={page}&m={sign}%E4%B8%A8{time_date}"
        print(url)
        req = requests.get(url=url, headers=Headers)
        return json.loads(req.text)

    def run(self):
        data_len = 0
        data_sum = 0
        for page in range(1, 6):
            t = int(time.time()) * 1000 + 100000000
            print(t)
            sign = self.get_sign(t)
            print(sign)
            res = self.get_html(sign, int(t / 1000), page)
            print(res)
            data_list = res.get('data')
            data_len += len(data_list)
            for data in data_list:
                data_sum += data.get('value')
            time.sleep(1)

        print(data_sum, data_len)
        print(data_sum / data_len)


if __name__ == '__main__':
    app = App()
    app.run()
