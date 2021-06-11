# 检测运行环境
import execjs
print(execjs.get().name)

js_text = """
    function hello(str){return str;}
"""
ctx = execjs.compile(js_text)
a = ctx.call("hello", "32131")
print(a)

# 存在的问题
# 执行大型js时会有点慢
# 特殊编码的输入或输出参数会出现报错的情况

# selenium操作js
# pyppeteer操作js
