from scrapy.selector import Selector
from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import json
import re


class 导出到本地元数据(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(导出到本地元数据, self).__init__()

    def run(self):
        res = self.col.find_item('RAW_CONTENT', {}, {"content": 1})

        for s in res:
            s.pop('_id')
            content = s.get('content')
            json_itme = re.findall(r'window.__INIT_DATA=(\{.*\})', content)[0]
            with open(f"../docs/导出到本地元数据{time.strftime('%Y-%m-%d', time.localtime())}.json", "a+") as f:
                f.write(json.dumps(json_itme) + '\n')

        print(f"【{datetime.now()}】完成")


if __name__ == '__main__':
    f = 导出到本地元数据()
    f.run()
