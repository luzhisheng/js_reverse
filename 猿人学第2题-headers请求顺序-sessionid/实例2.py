import requests


def get_cookie(page):
    url = 'https://match.yuanrenxue.com/jssm'

    headers = {
        'Host': 'match.yuanrenxue.com',
        'Connection': 'keep-alive',
        'Content-Length': '0',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/95.0.4638.10 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Accept': '*/*',
        'Origin': 'https://match.yuanrenxue.com',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://match.yuanrenxue.com/match/3',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    session = requests.Session()
    session.headers = headers
    cookies = {'Cookie': 'sessionid=;'}
    response = session.post(url, verify=False, cookies=cookies)
    sessionid = requests.utils.dict_from_cookiejar(response.cookies)
    print(sessionid)
    if page == 4 or page == 5:
        headers['user-agent'] = 'yuanrenxue.project'
    url_api = 'http://match.yuanrenxue.com/api/match/3?page={page}'.format(page=page)
    res = session.get(url=url_api).json()
    for i in res['data']:
        data = i['value']
        data_list.append(data)


if __name__ == '__main__':
    data_list = []
    for i in range(1, 6):
        get_cookie(i)
    print('======================')
    print('出現最多的值:', max(data_list, key=data_list.count))
    print('======================')
