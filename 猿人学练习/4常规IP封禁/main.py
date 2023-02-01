import requests
import json
import time


def challenge4(page):
    proxy_host = 'http-dynamic-S02.xiaoxiangdaili.com'
    proxy_port = 10030
    proxy_username = 'xxxxxxxxxxxxxx'
    proxy_pwd = 'xxxxxxxxxxxxxxxx'
    proxyMeta = "http://%(user)s:%(pass)s@%(host)s:%(port)s" % {
        "host": proxy_host,
        "port": proxy_port,
        "user": proxy_username,
        "pass": proxy_pwd,
    }
    proxies = {
        'http': proxyMeta,
        'https': proxyMeta,
    }

    url = "https://www.python-spider.com/api/challenge4"
    payload = f"page={page}"
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }

    while True:
        time.sleep(2)
        print(f'请求-{page}')
        response = requests.request("POST", url, headers=headers, data=payload, proxies=proxies)
        try:
            res_dict = json.loads(response.text)
            return res_dict
        except json.decoder.JSONDecodeError as e:
            print(f'报错-{page}')


def run():
    data_num = 0
    for page in range(1, 101):
        res_dict = challenge4(page)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
