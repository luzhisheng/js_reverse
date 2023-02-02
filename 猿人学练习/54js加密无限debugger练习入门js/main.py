import requests
import base64
import json


def base64_value(key):
    base64_a_timestamp = base64.b64encode(key.encode('utf8'))
    base64_str = str(base64_a_timestamp, 'utf-8')
    return base64_str


def challenge54(page):
    token = base64_value(str(page))
    url = "https://www.python-spider.com/api/challenge54"
    payload = f"page={page}&token={token}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        res_dict = challenge54(page)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
