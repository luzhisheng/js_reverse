import requests
import time


def get_s():
    timestamp = int(time.time() * 1000)
    data = {"timestamp": str(timestamp)}
    url = f"http://0.0.0.0:3005/sign_21"
    session = requests.session()
    headers = {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text, timestamp


def challenge21(page, s, t):
    url = "https://www.python-spider.com/api/challenge21"
    payload = f"page={page}&s={s}&t={t}"
    session = requests.session()
    headers = {
        'content-length': '57',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
        'origin': 'https://www.python-spider.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/21',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'sessionid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        s, t = get_s()
        print(s, t)
        response_json = challenge21(page, s, t)
        print(response_json)
        data_list = response_json.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
