const CryptoJS = require("crypto-js");
_$Tk = CryptoJS;


_0x4e96b4['_$pr'] = new _0x4d2d2c();

_$Ww = _$Tk['enc']['Utf8']['parse'](_0x4e96b4['_$pr']['toString']());
_0x29dd83 = _$Tk['AES']['encrypt'](_$Ww, _0x4e96b4['_$qF'], {
    'mode': _$Tk['mode']['ECB'],
    'padding': _$Tk['pad']['Pkcs7']
});

ss = _0x29dd83['toString']();
console.log(ss);