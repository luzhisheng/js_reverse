import json
import requests
import hashlib


def md5_value_32(key):
    sign = hashlib.md5(key.encode()).hexdigest()
    return sign


def md5_value_16(key):
    sign = hashlib.md5(key.encode()).hexdigest()[8:-8]
    return sign


def challenge58(page, token):
    url = "https://www.python-spider.com/api/challenge58"
    payload = f"page={page}&token={token}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        safe = md5_value_16(str(page))
        res_dict = json.loads(challenge58(page, safe))
        data_list = res_dict.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
