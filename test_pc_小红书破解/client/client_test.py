import requests

url = "https://customer.xiaohongshu.com/api/cas/loginWithAccount"

payload = "{\"account\":\"feng.bao@winndoo.com\",\"password\":\"Winndoo@com123\"," \
          "\"service\":\"https://pgy.xiaohongshu.com\"}"

headers = {
    'content-type': 'application/json;charset=UTF-8',
    'x-s': 'OiZk125KZga6ZjcWslMlOidB12MbOY1K0jwvOgACZgA3',
    'x-t': '1623396152975',
    'cookie': 'timestamp2=20210611efba504df43e1e6daff3fe96'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
