from dao.mongo_dao import MyMongodb, MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import requests


class 企业产品详情页面(Baes):

    def __init__(self):
        self.mongodb = MyMongodb().db
        self.col = MongoDao()
        super(企业产品详情页面, self).__init__()

    def run(self):
        res = self.mongodb['RAW_URLS'].find({"stauts": "0"}, {"url": 1, "sign": 1})
        for s in res:
            url = s.get('url').replace('detail', 'm')
            sign = s.get('sign')
            x5sec = "7b22776972656c6573732d7365727665722d72656e6465723b32223a226363663036373930386530363435333061646434616437316231373339646264434e7149744930474550476b36716541796f6655777745773563795068766a2f2f2f2f2f41513d3d227d"
            headers = {
                'Cookie': f"x5sec={x5sec}"
            }
            response = requests.request("GET", url, headers=headers)

            if '系统自动生成，请勿修改 100%' in response.text:
                print(f"系统自动生成，请勿修改 100%【{datetime.now()}】报错{url}")
                exit()

            if '全球领先的采购批发平台,批发网' in response.text:
                print(f"全球领先的采购批发平台,批发网【{datetime.now()}】报错{url}")
                exit()

            item = {
                "sign": self.generate_sign(url),
                "url": url,
                "content": response.text
            }
            self.col.insert_item('RAW_CONTENT', item)
            self.col.update_item('RAW_URLS', sign)
            time.sleep(3)


if __name__ == '__main__':
    f = 企业产品详情页面()
    f.run()
