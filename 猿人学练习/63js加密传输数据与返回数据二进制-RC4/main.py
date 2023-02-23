import json

import requests
from rc4_encrypt import decrypt, encrypt


def sign(data):
    print(data)
    url = f"http://0.0.0.0:3005/sign"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge63(payload):
    url = f"https://www.python-spider.com/api/challenge63"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.content


def run():
    data_num = 0
    for page in range(1, 101):
        payload = sign({"data": page, "types": "atob"})
        response_content = challenge63(payload)
        import base64
        n = base64.b64encode(response_content)
        key = '12345678812345678912345678912345'  # 加密key
        response_json = json.loads(decrypt(n, key))  # 解密方法
        data_list = response_json.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
