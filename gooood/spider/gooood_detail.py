from dao.file_dao import File
import requests


file = File()


def gooood_detail(address):
    url = f"https://www.gooood.cn/{address}.htm"
    payload = {}
    headers = {'cookie': 'language=zh_CN;'}
    response = requests.request("GET", url, headers=headers, data=payload)
    return response.text


def run():
    df = file.read('raw_gd_list')
    response_text_list = []

    for slug in df["slug"].values:
        print(slug)
        response_text = gooood_detail(slug)
        response_text_list.append([response_text])

    status = file.write('raw_gd_detail', response_text_list, ['response_text'])
    if status:
        print('详情页面抓取完成')


if __name__ == '__main__':
    run()
