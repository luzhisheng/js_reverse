from dao.mongo_dao import MongoDao
from spider.baes import Baes
import settings
import pandas as pd
from urllib.parse import urlparse
import os


class 导出到本地csv数据(Baes):

    def __init__(self):
        self.col = MongoDao()
        super(导出到本地csv数据, self).__init__()
        path_1 = "数据分析_1688_{}_v1.xlsx".format("".join(self.getYMDHMSstrList()[0:4]))
        pd_path = os.path.join(settings.excel_path, path_1)
        self.writer = pd.ExcelWriter(pd_path, options={'strings_to_urls': False})

    def export(self):
        res = self.col.find_item('CLEAN_CONTENT', {}, None)

        # 初始化df
        df = pd.DataFrame(columns={
            "店铺id": str,
            "店铺名称": str,
            "店铺地址": str,
            "30天銷量": pd.to_numeric,
            "商品名称": str,
            "轮播图": str,
            "起订量1": str,
            "价格1": str,
            "起订量2": str,
            "价格2": str,
            "起订量3": str,
            "价格3": str,
            "单位": str,
            "品牌": str,
            "货号": str,
            "包装": str,
            "材质": str,
            "尺寸": str,
            "颜色": str,
            "是否专利货源": str,
            "是否进口": str,
            "造型": str,
            "主要下游平台": str,
            "主要销售地区": str,
            "有可授权的自有品牌": str,
            "是否跨境出口专供货源": str,
            "单位重量": pd.to_numeric,
            "详情页html": str
        })

        # 初始化 df_cat
        df_cat = pd.DataFrame(columns={
            "店铺id": str,
            "规格名称": str,
            "可售数量": str,
            "图片id": str
        })

        dict_list = []
        dict_list_cat = []

        for s in res:
            carousel_id = []
            images = s.get('images')
            for image in images:
                fullPathImageURI = image.get('fullPathImageURI')
                url_path = urlparse(fullPathImageURI).path
                carousel_id.append(url_path.split("/")[-1])

            propsList = s.get('propsList')
            for props in propsList:
                if props.get('name') == "品牌":
                    pp = props.get('value')
                    continue
                if props.get('name') == "货号":
                    hh = props.get('value')
                    continue
                if props.get('name') == "包装":
                    bz = props.get('value')
                    continue
                if props.get('name') == "材质":
                    cz = props.get('value')
                    continue
                if props.get('name') == "尺寸":
                    cc = props.get('value')
                    continue
                if props.get('name') == "颜色":
                    ys = props.get('value')
                    continue
                if props.get('name') == "是否专利货源":
                    yszlzy = props.get('value')
                    continue
                if props.get('name') == "是否进口":
                    sfjk = props.get('value')
                    continue
                if props.get('name') == "造型":
                    zx = props.get('value')
                    continue
                if props.get('name') == "主要下游平台":
                    zyxy = props.get('value')
                    continue
                if props.get('name') == "主要销售地区":
                    zyxsdq = props.get('value')
                    continue
                if props.get('name') == "有可授权的自有品牌":
                    yksqdzypp = props.get('value')
                    continue
                if props.get('name') == "是否跨境出口专供货源":
                    sfkjckzgzy = props.get('value')
                    continue

            originalPrices = s.get('order_param_model').get('originalPrices')
            qdl_1 = ""
            jg_1 = ""
            qdl_2 = ""
            jg_2 = ""
            qdl_3 = ""
            jg_3 = ""
            if len(originalPrices) >= 3:
                qdl_1 = s.get('order_param_model').get('originalPrices')[0].get('beginAmount')
                jg_1 = s.get('order_param_model').get('originalPrices')[0].get('price')
                qdl_2 = s.get('order_param_model').get('originalPrices')[1].get('beginAmount')
                jg_2 = s.get('order_param_model').get('originalPrices')[1].get('price')
                qdl_3 = s.get('order_param_model').get('originalPrices')[2].get('beginAmount')
                jg_3 = s.get('order_param_model').get('originalPrices')[2].get('price')
            if len(originalPrices) >= 2:
                qdl_1 = s.get('order_param_model').get('originalPrices')[0].get('beginAmount')
                jg_1 = s.get('order_param_model').get('originalPrices')[0].get('price')
                qdl_2 = s.get('order_param_model').get('originalPrices')[1].get('beginAmount')
                jg_2 = s.get('order_param_model').get('originalPrices')[1].get('price')
            if len(originalPrices) >= 1:
                qdl_1 = s.get('order_param_model').get('originalPrices')[0].get('beginAmount')
                jg_1 = s.get('order_param_model').get('originalPrices')[0].get('price')

            item = {
                "店铺id": s.get('id'),
                "店铺名称": s.get('company_name'),
                "店铺地址": s.get('url'),
                "30天銷量": s.get('saledCount'),
                "商品名称": s.get('title'),
                "轮播图": carousel_id,
                "起订量1": qdl_1,
                "价格1": jg_1,
                "起订量2": qdl_2,
                "价格2": jg_2,
                "起订量3": qdl_3,
                "价格3": jg_3,
                "单位": s.get('offerUnit'),
                "品牌": pp,
                "货号": hh,
                "包装": bz,
                "材质": cz,
                "尺寸": cc,
                "颜色": ys,
                "是否专利货源": yszlzy,
                "是否进口": sfjk,
                "造型": zx,
                "主要下游平台": zyxy,
                "主要销售地区": zyxsdq,
                "有可授权的自有品牌": yksqdzypp,
                "是否跨境出口专供货源": sfkjckzgzy,
                "单位重量": s.get('unit_weight'),
                "详情页html": s.get('detailUrl')
            }
            dict_list.append(item)

            # 规格详情開始
            sub_categorys = s.get('sub_categorys')
            sub_colour_categorys = s.get('sub_colour_categorys')

            for sub_category in sub_categorys:
                imageUrl_id = ''
                specAttrs = sub_category.get('specAttrs')
                for sub_colour_category in sub_colour_categorys:
                    if specAttrs == sub_colour_category.get('name'):
                        imageUrl = sub_colour_category.get('imageUrl') or ''
                        if imageUrl:
                            url_path = urlparse(imageUrl).path
                            imageUrl_id = url_path.split("/")[-1]

                cat_item = {
                    "店铺id": s.get('id'),
                    "规格名称": specAttrs,
                    "可售数量": sub_category.get('canBookCount'),
                    "图片id": imageUrl_id
                }
                dict_list_cat.append(cat_item)

        df = df.append(dict_list, ignore_index=True, sort=False)
        df.to_excel(sheet_name="1-商品详情", index=False, excel_writer=self.writer)

        df_cat = df_cat.append(dict_list_cat, ignore_index=True, sort=False)
        df_cat.to_excel(sheet_name="2-规格详情", index=False, excel_writer=self.writer)
        self.writer.save()

    def run(self):
        self.export()


if __name__ == '__main__':
    f = 导出到本地csv数据()
    f.run()
