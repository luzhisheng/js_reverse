import re
import time
import json
import requests

timestamp_ = int(round(time.time() * 1000))


def get_safe(timestamp, num_sign):
    data = {"timestamp": timestamp, "num_sign": num_sign}
    url = f"http://127.0.0.1:3005/sign_15"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def get_cityjson():
    url = f"https://www.python-spider.com/cityjson"
    session = requests.session()
    headers = {
        'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'accept': 'text/javascript, application/javascript, application/ecmascript,'
                  ' application/x-ecmascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                      ' (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': 'Windows',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/15',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'sessionid=pdsh5qmiyd2u4zcgf9ay7tuxfty1mf9f'
    }
    session.headers = headers
    response = session.request("GET", url)
    return response.text


def get_challenge15_js(timestamp):
    global timestamp_
    timestamp_ += 1
    print(timestamp_)
    url = f"https://www.python-spider.com/api/challenge15/js?_t={timestamp}&_={timestamp_}"
    session = requests.session()
    headers = {
        'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'accept': 'text/javascript, application/javascript, application/ecmascript,'
                  ' application/x-ecmascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                      ' (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': 'Windows',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/15',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'sessionid=pdsh5qmiyd2u4zcgf9ay7tuxfty1mf9f'
    }
    session.headers = headers
    response = session.request("GET", url)
    return response.text


def challenge15(page, sign):
    url = "https://www.python-spider.com/api/challenge15"
    payload = f"page={page}&sign={sign}"
    session = requests.session()
    headers = {
        'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
        'accept': 'text/javascript, application/javascript, application/ecmascript,'
                  ' application/x-ecmascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                      ' (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': 'Windows',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.python-spider.com/challenge/15',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cookie': 'sessionid=pdsh5qmiyd2u4zcgf9ay7tuxfty1mf9f'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    page = 1
    while True:
        # 第一个请求地址
        returnCitySN = get_cityjson()
        returnCitySN_json = json.loads(re.findall(r'returnCitySN = (.*);', returnCitySN)[0])
        timestamp = returnCitySN_json.get('timestamp')
        print(timestamp)

        # 第二个返回js数据
        challenge15_js = get_challenge15_js(timestamp)
        try:
            num_sign = re.findall(r'0xe\)],0x11,(.*?)\),_', challenge15_js)[0]
        except Exception as a:
            num_sign = re.findall(r'0xe],0x11,(.*?)\),_', challenge15_js)[0]
        print(num_sign)
        if len(num_sign) not in [18, 19]:
            continue
        sign = get_safe(timestamp, num_sign)
        print(page, sign)
        # exit()
        response_json = challenge15(page, sign)
        data_list = response_json.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)

        exit()

        page += 1
        if page == 101:
            break


if __name__ == '__main__':
    run()
