import requests
from hyper.contrib import HTTP20Adapter

if __name__ == '__main__':
    url_ = 'https://match.yuanrenxue.com/api/match/17?page={}'
    headers_ = {
        "User-Agent": "yuanrenxue.project",
        "cookie": "sessionid=nbfta7wd1srjcwh558k0vh1mt0tq7i1v"
    }
    # 创建session对象，并设置请求头
    s = requests.session()
    s.headers = headers_
    # 使用http2.0
    s.mount('https://match.yuanrenxue.com', HTTP20Adapter())
    num = 0
    for i in range(5):
        # 发送请求
        json_data = s.get(url_.format(i + 1)).json()
        print(json_data)
        data_list = json_data.get('data')
        for j in data_list:
            print(j.get('value'))
            j_num = j.get('value')
            num += j_num
        print()
    print('num:', num)
