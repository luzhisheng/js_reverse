# -*- coding: utf-8 -*-
# @时间 : 2019-12-15 14:31
# @作者 : 陈祥安
# @文件名 : client.py
# @公众号: Python学习开发
import requests

url = "http://127.0.0.1:3000/get_num"

data = {
    "a": 1, "b": 2
}
req = requests.post(url,data)
print(req.text)