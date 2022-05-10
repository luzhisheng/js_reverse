from fontTools.ttLib import TTFont
import requests
import time
import json
import base64


class App(object):

    def __init__(self):
        pass

    def get_html(self, m, page):
        Headers = {
            "user-agent": "yuanrenxue.project",
            "cookie": m
        }
        url = f"https://match.yuanrenxue.com/api/match/7?page={page}"
        print(url)
        req = requests.get(url=url, headers=Headers)
        return json.loads(req.text)

    def with_ttf(self, woff):
        b64_code = woff
        with open('font.woff', 'wb') as f:
            f.write(base64.decodebytes(b64_code.encode()))

    def get_xml(self):
        font = TTFont('5.woff')
        font.saveXML('5.xml')

    def run(self):
        data_sum = 0
        for page in range(1, 6):
            # res = self.get_html("", page)
            # woff = res.get('woff')
            # self.with_ttf(woff)
            self.get_xml()
            exit()
            # data_list = res.get('data')
            # for data in data_list:
            #     print(data.get('value'))
            #     # data_sum += data.get('value')
            # time.sleep(1)

        print(data_sum)


if __name__ == '__main__':
    app = App()
    app.run()
