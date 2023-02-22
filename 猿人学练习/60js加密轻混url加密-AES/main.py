import requests
from aes_encrypt import decrypt, encrypt


def challenge60(page, encrypted_text):
    url = f"https://www.python-spider.com/api/challenge60/{encrypted_text}"
    print(url)
    payload = f"page={page}"
    print(payload)
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
        encrypted_text = encrypt('aiding88', str(page))
        response_json = challenge60(page, encrypted_text)
        print(response_json)
        exit()
        data_list = response_json.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
