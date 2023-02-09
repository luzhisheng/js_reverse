import json

from rsa_encrypt import RsaUtil
import requests


def decrypt_res(response_json):
    rsa = RsaUtil()
    decrypt_result = rsa.decrypt_by_private_key(response_json.get('result'))
    return decrypt_result


def challenge56(page):
    url = "https://www.python-spider.com/api/challenge56"
    payload = f"page={page}"
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
        response_json = challenge56(page)
        decrypt_result = decrypt_res(response_json)
        data_list = json.loads(decrypt_result).get('data')
        data_list_num = []
        for data in data_list:
            data_list_num.append(int(data.get('value')))
            data_num += int(data.get('value'))
        print(data_list_num, page)
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
