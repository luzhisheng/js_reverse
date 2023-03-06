import requests


def challenge19():
    url = "https://www.python-spider.com/api/challenge19"
    payload = "page=1"
    session = requests.session()
    headers = {
        'Content-Type': 'text/plain'
    }
    session.headers = headers
    response = session.request("POST", url, headers=headers, data=payload)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        response_content = challenge19()
        print(response_content)
        exit()


if __name__ == '__main__':
    run()
