# 知识点: AES算法魔改，环境检测

![debugger](./img/1.png)

第二届猿人学js逆向大赛，本以为送分题分分钟搞定，没想到第一题就这么难。

查看请求存在`token`加密参数，接下就是打断点找到加密点破解

![debugger](./img/2.png)

直接进入下一步函数

![debugger](./img/3.png)