var __Oxb76f0 = ["", "length", "concat", "charCodeAt", "webdriver", "userAgent", "canvas", "createElement", "getContext", "webgl", "WEBGL_debug_renderer_info", "getExtension", "getParameter", "Brian Paul", "Chrome", "indexOf", "Android", "plugins", "language", "languages", "userLanguage", "Firefox", "WebKit", "onload", "images", "width", "write", "Stop", "execCommand", "stop", "fromCharCode", "0123456789ABCDEF", "0123456789abcdef", "charAt", "substring", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "undefined", "log", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"];
var hexcase = 0;
var b64pad = __Oxb76f0[0];
var chrsz = 8;

navigator = {};
window = {};
document = {
    'execCommand': function () {
        return true
    },
    'createElement': function () {
        return true
    }
};

function hex_1(_0x1b98x5) {
    return binl2hex(core_md5(str2binl(_0x1b98x5), _0x1b98x5[__Oxb76f0[1]] * chrsz));
}

function b64_md5(_0x1b98x5) {
    return binl2b64(core_md5(str2binl(_0x1b98x5), _0x1b98x5[__Oxb76f0[1]] * chrsz));
}

function str_md5(_0x1b98x5) {
    return binl2str(core_md5(str2binl(_0x1b98x5), _0x1b98x5[__Oxb76f0[1]] * chrsz));
}

function hex_hmac_md5(_0x1b98x9, _0x1b98xa) {
    return binl2hex(core_hmac_md5(_0x1b98x9, _0x1b98xa));
}

function b64_hmac_md5(_0x1b98x9, _0x1b98xa) {
    return binl2b64(core_hmac_md5(_0x1b98x9, _0x1b98xa));
}

function str_hmac_md5(_0x1b98x9, _0x1b98xa) {
    return binl2str(core_hmac_md5(_0x1b98x9, _0x1b98xa));
}

function core_md5(_0x1b98xe, _0x1b98xf) {
    _0x1b98xe[_0x1b98xf >> 5] |= 128 << _0x1b98xf % 32;
    _0x1b98xe[(_0x1b98xf + 64 >>> 9 << 4) + 14] = _0x1b98xf;
    var _0x1b98x10 = 1732584193;

    var _0x1b98x11 = -271733879;

    var _0x1b98x12 = -1732584194;

    var _0x1b98x13 = 271733878;

    for (var _0x1b98x14 = 0; _0x1b98x14 < _0x1b98xe[__Oxb76f0[1]]; _0x1b98x14 += 16) {
        var _0x1b98x15 = _0x1b98x10;
        var _0x1b98x16 = _0x1b98x11;
        var _0x1b98x17 = _0x1b98x12;
        var _0x1b98x18 = _0x1b98x13;
        _0x1b98x10 = md5_ff(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 0], 7, -680876936);
        _0x1b98x13 = md5_ff(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 1], 12, -389564586);
        _0x1b98x12 = md5_ff(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 2], 17, 606105819);
        _0x1b98x11 = md5_ff(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 3], 22, -1044525330);
        _0x1b98x10 = md5_ff(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 4], 7, -176418897);
        _0x1b98x13 = md5_ff(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 5], 12, 1200080426);
        _0x1b98x12 = md5_ff(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 6], 17, -1473231341);
        _0x1b98x11 = md5_ff(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 7], 22, -45705983);
        _0x1b98x10 = md5_ff(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 8], 7, 1770035416);
        _0x1b98x13 = md5_ff(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 9], 12, -1958414417);
        _0x1b98x12 = md5_ff(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 10], 17, -42063);
        _0x1b98x11 = md5_ff(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 11], 22, -1990404162);
        _0x1b98x10 = md5_ff(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 12], 7, 1804603682);
        _0x1b98x13 = md5_ff(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 13], 12, -40341101);
        _0x1b98x12 = md5_ff(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 14], 17, -1502002290);
        _0x1b98x11 = md5_ff(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 15], 22, 1236535329);
        _0x1b98x10 = md5_gg(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 1], 5, -165796510);
        _0x1b98x13 = md5_gg(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 6], 9, -1069501632);
        _0x1b98x12 = md5_gg(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 11], 14, 643717713);
        _0x1b98x11 = md5_gg(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 0], 20, -373897302);
        _0x1b98x10 = md5_gg(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 5], 5, -701558691);
        _0x1b98x13 = md5_gg(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 10], 9, 38016083);
        _0x1b98x12 = md5_gg(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 15], 14, -660478335);
        _0x1b98x11 = md5_gg(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 4], 20, -405537848);
        _0x1b98x10 = md5_gg(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 9], 5, 568446438);
        _0x1b98x13 = md5_gg(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 14], 9, -1019803690);
        _0x1b98x12 = md5_gg(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 3], 14, -187363961);
        _0x1b98x11 = md5_gg(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 8], 20, 1163531501);
        _0x1b98x10 = md5_gg(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 13], 5, -1444681467);
        _0x1b98x13 = md5_gg(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 2], 9, -51403784);
        _0x1b98x12 = md5_gg(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 7], 14, 1735328473);
        _0x1b98x11 = md5_gg(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 12], 20, -1926607734);
        _0x1b98x10 = md5_hh(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 5], 4, -378558);
        _0x1b98x13 = md5_hh(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 8], 11, -2022574463);
        _0x1b98x12 = md5_hh(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 11], 16, 1839030562);
        _0x1b98x11 = md5_hh(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 14], 23, -35309556);
        _0x1b98x10 = md5_hh(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 1], 4, -1530992060);
        _0x1b98x13 = md5_hh(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 4], 11, 1272893353);
        _0x1b98x12 = md5_hh(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 7], 16, -155497632);
        _0x1b98x11 = md5_hh(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 10], 23, -1094730640);
        _0x1b98x10 = md5_hh(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 13], 4, 681279174);
        _0x1b98x13 = md5_hh(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 0], 11, -358537222);
        _0x1b98x12 = md5_hh(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 3], 16, -722521979);
        _0x1b98x11 = md5_hh(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 6], 23, 76029189);
        _0x1b98x10 = md5_hh(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 9], 4, -640364487);
        _0x1b98x13 = md5_hh(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 12], 11, -421815835);
        _0x1b98x12 = md5_hh(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 15], 16, 530742520);
        _0x1b98x11 = md5_hh(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 2], 23, -995338651);
        _0x1b98x10 = md5_ii(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 0], 6, -198630844);
        _0x1b98x13 = md5_ii(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 7], 10, 1126891415);
        _0x1b98x12 = md5_ii(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 14], 15, -1416354905);
        _0x1b98x11 = md5_ii(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 5], 21, -57434055);
        _0x1b98x10 = md5_ii(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 12], 6, 1700485571);
        _0x1b98x13 = md5_ii(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 3], 10, -1894986606);
        _0x1b98x12 = md5_ii(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 10], 15, -1051523);
        _0x1b98x11 = md5_ii(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 1], 21, -2054922799);
        _0x1b98x10 = md5_ii(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 8], 6, 1873313359);
        _0x1b98x13 = md5_ii(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 15], 10, -30611744);
        _0x1b98x12 = md5_ii(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 6], 15, -1560198380);
        _0x1b98x11 = md5_ii(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 13], 21, 1309151649);
        _0x1b98x10 = md5_ii(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe[_0x1b98x14 + 4], 6, -145523070);
        _0x1b98x13 = md5_ii(_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98xe[_0x1b98x14 + 11], 10, -1120210379);
        _0x1b98x12 = md5_ii(_0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe[_0x1b98x14 + 2], 15, 718787259);
        _0x1b98x11 = md5_ii(_0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98x10, _0x1b98xe[_0x1b98x14 + 9], 21, -343485551);
        _0x1b98x10 = safe_add(_0x1b98x10, _0x1b98x15);
        _0x1b98x11 = safe_add(_0x1b98x11, _0x1b98x16);
        _0x1b98x12 = safe_add(_0x1b98x12, _0x1b98x17);
        _0x1b98x13 = safe_add(_0x1b98x13, _0x1b98x18);
    }

    ;
    return Array(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13);
}

