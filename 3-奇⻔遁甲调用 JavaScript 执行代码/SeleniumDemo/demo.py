# -*- coding: utf-8 -*-
# @Time : 2019-10-27 20:56
# @Author : cxa
# @File : demo.py
# @Software: PyCharm
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import time


def get_text(id,attr):
    ###  拼接字符串注意{}要写出{{}}
    script=("""
       let bt=BrowserType();
       let id='{id}';
       let attr='{attr}';
       let supporter =bt.supporter;
    const run=function(){{
    let all_str = $(id).getAttribute(attr)
    let end_index=supporter.length+58
    Base64._keyStr = all_str.substring(0, end_index)
    let charset = all_str.substring(64, all_str.length)
    let encoded = Base64.decode(charset,supporter);
    return encoded
}}
    return run()
    """).format(id=id,attr=attr)
    return script



chrome_option = Options()
chrome_option.add_argument("--headless")
chrome_option.add_argument("--disable-gpu")
chrome_option.add_argument('--ignore-certificate-errors')  # SSL保存
browser = webdriver.Chrome(options=chrome_option)
wait = WebDriverWait(browser, 10)
# 启动浏览器，获取网页源代码
mainUrl = "http://127.0.0.1:5002/"
browser.get(mainUrl)
result=browser.execute_script(get_text("base64","data"))
print(result)
time.sleep(10)
browser.quit()
