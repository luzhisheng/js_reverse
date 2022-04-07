import requests
import re


url = "https://match.yuanrenxue.com/match/13"


def get_cookie():
    res = requests.get(url=url)
    item = re.findall(r'document.cookie=(.*);path=', res.text)[0]
    Set_Cookie = res.headers.get('Set-Cookie')
    yuanrenxue_cookie = item.replace("(", "").replace(")", "").replace("+", "").replace("'", "")
    return yuanrenxue_cookie, Set_Cookie


def get_res():
    yuanrenxue_cookie, Set_Cookie = get_cookie()
    Headers = {
        "user-agent": "yuanrenxue.project",
        "cookie": Set_Cookie + ";" + yuanrenxue_cookie
    }
    print(Headers)
    res = requests.get(url=url, headers=Headers)
    print(res.text)


get_res()
