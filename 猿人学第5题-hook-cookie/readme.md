## 知识点

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

