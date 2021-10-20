from scrapy.selector import Selector
from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import requests


class Film(Baes):

    def __init__(self):
        self.col = MongoDao()
        self.url = "https://shop1456245592469.1688.com/page/offerlist.htm?spm=a2615.7691456.autotrace-paginator." \
                   "4.79f525026COu37&pageNum={}"
        super(Film, self).__init__()

    def run(self):
        for i in range(1, 33):
            cookie2 = "1bd7858d65500ba53956ab164308ad2a"
            x5sec = "7b226b796c696e3b32223a223932613866656331376631373065326331363635306638303764646635666438434f766276497347454c36483635715739704f7968674561437a59324f4449794d5463344e4473784d4f57426e355542227d"
            url = self.url.format(i).replace('detail', 'm')
            headers = {
                'cookie': f"cookie2={cookie2};x5sec={x5sec}"
                }
            response = requests.request("GET", url, headers=headers)

            if '系统自动生成，请勿修改 100%' in response.text:
                print(f"系统自动生成，请勿修改 100%【{datetime.now()}】报错{i}")
                exit()

            if '全球领先的采购批发平台,批发网' in response.text:
                print(f"全球领先的采购批发平台,批发网【{datetime.now()}】报错{i}")
                exit()

            sel = Selector(text=response.text, type='html')
            urls = sel.xpath('//ul[@class="offer-list-row"]//div[@class="image"]/a/@href').extract()
            shop_name = sel.xpath('//div[@class="name-wrap"]//a/text()').extract_first()

            for url in urls:
                item = {
                    "sign": self.generate_sign(url),
                    "url": url,
                    "stauts": "0",
                    "shop_name": shop_name
                }
                self.col.insert_item('RAW_URLS', item)
            time.sleep(10)


if __name__ == '__main__':
    f = Film()
    f.run()
