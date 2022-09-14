在JS逆向系列课的第13课《螳臂当⻋ 解密！AES 并不是每次都奏效》中，我们学会了 AES 的理论知识并进行了部分代码的分析。 那么这是一道综合题，在过掉无限 debugger 后找出关键加密逻辑，并模拟。请运用你所学到的或是积累的知识，尝试做一下这道题吧~ 还望分析出密钥 key 的值，及进行 hook 测试，不要为了做题而做题

请问：

请给出你模拟的加密内容 text (此值为固定字符串)

找出请求地址：

    https://js-crack-course-13-1.crawler-lab.com/index.html?arg=0OlDT0Tr95%2BJhJFoxLohvH0%2FbmSZyrDUy8y7aQEvyIAhfwqcZHdskAj9uBoLy93R&t=1663145902355
    
断点

![debugger](../img/122.png)

