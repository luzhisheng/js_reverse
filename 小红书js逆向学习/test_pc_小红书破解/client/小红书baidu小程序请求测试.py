from docs.id import list_id
from datetime import datetime
import requests
import hashlib
import time
import json
import threading


class XhsXcx(object):

    def __init__(self):
        pass

    def run_server(self):
        for id in list_id:
            i = 1
            url = "https://www.xiaohongshu.com/fe_api/burdock/baidu/v2/note/{}".format(id)
            x_sign = self.get_xsign(url)
            headers = {
                'asid': '2021081358cf50617922519f435f5620',
                'x-sign': f'{x_sign}',
            }
            response = requests.request("GET", url, headers=headers)
            re_json = json.loads(response.text)
            success = re_json.get('success')
            if success:
                likes = re_json.get('data').get('likes')
                print(f"【{datetime.now()}】-状态{success}-点赞{likes}-次数{i}")
                time.sleep(10)
            else:
                print(f"【{datetime.now()}】-状态{success}")
                time.sleep(10)

            i += 1

    def get_xsign(self, url):
        screen_key = "WSUDD"
        _st = url.split(".com")[-1] + screen_key
        m = hashlib.md5()
        m.update(_st.encode(encoding='UTF-8'))
        md5String = m.hexdigest()
        return "X" + md5String

    def run(self):
        thread_update = threading.Thread(target=self.run_server)
        thread_update.start()


if __name__ == '__main__':
    xhs_xcx = XhsXcx()
    xhs_xcx.run()
