## 知识点

油猴hook是注意 //@run-at      document-start 表示页面加载之前

hook cookie

Cookie之所以要新增一个包含固定字符串的判断是因为，cookie经常被修改，这样会断很多次，而我们只想让他断在固定cookie块被设置的时候，因此这么写

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