function md5_cmn(_0x1b98x1a, _0x1b98x10, _0x1b98x11, _0x1b98xe, _0x1b98x5, _0x1b98x1b) {
    return safe_add(bit_rol(safe_add(safe_add(_0x1b98x10, _0x1b98x1a), safe_add(_0x1b98xe, _0x1b98x1b)), _0x1b98x5), _0x1b98x11);
}

function md5_ff(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe, _0x1b98x5, _0x1b98x1b) {
    return md5_cmn(_0x1b98x11 & _0x1b98x12 | ~_0x1b98x11 & _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe, _0x1b98x5, _0x1b98x1b);
}

function md5_gg(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe, _0x1b98x5, _0x1b98x1b) {
    return md5_cmn(_0x1b98x11 & _0x1b98x13 | _0x1b98x12 & ~_0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe, _0x1b98x5, _0x1b98x1b);
}

function md5_hh(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe, _0x1b98x5, _0x1b98x1b) {
    return md5_cmn(_0x1b98x11 ^ _0x1b98x12 ^ _0x1b98x13, _0x1b98x10, _0x1b98x11, _0x1b98xe, _0x1b98x5, _0x1b98x1b);
}

function md5_ii(_0x1b98x10, _0x1b98x11, _0x1b98x12, _0x1b98x13, _0x1b98xe, _0x1b98x5, _0x1b98x1b) {
    return md5_cmn(_0x1b98x12 ^ (_0x1b98x11 | ~_0x1b98x13), _0x1b98x10, _0x1b98x11, _0x1b98xe, _0x1b98x5, _0x1b98x1b);
}

