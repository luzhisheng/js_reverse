import requests
import execjs


class 实例1(object):

    def __init__(self):
        self.url = "https://match.yuanrenxue.com/api/match/6"
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
        # 打开文件加载js
        with open('案例.js', 'r', encoding='utf-8') as f:
            jsCode = f.read()
        Func = execjs.compile(jsCode.replace(u'\xa0', u''))
        all_sum = 0
        for j in range(1, 6):
            import time
            t = int(time.time()) * 1000
            m = Func.call('r', t, 1)
            q = '1' + '-' + str(t) + "|"
            params = {
                "page": str(j),
                "m": m,
                "q": q
            }
            print(params)
            res = requests.get(self.url, headers=Headers, params=params)
            for data in res.json()['data']:
                all_sum += data['value'] + data['value'] * 23

        print(all_sum)


if __name__ == '__main__':
    d = 实例1()
    d.get_res()
