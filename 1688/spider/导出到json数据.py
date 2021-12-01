from dao.mongo_dao import MyMongodb
from spider.baes import Baes
from datetime import datetime
import time
import json


class 导出到json数据(Baes):

    def __init__(self):
        self.client = MyMongodb().db
        super(导出到json数据, self).__init__()

    def export_CLEAN_CONTENT(self):
        res = self.client['CLEAN_CONTENT'].find({}).batch_size(100)

        for s in res:
            s.pop('_id')
            s.pop('sign')
            with open(f"../docs/导出到解析后json数据{time.strftime('%Y-%m-%d', time.localtime())}.json", "a+") as f:
                f.write(json.dumps(s) + '\n')
        print(f"【{datetime.now()}】完成")

    def export_RAW_DETAIL(self):
        res = self.client['RAW_DETAIL'].find({}).batch_size(100)

        for s in res:
            s.pop('_id')
            s.pop('sign')
            s.pop('stauts')
            with open(f"../docs/导出到详情内容json数据{time.strftime('%Y-%m-%d', time.localtime())}.json", "a+") as f:
                f.write(json.dumps(s) + '\n')
        print(f"【{datetime.now()}】完成")

    def run(self):
        self.export_CLEAN_CONTENT()
        self.export_RAW_DETAIL()


if __name__ == '__main__':
    f = 导出到json数据()
    f.run()
