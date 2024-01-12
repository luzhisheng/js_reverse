import requests
import re
import json


url = "https://match.yuanrenxue.cn/match/13"
url_page = "https://match.yuanrenxue.cn/api/match/13?page={}"
url_login_info = "https://match.yuanrenxue.cn/api/loginInfo"


def get_cookie():
    Headers = {
        "cookie": f"sessionid=xxxxxxx;",
    }
    res = requests.get(url=url, headers=Headers)
    item = re.findall(r'document.cookie=(.*);path=', res.text)[0]
    sessionid = res.headers.get('Set-Cookie')
    yuanrenxue_cookie = item.replace("(", "").replace(")", "").replace("+", "").replace("'", "")
    return yuanrenxue_cookie, sessionid


def get_res(num):
    yuanrenxue_cookie, sessionid = get_cookie()
    Headers = {
        "User-Agent": "yuanrenxue.project",
        "cookie": f"{sessionid}; {yuanrenxue_cookie}",
    }
    res = requests.get(url=url_page.format(num), headers=Headers)
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
