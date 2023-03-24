from urllib.parse import urlparse
import settings
import requests
import os
from dao.mongo_dao import MyMongodb
from spider.baes import Baes
from datetime import datetime


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
            id = s.get('id')
            sign = s.get('sign')
            for img_url in s.get('images'):
                if img_url.get('imageURI'):
                    fullPathImageURI = "https://cbu01.alicdn.com/img/ibank/" + img_url.get('imageURI')
                    res = self.download_img(fullPathImageURI, id)
                    if res == -1:
                        break
                    print(f"【{datetime.now()}】图片下载{fullPathImageURI}")

            for sub_category in s.get('sub_categorys_option'):
                if sub_category.get('OptionImageUrl'):
                    OptionImageUrl = sub_category.get('OptionImageUrl')
                    res = self.download_img(OptionImageUrl, id)
                    if res == -1:
                        break
                    print(f"【{datetime.now()}】图片下载{OptionImageUrl}")

            # res = self.client['CLEAN_CONTENT'].update_one({"sign": sign}, {"$set": {"download_img_status": 2}})
            print(f"【{datetime.now()}】完成 {res}")
            exit()


if __name__ == '__main__':
    img = 图片下载()
    img.run()
