from urllib.parse import urlparse
import settings
import requests
import os
from dao.mongo_dao import MyMongodb
from spider.baes import Baes
from datetime import datetime
import gevent
import gevent.monkey
from gevent import Greenlet
gevent.monkey.patch_all(thread=False, select=False)


class 图片下载(Baes):

    def __init__(self):
        self.client = MyMongodb().db
        super(图片下载, self).__init__()

    def request_download(self, image_url, path):
        try:
            url_path = urlparse(image_url).path
            image_name = url_path.split("/")[-1]
            r = requests.get(image_url)
            with open(f'{settings.excel_path}{path}/{image_name}', 'wb') as f:
                f.write(r.content)
            print(f"【{datetime.now()}】图片下载{image_url}")
            return 1
        except Exception as e:
            return -1

    def mkdir(self, path):
        folder = os.path.exists(f"{settings.excel_path}{path}")
        if not folder:
            os.makedirs(f"{settings.excel_path}{path}")

    def download_img(self, image_url, path):
        self.mkdir(path)
        return self.request_download(image_url, path)

    def run(self):
        res = self.client['CLEAN_CONTENT'].find({"download_img_status": 0}).batch_size(1)
        for s in res:
            img_list = []
            id = s.get('id')
            for img_url in s.get('images'):
                if img_url.get('imageURI'):
                    fullPathImageURI = "https://cbu01.alicdn.com/img/ibank/" + img_url.get('imageURI')
                    img_list.append(fullPathImageURI)
            dowload_jobs = [Greenlet.spawn(self.download_img, i, id) for i in img_list]
            gevent.joinall(dowload_jobs)


if __name__ == '__main__':
    img = 图片下载()
    img.run()
