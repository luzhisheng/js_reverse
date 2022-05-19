## 知识点

油猴hook是注意 //@run-at      document-start 表示页面加载之前

hook cookie

Cookie之所以要新增一个包含固定字符串的判断是因为，cookie经常被修改，这样会断很多次，而我们只想让他断在固定cookie块被设置的时候，因此这么写

hook m

    // ==UserScript==
    // @name        Hook Cookie
    // @namespace   http://tampermonkey.net/
    // @version     0.1
    // @description pass
    // @author      ayf
    // @run-at      document-start
    // @match        *://match.yuanrenxue.com/*
    // @grant       none
    // ==/UserScript==
    
    (function () {
        'use strict';
        Object.defineProperty(document, "cookie", {
            set:function(val){
                console.log(11111)
                if(val.indexOf("m") != -1){
                    debugger;
                }
                return val;
            }
        })
    })();

hook RM4hZBv0dDon443M

    // 方案二 indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    
    // ==UserScript==
    // @name        Hook Cookie
    // @namespace   http://tampermonkey.net/
    // @version     0.1
    // @description pass
    // @author      ayf
    // @run-at      document-start
    // @match        *://match.yuanrenxue.com/*
    // @grant       none
    // ==/UserScript==
    
    (function () {
        'use strict';
        Object.defineProperty(document, "cookie", {
            set:function(val){
                console.log(11111)
                if(val.indexOf("RM4hZBv0dDon443M") != -1){
                    debugger;
                }
                return val;
            }
        })
    })();

hook window

    // ==UserScript==
    // @name        Hook window
    // @namespace   http://tampermonkey.net/
    // @version     0.1
    // @description pass
    // @author      ayf
    // @run-at      document-start
    // @match        *://match.yuanrenxue.com/*
    // @grant       none
    // ==/UserScript==
    
    (function () {
        'use strict';
        Object.defineProperty(window, "_$ss", {
            set:function(val){
                console.log(11111)
                console.warn("hook _$ss", val)
                debugger;
                return val;
            }
        })
    })();

这里 hook  "RM4hZBv0dDon443M" 找到 _0x4e96b4['_$ss'] 生成的加密参数

![debugger](../img/80.png)

    _0x29dd83 = _$Tk['A' + _$UH[0x32d]][_$UH[0x337] + _$UH[0x336]](_$Ww, _0x4e96b4[_0xc77418('0x6', 'OCbs')], {
        'mode': _$Tk[_$UH[0x339] + _$UH[0x33a]][_$UH[0x2e5]],
        'padding': _$Tk[_$UH[0x33b]][_$UH[0x33c] + _$UH[0x33d]]
    }),
    _0x4e96b4['_$' + _$UH[0x348][0x1] + _$UH[0x353][0x1]] = _0x29dd83[_$UH[0x1f]]();
    
解混淆

    _0x29dd83 = _$Tk['AES']['encrypt'](_$Ww, _0x4e96b4['_$qF'], {
        'mode': _$Tk['mode']['ECB'],
        'padding': _$Tk['pad']['Pkcs7']
    });
    
    ss = _0x29dd83['toString']();
    console.log(ss);
    
这里就很熟悉了 AES加密，贴一段加密代码

    const CryptoJS = require("crypto-js");
    
    let value = "123456"; //待加密的字符串
    let secret_value = "af25-87hk-a35v-5"; //密匙 16位
    let iv_value = "af25-87hk-a35v-5"; // 初始向量 initial vector 16位
    
    // 密匙和向量处理
    let secret = CryptoJS.enc.Utf8.parse(secret_value);
    let iv = CryptoJS.enc.Utf8.parse(iv_value);
    
    // 加密
    let encrypted = CryptoJS.AES.encrypt(value, secret, {
        iv: iv,
        // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
        mode: CryptoJS.mode.CBC,
    
        // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
        padding: CryptoJS.pad.Pkcs7
    });
    
    // 将加密结果转换为字符串
    encrypted = encrypted.toString();
    
    // 解密，传入密文，密钥盒向量设置加密与填充模式
    let decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
        iv: iv,
        // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
        mode: CryptoJS.mode.CBC,
    
        // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
        padding: CryptoJS.pad.Pkcs7
    });
    
    // 将解密结果转换为utf8字符串
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
    
    console.log(value);
    console.log(encrypted);
    console.log(decrypted);

_$Ww是明文， _0x4e96b4['_$qF']是密钥

继续看代码

    _$Ww = _$Tk['enc']['Utf8']['parse'](_0x4e96b4['_$pr']['toString']());
    
实例代码

    let secret = CryptoJS.enc.Utf8.parse(secret_value);


