import requests
import time


def get_safe():
    timestamp = int(time.time())
    data = {"timestamp": str(timestamp)}
    url = f"http://0.0.0.0:3005/sign_34"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge34():
    url = "https://www.python-spider.com/challenge/34"
    session = requests.session()
    headers = {
        'cookie': 'sessionid=7da5y8hmpxhsazb024bdr0trejrnifey;'
    }
    session.headers = headers
    response = session.request("GET", url, headers=headers)
    return response.text


def run():
    data_num = 0
    response_json = challenge34()
    print(response_json)
    # data_list = response_json.get('data')
    # print(data_list)
    # for data in data_list:
    #     data_num += int(data.get('value'))
    # print(data_num)


if __name__ == '__main__':
    run()
