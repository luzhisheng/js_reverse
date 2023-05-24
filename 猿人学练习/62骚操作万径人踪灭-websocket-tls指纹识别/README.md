# 知识点：websocket，tls指纹识别

## 解题思路

查看请求发现websocket请求，并且发送的数据和返回的数据都是明文，那就表明不存在加密，推断可能是tls指纹识别。

![请求](./img/1.png)

参考文章

https://github.com/zero3301/pyhttpx