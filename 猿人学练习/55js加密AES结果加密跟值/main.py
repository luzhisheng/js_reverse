import json
import requests
import base64
from Crypto.Cipher import AES


def decrypt_aes(data):
    """AES解密"""
    real_data = base64.b64decode(data)
    my_aes = AES.new('aiding6666666666', AES.MODE_ECB)
    decrypt_data = my_aes.decrypt(real_data)
    decrypt_data_str = str(decrypt_data, 'utf-8').replace('\\r', '').replace('', '').replace('', '')\
        .replace('', '').replace('', '')
    return json.loads(decrypt_data_str)


def challenge55(page):
    url = "https://www.python-spider.com/api/challenge55"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    print(response.text)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        response_text = challenge55(page)
        result = json.loads(response_text).get('result')
        decrypt_data_dict = decrypt_aes(result)
        data_list = decrypt_data_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
