import requests
import time
import base64
import hashlib


def md5_value(key):
    input_name = hashlib.md5()
    input_name.update(key.encode("utf-8"))
    sign = (input_name.hexdigest()).lower()
    return sign


def base64_value(key):
    base64_a_timestamp = base64.b64encode(key.encode('utf8'))
    base64_str = str(base64_a_timestamp, 'utf-8')
    return base64_str


def challenge1(page, safe, timestamp):
    url = "https://www.python-spider.com/api/challenge1"
    payload = f"page={page}"
    headers = {
        'safe': safe,
        'timestamp': timestamp,
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        timestamp = str(int(time.time()))
        a_timestamp = '9622' + timestamp
        print(a_timestamp)
        base64_str = base64_value(a_timestamp)
        safe = md5_value(base64_str)
        res_dict = challenge1(page, safe, timestamp)
        data_list = res_dict.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
