import re
import json
from spider.baes import Baes
import http.client
import time


class Detail(Baes):
    def __init__(self):
        self.url = "/offer/643272204627.html"
        super().__init__()

    def request_body(self):
        headers = {
            'Referer': 'https://mail.qq.com/',
            'cookie': 'x5sec=7b22733b32223a2235376666613964313830393261636362222c226c61707574613b32223a226331366632616261613731343933646339653661353332363564326564343639434b4b7933625147454a4b64385a37372f2f2f2f2f774577397179704b673d3d227d',
            'User-Agent': (
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                'AppleWebKit/537.36 (KHTML, like Gecko) '
                'Chrome/126.0.0.0 Safari/537.36'
            ),
        }

        conn = http.client.HTTPSConnection("detail.1688.com")

        try:
            conn.request("GET", self.url, headers=headers)
            response = conn.getresponse()
            # print(response.read().decode('latin-1'))
            # exit()

            if response.status == 200:
                data = response.read().decode("utf-8")
                pattern = r'window\.__INIT_DATA\s*=\s*(\{.*?\})\s*</script>'
                match = re.search(pattern, data)
                json_data = match.group(1)
                dict_data = json.loads(json_data)
                temp_model = dict_data.get('globalData').get('tempModel')
                print(temp_model)
            else:
                print(f"Request failed with status {response.status}")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            conn.close()

    def run(self):
        for i in range(1, 1000):
            self.request_body()
            # time.sleep(3)


if __name__ == '__main__':
    detail = Detail()
    detail.run()
