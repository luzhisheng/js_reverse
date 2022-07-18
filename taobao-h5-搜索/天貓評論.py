import requests

url = "https://pass.tmall.com/add"

response = requests.request("GET", url)

print(response.headers)
