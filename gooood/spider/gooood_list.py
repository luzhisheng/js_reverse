from dao.file_dao import File
import requests


file = File()


def gooood_list(page):
    url = f"https://dashboard.gooood.cn/api/wp/v2/posts?page={page}&per_page=20"
    payload = {}
    headers = {'cookie': 'language=zh_CN;'}
    response = requests.request("GET", url, headers=headers, data=payload)
    return response.json()


def run():
    slug_list = []
    for page in range(1, 4):
        res_list = gooood_list(page)
        for res in res_list:
            slug = res.get('slug')
            slug_list.append([slug])

    status = file.write('raw_gd_list', slug_list, ['slug'])
    if status:
        print('列表页面抓取完成')


if __name__ == '__main__':
    run()
