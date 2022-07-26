## 问题

在JS逆向系列课的第3课《奇门遁甲 调用JavaScript执行代码》中，我们学到了多种在Python上调用JavaScript的方法。 那么现在，请运用你在第3课中学到的知识，尝试做一下这道题吧~
你需要找出练习页中引入的含有getdata函数的JS文件，并尝试使用你在第3课中学习到的调用方法调用getdata函数。

get_data执行结果的前16位字符是？

1.打开浏览器开发者工具全局搜索 getdata，在console中打印 get_data() 返回

![debugger](../img/94.png)

2.将代码复制，node.js运行代码发现

    if (screen['width'] || screen['height']) {
        ^
    
    ReferenceError: screen is not defined

3.控制台测试真实值
    
![debugger](../img/95.png)

4.将js代码改成

    if (1600 || 900) {
        result = _0x49dc93['ObbQh'](___get_data);
    }
    
输出
    
    1c28252a6a52a30aedcd18a75d127d13

