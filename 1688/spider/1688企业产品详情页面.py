from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import requests


class 企业产品详情页面(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(企业产品详情页面, self).__init__()

    def run(self):
        res = self.col.find_item('RAW_URLS', {"stauts": "0"}, {"url": 1})
        for s in res:
            url = s.get('url')
            cookie2 = "1e3cee17580ffb0eea62cdaec87c7771"
            x5sec = "7b226c61707574613b32223a223936636266303531633230613132626262646165393438306666303931336364434d625076596f4745506a44375a4f6f706f58416f514561437a59324f4449794d5463344e4473314d50617371536f3d227d"
            headers = {
                'cookie': f"cookie2={cookie2};x5sec={x5sec}"
            }
            response = requests.request("GET", url, headers=headers)

            if '系统自动生成，请勿修改 100%' in response.text:
                print(f"【{datetime.now()}】报错{url}")
                exit()

            item = {
                "sign": self.generate_sign(url),
                "url": url,
                "content": response.text
            }
            self.col.insert_item('RAW_CONTENT', item)
            self.col.update_item('RAW_URLS', item)
            time.sleep(10)


if __name__ == '__main__':
    f = 企业产品详情页面()
    f.run()
