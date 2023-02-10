import requests
from aes_encrypt import decrypt


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
        print(response_json)
        result = response_json.get('result')
        key = result[0:8]
        data = result[8:]

        decrypt_data_dict = decrypt(key, data)
        data_list = decrypt_data_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
