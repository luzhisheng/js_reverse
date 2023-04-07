import requests


def get_hex_str(data):
    url = f"http://127.0.0.1:3005/sign_68"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge68(page, data):
    url = "https://www.python-spider.com/api/challenge68"
    if data:
        import urllib
        urllib.parse.quote(data['t'])
        payload = f"page={page}&c={data['c']}&r={data['r']}&t={urllib.parse.quote(data['t'])}&uuid={data['uuid']}&a={data['a']}"
        headers = {
            'content-length': f'{len(payload)}',
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'origin': 'https://www.python-spider.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://www.python-spider.com/challenge/68',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1679292698,1679332474,1679672673,1679888049; no-alert=true; sessionid=xxxxxxxxxxxxxxxxxxxxxxxxxx; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1680829731'
        }
    else:
        payload = ''
        headers = {
            'content-length': '0',
            'pragma': 'no-cache',
            'cache-control': 'no-cache',
            'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
            'accept': 'application/json, text/javascript, */*; q=0.01',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'origin': 'https://www.python-spider.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://www.python-spider.com/challenge/68',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cookie': 'Hm_lvt_337e99a01a907a08d00bed4a1a52e35d=1679292698,1679332474,1679672673,1679888049; no-alert=true; sessionid=xxxxxxxxxxxxxxxxxxxxxxxxxx; Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d=1680829731'
        }
    session = requests.session()
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        res_dict = challenge68(page, '')
        print(res_dict)
        a = get_hex_str(res_dict)
        res_dict['a'] = a
        print(res_dict)
        res_dict = challenge68(page, res_dict)
        data_list = res_dict.get('data')
        data_list_num = []
        for data in data_list:
            data_list_num.append(int(data.get('value')))
            data_num += int(data.get('value'))
        print(data_list_num, page)
        print(data_num)


if __name__ == '__main__':
    run()
