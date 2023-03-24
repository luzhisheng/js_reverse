from parsel import Selector
import base64
import requests
import hashlib
import ddddocr

ocr = ddddocr.DdddOcr(beta=True)


def md5_value(key):
    input_name = hashlib.md5()
    input_name.update(key.encode("utf-8"))
    sign = (input_name.hexdigest()).lower()
    return sign


def challenge19(page):
    url = "https://www.python-spider.com/api/challenge19"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, headers=headers, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        response_json = challenge19(page)
        print(response_json)
        info = response_json.get('info')
        key = response_json.get('key')
        value = response_json.get('value')
        encode_str = base64.encodebytes((key + value).encode('utf8'))
        res_md5 = md5_value(str(encode_str, 'utf-8').replace('=', '').rstrip())
        info_sel = Selector(info)
        info_list = info_sel.xpath('//td[@class="info"]').extract()

        for info in info_list:
            info_sel = Selector(info)
            img_list = info_sel.xpath('//img').extract()
            num = 0
            my_list = []
            for img in img_list:
                if res_md5 in img:
                    continue
                img_sel = Selector(img)
                style_num = int(img_sel.xpath('//img/@style').extract_first().replace('left:', '').replace('px', ''))
                src = img_sel.xpath('//img/@src').extract_first().replace('data:image/png;base64,', '')
                src_num = ocr.classification(src)

                my_list.append({
                    'src': src_num,
                    'style': style_num + num,
                })
                num += 9
            my_list = sorted(my_list, key=lambda e: e.__getitem__('style'))
            res_num = ''
            for item in my_list:
                res_num += item.get('src')
            print(f'页数{page}:{res_num}')
            data_num += int(res_num)
        print(data_num)


if __name__ == '__main__':
    run()
