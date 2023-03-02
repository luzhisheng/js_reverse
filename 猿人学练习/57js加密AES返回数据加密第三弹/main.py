import requests


def get_decrypt(key, data):
    data = {"key": key, "data": data}
    url = f"http://127.0.0.1:3005/sign_57"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.json()


def challenge57(page):
    url = "https://www.python-spider.com/api/challenge57"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        response_json = challenge57(page)
        result = response_json.get('result')
        key = result[0:8]
        data = result[8:]
        decrypt_data_dict = get_decrypt(key, data)
        data_list = decrypt_data_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
