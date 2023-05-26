from 滑动验证码 import disparity
import requests
import base64


def challenge25_check_verify(distant):
    url = "https://www.python-spider.com/api/challenge25CheckVerify"
    payload = f"distant={distant}"
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'sessionid=y3o4ap05sxbaa9oujc6yr63wsgydyd7x'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()


def code_value():
    url = "https://www.python-spider.com/api/challenge25verify"
    payload = {}
    headers = {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,'
                  '*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'cookie': 'sessionid=y3o4ap05sxbaa9oujc6yr63wsgydyd7x;',
        'sec-ch-ua': '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                      ' Chrome/112.0.0.0 Safari/537.36'
    }
    response = requests.request("GET", url, headers=headers, data=payload)
    img1 = response.json().get('img1')
    img2 = response.json().get('img2')
    img1 = base64.urlsafe_b64decode(img1)
    img2 = base64.urlsafe_b64decode(img2)
    with open('img/background.png', 'wb') as f:
        f.write(img1)
    with open('img/target.png', 'wb') as f:
        f.write(img2)
    coordinate = disparity()
    distant = coordinate.get('target')[0]
    res = challenge25_check_verify(distant)
    print(res)
    rate = res.get('rate')
    return rate


def challenge25(page):
    if page != 1:
        rate = code_value()
        if rate != '100.00%':
            return False

    url = "https://www.python-spider.com/api/challenge25"
    payload = f"page={page}"
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'sessionid=y3o4ap05sxbaa9oujc6yr63wsgydyd7x;'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()


def run():
    data_num = 0
    page = 1
    while True:
        res_dict = challenge25(page)
        if not res_dict:
            print(f"验证码没有通过-{page}")
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
