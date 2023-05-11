from base import BaseExtractor
import json
import re
import scrapy
from dao.file_dao import File
from lxml import etree


class CleanDetail(BaseExtractor):

    def __init__(self):
        self.file = File()

    def clean(self):
        df = self.file.read('raw_gd_detail')
        list_res = []
        for response_text in df["response_text"].values:
            selector = etree.HTML(response_text)
            title = selector.xpath('//h1/text()')[0]
            subtitle = selector.xpath('//div[contains(@class,"single-content")]/h2/text()')[0]
            url = selector.xpath('//meta[@property="og:url"]/@content')[0]

            design_company_str = selector.xpath(
                '//span[contains(text(), "设计公司")]/../following-sibling::div[1]/a/text()')
            if design_company_str:
                design_company = design_company_str[0]
            else:
                design_company = ''

            location_str = selector.xpath('//span[contains(text(), "位置")]/../following-sibling::div[1]/a/text()')
            if location_str:
                location = location_str[0]
            else:
                location = ''

            type_c_str = selector.xpath('//span[contains(text(), "类型")]/../following-sibling::div[1]/a/text()')
            if type_c_str:
                type_c = type_c_str[0]
            else:
                type_c = ''

            material_str = selector.xpath('//span[contains(text(), "材料")]/../following-sibling::div[1]/a/text()')
            if material_str:
                material = material_str[0]
            else:
                material = ''

            label_str = selector.xpath(
                '//span[contains(text(), "标签")]/../following-sibling::div[1]/a/text()')
            if label_str:
                label = label_str
            else:
                label = []

            classification_str = selector.xpath(
                '//span[contains(text(), "分类")]/../following-sibling::div[1]/a/text()')
            if classification_str:
                classification = classification_str[0]
            else:
                classification = ''

            item = re.findall(r'window.__INITIAL_STATE__=(.*?)</script>', response_text)[0]
            item_dict = json.loads(item)
            content_html = item_dict.get('post').get('content')
            selector = scrapy.Selector(text=content_html, type='html')
            nodes = []
            nodes.extend(selector.xpath('//p').extract())
            images, icount = [], 1
            contents = []
            for node in nodes:
                sel = scrapy.Selector(text=node, type='html')
                if sel.css('img ::attr(class)'):
                    icount = self.parse_image(
                        selector=sel, src='img', resource=images,
                        count=icount, content=contents, src_attr='@data-src')
                elif sel.css('p') and '{margin:' not in node:
                    self.parse_paragraph(sel, contents)
                elif sel.css('center ::text'):
                    self.parse_paragraph(sel, contents, tag='center')

            item = {
                "title": title,
                "subtitle": subtitle,
                "url": url,
                "project_1": {
                    'design_company': design_company,
                    'location': location,
                    'type_c': type_c,
                    'material': material,
                    'label': label,
                    'classification': classification
                },
                "contents": contents,
                "images": images
            }
            list_res.append(item)
        self.file.write_json('结果表', list_res)

    def run(self):
        self.clean()


if __name__ == '__main__':
    clean_detail = CleanDetail()
    clean_detail.run()
