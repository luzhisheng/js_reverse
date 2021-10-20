from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import json


class 导出到本地json数据(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(导出到本地json数据, self).__init__()

    def run(self):
        res = self.col.find_item('CLEAN_CONTENT', {}, {"company_name": 1, "url": 1, "title": 1, "sub_categorys": 1,
                                                       "sub_colour_categorys": 1, "order_param_model": 1,
                                                       "sellerLoginId": 1, "offerUnit": 1, "images": 1, "propsList": 1,
                                                       "detailUrl": 1, "unit_weight": 1})

        for s in res:
            s.pop('_id')
            with open(f"../docs/导出到本地json数据{time.strftime('%Y-%m-%d', time.localtime())}.json", "a+") as f:
                f.write(json.dumps(s) + '\n')

        print(f"【{datetime.now()}】完成")


if __name__ == '__main__':
    f = 导出到本地json数据()
    f.run()
