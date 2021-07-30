import requests
import json
import time
from setting import xhs_account


class XhsApp(object):
    def __init__(self):
        self.nodejs_x_s_url = "http://127.0.0.1:3000/get_x_s"
        self.nodejs_id_url = "http://127.0.0.1:3001/get_sign"
        self.cookie_url = "https://www.xiaohongshu.com/fe_api/burdock/v2/shield/registerCanvas"
        self.login_url = "https://customer.xiaohongshu.com/api/cas/loginWithAccount"

        self.sign = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4280.141 " \
                    "Safari/537.36~~~unknown~~~zh-CN~~~24~~~8~~~4~~~-480~~~Asia/Shanghai~~~1~~~1~~~1~~~1~~~unkno" \
                    "wn~~~Linux x86_64~~~Chrome PDF Plugin::Portable Document Format::application/x-google-chrome" \
                    "-pdf~pdf,Chrome PDF Viewer::::application/pdf~pdf,Native Client::::application/x-nacl~,appl" \
                    "ication/x-pnacl~~~~canvas winding:yes~canvas fp:4ed6498d31241a0323aabbcc7f6d68a0~~~false~~~f" \
                    "alse~~~false~~~false~~~false~~~0;false;false~~~0;1;2;3;4;5;6;7;8;9~~~124.04347730432432"

    def get_timestamp(self):
        t = time.time()
        return str(round(t * 1000))

    def get_x_s(self, x_t):
        x_s_data = 'test1test/api/cas/loginWithAccount{"account":"test2","password":"test3",' \
                   '"service":"https://pgy.xiaohongshu.com"}'
        x_s_data = x_s_data.replace("test1", x_t)\
            .replace("test2", xhs_account.get('account'))\
            .replace("test3", xhs_account.get('password'))

        data = {
            'sign': x_s_data
        }
        req = requests.post(self.nodejs_x_s_url, data=data)
        id = req.text
        return id

    def get_id(self):
        data = {
            'sign': self.sign
        }
        req = requests.post(self.nodejs_id_url, data=data)
        id = req.text
        return id

    def get_cookie_timestamp2(self, id):
        data = {
            'id': id,
            'sign': self.sign
        }
        req = requests.post(self.cookie_url, data=data)
        canvas = json.loads(req.text).get('data').get('canvas')
        return canvas

    def get_html(self, timestamp2, x_s, x_t):
        headers = {
            'cookie': "timestamp2=" + timestamp2,
            'x-s': x_s,
            'x-t': x_t,
            'content-type': 'application/json;charset=UTF-8'
        }

        payload = "{\"account\":\"test1\",\"password\":\"test2\"," \
                  "\"service\":\"https://pgy.xiaohongshu.com\"}"
        payload = payload.replace("test1", xhs_account.get('account')).replace("test2", xhs_account.get('password'))

        req = requests.post(self.login_url, headers=headers, data=payload)
        return req.text, req.headers

    def run(self):
        x_t = self.get_timestamp()
        print('x_t : {}'.format(x_t))

        x_s = self.get_x_s(x_t)
        print('x_s : {}'.format(x_s))

        id = self.get_id()
        timestamp2 = self.get_cookie_timestamp2(id)
        text, headers = self.get_html(timestamp2, x_s, x_t)
        print(text)
        print(headers)


if __name__ == '__main__':
    xhs_app = XhsApp()
    xhs_app.run()
