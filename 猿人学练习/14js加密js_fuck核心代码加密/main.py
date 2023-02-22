import execjs
import time
import requests


with open('./AES.js') as f:
    Str_code = f.read()
js = execjs.compile(Str_code)


def aesEncrypt(data):
    uc = js.call('AES_Encrypt', data)
    return uc


def challenge14(page, uc):
    url = "https://www.python-spider.com/api/challenge14"
    payload = f"page={page}&uc={uc}"
    print(payload)
    session = requests.session()
    headers = {
        'Proxy-Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'http://www.python-spider.com',
        'Referer': 'http://www.python-spider.com/challenge/14',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    print(response.text)
    return response.json()


def run():
    data_num = 0
    page = 1
    while True:
        timestamp = int(time.time())
        time.sleep(1)
        data = f'{timestamp}|{page}'
        print(data)
        uc = aesEncrypt(data)
        try:
            res_dict = challenge14(page, uc)
        except Exception:
            continue
        data_list = res_dict.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
        if page == 100:
            break
        page += 1


if __name__ == '__main__':
    run()
