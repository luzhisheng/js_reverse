import requests
import json


def challenge5(page):
    url = f"http://127.0.0.1:5612/business/invoke?group=ayf-ws&action=getData&page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("GET", url)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        response_text = challenge5(page)
        res_dict = json.loads(response_text)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
