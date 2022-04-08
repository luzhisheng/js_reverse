import requests
import re


url = "https://match.yuanrenxue.com/match/13"
url_page = "https://match.yuanrenxue.com/api/match/13?page={}"
url_login_info = "https://match.yuanrenxue.com/api/loginInfo"


def get_cookie():
    res = requests.get(url=url)
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
    print(res.text)


for i in range(1, 6):
    get_res(i)