function core_hmac_md5(_0x1b98x9, _0x1b98xa) {
    var _0x1b98x21 = str2binl(_0x1b98x9);

    if (_0x1b98x21[__Oxb76f0[1]] > 16) {
        _0x1b98x21 = core_md5(_0x1b98x21, _0x1b98x9[__Oxb76f0[1]] * chrsz);
    }

    ;

    var _0x1b98x22 = Array(16);

    var _0x1b98x23 = Array(16);

    for (var _0x1b98x14 = 0; _0x1b98x14 < 16; _0x1b98x14++) {
        _0x1b98x22[_0x1b98x14] = _0x1b98x21[_0x1b98x14] ^ 909522486;
        _0x1b98x23[_0x1b98x14] = _0x1b98x21[_0x1b98x14] ^ 1549556828;
    }

    ;

    var _0x1b98x24 = core_md5(_0x1b98x22[__Oxb76f0[2]](str2binl(_0x1b98xa)), 512 + _0x1b98xa[__Oxb76f0[1]] * chrsz);

    return core_md5(_0x1b98x23[__Oxb76f0[2]](_0x1b98x24), 640);
}

function safe_add(_0x1b98xe, _0x1b98x26) {
    var _0x1b98x27 = (_0x1b98xe & 65535) + (_0x1b98x26 & 65535);

    var _0x1b98x28 = (_0x1b98xe >> 16) + (_0x1b98x26 >> 16) + (_0x1b98x27 >> 16);

    return _0x1b98x28 << 16 | _0x1b98x27 & 65535;
}

function bit_rol(_0x1b98x2a, _0x1b98x2b) {
    return _0x1b98x2a << _0x1b98x2b | _0x1b98x2a >>> 32 - _0x1b98x2b;
}

function str2binl(_0x1b98x2d) {
    var _0x1b98x2e = Array();

    var _0x1b98x2f = (1 << chrsz) - 1;

    for (var _0x1b98x14 = 0; _0x1b98x14 < _0x1b98x2d[__Oxb76f0[1]] * chrsz; _0x1b98x14 += chrsz) {
        _0x1b98x2e[_0x1b98x14 >> 5] |= (_0x1b98x2d[__Oxb76f0[3]](_0x1b98x14 / chrsz) & _0x1b98x2f) << _0x1b98x14 % 32;
    }

    ;
    return _0x1b98x2e;
}

if (!!navigator[__Oxb76f0[4]]) {
    closeWin();
}

;

if (!navigator[__Oxb76f0[5]]) {
    closeWin();
}

;

