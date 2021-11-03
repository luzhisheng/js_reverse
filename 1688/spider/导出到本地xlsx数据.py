from dao.mongo_dao import MongoDao
from spider.baes import Baes
import settings
import pandas as pd
from urllib.parse import urlparse
import os
import json


class 导出到本地xlsx数据(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(导出到本地xlsx数据, self).__init__()

    def export(self, company_name, writer):
        res = self.col.find_item('CLEAN_CONTENT', {"company_name": company_name}, None)

        # 初始化df
        df = pd.DataFrame(columns={
            "product_id": str,
            "product_attributes": str
        })

        # 初始化 df_cat
        df_cat = pd.DataFrame(columns={
            "product_id": str,
            "sku_description": str,
            "sku_image": str
        })

        # 价格区间
        df_price = pd.DataFrame(columns={
            "product_id": str,
            "priceRanges": str
        })

        # 选项列
        df_row = pd.DataFrame(columns={
            "product_id": str,
            "option_name": str,
            "option_value": str
        })

        dict_list = []
        dict_list_cat = []
        dict_list_price = []
        dict_list_row = []

        for s in res:
            # 产品属性
            item = {
                "product_id": s.get('id'),
                "product_attributes": s.get('propsList')
            }
            dict_list.append(item)

            # 产品图片
            sub_categorys = s.get('sub_categorys')

            if s.get('sub_colour_categorys'):
                sub_colour_categorys = s.get('sub_colour_categorys')[0].get('value')

                for sub_category in sub_categorys:
                    imageUrl_id = ''
                    specAttrs = sub_category.get('specAttrs').replace('&gt;', '')
                    for sub_colour_category in sub_colour_categorys:
                        if sub_colour_category.get('name') in specAttrs:
                            imageUrl = sub_colour_category.get('imageUrl') or ''
                            if imageUrl:
                                url_path = urlparse(imageUrl).path
                                imageUrl_id = url_path.split("/")[-1]

                    cat_item = {
                        "product_id": s.get('id'),
                        "sku_description": specAttrs,
                        "sku_image": imageUrl_id
                    }
                    dict_list_cat.append(cat_item)

            # 价格区间
            originalPrices = s.get('order_param_model').get('originalPrices')
            price_str = ""
            for originalPrice in originalPrices:
                beginAmount = originalPrice.get('beginAmount')
                price = originalPrice.get('price')
                price_item = str(beginAmount) + ':' + str(price)
                price_item_str = json.dumps(price_item)
                if price_str:
                    price_str = price_str + '`' + price_item_str
                else:
                    price_str = price_item_str

            price_item = {
                "product_id": s.get('id'),
                "priceRanges": price_str,
            }
            dict_list_price.append(price_item)

            # 选项列
            sub_colour_categorys = s.get('sub_colour_categorys')
            for sub_colour_category in sub_colour_categorys:
                values = sub_colour_category.get('value')
                prop = sub_colour_category.get('prop')
                for value in values:
                    row_dict = {
                        "product_id": s.get('id'),
                        "option_name": prop,
                        "option_value": value.get('name')
                    }
                    dict_list_row.append(row_dict)

        df = df.append(dict_list, ignore_index=True, sort=False)
        df.to_excel(sheet_name="1-产品属性", index=False, excel_writer=writer)

        df_cat = df_cat.append(dict_list_cat, ignore_index=True, sort=False)
        df_cat.to_excel(sheet_name="2-产品图片", index=False, excel_writer=writer)

        df_price = df_price.append(dict_list_price, ignore_index=True, sort=False)
        df_price.to_excel(sheet_name="3-价格区间", index=False, excel_writer=writer)

        df_row = df_row.append(dict_list_row, ignore_index=True, sort=False)
        df_row.to_excel(sheet_name="4-选项列", index=False, excel_writer=writer)

        writer.save()

    def run(self, company_name):
        path_1 = f"{company_name}_1688_{''.join(self.getYMDHMSstrList()[0:4])}_v1.xlsx"
        pd_path = os.path.join(settings.excel_path, path_1)
        writer = pd.ExcelWriter(pd_path, options={'strings_to_urls': False})
        self.export(company_name, writer)


if __name__ == '__main__':
    f = 导出到本地xlsx数据()
    company_name = '东莞市茶山品轩玩具厂'
    f.run(company_name)
