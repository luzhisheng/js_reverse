# -*- coding: utf-8 -*-
# @时间 : 2019-12-30 21:46
# @作者 : 陈祥安
# @文件名 : demo.py
# @公众号: Python学习开发
orgin_string = "123"
origin_bytes = orgin_string.encode()
# 将每一位bytes转换为二进制字符串
base64_bytes = [f"{str(bin(b)).replace('0b', ''):0>8}" for b in origin_bytes]
print(base64_bytes)
