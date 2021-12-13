from scrapy.selector import Selector
from dao.mongo_dao import MongoDao
from spider.baes import Baes
from datetime import datetime
import time
import requests


class Film(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(Film, self).__init__()

    def run(self, domains, cookie2, x5sec):
        for domain in domains:
            print(f"【{datetime.now()}】网站 {domain}")
            for i in range(1, 33):
                url = f"{domain}page/offerlist.htm?spm=a2615.7691456.autotrace-paginator." \
                      "4.79f525026COu37&pageNum={}"
                url = url.format(i).replace('detail', 'm')
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
                if not urls:
                    break
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
    cookie2 = "1d6b1823cb22b39510e848b599f4d8f1"
    x5sec = "7b226b796c696e3b32223a226632666163633033363265303934356664653336633537653934656266323437434a5350336f3047454b794232703743685032586a514561437a59324f4449794d5463344e4473784b414977355947666c51453d227d"
    domains = [
        # "https://bsrlons.1688.com/",
        # "https://shop7s40060927865.1688.com/",
        # "https://shop576s6141m0449.1688.com/",
        # "https://shop1448902627889.1688.com/",
        # "https://wangnuofuzhuang.1688.com/",
        # "https://18795584920.1688.com/",
        # "https://memune.1688.com/",
        # "https://shop29i4613r448m4.1688.com/",
        # "https://mengkecos.1688.com/",
        # "https://kingsarts.1688.com/",
        # "https://shop1365442613244.1688.com/",
        # "https://yadegongmao.1688.com/",
        # "https://shop1451495029914.1688.com/",
        # "https://shop59720t3u5t179.1688.com/",
        # "https://shop1418278636684.1688.com/",
        # "https://changshenfz.1688.com/",
        "https://shop2966j774200g0.1688.com/",
        "https://shop1387693797156.1688.com/",
        "https://shop793109z92s466.1688.com/"
    ]
    f.run(domains, cookie2, x5sec)
