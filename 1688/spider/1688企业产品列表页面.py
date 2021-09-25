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
        for i in range(1, 24):
            cookie2 = "1e3cee17580ffb0eea62cdaec87c7771"
            x5sec = "7b226b796c696e3b32223a226666636266643833623266666662366331306164643530623830623436613662434d4f7076596f47454e337336596a57674f62427a674561437a59324f4449794d5463344e4473784d4f57426e355542227d"
            url = self.url.format(i)
            headers = {
                'cookie': f"cookie2={cookie2};x5sec={x5sec}"
                }
            response = requests.request("GET", url, headers=headers)

            if '系统自动生成，请勿修改 100%' in response.text:
                print(f"【{datetime.now()}】报错{i}")
                exit()

            sel = Selector(text=response.text, type='html')
            urls = sel.xpath('//ul[@class="offer-list-row"]//div[@class="image"]/a/@href').extract()

            for url in urls:
                item = {
                    "sign": self.generate_sign(url),
                    "url": url
                }
                self.col.insert_item('RAW_URLS', item)
            time.sleep(10)


if __name__ == '__main__':
    f = Film()
    f.run()
