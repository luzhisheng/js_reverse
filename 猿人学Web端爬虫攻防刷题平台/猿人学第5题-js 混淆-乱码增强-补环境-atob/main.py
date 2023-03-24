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
    print(encrypt_params)
    print(page_num)
    url = "https://match.yuanrenxue.com/api/match/5?page=%s" % page_num
    params = {
        "m": encrypt_params['m'],
        "f": encrypt_params['f']
    }
    cookie_m = encrypt_params['cookie_m']
    RM4hZBv0dDon443M = encrypt_params['cookie_RM4']
    session = requests.session()
    headers = {
        "user-agent": "yuanrenxue.project",
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': f'sessionid=3axwe2ne7zbkyzija9wcf7b8yha0sy6o; m={cookie_m}; RM4hZBv0dDon443M={RM4hZBv0dDon443M}'
    }
    session.headers = headers
    response = requests.get(url, headers=headers, params=params)
    return response.json()


def run():
    data_num = 0
    data_num_list = []
    for page in range(1, 6):
        res = sign()
        response_json = challenge5(res, page)
        data_list = response_json.get('data')
        print(data_list)
        for data in data_list:
            data_num_list.append(int(data.get('value')))
    data_num_list.sort()
    print(data_num_list)
    print(sum(data_num_list[-5:]))


if __name__ == '__main__':
    run()
