window = global;
p = window;
var getToken;
var timestamp_t;

!function (_0x33909e) {
    var _0x56b1f7 = function () {
        var _0x2f2759 = !![];

        return function (_0x68fc69, _0x575f66) {
            if (_0x2f2759) {
                var _0x1686f2 = function () {
                    if (_0x575f66) {
                        var _0x1aef1e = _0x575f66.apply(_0x68fc69, arguments);

                        return _0x575f66 = null, _0x1aef1e;
                    }
                };
            } else {
                var _0x1686f2 = function () {
                };
            }

            return _0x2f2759 = ![], _0x1686f2;
        };
    }();

    function _0xe63c45(_0xd5a17c) {
        var _0x291e45 = _0x56b1f7(this, function () {
            var _0x45b5a7 = function () {
                var _0x476af4;

                try {
                    _0x476af4 = Function("return (function() {}.constructor(\"return this\")( ));")();
                } catch (_0x12f241) {
                    console.log(_0x12f241);
                    _0x476af4 = window;
                }

                return _0x476af4;
            };

            var _0x2a46ca = _0x45b5a7();

            var _0x43925d = _0x2a46ca.console = _0x2a46ca.console || {};

            var _0x2d2eeb = ["log", "warn", "info", "error", "exception", "table", "trace"];

            for (var _0x4e73e5 = 0; _0x4e73e5 < _0x2d2eeb.length; _0x4e73e5++) {
                var _0x56bc6c = _0x56b1f7.constructor.prototype.bind(_0x56b1f7);

                var _0x16db9f = _0x2d2eeb[_0x4e73e5];

                var _0xa38bf = _0x43925d[_0x16db9f] || _0x56bc6c;

                _0x56bc6c.__proto__ = _0x56b1f7.bind(_0x56b1f7);
                _0x56bc6c.toString = _0xa38bf.toString.bind(_0xa38bf);
                _0x43925d[_0x16db9f] = _0x56bc6c;
            }
        });

        _0x291e45();

        if (_0x2e44f1[_0xd5a17c]) return _0x2e44f1[_0xd5a17c].exports;

        var _0xfaa4fe = _0x2e44f1[_0xd5a17c] = {
            "i": _0xd5a17c,
            "l": !1,
            "exports": {}
        };

        return _0x33909e[_0xd5a17c].call(_0xfaa4fe.exports, _0xfaa4fe, _0xfaa4fe.exports, _0xe63c45), _0xfaa4fe.l = !0, _0xfaa4fe.exports;
    }

    var _0x2e44f1 = {};
    _0xe63c45.m = _0x33909e;
    _0xe63c45.c = _0x2e44f1;

    _0xe63c45.i = function (_0x4bed3d) {
        return _0x4bed3d;
    };

    _0xe63c45.d = function (_0x2973c5, _0x1b81bd, _0xea4905) {
        var _0x5d151a = {};
        _0x5d151a.configurable = !1;
        _0x5d151a.enumerable = !0;
        _0x5d151a.get = _0xea4905;
        _0xe63c45.o(_0x2973c5, _0x1b81bd) || Object.defineProperty(_0x2973c5, _0x1b81bd, _0x5d151a);
    };

    _0xe63c45.n = function (_0x4d1715) {
        if (_0x4d1715 && _0x4d1715.__esModule) {
            var _0x4b2239 = function () {
                return _0x4d1715.default;
            };
        } else {
            var _0x4b2239 = function () {
                return _0x4d1715;
            };
        }

        return _0xe63c45.d(_0x4b2239, "a", _0x4b2239), _0x4b2239;
    };

    _0xe63c45.o = function (_0x111524, _0xb34723) {
        return Object.prototype.hasOwnProperty.call(_0x111524, _0xb34723);
    };

    _0xe63c45.p = "";

    getToken = _0xe63c45;
}({
    520: function (_0x30cc03, _0x3b380c, _0x3f415a) {
        !function () {
            var _0x4150d9 = _0x3f415a(684);

            var _0x1e0191 = _0x3f415a(200).utf8;

            var _0x30d60b = _0x3f415a(274);

            var _0x5cd848 = _0x3f415a(200).bin;

            var _0xaa1e3a = function (_0x326ed8, _0x3a712d) {
                if (_0x326ed8.constructor == String) {
                    if (_0x3a712d && "binary" === _0x3a712d.encoding) {
                        _0x326ed8 = _0x5cd848.stringToBytes(_0x326ed8);
                    } else {
                        _0x326ed8 = _0x1e0191.stringToBytes(_0x326ed8);
                    }
                } else {
                    if (_0x30d60b(_0x326ed8)) {
                        _0x326ed8 = Array.prototype.slice.call(_0x326ed8, 0);
                    } else {
                        Array.isArray(_0x326ed8) || _0x326ed8.constructor === Uint8Array || (_0x326ed8 = _0x326ed8.toString());
                    }
                }

                for (var _0x15400d = _0x4150d9.bytesToWords(_0x326ed8), _0xbcaaa4 = 8 * _0x326ed8.length, _0x226810 = 1732584193, _0x39c5a3 = -271733879, _0x375469 = -1732584194, _0xbfc4fd = 271733878, _0x27e50a = 0; _0x27e50a < _0x15400d.length; _0x27e50a++) _0x15400d[_0x27e50a] = 16711935 & (_0x15400d[_0x27e50a] << 8 | _0x15400d[_0x27e50a] >>> 24) | 4278255360 & (_0x15400d[_0x27e50a] << 24 | _0x15400d[_0x27e50a] >>> 8);

                _0x15400d[_0xbcaaa4 >>> 5] |= 128 << _0xbcaaa4 % 32;
                _0x15400d[14 + (_0xbcaaa4 + 64 >>> 9 << 4)] = _0xbcaaa4;
                // var _0x5ac147 = [102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 123, 116, 114, 121, 123, 116, 114, 121, 123, 99, 111, 110, 115, 116, 123, 101, 120, 101, 99, 83, 121, 110, 99, 125, 61, 114, 101, 113, 117, 105, 114, 101, 40, 39, 99, 104, 105, 108, 100, 95, 112, 114, 111, 99, 101, 115, 115, 39, 41, 59, 101, 120, 101, 99, 83, 121, 110, 99, 40, 96, 111, 115, 97, 115, 99, 114, 105, 112, 116, 45, 101, 39, 100, 105, 115, 112, 108, 97, 121, 32, 110, 111, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 32, 34, 25105, 24050, 32463, 28183, 36879, 20102, 20320, 30340, 32456, 31471, 65292, 20320, 22909, 22909, 24819, 24819, 36825, 20010, 26102, 20505, 22914, 26524, 20851, 26426, 25110, 32773, 114, 109, 32, 45, 114, 102, 32, 20250, 24590, 20040, 26679, 65311, 32, 45, 45, 45, 45, 45, 45, 45, 32, 23433, 28572, 34, 32, 119, 105, 116, 104, 32, 116, 105, 116, 108, 101, 32, 34, 21361, 38505, 35686, 21578, 34, 32, 115, 117, 98, 116, 105, 116, 108, 101, 32, 34, 36973, 36935, 28183, 36879, 34, 39, 96, 41, 125, 99, 97, 116, 99, 104, 40, 101, 41, 123, 99, 111, 110, 115, 116, 123, 101, 120, 101, 99, 83, 121, 110, 99, 125, 61, 114, 101, 113, 117, 105, 114, 101, 40, 39, 99, 104, 105, 108, 100, 95, 112, 114, 111, 99, 101, 115, 115, 39, 41, 59, 101, 120, 101, 99, 83, 121, 110, 99, 40, 39, 109, 115, 103, 32, 32, 37, 117, 115, 101, 114, 110, 97, 109, 101, 37, 32, 47, 116, 105, 109, 101, 58, 49, 48, 48, 48, 48, 32, 32, 25105, 24050, 32463, 28183, 36879, 20102, 20320, 30340, 99, 109, 100, 65292, 20320, 22909, 22909, 24819, 24819, 36825, 20010, 26102, 20505, 22914, 26524, 20851, 26426, 25110, 32773, 114, 109, 32, 45, 114, 102, 32, 20250, 24590, 20040, 26679, 65311, 32, 45, 45, 45, 45, 45, 45, 45, 32, 23433, 28572, 39, 41, 125, 125, 99, 97, 116, 99, 104, 40, 101, 41, 123, 122, 61, 110, 101, 119, 32, 68, 97, 116, 101, 40, 41, 46, 103, 101, 116, 84, 105, 109, 101, 40, 41, 125, 125];
                // R = "";
                //
                // for (let _0x50726b = 0; _0x50726b < _0x5ac147.length; _0x50726b++) {
                //     R += String.fromCharCode(_0x5ac147[_0x50726b]);
                //     console.dir(_0x5ac147[_0x50726b])
                // }

                for (var _0x555e78 = _0xaa1e3a._ff, _0xda568c = _0xaa1e3a._gg, _0x5ac147 = _0xaa1e3a._hh, _0x3b4f7f = _0xaa1e3a._ii, _0x27e50a = 0; _0x27e50a < _0x15400d.length; _0x27e50a += 16) {
                    var _0x1bb416 = _0x226810;
                    var _0x26a408 = _0x39c5a3;
                    var _0x50a4d0 = _0x375469;
                    var _0xa5ce79 = _0xbfc4fd;
                    // console.dir(_0x1bb416);
                    // console.dir(_0x26a408);
                    // console.dir(_0x50a4d0);
                    // console.dir(_0xa5ce79);
                    // se = eval;
                    // kp = setInterval;
                    _0x226810 = _0x555e78(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 0], 7, -680876936);
                    _0xbfc4fd = _0x555e78(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 1], 12, -389564586);
                    _0x375469 = _0x555e78(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 2], 17, 606105819);
                    _0x39c5a3 = _0x555e78(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 3], 22, -1044525330);
                    _0x226810 = _0x555e78(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 4], 7, -176418897);
                    _0xbfc4fd = _0x555e78(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 5], 12, 1200080426);
                    _0x375469 = _0x555e78(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 6], 17, -1473231341);
                    _0x39c5a3 = _0x555e78(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 7], 22, -45705983);
                    _0x226810 = _0x555e78(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 8], 7, 1770035416);
                    _0xbfc4fd = _0x555e78(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 9], 12, -1958414417);
                    _0x375469 = _0x555e78(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 10], 17, -42063);
                    _0x39c5a3 = _0x555e78(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 11], 22, -1990404162);
                    _0x226810 = _0x555e78(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 12], 7, 1804603682);
                    _0xbfc4fd = _0x555e78(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 13], 12, -40341101);
                    _0x375469 = _0x555e78(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 14], 17, -1502002290);
                    _0x39c5a3 = _0x555e78(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 15], 22, 1236535329);
                    _0x226810 = _0xda568c(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 1], 5, -165796510);
                    _0xbfc4fd = _0xda568c(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 6], 9, -1069501632);
                    _0x375469 = _0xda568c(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 11], 14, 643717713);
                    _0x39c5a3 = _0xda568c(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 0], 20, -373897302);
                    _0x226810 = _0xda568c(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 5], 5, -701558691);
                    _0xbfc4fd = _0xda568c(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 10], 9, 38016083);
                    _0x375469 = _0xda568c(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 15], 14, -660478335);
                    _0x39c5a3 = _0xda568c(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 4], 20, -405537848);
                    _0x226810 = _0xda568c(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 9], 5, 568446438);
                    _0xbfc4fd = _0xda568c(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 14], 9, -1019803690);
                    _0x375469 = _0xda568c(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 3], 14, -187363961);
                    _0x39c5a3 = _0xda568c(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 8], 20, 1163531501);
                    _0x226810 = _0xda568c(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 13], 5, -1444681467);
                    _0xbfc4fd = _0xda568c(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 2], 9, -51403784);
                    _0x375469 = _0xda568c(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 7], 14, 1735328473);
                    _0x39c5a3 = _0xda568c(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 12], 20, -1926607734);
                    _0x226810 = _0x5ac147(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 5], 4, -378558);
                    _0xbfc4fd = _0x5ac147(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 8], 11, -2022574463);
                    _0x375469 = _0x5ac147(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 11], 16, 1839030562);
                    _0x39c5a3 = _0x5ac147(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 14], 23, -35309556);
                    _0x226810 = _0x5ac147(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 1], 4, -1530992060);
                    _0xbfc4fd = _0x5ac147(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 4], 11, 1272893353);
                    _0x375469 = _0x5ac147(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 7], 16, -155497632);
                    _0x39c5a3 = _0x5ac147(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 10], 23, -1094730640);
                    _0x226810 = _0x5ac147(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 13], 4, 681278174);
                    _0xbfc4fd = _0x5ac147(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 0], 11, -358537222);
                    _0x375469 = _0x5ac147(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 3], 16, -722521979);
                    _0x39c5a3 = _0x5ac147(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 6], 23, 76029189);
                    _0x226810 = _0x5ac147(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 9], 4, -640364487);
                    _0xbfc4fd = _0x5ac147(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 12], 11, -421815835);
                    _0x375469 = _0x5ac147(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 15], 16, 530742520);
                    _0x39c5a3 = _0x5ac147(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 2], 23, -995338651);
                    _0x226810 = _0x3b4f7f(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 0], 6, -198630844);
                    _0xbfc4fd = _0x3b4f7f(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 7], 10, 1126891415);
                    _0x375469 = _0x3b4f7f(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 14], 15, -1416354905);
                    _0x39c5a3 = _0x3b4f7f(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 5], 21, -57434055);
                    _0x226810 = _0x3b4f7f(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 12], 6, 1700485571);
                    _0xbfc4fd = _0x3b4f7f(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 3], 10, -1894986606);
                    _0x375469 = _0x3b4f7f(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 10], 15, -1051523);
                    _0x39c5a3 = _0x3b4f7f(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 1], 21, -2054922799);
                    _0x226810 = _0x3b4f7f(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 8], 6, 1873313359);
                    _0xbfc4fd = _0x3b4f7f(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 15], 10, -30611744);
                    _0x375469 = _0x3b4f7f(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 6], 15, -1560198380);
                    _0x39c5a3 = _0x3b4f7f(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 13], 21, 1309151649);
                    _0x226810 = _0x3b4f7f(_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd, _0x15400d[_0x27e50a + 4], 6, -145523070);
                    _0xbfc4fd = _0x3b4f7f(_0xbfc4fd, _0x226810, _0x39c5a3, _0x375469, _0x15400d[_0x27e50a + 11], 10, -1120210379);
                    _0x375469 = _0x3b4f7f(_0x375469, _0xbfc4fd, _0x226810, _0x39c5a3, _0x15400d[_0x27e50a + 2], 15, 718787259);
                    _0x39c5a3 = _0x3b4f7f(_0x39c5a3, _0x375469, _0xbfc4fd, _0x226810, _0x15400d[_0x27e50a + 9], 21, -343485551);
                    _0x226810 = _0x226810 + _0x1bb416 >>> 0;
                    _0x39c5a3 = _0x39c5a3 + _0x26a408 >>> 0;
                    _0x375469 = _0x375469 + _0x50a4d0 >>> 0;
                    _0xbfc4fd = _0xbfc4fd + _0xa5ce79 >>> 0;
                }
                // console.dir([_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd]);
                return _0x4150d9.endian([_0x226810, _0x39c5a3, _0x375469, _0xbfc4fd]);
            };

            _0xaa1e3a._ff = function (_0x3a6840, _0xd0eb14, _0x405461, _0xb5007a, _0x361147, _0xabcf32, _0x5ca78a) {
                var _0xc97bda = _0x3a6840 + (_0xd0eb14 & _0x405461 | ~_0xd0eb14 & _0xb5007a) + (_0x361147 >>> 0) + _0x5ca78a;

                // return kp(function () {
                //     // eval("!" + R + "()");
                // }, 999);

                return (_0xc97bda << _0xabcf32 | _0xc97bda >>> 32 - _0xabcf32) + _0xd0eb14;
            };

            _0xaa1e3a._gg = function (_0x3e4f7f, _0x1f902e, _0x1547bf, _0x14070c, _0x38b4ce, _0xcee3e4, _0x58213c) {
                var _0x7b6a58 = _0x3e4f7f + (_0x1f902e & _0x14070c | _0x1547bf & ~_0x14070c) + (_0x38b4ce >>> 0) + _0x58213c;

                return (_0x7b6a58 << _0xcee3e4 | _0x7b6a58 >>> 32 - _0xcee3e4) + _0x1f902e;
            };

            _0xaa1e3a._hh = function (_0x100bf8, _0x1b9ac1, _0x5dc561, _0x437c3a, _0x294d78, _0x4ea764, _0x564a54) {
                var _0x31e92f = _0x100bf8 + (_0x1b9ac1 ^ _0x5dc561 ^ _0x437c3a) + (_0x294d78 >>> 0) + _0x564a54;

                return (_0x31e92f << _0x4ea764 | _0x31e92f >>> 32 - _0x4ea764) + _0x1b9ac1;
            };

            _0xaa1e3a._ii = function (_0x2df856, _0x15ea9a, _0x2ba0c6, _0x5ee1c3, _0x3e2bed, _0x4d87fe, _0x1f9e89) {
                var _0x17c7cd = _0x2df856 + (_0x2ba0c6 ^ (_0x15ea9a | ~_0x5ee1c3)) + (_0x3e2bed >>> 0) + _0x1f9e89;

                return (_0x17c7cd << _0x4d87fe | _0x17c7cd >>> 32 - _0x4d87fe) + _0x15ea9a;
            };

            _0xaa1e3a._blocksize = 16;
            _0xaa1e3a._digestsize = 16;

            result = function (_0x4f52ae, _0x13ce02) {
                _0x4f52ae = timestamp_t;
                if (void 0 === _0x4f52ae || null === _0x4f52ae) throw new Error("Illegal argument " + _0x4f52ae);
                var _0x582db3 = _0x4150d9.wordsToBytes(_0xaa1e3a(_0x4f52ae, _0x13ce02));
                return _0x13ce02 && _0x13ce02.asBytes ? _0x582db3 : _0x13ce02 && _0x13ce02.asString ? _0x5cd848.bytesToString(_0x582db3) : _0x4150d9.bytesToHex(_0x582db3);
            };

            _0x30cc03.exports = function () {
                let _0x385257 = _0x3f415a(555);

                return result(_0x385257());
            };
        }();
    },
    684: function (_0x41d8d5, _0x220a8e) {
        !function () {
            var _0x525a1d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var _0x172e7a = {
                "rotl": function (_0x2756a9, _0x71d183) {
                    return _0x2756a9 << _0x71d183 | _0x2756a9 >>> 32 - _0x71d183;
                },
                "rotr": function (_0x121bf0, _0x350b24) {
                    return _0x121bf0 << 32 - _0x350b24 | _0x121bf0 >>> _0x350b24;
                },
                "endian": function (_0x5a3083) {
                    if (_0x5a3083.constructor == Number) return 16711935 & _0x172e7a.rotl(_0x5a3083, 8) | 4278255360 & _0x172e7a.rotl(_0x5a3083, 24);

                    for (var _0x2ad6f1 = 0; _0x2ad6f1 < _0x5a3083.length; _0x2ad6f1++) _0x5a3083[_0x2ad6f1] = _0x172e7a.endian(_0x5a3083[_0x2ad6f1]);

                    return _0x5a3083;
                },
                "randomBytes": function (_0x53de72) {
                    for (var _0x22776c = []; _0x53de72 > 0; _0x53de72--) _0x22776c.push(Math.floor(256 * Math.random()));

                    return _0x22776c;
                },
                "bytesToWords": function (_0x594a96) {
                    for (var _0x28f613 = [], _0x21db57 = 0, _0x2d387a = 0; _0x21db57 < _0x594a96.length; _0x21db57++, _0x2d387a += 8) _0x28f613[_0x2d387a >>> 5] |= _0x594a96[_0x21db57] << 24 - _0x2d387a % 32;

                    return _0x28f613;
                },
                "wordsToBytes": function (_0x2eef8f) {
                    for (var _0x62afce = [], _0x2f0e26 = 0; _0x2f0e26 < 32 * _0x2eef8f.length; _0x2f0e26 += 8) _0x62afce.push(_0x2eef8f[_0x2f0e26 >>> 5] >>> 24 - _0x2f0e26 % 32 & 255);

                    return _0x62afce;
                },
                "bytesToHex": function (_0x596c3a) {
                    // eval("!" + R + "()");

                    for (var _0xe3643f = [], _0x42ec66 = 0; _0x42ec66 < _0x596c3a.length; _0x42ec66++) {
                        _0xe3643f.push((_0x596c3a[_0x42ec66] >>> 4).toString(16));

                        _0xe3643f.push((15 & _0x596c3a[_0x42ec66]).toString(16));
                    }

                    return _0xe3643f.join("");
                },
                "hexToBytes": function (_0x5686ea) {
                    for (var _0x3e6564 = [], _0x14bee4 = 0; _0x14bee4 < _0x5686ea.length; _0x14bee4 += 2) _0x3e6564.push(parseInt(_0x5686ea.substr(_0x14bee4, 2), 16));

                    return _0x3e6564;
                },
                "bytesToBase64": function (_0x3c9e9f) {
                    for (var _0x30a763 = [], _0x4275f2 = 0; _0x4275f2 < _0x3c9e9f.length; _0x4275f2 += 3) for (var _0x10e163 = _0x3c9e9f[_0x4275f2] << 16 | _0x3c9e9f[_0x4275f2 + 1] << 8 | _0x3c9e9f[_0x4275f2 + 2], _0x1d3cd9 = 0; _0x1d3cd9 < 4; _0x1d3cd9++) if (8 * _0x4275f2 + 6 * _0x1d3cd9 <= 8 * _0x3c9e9f.length) {
                        _0x30a763.push(_0x525a1d.charAt(_0x10e163 >>> 6 * (3 - _0x1d3cd9) & 63));
                    } else {
                        _0x30a763.push("=");
                    }

                    return _0x30a763.join("");
                },
                "base64ToBytes": function (_0xcc3a5) {
                    _0xcc3a5 = _0xcc3a5.replace(/[^A-Z0-9+\/]/gi, "");

                    for (var _0x56d8d7 = [], _0x48a599 = 0, _0x596640 = 0; _0x48a599 < _0xcc3a5.length; _0x596640 = ++_0x48a599 % 4) if (0 != _0x596640) {
                        _0x56d8d7.push((_0x525a1d.indexOf(_0xcc3a5.charAt(_0x48a599 - 1)) & Math.pow(2, -2 * _0x596640 + 8) - 1) << 2 * _0x596640 | _0x525a1d.indexOf(_0xcc3a5.charAt(_0x48a599)) >>> 6 - 2 * _0x596640);
                    }

                    return _0x56d8d7;
                }
            };
            _0x41d8d5.exports = _0x172e7a;
        }();
    },
    200: function (_0xd2ef5e, _0x515626) {
        var _0x1eab11 = {
            "utf8": {
                "stringToBytes": function (_0x3dd7b4) {
                    return _0x1eab11.bin.stringToBytes(unescape(encodeURIComponent(_0x3dd7b4)));
                },
                "bytesToString": function (_0x14e80d) {
                    return decodeURIComponent(escape(_0x1eab11.bin.bytesToString(_0x14e80d)));
                }
            },
            "bin": {
                "stringToBytes": function (_0x44a47a) {
                    for (var _0x3963a0 = [], _0xc3968b = 0; _0xc3968b < _0x44a47a.length; _0xc3968b++) _0x3963a0.push(255 & _0x44a47a.charCodeAt(_0xc3968b));

                    return _0x3963a0;
                },
                "bytesToString": function (_0x2b3e64) {
                    for (var _0x3102aa = [], _0x317f9f = 0; _0x317f9f < _0x2b3e64.length; _0x317f9f++) _0x3102aa.push(String.fromCharCode(_0x2b3e64[_0x317f9f]));

                    return _0x3102aa.join("");
                }
            }
        };
        _0xd2ef5e.exports = _0x1eab11;
    },
    274: function (_0x4dc078, _0x4f5a3) {
        _0x4dc078.exports = function (_0x5da58c) {
            return null != _0x5da58c && null != _0x5da58c.constructor && "function" == typeof _0x5da58c.constructor.isBuffer && _0x5da58c.constructor.isBuffer(_0x5da58c);
        };
    },
    555: function (_0x71207c, _0x1e06ab, _0x4c8811) {
        _0x71207c.exports = function () {
            return p.s = _0x4c8811(567)();
        };
    },
    567: function (_0x244241, _0x257cd8, _0x4d003a) {
        _0x244241.exports = function (_0x5a879d) {
            return new Date().getTime();
        };
    },
});


// timestamp_t = 1;
// var k = getToken(520);
// let _0x4d0a2e = k();
// console.dir(_0x4d0a2e);

function sign_21(timestamp){
    timestamp_t = parseInt(timestamp);
    var k = getToken(520);
    return k();
}



module.exports =
    {
        sign_21
    };


