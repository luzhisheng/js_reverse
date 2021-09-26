from scrapy.selector import Selector
from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import requests


class Film(Baes):

    def __init__(self):
        self.col = MongoDao()
        self.url = "https://dearbei.1688.com/page/offerlist.htm?spm=a2615.7691456.autotrace-paginator.2&pageNum={}"
        super(Film, self).__init__()

    def run(self):
        for i in range(15, 24):
            cookie2 = "1bdee7e6f5206d15ccfabb2cc828a2d1"
            x5sec = "7b226b796c696e3b32223a2232386636646266333930343734353861333765356163386535" \
                    "35636232343339434a757676346f47454c434b357258693249655973674561437a59324f44497" \
                    "4d5463344e4473784d4f57426e355542227d"
            url = self.url.format(i).replace('detail', 'm')
            headers = {
                'cookie': f"cookie2={cookie2};x5sec={x5sec}"
                }
            response = requests.request("GET", url, headers=headers)

            if '系统自动生成，请勿修改 100%' in response.text:
                print(f"【{datetime.now()}】报错{i}")
                exit()

            if '全球领先的采购批发平台,批发网' in response.text:
                print(f"【{datetime.now()}】报错{i}")
                exit()

            sel = Selector(text=response.text, type='html')
            urls = sel.xpath('//ul[@class="offer-list-row"]//div[@class="image"]/a/@href').extract()

            for url in urls:
                item = {
                    "sign": self.generate_sign(url),
                    "url": url,
                    "stauts": "0"
                }
                self.col.insert_item('RAW_URLS', item)
            time.sleep(10)


if __name__ == '__main__':
    f = Film()
    f.run()
