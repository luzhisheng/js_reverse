import json

import requests
from hyper.contrib import HTTP20Adapter
import time
import random


def get_v(page, time_stamp):
    v_url = "http://127.0.0.1:4001/v"
    fingerprint = random.choice([
        '201d288,201m288,201m288,201u288,201u288',
        '198m287,197m287,197d287,197m287,197u287',
        '236d290,236m290,236m290,236u290,236u290',
    ])
    data = {
        'aes_value': f"{page}|{fingerprint}",
        'secret_iv': hex(time_stamp)[2:] + hex(time_stamp)[2:]
    }
    req = requests.post(v_url, data=data)
    sign = req.text
    return sign


headers_ = {
    "User-Agent": "yuanrenxue.project",
    "cookie": "sessionid=7jfmh9e2r5zzn9t55c7oisizyabgmnhn"
}

# 创建session对象，并设置请求头
s = requests.session()
s.headers = headers_
# 使用http2.0
s.mount('https://match.yuanrenxue.cn', HTTP20Adapter())
num = 0
i = 1

while True:
    time_stamp = int(time.time())
    v = get_v(i, time_stamp)
    # 发送请求
    url_ = f'https://match.yuanrenxue.cn/match/18data?page={i}&t={time_stamp}&v={v}'
    try:
        json_data = s.get(url_).text
        json_data = json.loads(json_data)
        print(json_data)
    except Exception as e:
        continue
    data_list = json_data.get('data')
    for j in data_list:
        j_num = j.get('value')
        num += j_num
    print('num:', num)
    time.sleep(3)
    if i == 5:
        break
    i += 1
