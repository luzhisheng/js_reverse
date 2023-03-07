# -*- coding: utf-8 -*-
# @Time : 2019-10-27 22:01
# @Author : cxa
# @File : demo.py
# @Software: PyCharm
from pyppeteer import launch
import asyncio


def get_text(id,attr):
    ###  拼接字符串注意{}要写出{{}}
    script=("""
       let id='{id}';
       let attr='{attr}';
       let supporter ="chrome";
    const run=function(){{
    let all_str = $(id).getAttribute(attr)
    let end_index=supporter.length+58
    Base64._keyStr = all_str.substring(0, end_index)
    let charset = all_str.substring(64, all_str.length)
    let encoded = Base64.decode(charset,supporter);
    return encoded
}}
    run()
    """).format(id=id,attr=attr)
    return script



async def run():
    browser = await launch({"headless": True})
    page = await browser.newPage()
    await page.goto('http://127.0.0.1:5002/')
    script = get_text("base64","data")
    text = await page.evaluate(script)

    print(text)
    return text


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())
