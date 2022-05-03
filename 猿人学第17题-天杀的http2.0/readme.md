HTTP/2.0 - 最新超强反爬虫方案，禁用所有 HTTP 1.x 的请求

现在很多爬虫库其实对 HTTP/2.0 支持得不好，比如大名鼎鼎的 Python 库 —— requests，到现在为止还只支持 HTTP/1.1，啥时候支持 HTTP/2.0 还不知道。

    地址 https://blog.csdn.net/weixin_42277380/article/details/117440390
    
控制查看 h2 请求

![debugger](../img/76.png)

[案例.py](./案例.py)