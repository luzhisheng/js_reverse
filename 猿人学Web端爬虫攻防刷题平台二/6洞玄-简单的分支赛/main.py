import requests


def challenge21(page):
    url = "https://match2023.yuanrenxue.cn/api/match2023/6"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-length': '63',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'origin': 'https://match2023.yuanrenxue.cn',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://match2023.yuanrenxue.cn/topic/1',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 6):
        response_json = challenge21(page)
        print(response_json)
        data_list = response_json.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
