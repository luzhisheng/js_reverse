import random

from Crypto.Cipher import AES
import json
import time
import requests
import base64


BLOCK_SIZE = 16  # Bytes
pad = lambda s: s + (BLOCK_SIZE - len(s) % BLOCK_SIZE) * \
                chr(BLOCK_SIZE - len(s) % BLOCK_SIZE)
unpad = lambda s: s[:-ord(s[len(s) - 1:])]


def aesEncrypt(key, data):
    '''
    AES的ECB模式加密方法
    :param key: 密钥
    :param data:被加密字符串（明文）
    :return:密文
    '''
    key = key.encode('utf8')
    # 字符串补位
    data = pad(data)
    cipher = AES.new(key, AES.MODE_ECB)
    # 加密后得到的是bytes类型的数据，使用Base64进行编码,返回byte字符串
    result = cipher.encrypt(data.encode())
    encodestrs = base64.b64encode(result)
    enctext = encodestrs.decode('utf8')
    return enctext


def challenge14(page, uc):
    url = "https://www.python-spider.com/api/challenge14"
    payload = f"page={page}&uc={uc}"
    print(payload)
    session = requests.session()
    headers = {
        'content-length': str(random.choice([40, 39, 38])),
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    print(response.text)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        key = "wdf2ff*TG@*(F4)*YH)g430HWR(*)wse"
        timestamp = int(time.time())
        uc = aesEncrypt(key, f'{timestamp}|{page}')
        res_dict = json.loads(challenge14(page, uc))
        data_list = res_dict.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
