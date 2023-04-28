import 百度手写文字识别
import 去除干扰线
import requests
from urllib.parse import quote


def code_value():
    url = "https://www.python-spider.com/api/challenge17/verify"
    payload = {}
    headers = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,'
                  '*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'cookie': 'sessionid=你的sessionid;',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                      ' Chrome/112.0.0.0 Safari/537.36'
    }
    try:
        response = requests.request("GET", url, headers=headers, data=payload)
        with open('img/1.png', 'wb') as f:
            f.write(response.content)
        去除干扰线.run()
        response_json = 百度手写文字识别.run()
        words_result = response_json.get('words_result')
        words = ''
        for word in words_result:
            words += word.get('words')
        print(f"识别的文字是{words}")
        return words
    except Exception as e:
        print(e)
        return ''


def challenge18(page):
    if page != 1:
        code = code_value()
        code = quote(code, 'utf-8')
    else:
        code = ''
    url = "https://www.python-spider.com/api/challenge17"
    payload = f"page={page}&code={code}"
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'sessionid=你的sessionid;'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()


def run():
    data_num = 0
    page = 1
    while True:
        res_dict = challenge18(page)

        if res_dict.get('message') == 'verify_failed':
            print(f"验证码没有通过{res_dict}-{page}")
            continue
        else:
            print(f"验证码通过{res_dict}-{page}")

        data_list = res_dict.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
        page += 1

        if page == 101:
            break


if __name__ == '__main__':
    run()
