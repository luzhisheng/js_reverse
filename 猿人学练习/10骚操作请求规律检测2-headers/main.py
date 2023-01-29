import requests


def challenge10(page):
    url = "https://www.python-spider.com/api/challenge10"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-length': '6',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/10',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': ''
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        res_dict = challenge10(page)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
