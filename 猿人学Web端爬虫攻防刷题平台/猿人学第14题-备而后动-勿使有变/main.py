import re
import time
import requests
import json


session = requests.session()
headers = {
    'authority': 'match.yuanrenxue.cn',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'x-requested-with': 'XMLHttpRequest',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    # 'user-agent': 'yuanrenxue.project',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://match.yuanrenxue.cn/match/14',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
}

session.headers = headers


class Yrx14(object):

    def __init__(self):
        self.m = "http://127.0.0.1:4001/m"
        self.v14_v142 = "http://127.0.0.1:4002/v14_v142"
        self.sum_value = 0

    def get_v14_v142(self, js_code):
        data = {
            'js_code': str(js_code)
        }
        req = requests.post(self.v14_v142, data=data)
        v14 = re.findall(r'window\[\"v14\"\] = \"(.*)\";', req.text)[0]
        v142 = re.findall(r'window\[\"v142\"\] = \"(.*)\";', req.text)[0]
        return v14, v142

    def get_m(self, c, e, page, timestamp):
        data = {
            'c': str(c),
            'e': str(e),
            'page': str(page),
            'timestamp': str(timestamp)
        }
        req = requests.post(self.m, data=data)
        m = req.text
        return m

    def get_task(self, page):
        url = "https://match.yuanrenxue.cn/api/match/14/m"
        mz = 'TW96aWxsYSxOZXRzY2FwZSw1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM' \
             '2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMC4wLjAuMCBTYWZhcmkvNTM3LjM2LFtvYmplY3QgTmV0d29ya0' \
             'luZm9ybWF0aW9uXSx0cnVlLCxbb2JqZWN0IEdlb2xvY2F0aW9uXSw4LHpoLUNOLHpoLUNOLHpoLGVuLDAsW29iamVjd' \
             'CBNZWRpYUNhcGFiaWxpdGllc10sW29iamVjdCBNZWRpYVNlc3Npb25dLFtvYmplY3QgTWltZVR5cGVBcnJheV0sdHJ1' \
             'ZSxbb2JqZWN0IFBlcm1pc3Npb25zXSxXaW4zMixbb2JqZWN0IFBsdWdpbkFycmF5XSxHZWNrbywyMDAzMDEwNyxbb2J' \
             'qZWN0IFVzZXJBY3RpdmF0aW9uXSxNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZV' \
             'dlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTIwLjAuMC4wIFNhZmFyaS81MzcuMzYsR29vZ' \
             '2xlIEluYy4sLFtvYmplY3QgRGVwcmVjYXRlZFN0b3JhZ2VRdW90YV0sW29iamVjdCBEZXByZWNhdGVkU3RvcmFnZVF1' \
             'b3RhXSw4MjQsMCwwLDE1MzYsMjQsODY0LFtvYmplY3QgU2NyZWVuT3JpZW50YXRpb25dLDI0LDE1MzYsW29iamVjdCB' \
             'ET01TdHJpbmdMaXN0XSxmdW5jdGlvbiBhc3NpZ24oKSB7IFtuYXRpdmUgY29kZV0gfSwsbWF0Y2gueXVhbnJlbnh1ZS' \
             '5jbixtYXRjaC55dWFucmVueHVlLmNuLGh0dHBzOi8vbWF0Y2gueXVhbnJlbnh1ZS5jbi9tYXRjaC8xNCxodHRwczovL' \
             '21hdGNoLnl1YW5yZW54dWUuY24sL21hdGNoLzE0LCxodHRwczosZnVuY3Rpb24gcmVsb2FkKCkgeyBbbmF0aXZlIGNv' \
             'ZGVdIH0sZnVuY3Rpb24gcmVwbGFjZSgpIHsgW25hdGl2ZSBjb2RlXSB9LCxmdW5jdGlvbiB0b1N0cmluZygpIHsgW25' \
             'hdGl2ZSBjb2RlXSB9LGZ1bmN0aW9uIHZhbHVlT2YoKSB7IFtuYXRpdmUgY29kZV0gfQ=='
        cookies = {
            'mz': mz,
            'sessionid': 'x6ye0o1lse9jum0yqwr9osxpemnac3pv'
        }
        response = session.get(url, cookies=cookies)
        v14, v142 = self.get_v14_v142(response.text)
        print(v14, v142)
        timestamp = int(time.time()) * 1000
        m = self.get_m(v14, v142, page, timestamp)
        # m = self.get_m('sekrb09dy6p8', '36090782441', page, 1704951658000)
        print(m)
        url = f"https://match.yuanrenxue.cn/api/match/14?page={page}"

        cookies = {
            'mz': mz,
            'm': m,
            'sessionid': 'x6ye0o1lse9jum0yqwr9osxpemnac3pv'
        }

        req = session.get(url, cookies=cookies)
        return req.text

    def run(self):
        for page in range(1, 6):
            res_dict = json.loads(self.get_task(page))
            print(res_dict)
            for j in res_dict.get('data'):
                self.sum_value += j.get('value')
            print(self.sum_value)


if __name__ == '__main__':
    a = Yrx14()
    a.run()
