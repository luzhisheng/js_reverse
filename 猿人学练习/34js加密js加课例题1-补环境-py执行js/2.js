var __Oxbb794 = ["", "length", "concat", "; ", "split", "cookie", "=", "yuanrenxue34", "iloveu=", "domain", ".", "replace", "getTime", "setTime", "; expires=", "toGMTString", "; path=/", "; domain=", "charCodeAt", "fromCharCode", "0123456789ABCDEF", "0123456789abcdef", "charAt", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "undefined", "log", "删除", "版本号，js会定", "期弹窗，", "还请支持我们的工作", "jsjia", "mi.com"];
var hexcase = 0;
var b64pad = __Oxbb794[0];
var chrsz = 8;

function hex_2(_0x6a8ax5) {
    return binb2hex(core_sha1(str2binb(_0x6a8ax5), _0x6a8ax5[__Oxbb794[1]] * chrsz));
}

function b64_sha1(_0x6a8ax5) {
    return binb2b64(core_sha1(str2binb(_0x6a8ax5), _0x6a8ax5[__Oxbb794[1]] * chrsz));
}

function str_sha1(_0x6a8ax5) {
    return binb2str(core_sha1(str2binb(_0x6a8ax5), _0x6a8ax5[__Oxbb794[1]] * chrsz));
}

function hex_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    return binb2hex(core_hmac_sha1(_0x6a8ax9, _0x6a8axa));
}

function b64_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    return binb2b64(core_hmac_sha1(_0x6a8ax9, _0x6a8axa));
}

function str_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    return binb2str(core_hmac_sha1(_0x6a8ax9, _0x6a8axa));
}

function core_sha1(_0x6a8axe, _0x6a8axf) {
    _0x6a8axe[_0x6a8axf >> 5] |= 128 << 24 - _0x6a8axf % 32;
    _0x6a8axe[(_0x6a8axf + 64 >> 9 << 4) + 15] = _0x6a8axf;

    var _0x6a8ax10 = Array(80);

    var _0x6a8ax11 = 1732584193;

    var _0x6a8ax12 = -271733879;

    var _0x6a8ax13 = -1732584194;

    var _0x6a8ax14 = 271733878;

    var _0x6a8ax15 = -1009589776;

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8axe[__Oxbb794[1]]; _0x6a8ax16 += 16) {
        var _0x6a8ax17 = _0x6a8ax11;
        var _0x6a8ax18 = _0x6a8ax12;
        var _0x6a8ax19 = _0x6a8ax13;
        var _0x6a8ax1a = _0x6a8ax14;
        var _0x6a8ax1b = _0x6a8ax15;

        for (var _0x6a8ax1c = 0; _0x6a8ax1c < 80; _0x6a8ax1c++) {
            if (_0x6a8ax1c < 16) {
                _0x6a8ax10[_0x6a8ax1c] = _0x6a8axe[_0x6a8ax16 + _0x6a8ax1c];
            } else {
                _0x6a8ax10[_0x6a8ax1c] = rol(_0x6a8ax10[_0x6a8ax1c - 3] ^ _0x6a8ax10[_0x6a8ax1c - 8] ^ _0x6a8ax10[_0x6a8ax1c - 14] ^ _0x6a8ax10[_0x6a8ax1c - 16], 1);
            }

            ;

            var _0x6a8ax1d = safe_add(safe_add(rol(_0x6a8ax11, 5), sha1_ft(_0x6a8ax1c, _0x6a8ax12, _0x6a8ax13, _0x6a8ax14)), safe_add(safe_add(_0x6a8ax15, _0x6a8ax10[_0x6a8ax1c]), sha1_kt(_0x6a8ax1c)));

            _0x6a8ax15 = _0x6a8ax14;
            _0x6a8ax14 = _0x6a8ax13;
            _0x6a8ax13 = rol(_0x6a8ax12, 30);
            _0x6a8ax12 = _0x6a8ax11;
            _0x6a8ax11 = _0x6a8ax1d;
        }

        ;
        _0x6a8ax11 = safe_add(_0x6a8ax11, _0x6a8ax17);
        _0x6a8ax12 = safe_add(_0x6a8ax12, _0x6a8ax18);
        _0x6a8ax13 = safe_add(_0x6a8ax13, _0x6a8ax19);
        _0x6a8ax14 = safe_add(_0x6a8ax14, _0x6a8ax1a);
        _0x6a8ax15 = safe_add(_0x6a8ax15, _0x6a8ax1b);
    }

    ;
    return Array(_0x6a8ax11, _0x6a8ax12, _0x6a8ax13, _0x6a8ax14, _0x6a8ax15);
}

