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
    "69ab8206826053de3443ec360be0bb1b",
    "62fb472084fd028b27173f2e3c67bba1",
    "ef3d5d8a06d73643c1b64c5cb5f731b6",
    "cf2da2158c336bb5024cb142a5fd7a12",
    "1bd336e7b4cf5c0154b83cf00d2fb0f3"
];
dada_time = "1704463014588";
console.log(RM4hZBv0dDon443M(pr, dada_time));