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
    var rparse = JSON.parse;
    JSON.parse = function (a) {
        console.log("检测Json.parse", a);
        debugger
        return rparse(a);
    }
})();