function sha1_ft(_0x6a8ax1d, _0x6a8ax12, _0x6a8ax13, _0x6a8ax14) {
    if (_0x6a8ax1d < 20) {
        return _0x6a8ax12 & _0x6a8ax13 | ~_0x6a8ax12 & _0x6a8ax14;
    }

    ;

    if (_0x6a8ax1d < 40) {
        return _0x6a8ax12 ^ _0x6a8ax13 ^ _0x6a8ax14;
    }

    ;

    if (_0x6a8ax1d < 60) {
        return _0x6a8ax12 & _0x6a8ax13 | _0x6a8ax12 & _0x6a8ax14 | _0x6a8ax13 & _0x6a8ax14;
    }

    ;
    return _0x6a8ax12 ^ _0x6a8ax13 ^ _0x6a8ax14;
}

function sha1_kt(_0x6a8ax1d) {
    return _0x6a8ax1d < 20 ? 1518500249 : _0x6a8ax1d < 40 ? 1859775393 : _0x6a8ax1d < 60 ? -1894007588 : -899497514;
}

function core_hmac_sha1(_0x6a8ax9, _0x6a8axa) {
    var _0x6a8ax21 = str2binb(_0x6a8ax9);

    if (_0x6a8ax21[__Oxbb794[1]] > 16) {
        _0x6a8ax21 = core_sha1(_0x6a8ax21, _0x6a8ax9[__Oxbb794[1]] * chrsz);
    }

    ;

    var _0x6a8ax22 = Array(16);

    var _0x6a8ax23 = Array(16);

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < 16; _0x6a8ax16++) {
        _0x6a8ax22[_0x6a8ax16] = _0x6a8ax21[_0x6a8ax16] ^ 909522486;
        _0x6a8ax23[_0x6a8ax16] = _0x6a8ax21[_0x6a8ax16] ^ 1549556828;
    }

    ;

    var _0x6a8ax24 = core_sha1(_0x6a8ax22[__Oxbb794[2]](str2binb(_0x6a8axa)), 512 + _0x6a8axa[__Oxbb794[1]] * chrsz);

    return core_sha1(_0x6a8ax23[__Oxbb794[2]](_0x6a8ax24), 672);
}

function safe_add(_0x6a8axe, _0x6a8ax26) {
    var _0x6a8ax27 = (_0x6a8axe & 65535) + (_0x6a8ax26 & 65535);

    var _0x6a8ax28 = (_0x6a8axe >> 16) + (_0x6a8ax26 >> 16) + (_0x6a8ax27 >> 16);

    return _0x6a8ax28 << 16 | _0x6a8ax27 & 65535;
}

function rol(_0x6a8ax2a, _0x6a8ax2b) {
    return _0x6a8ax2a << _0x6a8ax2b | _0x6a8ax2a >>> 32 - _0x6a8ax2b;
}

function sEnc() {
    var _0x6a8ax2d = document[__Oxbb794[5]][__Oxbb794[4]](__Oxbb794[3]);

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax2d[__Oxbb794[1]]; _0x6a8ax16++) {
        var _0x6a8ax2e = _0x6a8ax2d[_0x6a8ax16][__Oxbb794[4]](__Oxbb794[6]);

        if (_0x6a8ax2e[0] == __Oxbb794[7]) {
            sct = unescape(_0x6a8ax2e[1]);

            var _0x6a8ax2f = __Oxbb794[8] + escape(hex_2(hex_1(sct)));

            var _0x6a8ax30 = new Date();

            var _0x6a8ax31 = 2592000000;
            var _0x6a8ax32 = document[__Oxbb794[9]];
            _0x6a8ax32 = _0x6a8ax32[__Oxbb794[11]](_0x6a8ax32[__Oxbb794[4]](__Oxbb794[10])[0] + __Oxbb794[10], __Oxbb794[0]);

            _0x6a8ax30[__Oxbb794[13]](_0x6a8ax30[__Oxbb794[12]]() + _0x6a8ax31);

            _0x6a8ax2f += __Oxbb794[14] + _0x6a8ax30[__Oxbb794[15]]();
            _0x6a8ax2f += __Oxbb794[16];
            document[__Oxbb794[5]] = _0x6a8ax2f;
        }
    }
}