try {
    var canvas = document[__Oxb76f0[7]](__Oxb76f0[6]);

    if (canvas[__Oxb76f0[8]]) {
        var gl = canvas[__Oxb76f0[8]](__Oxb76f0[9]);

        if (!!gl) {
            var debugInfo = gl[__Oxb76f0[11]](__Oxb76f0[10]);

            var vendor = gl[__Oxb76f0[12]](debugInfo.UNMASKED_VENDOR_WEBGL);

            if (vendor == __Oxb76f0[13]) {
                closeWin();
            }
        }
    }

    ;

    if (navigator[__Oxb76f0[5]][__Oxb76f0[15]](__Oxb76f0[14]) > 0) {
        if (navigator[__Oxb76f0[5]][__Oxb76f0[15]](__Oxb76f0[16]) < 0) {
            if (navigator[__Oxb76f0[17]][__Oxb76f0[1]] === 0) {
                closeWin();
            }
        }

        ;

        if (!navigator[__Oxb76f0[17]][__Oxb76f0[1]] === 0 || !navigator[__Oxb76f0[18]]) {
            closeWin();
        }
    }

    ;

    if (!!navigator[__Oxb76f0[19]] && navigator[__Oxb76f0[19]][__Oxb76f0[1]] === 0 || !!navigator[__Oxb76f0[20]] && navigator[__Oxb76f0[20]][__Oxb76f0[1]] === 0) {
        closeWin();
    }

    ;

    if (navigator[__Oxb76f0[5]][__Oxb76f0[15]](__Oxb76f0[14]) > 0 || navigator[__Oxb76f0[5]][__Oxb76f0[15]](__Oxb76f0[21]) > 0 || navigator[__Oxb76f0[5]][__Oxb76f0[15]](__Oxb76f0[22]) > 0) {
        window[__Oxb76f0[23]] = function () {
            var _0x1b98x34 = document[__Oxb76f0[24]][0];

            if (_0x1b98x34[__Oxb76f0[25]] == 0) {
                document[__Oxb76f0[26]](__Oxb76f0[0]);
            }
        };
    }
} catch (e) {
    console.log(e);
    closeWin();
}

;

function closeWin() {
    document[__Oxb76f0[28]](__Oxb76f0[27]);

    if (window[__Oxb76f0[29]]) {
        window[__Oxb76f0[29]]();
    }
}

function binl2str(_0x1b98x2e) {
    var _0x1b98x2d = __Oxb76f0[0];

    var _0x1b98x2f = (1 << chrsz) - 1;

    for (var _0x1b98x14 = 0; _0x1b98x14 < _0x1b98x2e[__Oxb76f0[1]] * 32; _0x1b98x14 += chrsz) {
        _0x1b98x2d += String[__Oxb76f0[30]](_0x1b98x2e[_0x1b98x14 >> 5] >>> _0x1b98x14 % 32 & _0x1b98x2f);
    }

    ;
    return _0x1b98x2d;
}

function binl2hex(_0x1b98x38) {
    if (hexcase) {
        var _0x1b98x39 = __Oxb76f0[31];
    } else {
        var _0x1b98x39 = __Oxb76f0[32];
    }

    var _0x1b98x2d = __Oxb76f0[0];

    for (var _0x1b98x14 = 0; _0x1b98x14 < _0x1b98x38[__Oxb76f0[1]] * 4; _0x1b98x14++) {
        _0x1b98x2d += _0x1b98x39[__Oxb76f0[33]](_0x1b98x38[_0x1b98x14 >> 2] >> _0x1b98x14 % 4 * 8 + 4 & 15) + _0x1b98x39[__Oxb76f0[33]](_0x1b98x38[_0x1b98x14 >> 2] >> _0x1b98x14 % 4 * 8 & 15);
    }

    ;
    _0x1b98x2d = _0x1b98x2d[__Oxb76f0[34]](0, rind) + rnns + _0x1b98x2d[__Oxb76f0[34]](rind + rnns[__Oxb76f0[1]]);
    return _0x1b98x2d;
}

function binl2b64(_0x1b98x38) {
    var _0x1b98x3b = __Oxb76f0[35];
    var _0x1b98x2d = __Oxb76f0[0];

    for (var _0x1b98x14 = 0; _0x1b98x14 < _0x1b98x38[__Oxb76f0[1]] * 4; _0x1b98x14 += 3) {
        var _0x1b98x3c = (_0x1b98x38[_0x1b98x14 >> 2] >> 8 * (_0x1b98x14 % 4) & 255) << 16 | (_0x1b98x38[_0x1b98x14 + 1 >> 2] >> 8 * ((_0x1b98x14 + 1) % 4) & 255) << 8 | _0x1b98x38[_0x1b98x14 + 2 >> 2] >> 8 * ((_0x1b98x14 + 2) % 4) & 255;

        for (var _0x1b98x3d = 0; _0x1b98x3d < 4; _0x1b98x3d++) {
            if (_0x1b98x14 * 8 + _0x1b98x3d * 6 > _0x1b98x38[__Oxb76f0[1]] * 32) {
                _0x1b98x2d += b64pad;
            } else {
                _0x1b98x2d += _0x1b98x3b[__Oxb76f0[33]](_0x1b98x3c >> 6 * (3 - _0x1b98x3d) & 63);
            }
        }
    }

    ;
    return _0x1b98x2d;
}