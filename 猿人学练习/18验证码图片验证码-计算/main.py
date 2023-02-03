import requests
import ddddocr


def code_value():
    url = "https://www.python-spider.com/api/challenge18/verify?"
    response = requests.request("GET", url)
    ocr = ddddocr.DdddOcr(beta=True)
    with open('./img/img2.png', 'wb') as f:
        f.write(response.content)

    with open("./img/img2.png", 'rb') as f:
        image = f.read()
    res = ocr.classification(image)
    print(res)
    return response.text


def challenge18(page):
    code = code_value()
    exit()
    url = "https://www.python-spider.com/api/challenge18"
    payload = f"page={page}&code={code}"
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
        res_dict = challenge18(page)
        data_list = res_dict.get('data')
        print(data_list)
        for data in data_list:
            data_num += int(data.get('value'))
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
