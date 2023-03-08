const CryptoJS = require("crypto-js");
window = global;
_0x4e96b4 = window;

global.Buffer = global.Buffer || require('buffer').Buffer;

if (typeof btoa === 'undefined') {
    global.btoa = function (str) {
        return new Buffer.from(str).toString('base64');
    };
}

if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
        return new Buffer.from(b64Encoded, 'base64').toString();
    };
}


function RM4hZBv0dDon443M(pr, dada_time){
    _$Ww = CryptoJS['enc']['Utf8']['parse'](pr['toString']());
    _0x4e96b4['_$qF'] = CryptoJS['enc']['Utf8']['parse'](_0x4e96b4['btoa'](dada_time)['slice'](0, 16));
    _0x29dd83 = CryptoJS['AES']['encrypt'](_$Ww, _0x4e96b4['_$qF'], {
        'mode': CryptoJS['mode']['ECB'],
        'padding': CryptoJS['pad']['Pkcs7']
    });
    return _0x29dd83['toString']()
}

pr = [
    "b2148c31fb09c98f90ce78424d6cdd58",
    "3be88c860ec6fc7e4e33fe7a167d02dd",
    "0be14faf5221bbdefdede418b077ca60",
    "9c2b5781ba44e92f5e4b3f4d7951b899",
    "08aca52cf82f1e26cc1f4dd35db9795e"
];

dada_time = "1678253268764";

console.log(RM4hZBv0dDon443M(pr, dada_time));