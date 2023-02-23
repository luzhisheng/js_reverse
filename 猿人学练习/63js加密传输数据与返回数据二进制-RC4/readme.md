# 知识点：返回数据二进制 atob btoa crypto crypto-js

## 解题思路
查看请求结果，发现是乱码

![请求](./img/1.png)

### 请求体乱码

![请求](./img/2.png)

打断点找到请求体加密点发现

![请求](./img/3.png)

代码是

    code = s(J['lzaCv'](J['qromH'](j, -0xb31 + 0x53 * -0x42 + 0x4b1 * 0x7), y['toString']()))

改写

    code = s(j(64) + 1);

进入j函数

![请求](./img/4.png)

发现是 `window['crypto']['getRandomValues']` 进行的加密这里需要用到

    const crypto = require('crypto').webcrypto;

得到一串加密字段

![请求](./img/5.png)

接下来就是`s`函数。通过`s`函数能得到请求体中乱码值

![请求](./img/6.png)

这里用的是 `crypto` 的`RC4`加密,

但是`RC4`加密结果不会出现乱码，尝试继续跟进代码看看具体原因

这里跟近我是直接通过 `return` 关键词一步步断点进入

`return` 断点1

![请求](./img/7.png)

`return` 断点2

![请求](./img/8.png)

`return` 断点3

![请求](./img/9.png)

`return` 断点4

![请求](./img/10.png)

`return` 断点5，这里就发现`atob`方法，即`Base64`的解码过程

![请求](./img/11.png)

控制台输出

![请求](./img/12.png)

### 返回体乱码

既然已经知道加密用的是`atob`,那么解码会不会是`btoa`，继续调试

![请求](./img/13.png)

`btoa`即Base64的编码过程

在通过调试，发现`c`函数是`crypto-js`加密

![请求](./img/14.png)

到这里就基本结束了

![请求](./img/15.png)