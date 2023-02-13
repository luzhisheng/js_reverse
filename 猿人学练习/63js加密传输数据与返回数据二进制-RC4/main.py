import requests
from rc4_encrypt import decrypt, encrypt


def challenge63(page):
    url = f"https://www.python-spider.com/api/challenge63"
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
        response_text = challenge63(page)
        print(response_text)
        exit()
        encrypted_text = decrypt('12345678812345678912345678912345', str(page))
        data_list = response_json.get('data')
        print(data_list)
        exit()
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
