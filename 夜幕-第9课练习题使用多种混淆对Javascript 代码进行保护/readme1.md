在JS逆向系列课的第9课《一击即中 处理常见代码混淆的方法》中，我们见到了5种看起来很厉害的混淆字符串，也学会了如何轻松干掉它们。 那么现在，请运用你在第9课第6节中学到的知识，尝试做一下这道题吧~

请问：

第2个帖子（以1为起始）的HTML中id为content的部分中一共有多少个br标签？

找到请求地址

    https://js-crack-course-9-5.crawler-lab.com/detail/15807?key=426b51bc-97ed-48a5-85de-7aef4bc4f872&time=16786268081&sign=83aa78beb61928f703cac0e355a81b7ac6866270
    
请求的参数

key=426b51bc-97ed-48a5-85de-7aef4bc4f872&
time=16786268081&
sign=83aa78beb61928f703cac0e355a81b7ac6866270

打断点定位加密位置

![debugger](../img/112.png)

其中 _0x1753d8 是 sign 加密参数

    _0x5bd2b2[_0x527a('\x30\x78\x63', '\x65\x28\x33\x4b')](md5, _0x5bd2b2['\x51\x54\x47\x49\x5a'](_0x1830f4, _0x40501b[_0x527a('\x30\x78\x31\x38', '\x56\x46\x34\x76')](_0x56ad16)) + _0x5bd2b2[_0x527a('\x30\x78\x32\x37', '\x49\x33\x59\x7a')]);

改写

    _0x5bd2b2["tKlYA"](md5, _0x5bd2b2['\x51\x54\x47\x49\x5a'](_0x1830f4, _0x40501b[_0x527a('\x30\x78\x31\x38', '\x56\x46\x34\x76')]("16786301071")) + "jscrackcourse95");

这段代码 _0x5bd2b2["tKlYA"] 调用的是

    '\x74\x4b\x6c\x59\x41': function(_0x554ec2, _0x10e10c) {
                return _0x554ec2(_0x10e10c);
            }

改写
    
    md5(_0x5bd2b2['\x51\x54\x47\x49\x5a'](_0x1830f4, _0x40501b[_0x527a('\x30\x78\x31\x38', '\x56\x46\x34\x76')]("16786301071")) + "jscrackcourse95")
    
这段代码 _0x5bd2b2['\x51\x54\x47\x49\x5a'] 调用的是

        '\x51\x54\x47\x49\x5a': function(_0x2f6f63, _0x53b774) {
            return _0x2f6f63 + _0x53b774;
        },
        
改写
    
    md5(_0x1830f4 + _0x40501b[_0x527a('\x30\x78\x31\x38', '\x56\x46\x34\x76')]("16786301071")) + "jscrackcourse95")
    
这段代码 _0x527a('\x30\x78\x31\x38', '\x56\x46\x34\x76') 调用的是 'encode'

    md5(_0x1830f4 + _0x40501b['encode']("16786301071")) + "jscrackcourse95")
    
定位 _0x40501b 发现这事 base64

![debugger](../img/113.png)

接下来要解决 _0x1830f4 就是 key 的值

