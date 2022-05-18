window = global;
_0x4e96b4 = window;
const CryptoJS = require("crypto-js");
_$Tk = CryptoJS;



_$Ww = _$Tk['enc']['Utf8']['parse']('2f26186ac9b401a48a73c74798c1bd97,a1bb84cafccc2d9d8f32ecf1b65185ee,6f3ac1b837f0eed3be1242d3fd5422d2,4f515f9e5d3824733a05f18666cce280,16c50db4bca1cf96d84d334e1fb28ff9');
_0x4e96b4['_$qF'] = CryptoJS['enc']['Utf8']['parse'](_0x4e96b4['btoa'](_0x4e96b4['_$is'])['slice'](0x0, 0x10));
_0x29dd83 = _$Tk["AES"]["encrypt"](_$Ww, _0x4e96b4['_$qF'], {
    'mode': _$Tk['mode']['ECB'],
    'padding': _$Tk['pad']['Pkcs7']
});
_0x4e96b4["_$ss"] = _0x29dd83["toString"]();
console.log(_0x4e96b4["_$ss"]);