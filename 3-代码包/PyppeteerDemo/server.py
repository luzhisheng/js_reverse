# -*- coding: utf-8 -*-
# @时间 : 2019-12-30 00:18
# @作者 : 陈祥安
# @文件名 : server.py
# @公众号: Python学习开发


# -*- coding: utf-8 -*-
# @Time : 2019-10-14 16:22
# @Author : cxa
# @File : server.py
# @Software: PyCharm

from flask import Flask, render_template
import random
import my_base64
app = Flask(__name__)

text = """
Life is not about waiting for the storm to pass. it's about learning to dance in the rain.
生活不是等待暴风雨过去，而是要学会在雨中跳舞。
What is insistence? That is, day after day, you tell yourself to go on for another day.
什么是坚持？那就是，一天又一天，你告诉自己，再坚持一天。
I don't want to earn my living. I want to live. --Oscar·Wilde.
我不想谋生。我想生活。--奥斯卡·王尔德。
Life has not the best choice, but to undertake your choice.
生活不是拥有最好的选择，而是承担你的选择。
It takes courage to follow your mind. But it takes everything to follow your heart.
跟着理智走，要有勇气；跟着感觉走，要有倾其所有的决心。
You may be our of my sight, but never out of my mind.
"""
text_gen = [item for item in text.split("\n") if item]


@app.route('/')
def index():
    origin_text = random.choice(text_gen).strip()

    text_encode, charset = my_base64.encode(origin_text)
    variable = {"text": text_encode, "charset": charset}

    return render_template("index.html", variable=variable)


@app.errorhandler(404)
def miss(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def error(e):
    return render_template('500.html'), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
