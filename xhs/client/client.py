import requests
import json


class XhsApp(object):
    def __init__(self):
        self.node_js_url = "http://127.0.0.1:3001/get_sign"
        self.cookie_url = "https://www.xiaohongshu.com/fe_api/burdock/v2/shield/registerCanvas"
        self.html_url = "https://www.xiaohongshu.com/discovery/item/5ea02f090000000001001a90"
        # sign 中的参数按需要改动后获取id值
        self.sign = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4280.141 " \
                    "Safari/537.36~~~unknown~~~zh-CN~~~24~~~8~~~4~~~-480~~~Asia/Shanghai~~~1~~~1~~~1~~~1~~~unkno" \
                    "wn~~~Linux x86_64~~~Chrome PDF Plugin::Portable Document Format::application/x-google-chrome" \
                    "-pdf~pdf,Chrome PDF Viewer::::application/pdf~pdf,Native Client::::application/x-nacl~,appl" \
                    "ication/x-pnacl~~~~canvas winding:yes~canvas fp:4ed6498d31241a0323aabbcc7f6d68a0~~~false~~~f" \
                    "alse~~~false~~~false~~~false~~~0;false;false~~~0;1;2;3;4;5;6;7;8;9~~~124.04347730432432"

    def get_id(self):
        data = {
            'sign': self.sign
        }
        req = requests.post(self.node_js_url, data=data)
        id = req.text
        return id

    def get_cookie(self, id):
        data = {
            'id': id,
            'sign': self.sign
        }
        req = requests.post(self.cookie_url, data=data)
        canvas = json.loads(req.text).get('data').get('canvas')
        return canvas

    def get_html(self, cookie):
        Headers = {
            'cookie': "timestamp2=" + cookie
        }
        req = requests.get(self.html_url, headers=Headers)
        return req.text

    def run(self):
        id = self.get_id()
        print(id)
        canvas = self.get_cookie(id)
        print(canvas)
        html = self.get_html(canvas)
        print(html)


if __name__ == '__main__':
    xhs_app =XhsApp()
    xhs_app.run()
