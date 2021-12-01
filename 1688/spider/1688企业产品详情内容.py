import requests
from dao.mongo_dao import MyMongodb, MongoDao
from spider.baes import Baes
from datetime import datetime
import json
import re


class 企业产品详情内容(Baes):

    def __init__(self):
        self.client = MyMongodb().db
        self.col = MongoDao()
        super(企业产品详情内容, self).__init__()

    def get_detail(self, url):
        res = requests.get(url)
        return res

    def run(self):
        res = self.client['CLEAN_CONTENT'].find({"detail_url_status": 0}).batch_size(1)
        for s in res:
            sign = s.get('sign')
            id = s.get('id')
            detailUrl = s.get('detailUrl')
            if detailUrl:
                detailUrl = re.findall(r'url=(.*)', detailUrl)[0]
                res = self.get_detail(detailUrl)
                offer_details = re.findall(r'offer_details=(.*);', res.text)[0]
                offer_details_dict = json.loads(offer_details).get('content')

                item = {
                    "sign": sign,
                    "id": id,
                    "offer_details": offer_details_dict,
                    "stauts": "0"
                }
                self.col.insert_item('RAW_DETAIL', item)
                self.client['CLEAN_CONTENT'].update_one({"sign": sign}, {"$set": {"detail_url_status": 2}})
                print(f"【{datetime.now()}】完成")


if __name__ == '__main__':
    img = 企业产品详情内容()
    img.run()
