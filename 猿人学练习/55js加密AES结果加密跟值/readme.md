# 知识点：`AES`结果加密

## 解题思路

控制台查看返回的数据，发现一串加密字段，大概率可以判断是`AES`

![请求](./img/1.pn

既然是`AES`直接在控制台搜索`decrypt(`

![请求](./img/2.png)

很容易就能找到加密位置

    function decode(str){
        var CryptoJS = require("crypto-js");
        var KEY = 'aiding6666666666';
        var key = CryptoJS.enc.Utf8.parse(KEY);
        var decrypted = CryptoJS.AES.decrypt(str, key, {
                       // iv: iv,
                       mode: CryptoJS.mode.ECB,
                       padding: CryptoJS.pad.Pkcs7,
        });
        return decrypted.toString(CryptoJS.enc.Utf8)
    }

从上面代码中就能看出`KEY = 'aiding6666666666'`，用的是`mode.ECB`加密，python代码解码编写

    def decrypt_aes(data):
        """AES解密"""
        real_data = base64.b64decode(data)
        my_aes = AES.new('aiding6666666666', AES.MODE_ECB)
        decrypt_data = my_aes.decrypt(real_data)
        decrypt_data_str = str(decrypt_data, 'utf-8').replace('\\r', '').replace('', '').replace('', '')\
            .replace('', '').replace('', '')
        return json.loads(decrypt_data_str)

解码成功