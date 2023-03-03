import requests


def get_decrypt(page_num):
    data = {"pageNum": page_num}
    url = f"http://0.0.0.0:3005/sign_60"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge60(page, encrypted_text):
    url = f"https://www.python-spider.com/api/challenge60/{encrypted_text}"
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
        encrypted_text = get_decrypt(str(page))
        response_json = challenge60(page, encrypted_text)
        data_list = response_json.get('data')
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)


if __name__ == '__main__':
    run()
