// ==UserScript==
// @name         search decode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NightTeam
// @include      *
// @grant        none
// ==/UserScript==
(function () {
    for (var p in window){
        var s = p.toLocaleLowerCase();
        if(s.indexOf('encode') != -1 || s.indexOf('ency') != -1){
            console.log("警告!检测编码功能\n", window[p])
        }
        if(s.indexOf('decode') != -1 || s.indexOf('decry') != -1){
            console.log("警告!检测编码功能\n", window[p])
        }
    }
})();