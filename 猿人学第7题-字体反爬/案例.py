from fontTools.ttLib import TTFont
import requests
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

    def get_xml(self, data):
        font = TTFont('font.woff')
        font.saveXML('movie.xml')
        data_value = data.get('value').strip().replace('&#x', 'uni')
        data_value_list = data_value.split(" ")
        map_num_list = []
        for data_v in data_value_list:
            map_num = {
                "10100100100101010010010010": '0',
                "100110101001010101011110101000": '2',
                "111111111111111": '4',
                "1110101001001010110101010100101011111": '5',
                "1001101111": '1',
                "10010101001110101011010101010101000100100": '9',
                "101010101101010001010101101010101010010010010101001000010": '8',
                "10101100101000111100010101011010100101010100": '3',
                "1111111": '7',
                "10101010100001010111010101101010010101000": '6'
            }
            flags_num = list(font['glyf'][data_v].flags)
            flags_num_str = "".join([str(flag) for flag in flags_num])
            map_num_list.append(map_num[flags_num_str])
        return "".join(map_num_list)

    def run(self):
        for page in range(1, 6):
            res = self.get_html("", page)
            woff = res.get('woff')
            self.with_ttf(woff)
            data_num = []
            for data in res.get('data'):
                map_num_str = self.get_xml(data)
                data_num.append(map_num_str)

            print(data_num)


if __name__ == '__main__':
    app = App()
    app.run()
