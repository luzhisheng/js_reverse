import requests
from hyper.contrib import HTTP20Adapter

url_ = 'https://match.yuanrenxue.cn/api/match/17?page={}'
headers_ = {
    "User-Agent": "yuanrenxue.project",
    "cookie": "sessionid=ieirkmfqa2qsj29uapsh4bdaj59vggj2"
}
# 创建session对象，并设置请求头
s = requests.session()
s.headers = headers_
# 使用http2.0
s.mount('https://match.yuanrenxue.cn', HTTP20Adapter())
num = 0
for i in range(5):
    # 发送请求
    json_data = s.get(url_.format(i + 1)).json()
    print(json_data)
    data_list = json_data.get('data')
    for j in data_list:
        j_num = j.get('value')
        num += j_num
print('num:', num)
