import re
import requests
import json


def challenge6(page, sign, sessionid):
    url = "https://www.python-spider.com/api/challenge6"
    payload = f"page={page}"
    headers = {
        'cookie': f'sessionid={sessionid}; sign={sign}',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    set_cookie = response.headers.get('Set-Cookie')
    sign = re.findall(r'sign=(.*?); Path', set_cookie)[0]
    sessionid = re.findall(r'sessionid=(.*?); expires', set_cookie)[0]
    return response.text, sign, sessionid


def run():
    data_num = 0
    sign = ''
    sessionid = ''
    for page in range(1, 101):
        response_text, sign, sessionid = challenge6(page, sign, sessionid)
        res_dict = json.loads(response_text)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
