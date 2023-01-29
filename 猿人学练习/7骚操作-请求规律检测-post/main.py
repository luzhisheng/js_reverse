import requests
import json


def city_json(page):
    url = "https://www.python-spider.com/cityjson"
    response = requests.request("POST", url)
    print(f"{response.text}-页码是-{page}")


def challenge7(page):
    url = "https://www.python-spider.com/api/challenge7"
    payload = f"page={page}"
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        city_json(page)
        res = challenge7(page)
        res_dict = json.loads(res)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
