# -*- coding: utf-8 -*-
# @时间 : 2019-11-10 00:00
# @作者 : 陈祥安
# @文件名 : run_aes.py
# @公众号: Python学习开发
from pprint import pprint

import execjs
import pathlib
import os

js_path = pathlib.Path(os.path.abspath(os.path.dirname(__file__)))
js_path = js_path / "crypto.js"
with js_path.open('r', encoding="utf-8") as f:
    script = f.read()

c = "1234"

# 传入python中的变量
add = ('''
aesEncrypt = function() {
    result={}
    var t = CryptoJS.MD5("login.xxx.com"),
        i = CryptoJS.enc.Utf8.parse(t),
        r = CryptoJS.enc.Utf8.parse("1234567812345678"),
        u = CryptoJS.AES.encrypt(''' + "'{}'".format(c) + ''',i, {
            iv: r
        });
    result.t=t.toString()
    result.i =i.toString()
    result.r =r.toString()
    result.u =u.toString()
    return result
};
''')
script = script + add
print("script",script)


x = execjs.compile(script)
result = x.call("aesEncrypt")
print(result)
