from urllib.parse import urlparse
import requests
import os
from dao.mongo_dao import MyMongodb
from datetime import datetime
import gevent
import gevent.monkey
from gevent import Greenlet

DOCS_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
excel_path = os.path.join(DOCS_PATH, 'docs/')

gevent.monkey.patch_all(thread=False, select=False)


class 图片下载协程(object):

    def __init__(self):
        self.client = MyMongodb().db
        super(图片下载协程, self).__init__()

    def request_download(self, image_url, path):
        try:
            url_path = urlparse(image_url).path
            image_name = url_path.split("/")[-1]
            r = requests.get(image_url)
            with open(f'{excel_path}{path}/{image_name}', 'wb') as f:
                f.write(r.content)
            print(f"【{datetime.now()}】图片下载{image_url}")
            return 1
        except Exception as e:
            return -1

    def mkdir(self, path):
        folder = os.path.exists(f"{excel_path}{path}")
        if not folder:
            os.makedirs(f"{excel_path}{path}")

    def download_img(self, image_url, path):
        self.mkdir(path)
        return self.request_download(image_url, path)

    def run(self, img_list, id):
        dowload_jobs = [Greenlet.spawn(self.download_img, i, id) for i in img_list]
        gevent.joinall(dowload_jobs)


if __name__ == '__main__':
    img = 图片下载协程()
    img_list_dict = {
        '571766228182': ["https://cbu01.alicdn.com/img/ibank/2018/147/347/9004743741_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/650/198/9047891056_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/002/234/9025432200_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/948/948/9047849849_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/880/675/9009576088_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/331/888/9047888133_187419500.jpg"],
        '568333714781': ["https://cbu01.alicdn.com/img/ibank/2018/168/640/8886046861_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/945/460/8886064549_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/896/850/8886058698_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/458/919/8902919854_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2018/996/739/8902937699_187419500.jpg",
                         "https://cbu01.alicdn.com/img/ibank/2020/417/623/22142326714_187419500.jpg"]
    }
    for k, v in img_list_dict.items():
        img.run(v, k)
