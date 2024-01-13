import requests

url = "https://match.yuanrenxue.cn/api/match/19?page=1"

payload = {}
headers = {
  'cookie': 'sessionid=ieirkmfqa2qsj29uapsh4bdaj59vggj2;'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