function str2binb(_0x6a8ax34) {
    var _0x6a8ax35 = Array();

    var _0x6a8ax36 = (1 << chrsz) - 1;

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax34[__Oxbb794[1]] * chrsz; _0x6a8ax16 += chrsz) {
        _0x6a8ax35[_0x6a8ax16 >> 5] |= (_0x6a8ax34[__Oxbb794[18]](_0x6a8ax16 / chrsz) & _0x6a8ax36) << 24 - _0x6a8ax16 % 32;
    }

    ;
    return _0x6a8ax35;
}

function binb2str(_0x6a8ax35) {
    var _0x6a8ax34 = __Oxbb794[0];

    var _0x6a8ax36 = (1 << chrsz) - 1;

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax35[__Oxbb794[1]] * 32; _0x6a8ax16 += chrsz) {
        _0x6a8ax34 += String[__Oxbb794[19]](_0x6a8ax35[_0x6a8ax16 >> 5] >>> 24 - _0x6a8ax16 % 32 & _0x6a8ax36);
    }

    ;
    return _0x6a8ax34;
}

function binb2hex(_0x6a8ax39) {
    if (hexcase) {
        var _0x6a8ax3a = __Oxbb794[20];
    } else {
        var _0x6a8ax3a = __Oxbb794[21];
    }

    var _0x6a8ax34 = __Oxbb794[0];

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax39[__Oxbb794[1]] * 4; _0x6a8ax16++) {
        _0x6a8ax34 += _0x6a8ax3a[__Oxbb794[22]](_0x6a8ax39[_0x6a8ax16 >> 2] >> (3 - _0x6a8ax16 % 4) * 8 + 4 & 15) + _0x6a8ax3a[__Oxbb794[22]](_0x6a8ax39[_0x6a8ax16 >> 2] >> (3 - _0x6a8ax16 % 4) * 8 & 15);
    }

    ;
    return _0x6a8ax34;
}

function binb2b64(_0x6a8ax39) {
    var _0x6a8ax3c = __Oxbb794[23];
    var _0x6a8ax34 = __Oxbb794[0];

    for (var _0x6a8ax16 = 0; _0x6a8ax16 < _0x6a8ax39[__Oxbb794[1]] * 4; _0x6a8ax16 += 3) {
        var _0x6a8ax3d = (_0x6a8ax39[_0x6a8ax16 >> 2] >> 8 * (3 - _0x6a8ax16 % 4) & 255) << 16 | (_0x6a8ax39[_0x6a8ax16 + 1 >> 2] >> 8 * (3 - (_0x6a8ax16 + 1) % 4) & 255) << 8 | _0x6a8ax39[_0x6a8ax16 + 2 >> 2] >> 8 * (3 - (_0x6a8ax16 + 2) % 4) & 255;

        for (var _0x6a8ax1c = 0; _0x6a8ax1c < 4; _0x6a8ax1c++) {
            if (_0x6a8ax16 * 8 + _0x6a8ax1c * 6 > _0x6a8ax39[__Oxbb794[1]] * 32) {
                _0x6a8ax34 += b64pad;
            } else {
                _0x6a8ax34 += _0x6a8ax3c[__Oxbb794[22]](_0x6a8ax3d >> 6 * (3 - _0x6a8ax1c) & 63);
            }
        }
    };
    return _0x6a8ax34;
}

//37e4aa5f2e8fe43d0f6b061eb3383763eed96394
// hex_2_str = escape(hex_2('d31c713f16b0tu2qmXe008fa1c157ced'));
// console.log(hex_2_str);

function hex_2_str(hex_1_str){
    return escape(hex_2(hex_1_str));
}



module.exports =
    {
        hex_2_str
    };

