import time
import math
import random
import pywasm
import requests
import json


t1 = int(int(time.time())/2)
t2 = int(int(time.time())/2 - math.floor(random.random() * 50 + 1))
print(t1, t2)
# window.q(t1, t2).toString() + '|' + t1 + '|' + t2
wasm = pywasm.load("./main.wasm")
sign = wasm.exec("encode", [t1, t2])
m = str(sign) + '|' + str(t1) + '|' + str(t2)
print(m)
sum_value = 0
for i in range(1, 6):
    Headers = {
        "User-Agent": "yuanrenxue.project",
        "cookie": f"sessionid=1u2ghdn3n2kg56t7kq0opn9ljixfisau;",
    }
    res = requests.get(url=f"https://match.yuanrenxue.cn/api/match/15?m={m}&page={i}", headers=Headers)
    res_dict = json.loads(res.text)
    for j in res_dict.get('data'):
        sum_value += j.get('value')

print(sum_value)
