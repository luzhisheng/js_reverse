import requests


res = requests.get(url="https://match.yuanrenxue.com/api/match/16?page=3&m=35pGsZKckjNpYG4caf9b2ee96b170539ec31690e4d614c7r2JyPi2kRm&t=1650522431000")
print(res.text)
