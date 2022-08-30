在JS逆向系列课的第9课《一击即中 处理常见代码混淆的方法》中，我们见到了5中看起来很厉害的混淆字符串，也学会了如何轻松干掉它们。 那么现在，请运用你在第9课第5节中学到的知识，尝试做一下这道题吧~

请问：

这一页帖子的平均阅读量（列表页右侧的数字）是多少？（需整除）

找到加密的地方打断点

![debugger](../img/111.png)

发现加密地方

    md5(key + base64.encode(time) + 'xianyucoder11')
    
key = "9247afed8bea110ae75461a9b54b2eeaff2b73cf"

base64.encode(time) 中的 time = "16786173524"，测试发现base64没有魔改

key 是如何得到的

    let key = uuid();

开始扣js代码

    function uuid() {
        var s = [];
        var hexDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }

本地运行，可以直接运行

    function uuid() {
        var s = [];
        var hexDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }
    
    uuid_res = uuid();
    
    console.log(uuid_res);