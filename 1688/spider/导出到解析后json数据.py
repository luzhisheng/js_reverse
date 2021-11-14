from scrapy.selector import Selector
from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import json


class 导出到解析后json数据(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(导出到解析后json数据, self).__init__()

    def run(self):
        res = self.col.find_item('CLEAN_CONTENT', {})

        for s in res:
            s.pop('_id')
            s.pop('sign')
            with open(f"../docs/导出到解析后json数据{time.strftime('%Y-%m-%d', time.localtime())}.json", "a+") as f:
                f.write(json.dumps(s) + '\n')

        print(f"【{datetime.now()}】完成")


if __name__ == '__main__':
    f = 导出到解析后json数据()
    f.run()
