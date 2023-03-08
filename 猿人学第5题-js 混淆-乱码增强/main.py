import requests


def sign():
    url = f"http://127.0.0.1:3005/sign_5"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data={})
    return response.json()


def challenge5(encrypt_params, page_num):
    url = "https://match.yuanrenxue.com/api/match/5?page=%s" % page_num
    params = {
        "m": encrypt_params['m'],
        "f": encrypt_params['f']
    }
    cookie_m = encrypt_params['cookie_m']
    RM4hZBv0dDon443M = encrypt_params['cookie_RM4']
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': f'sessionid=lrdqq6irmhyoy2ingpso9l3uzschqw1s; m={cookie_m}; RM4hZBv0dDon443M={RM4hZBv0dDon443M}'
    }
    print(headers)
    session.headers = headers
    response = requests.get(url, headers=headers, params=params)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 6):
        res = sign()
        response_json = challenge5(res, page)
        data_list = response_json.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
