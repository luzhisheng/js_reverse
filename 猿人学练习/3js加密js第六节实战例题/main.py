import requests
import json
import time


def get_m(timestamp):
    data = {"timestamp": timestamp}
    url = f"http://0.0.0.0:3005/sign_3"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge3(page, m, timestamp):
    url = "https://www.python-spider.com/api/challenge3"
    payload = f"page={page}"
    headers = {
        'content-length': '6',
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
        'referer': 'https://www.python-spider.com/challenge/3',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': f'm={m}|{timestamp}'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        timestamp = int(time.time()) * 1000
        time.sleep(1)
        m = get_m(timestamp)
        print(page, m, timestamp)
        response_text = challenge3(page, m, timestamp)
        res_dict = json.loads(response_text)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
