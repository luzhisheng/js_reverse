from datetime import datetime
import threading
import pymongo
import settings


class MyMongodb(object):
    _instance_lock = threading.Lock()

    def __new__(cls, *kw):
        """调用mongo数据库 使用单列模式避免创建多个对象,导致内存泄露"""
        if not hasattr(cls, '_instance'):
            with cls._instance_lock:
                if not hasattr(cls, '_instance'):
                    cls._instance = object.__new__(cls)

        return cls._instance

    def __init__(self):
        kw = settings.MONGODB_CONF
        self.client = pymongo.MongoClient(kw.get('host'), int(kw.get('port')), connect=False)
        self.db = self.client[kw.get('db')]
        # self.db.authenticate(
        #     kw.get('username'), kw.get('pwd'), source=kw.get('source'))

    def shutdown(self):
        self.client.close()


class MongoDao(object):

    def __init__(self):
        self.client = MyMongodb().db

    def insert_item(self, collection, item):
        collection = self.client[collection]
        if collection.find_one({"sign": item['sign']}):
            print(f"【{datetime.now()}】过滤")
        else:
            print(f"【{datetime.now()}】入库{item.get('sign')}")
            return collection.insert_one(item)

    def update_item(self, collection, sign):
        collection = self.client[collection]
        if collection.find_one({"sign": sign}):
            return collection.update_one({"sign": sign}, {"$set": {"stauts": '1'}})
        else:
            print(f"【{datetime.now()}】过滤")
