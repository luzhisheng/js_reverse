from lxml import etree
import requests

url = "https://js-crack-course-14-1.crawler-lab.com/"
headers = {
    'authority': 'js-crack-course-14-1.crawler-lab.com',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng'
              ',*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'cookie': '__yjs_duid=1_e50e958c4a3901641bd9faf6f163dfcc1658477764669; crawlerlab_token=eyJhbGc'
              'iOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjM2NDIwNjMsImlkIjoxODE1LCJuYW1lIjoiMTgyNjI'
              'wMzE3MjUifQ.fInkCVCQh-hT7Yq-DGB0vcf4pVvO9Sy-lBbYZMXw_zs',
    'pragma': 'no-cache',
    'referer': 'https://www.crawler-lab.com/',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-site',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36'
}
response = requests.request("GET", url, headers=headers)
html = etree.HTML(response.text)
res = html.xpath('//span[@class="prc_wp"]/em')
for result in res:
    data = etree.tostring(result)
    html = etree.HTML(data)
    datas = html.xpath('//b')
    item_dict = {}
    item_i_dict = {}
    num_str = ''
    for data in datas:
        data = etree.tostring(data)
        html = etree.HTML(data)
        num_list = html.xpath('//b/text()')
        num_i_list = html.xpath('//b/i/text()')
        if num_list:
            for num in num_list:
                left = html.xpath('//b/@style')[0].replace('width:48px;left:', '').replace('px', '')\
                    .replace('width: 16;left:', '')
                item_dict[left] = num

        if num_i_list:
            i = 0
            for num in num_i_list:
                left = html.xpath('//b/@style')[0].replace('width:48px;left:', '').replace('px', '') \
                    .replace('width: 16;left:', '')
                left = str(int(left) + i)
                item_i_dict[left] = num
                i += 16

    print(item_dict)
    print(item_i_dict)
    item_dict = sorted(item_dict.items(), key=lambda x: x[0])
    print(item_dict)
    exit()
