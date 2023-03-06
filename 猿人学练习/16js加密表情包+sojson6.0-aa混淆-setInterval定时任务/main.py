import requests
import time


def get_safe():
    timestamp = int(time.time())
    data = {"timestamp": str(timestamp)}
    url = f"http://0.0.0.0:3005/sign_16"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge16(page, safe):
    url = "https://www.python-spider.com/api/challenge16"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'safe': safe
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        safe = get_safe()
        print(safe)
        response_json = challenge16(page, safe)
        data_list = response_json.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
