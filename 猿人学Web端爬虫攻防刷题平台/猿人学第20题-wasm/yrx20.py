import requests
import time
import json
import hashlib


url = " https://match.yuanrenxue.cn/api/match/20?page={}&sign={}&t={}"


def get_res(page):
    Headers = {
        "User-Agent": "yuanrenxue.project",
        "cookie": "sessionid=xxxx;"
    }
    t = int(time.time() * 1000)
    sign_item = f"{page}|{t}D#uqGdcw41pWeNXm"
    sign = hashlib.md5(sign_item.encode(encoding='UTF-8')).hexdigest()
    res = requests.get(url=url.format(page, sign, t), headers=Headers)
    res_dict = json.loads(res.text)
    print(res_dict)
    data_list = res_dict.get('data')
    sum_value = 0
    for data in data_list:
        value = data.get('value')
        sum_value += value
    return sum_value


all_sum_value = 0
for i in range(1, 6):
    sum_value = get_res(i)
    all_sum_value += sum_value

print(all_sum_value)