扣代码，本着缺啥🙈补啥的原则

    _0x8dea = [
        "w5PCg8KJVcOPw7TCsn9ATU43SMKpw4kFfEwr",
        "wqbDrcKyGcKrwqk=",
        "wqUhX8OXfg==",
        "C0LDh8KDwqBX",
        "PcOTw7PChXfCrmzDlcKGMAXDsQ==",
        "VzTCgSYm",
        "woUacMOM",
        "VGQbfFXCoFU=",
        "P8OKa8OPw70=",
        "w67CtMOZE3RBw6VkXTo=",
        "wqsGw5DCmw==",
        "Q8OWwqnDucKU",
        "wq8bbD4r",
        "JcKnEW/CiA==",
        "C3TDjnfDlw==",
        "wrgEw4bCnQ==",
        "wrHDvcKzBcK7wr4=",
        "wqZdwqZSw7pjLjQIwrI=",
        "eDvCth4j",
        "WMOdJRgkZMOYO8Orwr1q",
        "w7DCm0tUWMOzfsKKSMK+",
        "wrDDu8Ktw6bCgw==",
        "YW5Pw4TDiMKbw5I=",
        "XgDClw/DmFM=",
        "wqBbwqRPw51p",
        "fsOwa8KD",
        "wrwLw4LCncOiCw==",
        "wrdMAw==",
        "RVbDnsKEwoQ=",
        "QWQfRF3CrlU=",
        "KcOrw5hYLMKQw7E=",
        "w6g4BRs=",
        "fcO0asKZ",
        "wqHDt8KDHsKtwrILHg==",
        "a29Fw5LDn8K4w5E=",
        "ZsO6fw==",
        "bsOMeMKNPMOrBBxaFcOnKcO4JzHDqsKqwqtoeCHCmTJuw4zDlQ3CilhGw6nCig==",
        "w5ARDMKpw6w=",
        "e2FCw6TDgA==",
        "dwk7wrBK",
        "emVbw43DkcK3w5E=",
        "w6HCucOWBkNG",
        "dsOeI8KAJ8OgBQ==",
        "wrbDsMKxA8Kx",
        "bwo4wq9YUg==",
        "woDDjsOSS8KGEBA=",
        "SMOGKh81WcOPMsO6wrFs",
        "w53DrSPDl8KM",
        "wo1QRcOoAw==",
        "w68URljCvg==",
        "X0QKw6MMEMKzYcKtQcO6w5nCug7Dtm4sUMONOgtJw77CoMKjFzHDg8OmBMO1NQYE",
        "wpN6KELDig==",
        "CFPDrX7Dgw==",
        "w5LCqMOxMG4=",
        "w53CpsOzFHR8w4k=",
        "wrpTFHzDkQ==",
        "wr4Tw5PCg8Oa",
        "w5l+CXvDqBIy",
        "AFEUdsKgPD3Ct2dBw5hV",
        "wobDtRNTGw==",
        "w5fCgcO5E1A=",
        "wp3DjgFlKg==",
        "w4LCjsKcUsO+w7XDtjJnTA==",
        "XznChTo9AQ==",
        "fEtHw7jDsQ==",
        "VhJJKMOXYWrDshwXw51SSHVvwpVeQzUbIcOow4QywoXDmcKSchHDucKQU8KiwqLDmsK/",
        "w7vCvsOPJVg=",
        "wp0rw6xqVQ==",
        "w4TDqgLDn8K+",
        "w5ZiAnPDkzU1wpprwp3CoMOE",
        "wr81YhI=",
        "L3Y9dMKN",
        "w6I+AgbCjTnCicK6wqol",
        "w4nCkcO7JnA=",
        "wqM1XcOdcQ==",
        "dsOZN8KcEsOx",
        "ThzChBTDt0A=",
        "XcOlwoJYFQ==",
        "w4ISUWXCgMOcwqo=",
        "w4JxA3rDvzA=",
        "w4NlD23DpC8=",
        "b8OnasKYw7g=",
        "wrJdwq5Mw5wsYiU7wrNyw5Qdw5bDlQ==",
        "w53CocO8FVpk",
        "w4LCgcKfw7YN",
        "wrVGw6xIF8OW",
        "w5XCnMKyRcOn",
        "wo8bd8OLfyvDgg==",
        "D00ffsKbGzo=",
        "Y3R6w7XDkg==",
        "w53CocO8FVh/w4giw4HCng==",
        "wovCpcK3wofCgQ==",
        "w6vCrsOXDHRGw6BzXyHCgMOM",
        "w60zDRPCuj4=",
        "w6DCpMK+ZMO4w5zDlR9vcmsYccKOw6k7BTdYUHfCrMKrw7gDQMKeenXDisOZCcOtY8OGwoIPw5LCoEPDmW/CsMOEMEzChMOZIsK+RMO9Ykt2wopHdUgzEAdDwofCpA==",
        "w7A2EcOB",
        "wpvDshVsLMKQ",
        "LsOYbMOMw6gC",
        "wrwMw43CnMOXDcK7TMOfw7LDqA==",
        "OsORf8OQ",
        "egPCjxHDvA==",
        "PMOpLMKLwrhHRQvCtxvCgGcXw7Zm",
        "YsOuwp7DlMKt",
        "SMOBJR4CRMOeNMOPwqo=",
        "XgDClw/DmkjCm2lIw6g=",
        "wopiJcKaw5FbPsK1w6o/w4ge",
        "En1SbAbCvwjDjcOOHMOjw4nDocKDwrcSw6tRwqc=",
        "YW5Nw44=",
        "wo7DqcO4UcK8",
        "w5LCpsO6",
        "wr7DrcKsw6HChcKmWwHDmFQuw4tuwrRh",
        "wrJLw69PMQ==",
        "BMKlBErClA==",
        "wqsRw4LCjMOG",
        "w4MXC8K3",
        "wqsVw6rCnMOF",
        "wo3DrBpqPA==",
        "WBrChBLDqw==",
        "w67Cs8OWEkNcw7RiaCHClg==",
        "CcO9TsO5w64=",
        "N8OqO8O5wo7ClAjDpUN4O8OQ"
    ]
    
    var _0x527a = function (_0x3534de, _0x8dea7) {
        _0x3534de = _0x3534de - 0x0;
        var _0x527ab9 = _0x8dea[_0x3534de];
        if (_0x527a['jQaApf'] === undefined) {
            (function () {
                var _0x40fe46;
                try {
                    var _0x2b1b6d = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                    _0x40fe46 = _0x2b1b6d();
                } catch (_0x419bdd) {
                    _0x40fe46 = window;
                }
                var _0x376ef4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
                _0x40fe46['atob'] || (_0x40fe46['atob'] = function (_0x3f6455) {
                        var _0x4ffe5b = String(_0x3f6455)['replace'](/=+$/, '');
                        var _0x498e90 = '';
                        for (var _0x12ebdc = 0x0, _0x92dd35, _0xf30a7b, _0x5a2241 = 0x0; _0xf30a7b = _0x4ffe5b['charAt'](_0x5a2241++); ~_0xf30a7b && (_0x92dd35 = _0x12ebdc % 0x4 ? _0x92dd35 * 0x40 + _0xf30a7b : _0xf30a7b,
                        _0x12ebdc++ % 0x4) ? _0x498e90 += String['fromCharCode'](0xff & _0x92dd35 >> (-0x2 * _0x12ebdc & 0x6)) : 0x0) {
                            _0xf30a7b = _0x376ef4['indexOf'](_0xf30a7b);
                        }
                        return _0x498e90;
                    }
                );
            }());
            var _0x5a0787 = function (_0x2d4b23, _0x40621d) {
                var _0x50d13c = [], _0x288d35 = 0x0, _0x279a70, _0x4742a4 = '', _0x44f24b = '';
                _0x2d4b23 = atob(_0x2d4b23);
                for (var _0x36a341 = 0x0, _0x26eb97 = _0x2d4b23['length']; _0x36a341 < _0x26eb97; _0x36a341++) {
                    _0x44f24b += '%' + ('00' + _0x2d4b23['charCodeAt'](_0x36a341)['toString'](0x10))['slice'](-0x2);
                }
                _0x2d4b23 = decodeURIComponent(_0x44f24b);
                var _0x1db914;
                for (_0x1db914 = 0x0; _0x1db914 < 0x100; _0x1db914++) {
                    _0x50d13c[_0x1db914] = _0x1db914;
                }
                for (_0x1db914 = 0x0; _0x1db914 < 0x100; _0x1db914++) {
                    _0x288d35 = (_0x288d35 + _0x50d13c[_0x1db914] + _0x40621d['charCodeAt'](_0x1db914 % _0x40621d['length'])) % 0x100;
                    _0x279a70 = _0x50d13c[_0x1db914];
                    _0x50d13c[_0x1db914] = _0x50d13c[_0x288d35];
                    _0x50d13c[_0x288d35] = _0x279a70;
                }
                _0x1db914 = 0x0;
                _0x288d35 = 0x0;
                for (var _0x5821d7 = 0x0; _0x5821d7 < _0x2d4b23['length']; _0x5821d7++) {
                    _0x1db914 = (_0x1db914 + 0x1) % 0x100;
                    _0x288d35 = (_0x288d35 + _0x50d13c[_0x1db914]) % 0x100;
                    _0x279a70 = _0x50d13c[_0x1db914];
                    _0x50d13c[_0x1db914] = _0x50d13c[_0x288d35];
                    _0x50d13c[_0x288d35] = _0x279a70;
                    _0x4742a4 += String['fromCharCode'](_0x2d4b23['charCodeAt'](_0x5821d7) ^ _0x50d13c[(_0x50d13c[_0x1db914] + _0x50d13c[_0x288d35]) % 0x100]);
                }
                return _0x4742a4;
            };
            _0x527a['RKFJQb'] = _0x5a0787;
            _0x527a['nARypd'] = {};
            _0x527a['jQaApf'] = !![];
        }
        var _0x333a1d = _0x527a['nARypd'][_0x3534de];
        if (_0x333a1d === undefined) {
            if (_0x527a['iDRAGI'] === undefined) {
                _0x527a['iDRAGI'] = !![];
            }
            _0x527ab9 = _0x527a['RKFJQb'](_0x527ab9, _0x8dea7);
            _0x527a['nARypd'][_0x3534de] = _0x527ab9;
        } else {
            _0x527ab9 = _0x333a1d;
        }
        return _0x527ab9;
    };
    
    function uuid() {
        var _0xf23abd = {
            '\x78\x77\x51\x64\x4b': function (_0x3294c8, _0x831900) {
                return _0x3294c8 * _0x831900;
            },
            '\x74\x7a\x4f\x65\x5a': function (_0x118fa7, _0x2e59cd) {
                return _0x118fa7 & _0x2e59cd;
            }
        };
        var _0x6ad99b = _0x527a('\x30\x78\x36\x35', '\x65\x4e\x23\x4b')[_0x527a('\x30\x78\x33\x30', '\x63\x6d\x75\x30')]('\x7c');
        var _0x3c62bb = 0x0;
        while (!![]) {
            switch (_0x6ad99b[_0x3c62bb++]) {
                case '\x30':
                    var _0x4972bd = _0x4b603f[_0x527a('\x30\x78\x35\x66', '\x4b\x43\x48\x63')]('');
                    continue;
                case '\x31':
                    _0x4b603f[0xe] = '\x34';
                    continue;
                case '\x32':
                    for (var _0x335e05 = 0x0; _0x335e05 < 0x24; _0x335e05++) {
                        _0x4b603f[_0x335e05] = _0xebcd0a[_0x527a('\x30\x78\x35\x30', '\x31\x58\x65\x5d')](Math['\x66\x6c\x6f\x6f\x72'](_0xf23abd[_0x527a('\x30\x78\x34\x34', '\x73\x75\x43\x42')](Math[_0x527a('\x30\x78\x34\x66', '\x31\x58\x65\x5d')](), 0x10)), 0x1);
                    }
                    continue;
                case '\x33':
                    _0x4b603f[0x8] = _0x4b603f[0xd] = _0x4b603f[0x12] = _0x4b603f[0x17] = '\x2d';
                    continue;
                case '\x34':
                    var _0xebcd0a = _0x527a('\x30\x78\x34\x31', '\x52\x39\x66\x55');
                    continue;
                case '\x35':
                    return _0x4972bd;
                case '\x36':
                    var _0x4b603f = [];
                    continue;
                case '\x37':
                    _0x4b603f[0x13] = _0xebcd0a[_0x527a('\x30\x78\x31', '\x5d\x42\x62\x71')](_0xf23abd[_0x527a('\x30\x78\x35\x36', '\x72\x4a\x24\x34')](_0x4b603f[0x13], 0x3) | 0x8, 0x1);
                    continue;
            }
            break;
        }
    }
    
    uuid_res = uuid();
    
    console.log(uuid_res);
    
key的结果

    d305d345-465a-43ba-af70-805c7e57d9c9