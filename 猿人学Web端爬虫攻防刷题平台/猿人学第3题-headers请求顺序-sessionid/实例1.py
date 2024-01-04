import requests

session = requests.session()


def get_sessionid():
    url = "https://match.yuanrenxue.cn/jssm"
    headers = {
        "Host": "match.yuanrenxue.cn",
        "Connection": "keep-alive",
        "Content-Length": "0",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/112.0.0.0 Safari/537.36",
        "sec-ch-ua-platform": "\"Windows\"",
        "Accept": "*/*",
        "Origin": "https://match.yuanrenxue.cn",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://match.yuanrenxue.cn/match/3",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cookie": ""
    }
    # 清空headers头内容
    session.headers.clear()
    # 更新headers头
    session.headers.update(headers)
    resp = session.post(url)
    cookies = resp.cookies
    print(cookies)
    cookie = requests.utils.dict_from_cookiejar(cookies)
    return cookie


def yrx3(page):
    num_list = []
    url = 'https://match.yuanrenxue.cn/api/match/3?page=' + str(page)
    cookie = get_sessionid()
    headers = {
        "Host": "match.yuanrenxue.cn",
        "Connection": "keep-alive",
        "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "yuanrenxue.project",
        "sec-ch-ua-platform": "\"Windows\"",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://match.yuanrenxue.cn/match/3",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cookie": "sessionid={}".format(cookie['sessionid'])
    }
    session.headers.clear()
    session.headers.update(headers)
    resp = session.get(url)
    data = resp.json()
    print(data)
    for num in data['data']:
        num_list.append(num['value'])


if __name__ == '__main__':
    cookie = get_sessionid()
    print(cookie)
    yrx3(1)
