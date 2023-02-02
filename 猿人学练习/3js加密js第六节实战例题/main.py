import requests
import json


def challenge3(page):
    url = "https://www.python-spider.com/api/challenge3"
    payload = f"page={page}"
    headers = {
        'cookie': 'm=74ccb88b480335eac2a340f0f3846979|1675243619000'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        response_text = challenge3(page)
        res_dict = json.loads(response_text)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
