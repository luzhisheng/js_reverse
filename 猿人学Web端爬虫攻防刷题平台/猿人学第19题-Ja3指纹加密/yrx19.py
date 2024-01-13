from curl_cffi import requests

headers = {
  'cookie': 'sessionid=xxxxxxxxx;'
}

# 注意这个 impersonate 参数，指定了模拟哪个浏览器
r = requests.get("https://match.yuanrenxue.cn/api/match/19?page=3", headers=headers, impersonate="chrome101")

print(r.json())
