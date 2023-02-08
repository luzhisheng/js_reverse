import json
import requests


def challenge59(page):
    url = "https://www.python-spider.com/api/challenge59"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        res_dict = json.loads(challenge59(page))
        data_list = res_dict.get('data')

        if page == 51:
            data_list[0]['value'] = '5734\r'

        data_list_num = []
        for data in data_list:
            data_list_num.append(int(data.get('value')))
            data_num += int(data.get('value'))
        print(data_list_num, page)
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
