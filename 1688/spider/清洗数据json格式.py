from dao.mongo_dao import MongoDao, MyMongodb
from scrapy.selector import Selector
from spider.baes import Baes
from datetime import datetime
import json
import re


class extractor(Baes):

    def __init__(self):
        self.mongodb = MyMongodb().db
        self.col = MongoDao()
        super(extractor, self).__init__()

    def run(self):
        res = self.mongodb['RAW_CONTENT'].find({}, {"content": 1})
        for s in res:
            content = s.get('content')
            sel = Selector(text=content, type='html')
            title = sel.xpath('//title/text()').extract_first()
            json_itme = re.findall(r'window.__INIT_DATA=(\{.*\})', content)[0]
            json_dict = json.loads(json_itme)
            globalData = json_dict.get('globalData')
            offerId = globalData.get('tempModel').get('offerId')

            print(f"【{datetime.now()}】解析 {offerId}")

            data = json_dict.get('data')
            skuInfoMap = globalData.get('skuModel').get('skuInfoMap')

            sub_categorys_canBookCount = []
            for key, value in skuInfoMap.items():
                sub_categorys_dict = {
                    'specId': value.get('specId'),
                    'specAttrs': key.replace('&gt;', '|'),
                    'Price': value.get('price') if value.get('price') else globalData.get('tempModel').get('price'),
                    'canBookCount': value.get('canBookCount')
                }
                sub_categorys_canBookCount.append(sub_categorys_dict)

            if globalData.get('skuModel').get('skuProps'):
                skuProps = globalData.get('skuModel').get('skuProps')
                list_dict = []
                for skuProp in skuProps:
                    prop = skuProp.get('prop')
                    value = skuProp.get('value')
                    for val in value:
                        if val.get('imageUrl'):
                            val_imageUrl = val.get('imageUrl').replace('.jpg', '.32x32.jpg')
                        else:
                            val_imageUrl = ''
                        item_dict = {
                            'OptionImageUrl': val_imageUrl,
                            'name': prop,
                            'optionValue': val.get('name')
                        }
                        list_dict.append(item_dict)

            else:
                list_dict = []

            companyName = globalData.get('tempModel').get('companyName')
            sellerLoginId = globalData.get('tempModel').get('sellerLoginId')
            offerUnit = globalData.get('tempModel').get('offerUnit')
            saledCount = globalData.get('tempModel').get('saledCount')
            images = []
            images_item = globalData.get('images')
            for image in images_item:
                image_item = {
                    "imageURI": image.get('imageURI').split('/')[-1]
                }
                images.append(image_item)

            a_590893001984 = data.get('590893001984')
            if not a_590893001984:
                priceModel = globalData.get('processingModel').get('offerPriceModel').get('currentPrices')
            else:
                priceModel = a_590893001984.get('data').get('priceModel')

            a_590893001997 = data.get('590893001997')
            if not a_590893001997:
                # unitWeight = data.get('605462009364').get('data').get('test').get('unitWeight')
                location = data.get('605462009364').get('data').get('location')
                cost = data.get('605462009364').get('data').get('logistics')
            else:
                # unitWeight = a_590893001997.get('data').get('test').get('unitWeight')
                location = a_590893001997.get('data').get('location')
                cost = a_590893001997.get('data').get('logistics')
            logistics = [{"from": location}, {"cost": cost.replace('快递', '').strip()}]

            a_590893002003 = data.get('590893002003')
            if not a_590893002003:
                a_590893002003 = data.get('605462009362')
            propsList = a_590893002003.get('data').get('propsList')

            detailUrl = globalData.get('detailModel').get('detailUrl')

            item = {
                "sign": self.generate_sign("https://detail.1688.com/offer/{}.html".format(offerId)),
                "id": offerId,
                "company_name": companyName,
                "url": "https://detail.1688.com/offer/{}.html".format(offerId),
                "title": title,
                "sub_categorys_canBookCount": sub_categorys_canBookCount,
                "sub_categorys_option": list_dict,
                "order_param_model": priceModel,
                "sellerLoginId": sellerLoginId,
                "offerUnit": offerUnit,
                "30daySold": saledCount,
                "images": images,
                "propsList": propsList,
                "detailUrl": detailUrl,
                "unit_weight": "",
                "logistics": logistics,
                "download_img_status": 0,
                "detail_url_status": 0
            }
            self.col.insert_item('CLEAN_CONTENT', item)


if __name__ == '__main__':
    f = extractor()
    f.run()
