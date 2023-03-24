!function() {
    var e = document.getElementsByTagName("script")
      , t = e.length
      , n = e[t - 1].src
      , i = n.indexOf("/js/")
      , o = n.substr(0, i) + "/js/";
    window.importScriptList = {},
    window.importScript = function(e) {
        e && (-1 === e.indexOf("http://") && -1 === e.indexOf("https://") && ("/" === e.substr(0, 1) && (e = e.substr(1)),
        e = o + e),
        e in importScriptList || (importScriptList[e] = !0,
        document.write('<script src="' + e + '" type="text/javascript"></script>')))
    }
}(),
passport._define("login.js", function() {
    function _(e) {
        alert("undefined:" + e)
    }
    function hex_md5(e) {
        return binl2hex(core_md5(str2binl(e), e.length * chrsz))
    }
    function b64_md5(e) {
        return binl2b64(core_md5(str2binl(e), e.length * chrsz))
    }
    function str_md5(e) {
        return binl2str(core_md5(str2binl(e), e.length * chrsz))
    }
    function hex_hmac_md5(e, t) {
        return binl2hex(core_hmac_md5(e, t))
    }
    function b64_hmac_md5(e, t) {
        return binl2b64(core_hmac_md5(e, t))
    }
    function str_hmac_md5(e, t) {
        return binl2str(core_hmac_md5(e, t))
    }
    function md5_vm_test() {
        return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
    }
    function core_md5(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[(t + 64 >>> 9 << 4) + 14] = t;
        for (var n = 1732584193, i = -271733879, o = -1732584194, s = 271733878, a = 0; a < e.length; a += 16) {
            var r = n
              , c = i
              , l = o
              , d = s;
            n = md5_ff(n, i, o, s, e[a + 0], 7, -680876936),
            s = md5_ff(s, n, i, o, e[a + 1], 12, -389564586),
            o = md5_ff(o, s, n, i, e[a + 2], 17, 606105819),
            i = md5_ff(i, o, s, n, e[a + 3], 22, -1044525330),
            n = md5_ff(n, i, o, s, e[a + 4], 7, -176418897),
            s = md5_ff(s, n, i, o, e[a + 5], 12, 1200080426),
            o = md5_ff(o, s, n, i, e[a + 6], 17, -1473231341),
            i = md5_ff(i, o, s, n, e[a + 7], 22, -45705983),
            n = md5_ff(n, i, o, s, e[a + 8], 7, 1770035416),
            s = md5_ff(s, n, i, o, e[a + 9], 12, -1958414417),
            o = md5_ff(o, s, n, i, e[a + 10], 17, -42063),
            i = md5_ff(i, o, s, n, e[a + 11], 22, -1990404162),
            n = md5_ff(n, i, o, s, e[a + 12], 7, 1804603682),
            s = md5_ff(s, n, i, o, e[a + 13], 12, -40341101),
            o = md5_ff(o, s, n, i, e[a + 14], 17, -1502002290),
            i = md5_ff(i, o, s, n, e[a + 15], 22, 1236535329),
            n = md5_gg(n, i, o, s, e[a + 1], 5, -165796510),
            s = md5_gg(s, n, i, o, e[a + 6], 9, -1069501632),
            o = md5_gg(o, s, n, i, e[a + 11], 14, 643717713),
            i = md5_gg(i, o, s, n, e[a + 0], 20, -373897302),
            n = md5_gg(n, i, o, s, e[a + 5], 5, -701558691),
            s = md5_gg(s, n, i, o, e[a + 10], 9, 38016083),
            o = md5_gg(o, s, n, i, e[a + 15], 14, -660478335),
            i = md5_gg(i, o, s, n, e[a + 4], 20, -405537848),
            n = md5_gg(n, i, o, s, e[a + 9], 5, 568446438),
            s = md5_gg(s, n, i, o, e[a + 14], 9, -1019803690),
            o = md5_gg(o, s, n, i, e[a + 3], 14, -187363961),
            i = md5_gg(i, o, s, n, e[a + 8], 20, 1163531501),
            n = md5_gg(n, i, o, s, e[a + 13], 5, -1444681467),
            s = md5_gg(s, n, i, o, e[a + 2], 9, -51403784),
            o = md5_gg(o, s, n, i, e[a + 7], 14, 1735328473),
            i = md5_gg(i, o, s, n, e[a + 12], 20, -1926607734),
            n = md5_hh(n, i, o, s, e[a + 5], 4, -378558),
            s = md5_hh(s, n, i, o, e[a + 8], 11, -2022574463),
            o = md5_hh(o, s, n, i, e[a + 11], 16, 1839030562),
            i = md5_hh(i, o, s, n, e[a + 14], 23, -35309556),
            n = md5_hh(n, i, o, s, e[a + 1], 4, -1530992060),
            s = md5_hh(s, n, i, o, e[a + 4], 11, 1272893353),
            o = md5_hh(o, s, n, i, e[a + 7], 16, -155497632),
            i = md5_hh(i, o, s, n, e[a + 10], 23, -1094730640),
            n = md5_hh(n, i, o, s, e[a + 13], 4, 681279174),
            s = md5_hh(s, n, i, o, e[a + 0], 11, -358537222),
            o = md5_hh(o, s, n, i, e[a + 3], 16, -722521979),
            i = md5_hh(i, o, s, n, e[a + 6], 23, 76029189),
            n = md5_hh(n, i, o, s, e[a + 9], 4, -640364487),
            s = md5_hh(s, n, i, o, e[a + 12], 11, -421815835),
            o = md5_hh(o, s, n, i, e[a + 15], 16, 530742520),
            i = md5_hh(i, o, s, n, e[a + 2], 23, -995338651),
            n = md5_ii(n, i, o, s, e[a + 0], 6, -198630844),
            s = md5_ii(s, n, i, o, e[a + 7], 10, 1126891415),
            o = md5_ii(o, s, n, i, e[a + 14], 15, -1416354905),
            i = md5_ii(i, o, s, n, e[a + 5], 21, -57434055),
            n = md5_ii(n, i, o, s, e[a + 12], 6, 1700485571),
            s = md5_ii(s, n, i, o, e[a + 3], 10, -1894986606),
            o = md5_ii(o, s, n, i, e[a + 10], 15, -1051523),
            i = md5_ii(i, o, s, n, e[a + 1], 21, -2054922799),
            n = md5_ii(n, i, o, s, e[a + 8], 6, 1873313359),
            s = md5_ii(s, n, i, o, e[a + 15], 10, -30611744),
            o = md5_ii(o, s, n, i, e[a + 6], 15, -1560198380),
            i = md5_ii(i, o, s, n, e[a + 13], 21, 1309151649),
            n = md5_ii(n, i, o, s, e[a + 4], 6, -145523070),
            s = md5_ii(s, n, i, o, e[a + 11], 10, -1120210379),
            o = md5_ii(o, s, n, i, e[a + 2], 15, 718787259),
            i = md5_ii(i, o, s, n, e[a + 9], 21, -343485551),
            n = safe_add(n, r),
            i = safe_add(i, c),
            o = safe_add(o, l),
            s = safe_add(s, d)
        }
        return Array(n, i, o, s)
    }
    function md5_cmn(e, t, n, i, o, s) {
        return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(i, s)), o), n)
    }
    function md5_ff(e, t, n, i, o, s, a) {
        return md5_cmn(t & n | ~t & i, e, t, o, s, a)
    }
    function md5_gg(e, t, n, i, o, s, a) {
        return md5_cmn(t & i | n & ~i, e, t, o, s, a)
    }
    function md5_hh(e, t, n, i, o, s, a) {
        return md5_cmn(t ^ n ^ i, e, t, o, s, a)
    }
    function md5_ii(e, t, n, i, o, s, a) {
        return md5_cmn(n ^ (t | ~i), e, t, o, s, a)
    }
    function core_hmac_md5(e, t) {
        var n = str2binl(e);
        n.length > 16 && (n = core_md5(n, e.length * chrsz));
        for (var i = Array(16), o = Array(16), s = 0; 16 > s; s++)
            i[s] = 909522486 ^ n[s],
            o[s] = 1549556828 ^ n[s];
        var a = core_md5(i.concat(str2binl(t)), 512 + t.length * chrsz);
        return core_md5(o.concat(a), 640)
    }
    function safe_add(e, t) {
        var n = (65535 & e) + (65535 & t)
          , i = (e >> 16) + (t >> 16) + (n >> 16);
        return i << 16 | 65535 & n
    }
    function bit_rol(e, t) {
        return e << t | e >>> 32 - t
    }
    function str2binl(e) {
        for (var t = Array(), n = (1 << chrsz) - 1, i = 0; i < e.length * chrsz; i += chrsz)
            t[i >> 5] |= (e.charCodeAt(i / chrsz) & n) << i % 32;
        return t
    }
    function binl2str(e) {
        for (var t = "", n = (1 << chrsz) - 1, i = 0; i < 32 * e.length; i += chrsz)
            t += String.fromCharCode(e[i >> 5] >>> i % 32 & n);
        return t
    }
    function binl2hex(e) {
        for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < 4 * e.length; i++)
            n += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
        return n
    }
    function binl2b64(e) {
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", i = 0; i < 4 * e.length; i += 3)
            for (var o = (e[i >> 2] >> 8 * (i % 4) & 255) << 16 | (e[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 255) << 8 | e[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 255, s = 0; 4 > s; s++)
                n += 8 * i + 6 * s > 32 * e.length ? b64pad : t.charAt(o >> 6 * (3 - s) & 63);
        return n
    }
    var passport = passport || window.passport || {}
      , baidu = passport.tangramInst || baidu || window.baidu;
    !function(e) {
        var t, n = document.location.protocol.toLowerCase();
        t = passport && passport.ieVersion && passport.ieVersion() <= 8 ? "https:" === n ? "https://passport.baidu.com" : "http://passport.baidu.com" : "https:" === n ? "https://ppui-static-pc.cdn.bcebos.com" : "http://ppui-static-pc.cdn.bcebos.com",
        e.apiDomain = {
            staticDomain: t
        }
    }(passport);
    var magic = null;
    if ("function" != typeof magic)
        var magic = function() {};
    magic._baiduInstName = magic._baiduInstName || "bdInst_" + (new Date).getTime();
    var baiduInstance = baiduInstance || baidu.baiduInstance || window.baiduInstance;
    window[magic._baiduInstName] = window[magic._baiduInstName] || baiduInstance,
    magic.resourcePath = "",
    magic.skinName = "default",
    magic.version = "1.0.0.0",
    /msie 6/i.test(navigator.userAgent) && document.execCommand("BackgroundImageCache", !1, !0),
    baidu.form = baidu.form || {},
    baidu.url = baidu.url || {},
    baidu.url.escapeSymbol = baidu.url.escapeSymbol || function(e) {
        return String(e).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function(e) {
            return "%" + (256 + e.charCodeAt()).toString(16).substring(1).toUpperCase()
        })
    }
    ,
    baidu.form.json = baidu.form.json || function(e, t) {
        function n(e, t) {
            var n = p[e];
            n ? (n.push || (p[e] = [n]),
            p[e].push(t)) : p[e] = t
        }
        for (var i, o, s, a, r, c, l, d, u = e.elements, t = t || function(e) {
            return e
        }
        , p = {}, g = 0, m = u.length; m > g; g++)
            if (i = u[g],
            s = i.name,
            !i.disabled && s)
                switch (o = i.type,
                a = baidu.url.escapeSymbol(i.value),
                o) {
                case "radio":
                case "checkbox":
                    i.checked && n(s, t(a, s));
                    break;
                case "textarea":
                case "text":
                case "password":
                case "hidden":
                case "file":
                case "select-one":
                    n(s, t(a, s));
                    break;
                case "select-multiple":
                    for (r = i.options,
                    l = r.length,
                    c = 0; l > c; c++)
                        d = r[c],
                        d.selected && n(s, t(d.value, s))
                }
        return p
    }
    ,
    magic.Base = function() {
        baidu.lang.Class.call(this),
        this._ids = {},
        this._eid = this.guid + "__"
    }
    ,
    baidu.lang.inherits(magic.Base, baidu.lang.Class, "magic.Base").extend({
        getElement: function(e) {
            return document.getElementById(this.$getId(e))
        },
        getElements: function() {
            var e = {}
              , t = this._ids;
            for (var n in t)
                e[n] = this.getElement(n);
            return e
        },
        $getId: function(e) {
            return e = baidu.lang.isString(e) ? e : "",
            this._ids[e] || (this._ids[e] = this._eid + e)
        },
        $mappingDom: function(e, t) {
            return baidu.lang.isString(t) ? this._ids[e] = t : t && t.nodeType && (t.id ? this._ids[e] = t.id : t.id = this.$getId(e)),
            this
        },
        $hide: function(e) {
            return ("string" == (typeof e).toLowerCase() || "" === e) && (e = this.getElement(e)),
            e && e.style && (e.style.display = "none",
            e.style.visibility = "hidden"),
            this
        },
        $show: function(e) {
            return ("string" == (typeof e).toLowerCase() || "" === e) && (e = this.getElement(e)),
            e && e.style && (e.style.display = "block",
            e.style.visibility = "visible",
            e.style.opacity = "1"),
            this
        },
        $dispose: function() {
            this.fire("ondispose") && baidu.lang.Class.prototype.dispose.call(this)
        }
    }),
    magic.control = magic.control || {},
    function() {
        function e(e, t) {
            var i, o = e.getAttribute(t), s = !1;
            if (o && (i = o.match(n[0]))) {
                s = {};
                for (var a, r = 0; r < i.length; r++)
                    a = i[r].match(n[1]),
                    !isNaN(a[2]) && (a[2] = +a[2]),
                    n[2].test(a[2]) && (a[2] = a[2].replace(n[3], "$2")),
                    n[4].test(a[2]) && (a[2] = n[5].test(a[2])),
                    s[a[1]] = a[2]
            }
            return s
        }
        function t(t, n) {
            var i = e(t, "tang-event");
            if (i)
                for (var o in i) {
                    var s = i[o].substr(1);
                    s.indexOf("(") < 0 && (s += "()"),
                    baidu.dom(t).on(o, new Function(magic._baiduInstName + "('" + n + "') && " + magic._baiduInstName + "('" + n + "')" + s))
                }
        }
        magic.setup = magic.setup || function(n, i, o) {
            var s = e(n, "tang-param") || {};
            for (var a in o)
                s[a] = o[a];
            var r = new i(s);
            r.$mappingDom("", n),
            t(n, r.guid);
            for (var c = n.getElementsByTagName("*"), a = c.length - 1; a >= 0; a--)
                t(c[a], r.guid);
            return r
        }
        ;
        var n = [/\b[\w\$\-]+\s*:\s*[^;]+/g, /([\w\$\-]+)\s*:\s*([^;]+)\s*/, /\'|\"/, /^\s*(\'|\")([^\1]*)\1\s*/, /^(true|false)\s*$/i, /\btrue\b/i]
    }(),
    passport = passport || {},
    passport.lib = passport.lib || {},
    passport.lib.RSAExport = {},
    function(e) {
        function t(e, t, n) {
            null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
        }
        function n() {
            return new t(null)
        }
        function i(e, t, n, i, o, s) {
            for (; --s >= 0; ) {
                var a = t * this[e++] + n[i] + o;
                o = Math.floor(a / 67108864),
                n[i++] = 67108863 & a
            }
            return o
        }
        function o(e, t, n, i, o, s) {
            for (var a = 32767 & t, r = t >> 15; --s >= 0; ) {
                var c = 32767 & this[e]
                  , l = this[e++] >> 15
                  , d = r * c + l * a;
                c = a * c + ((32767 & d) << 15) + n[i] + (1073741823 & o),
                o = (c >>> 30) + (d >>> 15) + r * l + (o >>> 30),
                n[i++] = 1073741823 & c
            }
            return o
        }
        function s(e, t, n, i, o, s) {
            for (var a = 16383 & t, r = t >> 14; --s >= 0; ) {
                var c = 16383 & this[e]
                  , l = this[e++] >> 14
                  , d = r * c + l * a;
                c = a * c + ((16383 & d) << 14) + n[i] + o,
                o = (c >> 28) + (d >> 14) + r * l,
                n[i++] = 268435455 & c
            }
            return o
        }
        function a(e) {
            return xn.charAt(e)
        }
        function r(e, t) {
            var n = Ln[e.charCodeAt(t)];
            return null == n ? -1 : n
        }
        function c(e) {
            for (var t = this.t - 1; t >= 0; --t)
                e[t] = this[t];
            e.t = this.t,
            e.s = this.s
        }
        function l(e) {
            this.t = 1,
            this.s = 0 > e ? -1 : 0,
            e > 0 ? this[0] = e : -1 > e ? this[0] = e + DV : this.t = 0
        }
        function d(e) {
            var t = n();
            return t.fromInt(e),
            t
        }
        function u(e, n) {
            var i;
            if (16 == n)
                i = 4;
            else if (8 == n)
                i = 3;
            else if (256 == n)
                i = 8;
            else if (2 == n)
                i = 1;
            else if (32 == n)
                i = 5;
            else {
                if (4 != n)
                    return void this.fromRadix(e, n);
                i = 2
            }
            this.t = 0,
            this.s = 0;
            for (var o = e.length, s = !1, a = 0; --o >= 0; ) {
                var c = 8 == i ? 255 & e[o] : r(e, o);
                0 > c ? "-" == e.charAt(o) && (s = !0) : (s = !1,
                0 == a ? this[this.t++] = c : a + i > this.DB ? (this[this.t - 1] |= (c & (1 << this.DB - a) - 1) << a,
                this[this.t++] = c >> this.DB - a) : this[this.t - 1] |= c << a,
                a += i,
                a >= this.DB && (a -= this.DB))
            }
            8 == i && 0 != (128 & e[0]) && (this.s = -1,
            a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
            this.clamp(),
            s && t.ZERO.subTo(this, this)
        }
        function p() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
                --this.t
        }
        function g(e) {
            if (this.s < 0)
                return "-" + this.negate().toString(e);
            var t;
            if (16 == e)
                t = 4;
            else if (8 == e)
                t = 3;
            else if (2 == e)
                t = 1;
            else if (32 == e)
                t = 5;
            else {
                if (4 != e)
                    return this.toRadix(e);
                t = 2
            }
            var n, i = (1 << t) - 1, o = !1, s = "", r = this.t, c = this.DB - r * this.DB % t;
            if (r-- > 0)
                for (c < this.DB && (n = this[r] >> c) > 0 && (o = !0,
                s = a(n)); r >= 0; )
                    t > c ? (n = (this[r] & (1 << c) - 1) << t - c,
                    n |= this[--r] >> (c += this.DB - t)) : (n = this[r] >> (c -= t) & i,
                    0 >= c && (c += this.DB,
                    --r)),
                    n > 0 && (o = !0),
                    o && (s += a(n));
            return o ? s : "0"
        }
        function m() {
            var e = n();
            return t.ZERO.subTo(this, e),
            e
        }
        function f() {
            return this.s < 0 ? this.negate() : this
        }
        function h(e) {
            var t = this.s - e.s;
            if (0 != t)
                return t;
            var n = this.t;
            if (t = n - e.t,
            0 != t)
                return this.s < 0 ? -t : t;
            for (; --n >= 0; )
                if (0 != (t = this[n] - e[n]))
                    return t;
            return 0
        }
        function b(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t,
            n += 16),
            0 != (t = e >> 8) && (e = t,
            n += 8),
            0 != (t = e >> 4) && (e = t,
            n += 4),
            0 != (t = e >> 2) && (e = t,
            n += 2),
            0 != (t = e >> 1) && (e = t,
            n += 1),
            n
        }
        function y() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + b(this[this.t - 1] ^ this.s & this.DM)
        }
        function _(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n)
                t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n)
                t[n] = 0;
            t.t = this.t + e,
            t.s = this.s
        }
        function w(e, t) {
            for (var n = e; n < this.t; ++n)
                t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0),
            t.s = this.s
        }
        function E(e, t) {
            var n, i = e % this.DB, o = this.DB - i, s = (1 << o) - 1, a = Math.floor(e / this.DB), r = this.s << i & this.DM;
            for (n = this.t - 1; n >= 0; --n)
                t[n + a + 1] = this[n] >> o | r,
                r = (this[n] & s) << i;
            for (n = a - 1; n >= 0; --n)
                t[n] = 0;
            t[a] = r,
            t.t = this.t + a + 1,
            t.s = this.s,
            t.clamp()
        }
        function C(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t)
                return void (t.t = 0);
            var i = e % this.DB
              , o = this.DB - i
              , s = (1 << i) - 1;
            t[0] = this[n] >> i;
            for (var a = n + 1; a < this.t; ++a)
                t[a - n - 1] |= (this[a] & s) << o,
                t[a - n] = this[a] >> i;
            i > 0 && (t[this.t - n - 1] |= (this.s & s) << o),
            t.t = this.t - n,
            t.clamp()
        }
        function S(e, t) {
            for (var n = 0, i = 0, o = Math.min(e.t, this.t); o > n; )
                i += this[n] - e[n],
                t[n++] = i & this.DM,
                i >>= this.DB;
            if (e.t < this.t) {
                for (i -= e.s; n < this.t; )
                    i += this[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; n < e.t; )
                    i -= e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                i -= e.s
            }
            t.s = 0 > i ? -1 : 0,
            -1 > i ? t[n++] = this.DV + i : i > 0 && (t[n++] = i),
            t.t = n,
            t.clamp()
        }
        function T(e, n) {
            var i = this.abs()
              , o = e.abs()
              , s = i.t;
            for (n.t = s + o.t; --s >= 0; )
                n[s] = 0;
            for (s = 0; s < o.t; ++s)
                n[s + i.t] = i.am(0, o[s], n, s, 0, i.t);
            n.s = 0,
            n.clamp(),
            this.s != e.s && t.ZERO.subTo(n, n)
        }
        function I(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; )
                e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var i = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, i, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV,
                e[n + t.t + 1] = 1)
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
            e.s = 0,
            e.clamp()
        }
        function D(e, i, o) {
            var s = e.abs();
            if (!(s.t <= 0)) {
                var a = this.abs();
                if (a.t < s.t)
                    return null != i && i.fromInt(0),
                    void (null != o && this.copyTo(o));
                null == o && (o = n());
                var r = n()
                  , c = this.s
                  , l = e.s
                  , d = this.DB - b(s[s.t - 1]);
                d > 0 ? (s.lShiftTo(d, r),
                a.lShiftTo(d, o)) : (s.copyTo(r),
                a.copyTo(o));
                var u = r.t
                  , p = r[u - 1];
                if (0 != p) {
                    var g = p * (1 << this.F1) + (u > 1 ? r[u - 2] >> this.F2 : 0)
                      , m = this.FV / g
                      , f = (1 << this.F1) / g
                      , h = 1 << this.F2
                      , v = o.t
                      , y = v - u
                      , _ = null == i ? n() : i;
                    for (r.dlShiftTo(y, _),
                    o.compareTo(_) >= 0 && (o[o.t++] = 1,
                    o.subTo(_, o)),
                    t.ONE.dlShiftTo(u, _),
                    _.subTo(r, r); r.t < u; )
                        r[r.t++] = 0;
                    for (; --y >= 0; ) {
                        var w = o[--v] == p ? this.DM : Math.floor(o[v] * m + (o[v - 1] + h) * f);
                        if ((o[v] += r.am(0, w, o, y, 0, u)) < w)
                            for (r.dlShiftTo(y, _),
                            o.subTo(_, o); o[v] < --w; )
                                o.subTo(_, o)
                    }
                    null != i && (o.drShiftTo(u, i),
                    c != l && t.ZERO.subTo(i, i)),
                    o.t = u,
                    o.clamp(),
                    d > 0 && o.rShiftTo(d, o),
                    0 > c && t.ZERO.subTo(o, o)
                }
            }
        }
        function k(e) {
            var i = n();
            return this.abs().divRemTo(e, null, i),
            this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i),
            i
        }
        function R(e) {
            this.m = e
        }
        function x(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
        }
        function L(e) {
            return e
        }
        function P(e) {
            e.divRemTo(this.m, null, e)
        }
        function A(e, t, n) {
            e.multiplyTo(t, n),
            this.reduce(n)
        }
        function M(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        function B() {
            if (this.t < 1)
                return 0;
            var e = this[0];
            if (0 == (1 & e))
                return 0;
            var t = 3 & e;
            return t = t * (2 - (15 & e) * t) & 15,
            t = t * (2 - (255 & e) * t) & 255,
            t = t * (2 - ((65535 & e) * t & 65535)) & 65535,
            t = t * (2 - e * t % this.DV) % this.DV,
            t > 0 ? this.DV - t : -t
        }
        function O(e) {
            this.m = e,
            this.mp = e.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << e.DB - 15) - 1,
            this.mt2 = 2 * e.t
        }
        function V(e) {
            var i = n();
            return e.abs().dlShiftTo(this.m.t, i),
            i.divRemTo(this.m, null, i),
            e.s < 0 && i.compareTo(t.ZERO) > 0 && this.m.subTo(i, i),
            i
        }
        function $(e) {
            var t = n();
            return e.copyTo(t),
            this.reduce(t),
            t
        }
        function U(e) {
            for (; e.t <= this.mt2; )
                e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t]
                  , i = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (n = t + this.m.t,
                e[n] += this.m.am(0, i, e, t, 0, this.m.t); e[n] >= e.DV; )
                    e[n] -= e.DV,
                    e[++n]++
            }
            e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }
        function N(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        function q(e, t, n) {
            e.multiplyTo(t, n),
            this.reduce(n)
        }
        function H() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        function F(e, i) {
            if (e > 4294967295 || 1 > e)
                return t.ONE;
            var o = n()
              , s = n()
              , a = i.convert(this)
              , r = b(e) - 1;
            for (a.copyTo(o); --r >= 0; )
                if (i.sqrTo(o, s),
                (e & 1 << r) > 0)
                    i.mulTo(s, a, o);
                else {
                    var c = o;
                    o = s,
                    s = c
                }
            return i.revert(o)
        }
        function W(e, t) {
            var n;
            return n = 256 > e || t.isEven() ? new R(t) : new O(t),
            this.exp(e, n)
        }
        function K() {
            var e = n();
            return this.copyTo(e),
            e
        }
        function j() {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - this.DV;
                if (0 == this.t)
                    return -1
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        function Q() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }
        function J() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }
        function G(e) {
            return Math.floor(Math.LN2 * this.DB / Math.log(e))
        }
        function z() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        function Z(e) {
            if (null == e && (e = 10),
            0 == this.signum() || 2 > e || e > 36)
                return "0";
            var t = this.chunkSize(e)
              , i = Math.pow(e, t)
              , o = d(i)
              , s = n()
              , a = n()
              , r = "";
            for (this.divRemTo(o, s, a); s.signum() > 0; )
                r = (i + a.intValue()).toString(e).substr(1) + r,
                s.divRemTo(o, s, a);
            return a.intValue().toString(e) + r
        }
        function Y(e, n) {
            this.fromInt(0),
            null == n && (n = 10);
            for (var i = this.chunkSize(n), o = Math.pow(n, i), s = !1, a = 0, c = 0, l = 0; l < e.length; ++l) {
                var d = r(e, l);
                0 > d ? "-" == e.charAt(l) && 0 == this.signum() && (s = !0) : (c = n * c + d,
                ++a >= i && (this.dMultiply(o),
                this.dAddOffset(c, 0),
                a = 0,
                c = 0))
            }
            a > 0 && (this.dMultiply(Math.pow(n, a)),
            this.dAddOffset(c, 0)),
            s && t.ZERO.subTo(this, this)
        }
        function X(e, n, i) {
            if ("number" == typeof n)
                if (2 > e)
                    this.fromInt(1);
                else
                    for (this.fromNumber(e, i),
                    this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), rt, this),
                    this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n); )
                        this.dAddOffset(2, 0),
                        this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
            else {
                var o = new Array
                  , s = 7 & e;
                o.length = (e >> 3) + 1,
                n.nextBytes(o),
                s > 0 ? o[0] &= (1 << s) - 1 : o[0] = 0,
                this.fromString(o, 256)
            }
        }
        function et() {
            var e = this.t
              , t = new Array;
            t[0] = this.s;
            var n, i = this.DB - e * this.DB % 8, o = 0;
            if (e-- > 0)
                for (i < this.DB && (n = this[e] >> i) != (this.s & this.DM) >> i && (t[o++] = n | this.s << this.DB - i); e >= 0; )
                    8 > i ? (n = (this[e] & (1 << i) - 1) << 8 - i,
                    n |= this[--e] >> (i += this.DB - 8)) : (n = this[e] >> (i -= 8) & 255,
                    0 >= i && (i += this.DB,
                    --e)),
                    0 != (128 & n) && (n |= -256),
                    0 == o && (128 & this.s) != (128 & n) && ++o,
                    (o > 0 || n != this.s) && (t[o++] = n);
            return t
        }
        function tt(e) {
            return 0 == this.compareTo(e)
        }
        function nt(e) {
            return this.compareTo(e) < 0 ? this : e
        }
        function it(e) {
            return this.compareTo(e) > 0 ? this : e
        }
        function ot(e, t, n) {
            var i, o, s = Math.min(e.t, this.t);
            for (i = 0; s > i; ++i)
                n[i] = t(this[i], e[i]);
            if (e.t < this.t) {
                for (o = e.s & this.DM,
                i = s; i < this.t; ++i)
                    n[i] = t(this[i], o);
                n.t = this.t
            } else {
                for (o = this.s & this.DM,
                i = s; i < e.t; ++i)
                    n[i] = t(o, e[i]);
                n.t = e.t
            }
            n.s = t(this.s, e.s),
            n.clamp()
        }
        function st(e, t) {
            return e & t
        }
        function at(e) {
            var t = n();
            return this.bitwiseTo(e, st, t),
            t
        }
        function rt(e, t) {
            return e | t
        }
        function ct(e) {
            var t = n();
            return this.bitwiseTo(e, rt, t),
            t
        }
        function lt(e, t) {
            return e ^ t
        }
        function dt(e) {
            var t = n();
            return this.bitwiseTo(e, lt, t),
            t
        }
        function ut(e, t) {
            return e & ~t
        }
        function pt(e) {
            var t = n();
            return this.bitwiseTo(e, ut, t),
            t
        }
        function gt() {
            for (var e = n(), t = 0; t < this.t; ++t)
                e[t] = this.DM & ~this[t];
            return e.t = this.t,
            e.s = ~this.s,
            e
        }
        function mt(e) {
            var t = n();
            return 0 > e ? this.rShiftTo(-e, t) : this.lShiftTo(e, t),
            t
        }
        function ft(e) {
            var t = n();
            return 0 > e ? this.lShiftTo(-e, t) : this.rShiftTo(e, t),
            t
        }
        function ht(e) {
            if (0 == e)
                return -1;
            var t = 0;
            return 0 == (65535 & e) && (e >>= 16,
            t += 16),
            0 == (255 & e) && (e >>= 8,
            t += 8),
            0 == (15 & e) && (e >>= 4,
            t += 4),
            0 == (3 & e) && (e >>= 2,
            t += 2),
            0 == (1 & e) && ++t,
            t
        }
        function vt() {
            for (var e = 0; e < this.t; ++e)
                if (0 != this[e])
                    return e * this.DB + ht(this[e]);
            return this.s < 0 ? this.t * this.DB : -1
        }
        function bt(e) {
            for (var t = 0; 0 != e; )
                e &= e - 1,
                ++t;
            return t
        }
        function yt() {
            for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
                e += bt(this[n] ^ t);
            return e
        }
        function _t(e) {
            var t = Math.floor(e / this.DB);
            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
        }
        function wt(e, n) {
            var i = t.ONE.shiftLeft(e);
            return this.bitwiseTo(i, n, i),
            i
        }
        function Et(e) {
            return this.changeBit(e, rt)
        }
        function Ct(e) {
            return this.changeBit(e, ut)
        }
        function St(e) {
            return this.changeBit(e, lt)
        }
        function Tt(e, t) {
            for (var n = 0, i = 0, o = Math.min(e.t, this.t); o > n; )
                i += this[n] + e[n],
                t[n++] = i & this.DM,
                i >>= this.DB;
            if (e.t < this.t) {
                for (i += e.s; n < this.t; )
                    i += this[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                i += this.s
            } else {
                for (i += this.s; n < e.t; )
                    i += e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB;
                i += e.s
            }
            t.s = 0 > i ? -1 : 0,
            i > 0 ? t[n++] = i : -1 > i && (t[n++] = this.DV + i),
            t.t = n,
            t.clamp()
        }
        function It(e) {
            var t = n();
            return this.addTo(e, t),
            t
        }
        function Dt(e) {
            var t = n();
            return this.subTo(e, t),
            t
        }
        function kt(e) {
            var t = n();
            return this.multiplyTo(e, t),
            t
        }
        function Rt() {
            var e = n();
            return this.squareTo(e),
            e
        }
        function xt(e) {
            var t = n();
            return this.divRemTo(e, t, null),
            t
        }
        function Lt(e) {
            var t = n();
            return this.divRemTo(e, null, t),
            t
        }
        function Pt(e) {
            var t = n()
              , i = n();
            return this.divRemTo(e, t, i),
            new Array(t,i)
        }
        function At(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        function Mt(e, t) {
            if (0 != e) {
                for (; this.t <= t; )
                    this[this.t++] = 0;
                for (this[t] += e; this[t] >= this.DV; )
                    this[t] -= this.DV,
                    ++t >= this.t && (this[this.t++] = 0),
                    ++this[t]
            }
        }
        function Bt() {}
        function Ot(e) {
            return e
        }
        function Vt(e, t, n) {
            e.multiplyTo(t, n)
        }
        function $t(e, t) {
            e.squareTo(t)
        }
        function Ut(e) {
            return this.exp(e, new Bt)
        }
        function Nt(e, t, n) {
            var i = Math.min(this.t + e.t, t);
            for (n.s = 0,
            n.t = i; i > 0; )
                n[--i] = 0;
            var o;
            for (o = n.t - this.t; o > i; ++i)
                n[i + this.t] = this.am(0, e[i], n, i, 0, this.t);
            for (o = Math.min(e.t, t); o > i; ++i)
                this.am(0, e[i], n, i, 0, t - i);
            n.clamp()
        }
        function qt(e, t, n) {
            --t;
            var i = n.t = this.t + e.t - t;
            for (n.s = 0; --i >= 0; )
                n[i] = 0;
            for (i = Math.max(t - this.t, 0); i < e.t; ++i)
                n[this.t + i - t] = this.am(t - i, e[i], n, 0, 0, this.t + i - t);
            n.clamp(),
            n.drShiftTo(1, n)
        }
        function Ht(e) {
            this.r2 = n(),
            this.q3 = n(),
            t.ONE.dlShiftTo(2 * e.t, this.r2),
            this.mu = this.r2.divide(e),
            this.m = e
        }
        function Ft(e) {
            if (e.s < 0 || e.t > 2 * this.m.t)
                return e.mod(this.m);
            if (e.compareTo(this.m) < 0)
                return e;
            var t = n();
            return e.copyTo(t),
            this.reduce(t),
            t
        }
        function Wt(e) {
            return e
        }
        function Kt(e) {
            for (e.drShiftTo(this.m.t - 1, this.r2),
            e.t > this.m.t + 1 && (e.t = this.m.t + 1,
            e.clamp()),
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; )
                e.dAddOffset(1, this.m.t + 1);
            for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
                e.subTo(this.m, e)
        }
        function jt(e, t) {
            e.squareTo(t),
            this.reduce(t)
        }
        function Qt(e, t, n) {
            e.multiplyTo(t, n),
            this.reduce(n)
        }
        function Jt(e, t) {
            var i, o, s = e.bitLength(), a = d(1);
            if (0 >= s)
                return a;
            i = 18 > s ? 1 : 48 > s ? 3 : 144 > s ? 4 : 768 > s ? 5 : 6,
            o = 8 > s ? new R(t) : t.isEven() ? new Ht(t) : new O(t);
            var r = new Array
              , c = 3
              , l = i - 1
              , u = (1 << i) - 1;
            if (r[1] = o.convert(this),
            i > 1) {
                var p = n();
                for (o.sqrTo(r[1], p); u >= c; )
                    r[c] = n(),
                    o.mulTo(p, r[c - 2], r[c]),
                    c += 2
            }
            var g, m, f = e.t - 1, h = !0, v = n();
            for (s = b(e[f]) - 1; f >= 0; ) {
                for (s >= l ? g = e[f] >> s - l & u : (g = (e[f] & (1 << s + 1) - 1) << l - s,
                f > 0 && (g |= e[f - 1] >> this.DB + s - l)),
                c = i; 0 == (1 & g); )
                    g >>= 1,
                    --c;
                if ((s -= c) < 0 && (s += this.DB,
                --f),
                h)
                    r[g].copyTo(a),
                    h = !1;
                else {
                    for (; c > 1; )
                        o.sqrTo(a, v),
                        o.sqrTo(v, a),
                        c -= 2;
                    c > 0 ? o.sqrTo(a, v) : (m = a,
                    a = v,
                    v = m),
                    o.mulTo(v, r[g], a)
                }
                for (; f >= 0 && 0 == (e[f] & 1 << s); )
                    o.sqrTo(a, v),
                    m = a,
                    a = v,
                    v = m,
                    --s < 0 && (s = this.DB - 1,
                    --f)
            }
            return o.revert(a)
        }
        function Gt(e) {
            var t = this.s < 0 ? this.negate() : this.clone()
              , n = e.s < 0 ? e.negate() : e.clone();
            if (t.compareTo(n) < 0) {
                var i = t;
                t = n,
                n = i
            }
            var o = t.getLowestSetBit()
              , s = n.getLowestSetBit();
            if (0 > s)
                return t;
            for (s > o && (s = o),
            s > 0 && (t.rShiftTo(s, t),
            n.rShiftTo(s, n)); t.signum() > 0; )
                (o = t.getLowestSetBit()) > 0 && t.rShiftTo(o, t),
                (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                t.compareTo(n) >= 0 ? (t.subTo(n, t),
                t.rShiftTo(1, t)) : (n.subTo(t, n),
                n.rShiftTo(1, n));
            return s > 0 && n.lShiftTo(s, n),
            n
        }
        function zt(e) {
            if (0 >= e)
                return 0;
            var t = this.DV % e
              , n = this.s < 0 ? e - 1 : 0;
            if (this.t > 0)
                if (0 == t)
                    n = this[0] % e;
                else
                    for (var i = this.t - 1; i >= 0; --i)
                        n = (t * n + this[i]) % e;
            return n
        }
        function Zt(e) {
            var n = e.isEven();
            if (this.isEven() && n || 0 == e.signum())
                return t.ZERO;
            for (var i = e.clone(), o = this.clone(), s = d(1), a = d(0), r = d(0), c = d(1); 0 != i.signum(); ) {
                for (; i.isEven(); )
                    i.rShiftTo(1, i),
                    n ? (s.isEven() && a.isEven() || (s.addTo(this, s),
                    a.subTo(e, a)),
                    s.rShiftTo(1, s)) : a.isEven() || a.subTo(e, a),
                    a.rShiftTo(1, a);
                for (; o.isEven(); )
                    o.rShiftTo(1, o),
                    n ? (r.isEven() && c.isEven() || (r.addTo(this, r),
                    c.subTo(e, c)),
                    r.rShiftTo(1, r)) : c.isEven() || c.subTo(e, c),
                    c.rShiftTo(1, c);
                i.compareTo(o) >= 0 ? (i.subTo(o, i),
                n && s.subTo(r, s),
                a.subTo(c, a)) : (o.subTo(i, o),
                n && r.subTo(s, r),
                c.subTo(a, c))
            }
            return 0 != o.compareTo(t.ONE) ? t.ZERO : c.compareTo(e) >= 0 ? c.subtract(e) : c.signum() < 0 ? (c.addTo(e, c),
            c.signum() < 0 ? c.add(e) : c) : c
        }
        function Yt(e) {
            var t, n = this.abs();
            if (1 == n.t && n[0] <= Pn[Pn.length - 1]) {
                for (t = 0; t < Pn.length; ++t)
                    if (n[0] == Pn[t])
                        return !0;
                return !1
            }
            if (n.isEven())
                return !1;
            for (t = 1; t < Pn.length; ) {
                for (var i = Pn[t], o = t + 1; o < Pn.length && An > i; )
                    i *= Pn[o++];
                for (i = n.modInt(i); o > t; )
                    if (i % Pn[t++] == 0)
                        return !1
            }
            return n.millerRabin(e)
        }
        function Xt(e) {
            var i = this.subtract(t.ONE)
              , o = i.getLowestSetBit();
            if (0 >= o)
                return !1;
            var s = i.shiftRight(o);
            e = e + 1 >> 1,
            e > Pn.length && (e = Pn.length);
            for (var a = n(), r = 0; e > r; ++r) {
                a.fromInt(Pn[Math.floor(Math.random() * Pn.length)]);
                var c = a.modPow(s, this);
                if (0 != c.compareTo(t.ONE) && 0 != c.compareTo(i)) {
                    for (var l = 1; l++ < o && 0 != c.compareTo(i); )
                        if (c = c.modPowInt(2, this),
                        0 == c.compareTo(t.ONE))
                            return !1;
                    if (0 != c.compareTo(i))
                        return !1
                }
            }
            return !0
        }
        function en() {
            this.i = 0,
            this.j = 0,
            this.S = new Array
        }
        function tn(e) {
            var t, n, i;
            for (t = 0; 256 > t; ++t)
                this.S[t] = t;
            for (n = 0,
            t = 0; 256 > t; ++t)
                n = n + this.S[t] + e[t % e.length] & 255,
                i = this.S[t],
                this.S[t] = this.S[n],
                this.S[n] = i;
            this.i = 0,
            this.j = 0
        }
        function nn() {
            var e;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            e = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = e,
            this.S[e + this.S[this.i] & 255]
        }
        function on() {
            return new en
        }
        function sn(e) {
            Bn[On++] ^= 255 & e,
            Bn[On++] ^= e >> 8 & 255,
            Bn[On++] ^= e >> 16 & 255,
            Bn[On++] ^= e >> 24 & 255,
            On >= Vn && (On -= Vn)
        }
        function an() {
            sn((new Date).getTime())
        }
        function rn() {
            if (null == Mn) {
                for (an(),
                Mn = on(),
                Mn.init(Bn),
                On = 0; On < Bn.length; ++On)
                    Bn[On] = 0;
                On = 0
            }
            return Mn.next()
        }
        function cn(e) {
            var t;
            for (t = 0; t < e.length; ++t)
                e[t] = rn()
        }
        function ln() {}
        function dn(e, n) {
            return new t(e,n)
        }
        function un(e, n) {
            if (n < e.length + 11)
                return console.error("Message too long for RSA"),
                null;
            for (var i = new Array, o = e.length - 1; o >= 0 && n > 0; ) {
                var s = e.charCodeAt(o--);
                128 > s ? i[--n] = s : s > 127 && 2048 > s ? (i[--n] = 63 & s | 128,
                i[--n] = s >> 6 | 192) : (i[--n] = 63 & s | 128,
                i[--n] = s >> 6 & 63 | 128,
                i[--n] = s >> 12 | 224)
            }
            i[--n] = 0;
            for (var a = new ln, r = new Array; n > 2; ) {
                for (r[0] = 0; 0 == r[0]; )
                    a.nextBytes(r);
                i[--n] = r[0]
            }
            return i[--n] = 2,
            i[--n] = 0,
            new t(i)
        }
        function pn() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
        function gn(e, t) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = dn(e, 16),
            this.e = parseInt(t, 16)) : console.error("Invalid RSA public key")
        }
        function mn(e) {
            return e.modPowInt(this.e, this.n)
        }
        function fn(e) {
            var t = un(e, this.n.bitLength() + 7 >> 3);
            if (null == t)
                return null;
            var n = this.doPublic(t);
            if (null == n)
                return null;
            var i = n.toString(16);
            return 0 == (1 & i.length) ? i : "0" + i
        }
        function hn(e, t) {
            for (var n = e.toByteArray(), i = 0; i < n.length && 0 == n[i]; )
                ++i;
            if (n.length - i != t - 1 || 2 != n[i])
                return null;
            for (++i; 0 != n[i]; )
                if (++i >= n.length)
                    return null;
            for (var o = ""; ++i < n.length; ) {
                var s = 255 & n[i];
                128 > s ? o += String.fromCharCode(s) : s > 191 && 224 > s ? (o += String.fromCharCode((31 & s) << 6 | 63 & n[i + 1]),
                ++i) : (o += String.fromCharCode((15 & s) << 12 | (63 & n[i + 1]) << 6 | 63 & n[i + 2]),
                i += 2)
            }
            return o
        }
        function vn(e, t, n) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = dn(e, 16),
            this.e = parseInt(t, 16),
            this.d = dn(n, 16)) : console.error("Invalid RSA private key")
        }
        function bn(e, t, n, i, o, s, a, r) {
            null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = dn(e, 16),
            this.e = parseInt(t, 16),
            this.d = dn(n, 16),
            this.p = dn(i, 16),
            this.q = dn(o, 16),
            this.dmp1 = dn(s, 16),
            this.dmq1 = dn(a, 16),
            this.coeff = dn(r, 16)) : console.error("Invalid RSA private key")
        }
        function yn(e, n) {
            var i = new ln
              , o = e >> 1;
            this.e = parseInt(n, 16);
            for (var s = new t(n,16); ; ) {
                for (; this.p = new t(e - o,1,i),
                0 != this.p.subtract(t.ONE).gcd(s).compareTo(t.ONE) || !this.p.isProbablePrime(10); )
                    ;
                for (; this.q = new t(o,1,i),
                0 != this.q.subtract(t.ONE).gcd(s).compareTo(t.ONE) || !this.q.isProbablePrime(10); )
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var a = this.p;
                    this.p = this.q,
                    this.q = a
                }
                var r = this.p.subtract(t.ONE)
                  , c = this.q.subtract(t.ONE)
                  , l = r.multiply(c);
                if (0 == l.gcd(s).compareTo(t.ONE)) {
                    this.n = this.p.multiply(this.q),
                    this.d = s.modInverse(l),
                    this.dmp1 = this.d.mod(r),
                    this.dmq1 = this.d.mod(c),
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        function _n(e) {
            if (null == this.p || null == this.q)
                return e.modPow(this.d, this.n);
            for (var t = e.mod(this.p).modPow(this.dmp1, this.p), n = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(n) < 0; )
                t = t.add(this.p);
            return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
        }
        function wn(e) {
            var t = dn(e, 16)
              , n = this.doPrivate(t);
            return null == n ? null : hn(n, this.n.bitLength() + 7 >> 3)
        }
        function En(e) {
            var t, n, i = "";
            for (t = 0; t + 3 <= e.length; t += 3)
                n = parseInt(e.substring(t, t + 3), 16),
                i += Nn.charAt(n >> 6) + Nn.charAt(63 & n);
            for (t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16),
            i += Nn.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16),
            i += Nn.charAt(n >> 2) + Nn.charAt((3 & n) << 4)); (3 & i.length) > 0; )
                i += qn;
            return i
        }
        function Cn(e) {
            var t, n, i = "", o = 0;
            for (t = 0; t < e.length && e.charAt(t) != qn; ++t)
                v = Nn.indexOf(e.charAt(t)),
                0 > v || (0 == o ? (i += a(v >> 2),
                n = 3 & v,
                o = 1) : 1 == o ? (i += a(n << 2 | v >> 4),
                n = 15 & v,
                o = 2) : 2 == o ? (i += a(n),
                i += a(v >> 2),
                n = 3 & v,
                o = 3) : (i += a(n << 2 | v >> 4),
                i += a(15 & v),
                o = 0));
            return 1 == o && (i += a(n << 2)),
            i
        }
        var Sn, Tn = 0xdeadbeefcafe, In = 15715070 == (16777215 & Tn);
        In && "Microsoft Internet Explorer" == navigator.appName ? (t.prototype.am = o,
        Sn = 30) : In && "Netscape" != navigator.appName ? (t.prototype.am = i,
        Sn = 26) : (t.prototype.am = s,
        Sn = 28),
        t.prototype.DB = Sn,
        t.prototype.DM = (1 << Sn) - 1,
        t.prototype.DV = 1 << Sn;
        var Dn = 52;
        t.prototype.FV = Math.pow(2, Dn),
        t.prototype.F1 = Dn - Sn,
        t.prototype.F2 = 2 * Sn - Dn;
        var kn, Rn, xn = "0123456789abcdefghijklmnopqrstuvwxyz", Ln = new Array;
        for (kn = "0".charCodeAt(0),
        Rn = 0; 9 >= Rn; ++Rn)
            Ln[kn++] = Rn;
        for (kn = "a".charCodeAt(0),
        Rn = 10; 36 > Rn; ++Rn)
            Ln[kn++] = Rn;
        for (kn = "A".charCodeAt(0),
        Rn = 10; 36 > Rn; ++Rn)
            Ln[kn++] = Rn;
        R.prototype.convert = x,
        R.prototype.revert = L,
        R.prototype.reduce = P,
        R.prototype.mulTo = A,
        R.prototype.sqrTo = M,
        O.prototype.convert = V,
        O.prototype.revert = $,
        O.prototype.reduce = U,
        O.prototype.mulTo = q,
        O.prototype.sqrTo = N,
        t.prototype.copyTo = c,
        t.prototype.fromInt = l,
        t.prototype.fromString = u,
        t.prototype.clamp = p,
        t.prototype.dlShiftTo = _,
        t.prototype.drShiftTo = w,
        t.prototype.lShiftTo = E,
        t.prototype.rShiftTo = C,
        t.prototype.subTo = S,
        t.prototype.multiplyTo = T,
        t.prototype.squareTo = I,
        t.prototype.divRemTo = D,
        t.prototype.invDigit = B,
        t.prototype.isEven = H,
        t.prototype.exp = F,
        t.prototype.toString = g,
        t.prototype.negate = m,
        t.prototype.abs = f,
        t.prototype.compareTo = h,
        t.prototype.bitLength = y,
        t.prototype.mod = k,
        t.prototype.modPowInt = W,
        t.ZERO = d(0),
        t.ONE = d(1),
        Bt.prototype.convert = Ot,
        Bt.prototype.revert = Ot,
        Bt.prototype.mulTo = Vt,
        Bt.prototype.sqrTo = $t,
        Ht.prototype.convert = Ft,
        Ht.prototype.revert = Wt,
        Ht.prototype.reduce = Kt,
        Ht.prototype.mulTo = Qt,
        Ht.prototype.sqrTo = jt;
        var Pn = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
          , An = (1 << 26) / Pn[Pn.length - 1];
        t.prototype.chunkSize = G,
        t.prototype.toRadix = Z,
        t.prototype.fromRadix = Y,
        t.prototype.fromNumber = X,
        t.prototype.bitwiseTo = ot,
        t.prototype.changeBit = wt,
        t.prototype.addTo = Tt,
        t.prototype.dMultiply = At,
        t.prototype.dAddOffset = Mt,
        t.prototype.multiplyLowerTo = Nt,
        t.prototype.multiplyUpperTo = qt,
        t.prototype.modInt = zt,
        t.prototype.millerRabin = Xt,
        t.prototype.clone = K,
        t.prototype.intValue = j,
        t.prototype.byteValue = Q,
        t.prototype.shortValue = J,
        t.prototype.signum = z,
        t.prototype.toByteArray = et,
        t.prototype.equals = tt,
        t.prototype.min = nt,
        t.prototype.max = it,
        t.prototype.and = at,
        t.prototype.or = ct,
        t.prototype.xor = dt,
        t.prototype.andNot = pt,
        t.prototype.not = gt,
        t.prototype.shiftLeft = mt,
        t.prototype.shiftRight = ft,
        t.prototype.getLowestSetBit = vt,
        t.prototype.bitCount = yt,
        t.prototype.testBit = _t,
        t.prototype.setBit = Et,
        t.prototype.clearBit = Ct,
        t.prototype.flipBit = St,
        t.prototype.add = It,
        t.prototype.subtract = Dt,
        t.prototype.multiply = kt,
        t.prototype.divide = xt,
        t.prototype.remainder = Lt,
        t.prototype.divideAndRemainder = Pt,
        t.prototype.modPow = Jt,
        t.prototype.modInverse = Zt,
        t.prototype.pow = Ut,
        t.prototype.gcd = Gt,
        t.prototype.isProbablePrime = Yt,
        t.prototype.square = Rt,
        en.prototype.init = tn,
        en.prototype.next = nn;
        var Mn, Bn, On, Vn = 256;
        if (null == Bn) {
            Bn = new Array,
            On = 0;
            var $n;
            if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random) {
                var Un = window.crypto.random(32);
                for ($n = 0; $n < Un.length; ++$n)
                    Bn[On++] = 255 & Un.charCodeAt($n)
            }
            for (; Vn > On; )
                $n = Math.floor(65536 * Math.random()),
                Bn[On++] = $n >>> 8,
                Bn[On++] = 255 & $n;
            On = 0,
            an()
        }
        ln.prototype.nextBytes = cn,
        pn.prototype.doPublic = mn,
        pn.prototype.setPublic = gn,
        pn.prototype.encrypt = fn,
        pn.prototype.doPrivate = _n,
        pn.prototype.setPrivate = vn,
        pn.prototype.setPrivateEx = bn,
        pn.prototype.generate = yn,
        pn.prototype.decrypt = wn,
        function() {
            var e = function(e, i, o) {
                var s = new ln
                  , a = e >> 1;
                this.e = parseInt(i, 16);
                var r = new t(i,16)
                  , c = this
                  , l = function() {
                    var i = function() {
                        if (c.p.compareTo(c.q) <= 0) {
                            var e = c.p;
                            c.p = c.q,
                            c.q = e
                        }
                        var n = c.p.subtract(t.ONE)
                          , i = c.q.subtract(t.ONE)
                          , s = n.multiply(i);
                        0 == s.gcd(r).compareTo(t.ONE) ? (c.n = c.p.multiply(c.q),
                        c.d = r.modInverse(s),
                        c.dmp1 = c.d.mod(n),
                        c.dmq1 = c.d.mod(i),
                        c.coeff = c.q.modInverse(c.p),
                        setTimeout(function() {
                            o()
                        }, 0)) : setTimeout(l, 0)
                    }
                      , d = function() {
                        c.q = n(),
                        c.q.fromNumberAsync(a, 1, s, function() {
                            c.q.subtract(t.ONE).gcda(r, function(e) {
                                0 == e.compareTo(t.ONE) && c.q.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(d, 0)
                            })
                        })
                    }
                      , u = function() {
                        c.p = n(),
                        c.p.fromNumberAsync(e - a, 1, s, function() {
                            c.p.subtract(t.ONE).gcda(r, function(e) {
                                0 == e.compareTo(t.ONE) && c.p.isProbablePrime(10) ? setTimeout(d, 0) : setTimeout(u, 0)
                            })
                        })
                    };
                    setTimeout(u, 0)
                };
                setTimeout(l, 0)
            };
            pn.prototype.generateAsync = e;
            var i = function(e, t) {
                var n = this.s < 0 ? this.negate() : this.clone()
                  , i = e.s < 0 ? e.negate() : e.clone();
                if (n.compareTo(i) < 0) {
                    var o = n;
                    n = i,
                    i = o
                }
                var s = n.getLowestSetBit()
                  , a = i.getLowestSetBit();
                if (0 > a)
                    return void t(n);
                a > s && (a = s),
                a > 0 && (n.rShiftTo(a, n),
                i.rShiftTo(a, i));
                var r = function() {
                    (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n),
                    (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i),
                    n.compareTo(i) >= 0 ? (n.subTo(i, n),
                    n.rShiftTo(1, n)) : (i.subTo(n, i),
                    i.rShiftTo(1, i)),
                    n.signum() > 0 ? setTimeout(r, 0) : (a > 0 && i.lShiftTo(a, i),
                    setTimeout(function() {
                        t(i)
                    }, 0))
                };
                setTimeout(r, 10)
            };
            t.prototype.gcda = i;
            var o = function(e, n, i, o) {
                if ("number" == typeof n)
                    if (2 > e)
                        this.fromInt(1);
                    else {
                        this.fromNumber(e, i),
                        this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), rt, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        var s = this
                          , a = function() {
                            s.dAddOffset(2, 0),
                            s.bitLength() > e && s.subTo(t.ONE.shiftLeft(e - 1), s),
                            s.isProbablePrime(n) ? setTimeout(function() {
                                o()
                            }, 0) : setTimeout(a, 0)
                        };
                        setTimeout(a, 0)
                    }
                else {
                    var r = new Array
                      , c = 7 & e;
                    r.length = (e >> 3) + 1,
                    n.nextBytes(r),
                    c > 0 ? r[0] &= (1 << c) - 1 : r[0] = 0,
                    this.fromString(r, 256)
                }
            };
            t.prototype.fromNumberAsync = o
        }();
        var Nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
          , qn = "="
          , Hn = Hn || {};
        Hn.env = Hn.env || {};
        var Fn = Hn
          , Wn = Object.prototype
          , Kn = "[object Function]"
          , jn = ["toString", "valueOf"];
        Hn.env.parseUA = function(e) {
            var t, n = function(e) {
                var t = 0;
                return parseFloat(e.replace(/\./g, function() {
                    return 1 == t++ ? "" : "."
                }))
            }, i = navigator, o = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: i && i.cajaVersion,
                secure: !1,
                os: null
            }, s = e || navigator && navigator.userAgent, a = window && window.location, r = a && a.href;
            return o.secure = r && 0 === r.toLowerCase().indexOf("https"),
            s && (/windows|win32/i.test(s) ? o.os = "windows" : /macintosh/i.test(s) ? o.os = "macintosh" : /rhino/i.test(s) && (o.os = "rhino"),
            /KHTML/.test(s) && (o.webkit = 1),
            t = s.match(/AppleWebKit\/([^\s]*)/),
            t && t[1] && (o.webkit = n(t[1]),
            / Mobile\//.test(s) ? (o.mobile = "Apple",
            t = s.match(/OS ([^\s]*)/),
            t && t[1] && (t = n(t[1].replace("_", "."))),
            o.ios = t,
            o.ipad = o.ipod = o.iphone = 0,
            t = s.match(/iPad|iPod|iPhone/),
            t && t[0] && (o[t[0].toLowerCase()] = o.ios)) : (t = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/),
            t && (o.mobile = t[0]),
            /webOS/.test(s) && (o.mobile = "WebOS",
            t = s.match(/webOS\/([^\s]*);/),
            t && t[1] && (o.webos = n(t[1]))),
            / Android/.test(s) && (o.mobile = "Android",
            t = s.match(/Android ([^\s]*);/),
            t && t[1] && (o.android = n(t[1])))),
            t = s.match(/Chrome\/([^\s]*)/),
            t && t[1] ? o.chrome = n(t[1]) : (t = s.match(/AdobeAIR\/([^\s]*)/),
            t && (o.air = t[0]))),
            o.webkit || (t = s.match(/Opera[\s\/]([^\s]*)/),
            t && t[1] ? (o.opera = n(t[1]),
            t = s.match(/Version\/([^\s]*)/),
            t && t[1] && (o.opera = n(t[1])),
            t = s.match(/Opera Mini[^;]*/),
            t && (o.mobile = t[0])) : (t = s.match(/MSIE\s([^;]*)/),
            t && t[1] ? o.ie = n(t[1]) : (t = s.match(/Gecko\/([^\s]*)/),
            t && (o.gecko = 1,
            t = s.match(/rv:([^\s\)]*)/),
            t && t[1] && (o.gecko = n(t[1]))))))),
            o
        }
        ,
        Hn.env.ua = Hn.env.parseUA(),
        Hn.isFunction = function(e) {
            return "function" == typeof e || Wn.toString.apply(e) === Kn
        }
        ,
        Hn._IEEnumFix = Hn.env.ua.ie ? function(e, t) {
            var n, i, o;
            for (n = 0; n < jn.length; n += 1)
                i = jn[n],
                o = t[i],
                Fn.isFunction(o) && o != Wn[i] && (e[i] = o)
        }
        : function() {}
        ,
        Hn.extend = function(e, t, n) {
            if (!t || !e)
                throw new Error("extend failed, please check that all dependencies are included.");
            var i, o = function() {};
            if (o.prototype = t.prototype,
            e.prototype = new o,
            e.prototype.constructor = e,
            e.superclass = t.prototype,
            t.prototype.constructor == Wn.constructor && (t.prototype.constructor = t),
            n) {
                for (i in n)
                    Fn.hasOwnProperty(n, i) && (e.prototype[i] = n[i]);
                Fn._IEEnumFix(e.prototype, n)
            }
        }
        ,
        "undefined" != typeof KJUR && KJUR || (KJUR = {}),
        "undefined" != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
        KJUR.asn1.ASN1Util = new function() {
            this.integerToByteHex = function(e) {
                var t = e.toString(16);
                return t.length % 2 == 1 && (t = "0" + t),
                t
            }
            ,
            this.bigIntToMinTwosComplementsHex = function(e) {
                var n = e.toString(16);
                if ("-" != n.substr(0, 1))
                    n.length % 2 == 1 ? n = "0" + n : n.match(/^[0-7]/) || (n = "00" + n);
                else {
                    var i = n.substr(1)
                      , o = i.length;
                    o % 2 == 1 ? o += 1 : n.match(/^[0-7]/) || (o += 2);
                    for (var s = "", a = 0; o > a; a++)
                        s += "f";
                    var r = new t(s,16)
                      , c = r.xor(e).add(t.ONE);
                    n = c.toString(16).replace(/^-/, "")
                }
                return n
            }
            ,
            this.getPEMStringFromHex = function(e, t) {
                var n = CryptoJS.enc.Hex.parse(e)
                  , i = CryptoJS.enc.Base64.stringify(n)
                  , o = i.replace(/(.{64})/g, "$1\r\n");
                return o = o.replace(/\r\n$/, ""),
                "-----BEGIN " + t + "-----\r\n" + o + "\r\n-----END " + t + "-----\r\n"
            }
        }
        ,
        KJUR.asn1.ASN1Object = function() {
            var e = "";
            this.getLengthHexFromValue = function() {
                if ("undefined" == typeof this.hV || null == this.hV)
                    throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1)
                    throw "value hex must be even length: n=" + e.length + ",v=" + this.hV;
                var t = this.hV.length / 2
                  , n = t.toString(16);
                if (n.length % 2 == 1 && (n = "0" + n),
                128 > t)
                    return n;
                var i = n.length / 2;
                if (i > 15)
                    throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
                var o = 128 + i;
                return o.toString(16) + n
            }
            ,
            this.getEncodedHex = function() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                this.hL = this.getLengthHexFromValue(),
                this.hTLV = this.hT + this.hL + this.hV,
                this.isModified = !1),
                this.hTLV
            }
            ,
            this.getValueHex = function() {
                return this.getEncodedHex(),
                this.hV
            }
            ,
            this.getFreshValueHex = function() {
                return ""
            }
        }
        ,
        KJUR.asn1.DERAbstractString = function(e) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = e,
                this.hV = stohex(this.s)
            }
            ,
            this.setStringHex = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = e
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.str ? this.setString(e.str) : "undefined" != typeof e.hex && this.setStringHex(e.hex))
        }
        ,
        Hn.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractTime = function() {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this),
            this.localDateToUTC = function(e) {
                utc = e.getTime() + 6e4 * e.getTimezoneOffset();
                var t = new Date(utc);
                return t
            }
            ,
            this.formatDate = function(e, t) {
                var n = this.zeroPadding
                  , i = this.localDateToUTC(e)
                  , o = String(i.getFullYear());
                "utc" == t && (o = o.substr(2, 2));
                var s = n(String(i.getMonth() + 1), 2)
                  , a = n(String(i.getDate()), 2)
                  , r = n(String(i.getHours()), 2)
                  , c = n(String(i.getMinutes()), 2)
                  , l = n(String(i.getSeconds()), 2);
                return o + s + a + r + c + l + "Z"
            }
            ,
            this.zeroPadding = function(e, t) {
                return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
            }
            ,
            this.getString = function() {
                return this.s
            }
            ,
            this.setString = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = e,
                this.hV = stohex(this.s)
            }
            ,
            this.setByDateValue = function(e, t, n, i, o, s) {
                var a = new Date(Date.UTC(e, t - 1, n, i, o, s, 0));
                this.setByDate(a)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
        }
        ,
        Hn.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERAbstractStructured = function(e) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
            this.setByASN1ObjectArray = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array = e
            }
            ,
            this.appendASN1Object = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.asn1Array.push(e)
            }
            ,
            this.asn1Array = new Array,
            "undefined" != typeof e && "undefined" != typeof e.array && (this.asn1Array = e.array)
        }
        ,
        Hn.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBoolean = function() {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
        }
        ,
        Hn.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERInteger = function(e) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
            }
            ,
            this.setByInteger = function(e) {
                var n = new t(String(e),10);
                this.setByBigInteger(n)
            }
            ,
            this.setValueHex = function(e) {
                this.hV = e
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.bigint ? this.setByBigInteger(e.bigint) : "undefined" != typeof e["int"] ? this.setByInteger(e["int"]) : "undefined" != typeof e.hex && this.setValueHex(e.hex))
        }
        ,
        Hn.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERBitString = function(e) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.hV = e
            }
            ,
            this.setUnusedBitsAndHexValue = function(e, t) {
                if (0 > e || e > 7)
                    throw "unused bits shall be from 0 to 7: u = " + e;
                var n = "0" + e;
                this.hTLV = null,
                this.isModified = !0,
                this.hV = n + t
            }
            ,
            this.setByBinaryString = function(e) {
                e = e.replace(/0+$/, "");
                var t = 8 - e.length % 8;
                8 == t && (t = 0);
                for (var n = 0; t >= n; n++)
                    e += "0";
                for (var i = "", n = 0; n < e.length - 1; n += 8) {
                    var o = e.substr(n, 8)
                      , s = parseInt(o, 2).toString(16);
                    1 == s.length && (s = "0" + s),
                    i += s
                }
                this.hTLV = null,
                this.isModified = !0,
                this.hV = "0" + t + i
            }
            ,
            this.setByBooleanArray = function(e) {
                for (var t = "", n = 0; n < e.length; n++)
                    t += 1 == e[n] ? "1" : "0";
                this.setByBinaryString(t)
            }
            ,
            this.newFalseArray = function(e) {
                for (var t = new Array(e), n = 0; e > n; n++)
                    t[n] = !1;
                return t
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : "undefined" != typeof e.bin ? this.setByBinaryString(e.bin) : "undefined" != typeof e.array && this.setByBooleanArray(e.array))
        }
        ,
        Hn.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
        KJUR.asn1.DEROctetString = function(e) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, e),
            this.hT = "04"
        }
        ,
        Hn.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNull = function() {
            KJUR.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
        }
        ,
        Hn.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERObjectIdentifier = function(e) {
            var n = function(e) {
                var t = e.toString(16);
                return 1 == t.length && (t = "0" + t),
                t
            }
              , i = function(e) {
                var i = ""
                  , o = new t(e,10)
                  , s = o.toString(2)
                  , a = 7 - s.length % 7;
                7 == a && (a = 0);
                for (var r = "", c = 0; a > c; c++)
                    r += "0";
                s = r + s;
                for (var c = 0; c < s.length - 1; c += 7) {
                    var l = s.substr(c, 7);
                    c != s.length - 7 && (l = "1" + l),
                    i += n(parseInt(l, 2))
                }
                return i
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = e
            }
            ,
            this.setValueOidString = function(e) {
                if (!e.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + e;
                var t = ""
                  , o = e.split(".")
                  , s = 40 * parseInt(o[0]) + parseInt(o[1]);
                t += n(s),
                o.splice(0, 2);
                for (var a = 0; a < o.length; a++)
                    t += i(o[a]);
                this.hTLV = null,
                this.isModified = !0,
                this.s = null,
                this.hV = t
            }
            ,
            this.setValueName = function(e) {
                if ("undefined" == typeof KJUR.asn1.x509.OID.name2oidList[e])
                    throw "DERObjectIdentifier oidName undefined: " + e;
                var t = KJUR.asn1.x509.OID.name2oidList[e];
                this.setValueOidString(t)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.oid ? this.setValueOidString(e.oid) : "undefined" != typeof e.hex ? this.setValueHex(e.hex) : "undefined" != typeof e.name && this.setValueName(e.name))
        }
        ,
        Hn.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
        KJUR.asn1.DERUTF8String = function(e) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, e),
            this.hT = "0c"
        }
        ,
        Hn.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERNumericString = function(e) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, e),
            this.hT = "12"
        }
        ,
        Hn.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERPrintableString = function(e) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, e),
            this.hT = "13"
        }
        ,
        Hn.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERTeletexString = function(e) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, e),
            this.hT = "14"
        }
        ,
        Hn.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERIA5String = function(e) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, e),
            this.hT = "16"
        }
        ,
        Hn.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
        KJUR.asn1.DERUTCTime = function(e) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, e),
            this.hT = "17",
            this.setByDate = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = e,
                this.s = this.formatDate(this.date, "utc"),
                this.hV = stohex(this.s)
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.str ? this.setString(e.str) : "undefined" != typeof e.hex ? this.setStringHex(e.hex) : "undefined" != typeof e.date && this.setByDate(e.date))
        }
        ,
        Hn.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERGeneralizedTime = function(e) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, e),
            this.hT = "18",
            this.setByDate = function(e) {
                this.hTLV = null,
                this.isModified = !0,
                this.date = e,
                this.s = this.formatDate(this.date, "gen"),
                this.hV = stohex(this.s)
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.str ? this.setString(e.str) : "undefined" != typeof e.hex ? this.setStringHex(e.hex) : "undefined" != typeof e.date && this.setByDate(e.date))
        }
        ,
        Hn.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
        KJUR.asn1.DERSequence = function(e) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, e),
            this.hT = "30",
            this.getFreshValueHex = function() {
                for (var e = "", t = 0; t < this.asn1Array.length; t++) {
                    var n = this.asn1Array[t];
                    e += n.getEncodedHex()
                }
                return this.hV = e,
                this.hV
            }
        }
        ,
        Hn.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERSet = function(e) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, e),
            this.hT = "31",
            this.getFreshValueHex = function() {
                for (var e = new Array, t = 0; t < this.asn1Array.length; t++) {
                    var n = this.asn1Array[t];
                    e.push(n.getEncodedHex())
                }
                return e.sort(),
                this.hV = e.join(""),
                this.hV
            }
        }
        ,
        Hn.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
        KJUR.asn1.DERTaggedObject = function(e) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function(e, t, n) {
                this.hT = t,
                this.isExplicit = e,
                this.asn1Object = n,
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                this.hTLV = null,
                this.isModified = !0) : (this.hV = null,
                this.hTLV = n.getEncodedHex(),
                this.hTLV = this.hTLV.replace(/^../, t),
                this.isModified = !1)
            }
            ,
            this.getFreshValueHex = function() {
                return this.hV
            }
            ,
            "undefined" != typeof e && ("undefined" != typeof e.tag && (this.hT = e.tag),
            "undefined" != typeof e.explicit && (this.isExplicit = e.explicit),
            "undefined" != typeof e.obj && (this.asn1Object = e.obj,
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }
        ,
        Hn.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object),
        function(e) {
            "use strict";
            var t, n = {};
            n.decode = function(n) {
                var i;
                if (t === e) {
                    var o = "0123456789ABCDEF"
                      , s = " \f\n\r	 \u2028\u2029";
                    for (t = [],
                    i = 0; 16 > i; ++i)
                        t[o.charAt(i)] = i;
                    for (o = o.toLowerCase(),
                    i = 10; 16 > i; ++i)
                        t[o.charAt(i)] = i;
                    for (i = 0; i < s.length; ++i)
                        t[s.charAt(i)] = -1
                }
                var a = []
                  , r = 0
                  , c = 0;
                for (i = 0; i < n.length; ++i) {
                    var l = n.charAt(i);
                    if ("=" == l)
                        break;
                    if (l = t[l],
                    -1 != l) {
                        if (l === e)
                            throw "Illegal character at offset " + i;
                        r |= l,
                        ++c >= 2 ? (a[a.length] = r,
                        r = 0,
                        c = 0) : r <<= 4
                    }
                }
                if (c)
                    throw "Hex encoding incomplete: 4 bits missing";
                return a
            }
            ,
            window.Hex = n
        }(),
        function(e) {
            "use strict";
            var t, n = {};
            n.decode = function(n) {
                var i;
                if (t === e) {
                    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                      , s = "= \f\n\r	 \u2028\u2029";
                    for (t = [],
                    i = 0; 64 > i; ++i)
                        t[o.charAt(i)] = i;
                    for (i = 0; i < s.length; ++i)
                        t[s.charAt(i)] = -1
                }
                var a = []
                  , r = 0
                  , c = 0;
                for (i = 0; i < n.length; ++i) {
                    var l = n.charAt(i);
                    if ("=" == l)
                        break;
                    if (l = t[l],
                    -1 != l) {
                        if (l === e)
                            throw "Illegal character at offset " + i;
                        r |= l,
                        ++c >= 4 ? (a[a.length] = r >> 16,
                        a[a.length] = r >> 8 & 255,
                        a[a.length] = 255 & r,
                        r = 0,
                        c = 0) : r <<= 6
                    }
                }
                switch (c) {
                case 1:
                    throw "Base64 encoding incomplete: at least 2 bits missing";
                case 2:
                    a[a.length] = r >> 10;
                    break;
                case 3:
                    a[a.length] = r >> 16,
                    a[a.length] = r >> 8 & 255
                }
                return a
            }
            ,
            n.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            n.unarmor = function(e) {
                var t = n.re.exec(e);
                if (t)
                    if (t[1])
                        e = t[1];
                    else {
                        if (!t[2])
                            throw "RegExp out of sync";
                        e = t[2]
                    }
                return n.decode(e)
            }
            ,
            window.Base64 = n
        }(),
        function(e) {
            "use strict";
            function t(e, n) {
                e instanceof t ? (this.enc = e.enc,
                this.pos = e.pos) : (this.enc = e,
                this.pos = n)
            }
            function n(e, t, n, i, o) {
                this.stream = e,
                this.header = t,
                this.length = n,
                this.tag = i,
                this.sub = o
            }
            var i = 100
              , o = "…"
              , s = {
                tag: function(e, t) {
                    var n = document.createElement(e);
                    return n.className = t,
                    n
                },
                text: function(e) {
                    return document.createTextNode(e)
                }
            };
            t.prototype.get = function(t) {
                if (t === e && (t = this.pos++),
                t >= this.enc.length)
                    throw "Requesting byte offset " + t + " on a stream of length " + this.enc.length;
                return this.enc[t]
            }
            ,
            t.prototype.hexDigits = "0123456789ABCDEF",
            t.prototype.hexByte = function(e) {
                return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e)
            }
            ,
            t.prototype.hexDump = function(e, t, n) {
                for (var i = "", o = e; t > o; ++o)
                    if (i += this.hexByte(this.get(o)),
                    n !== !0)
                        switch (15 & o) {
                        case 7:
                            i += "  ";
                            break;
                        case 15:
                            i += "\n";
                            break;
                        default:
                            i += " "
                        }
                return i
            }
            ,
            t.prototype.parseStringISO = function(e, t) {
                for (var n = "", i = e; t > i; ++i)
                    n += String.fromCharCode(this.get(i));
                return n
            }
            ,
            t.prototype.parseStringUTF = function(e, t) {
                for (var n = "", i = e; t > i; ) {
                    var o = this.get(i++);
                    n += String.fromCharCode(128 > o ? o : o > 191 && 224 > o ? (31 & o) << 6 | 63 & this.get(i++) : (15 & o) << 12 | (63 & this.get(i++)) << 6 | 63 & this.get(i++))
                }
                return n
            }
            ,
            t.prototype.parseStringBMP = function(e, t) {
                for (var n = "", i = e; t > i; i += 2) {
                    var o = this.get(i)
                      , s = this.get(i + 1);
                    n += String.fromCharCode((o << 8) + s)
                }
                return n
            }
            ,
            t.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
            t.prototype.parseTime = function(e, t) {
                var n = this.parseStringISO(e, t)
                  , i = this.reTime.exec(n);
                return i ? (n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4],
                i[5] && (n += ":" + i[5],
                i[6] && (n += ":" + i[6],
                i[7] && (n += "." + i[7]))),
                i[8] && (n += " UTC",
                "Z" != i[8] && (n += i[8],
                i[9] && (n += ":" + i[9]))),
                n) : "Unrecognized time: " + n
            }
            ,
            t.prototype.parseInteger = function(e, t) {
                var n = t - e;
                if (n > 4) {
                    n <<= 3;
                    var i = this.get(e);
                    if (0 === i)
                        n -= 8;
                    else
                        for (; 128 > i; )
                            i <<= 1,
                            --n;
                    return "(" + n + " bit)"
                }
                for (var o = 0, s = e; t > s; ++s)
                    o = o << 8 | this.get(s);
                return o
            }
            ,
            t.prototype.parseBitString = function(e, t) {
                var n = this.get(e)
                  , i = (t - e - 1 << 3) - n
                  , o = "(" + i + " bit)";
                if (20 >= i) {
                    var s = n;
                    o += " ";
                    for (var a = t - 1; a > e; --a) {
                        for (var r = this.get(a), c = s; 8 > c; ++c)
                            o += r >> c & 1 ? "1" : "0";
                        s = 0
                    }
                }
                return o
            }
            ,
            t.prototype.parseOctetString = function(e, t) {
                var n = t - e
                  , s = "(" + n + " byte) ";
                n > i && (t = e + i);
                for (var a = e; t > a; ++a)
                    s += this.hexByte(this.get(a));
                return n > i && (s += o),
                s
            }
            ,
            t.prototype.parseOID = function(e, t) {
                for (var n = "", i = 0, o = 0, s = e; t > s; ++s) {
                    var a = this.get(s);
                    if (i = i << 7 | 127 & a,
                    o += 7,
                    !(128 & a)) {
                        if ("" === n) {
                            var r = 80 > i ? 40 > i ? 0 : 1 : 2;
                            n = r + "." + (i - 40 * r)
                        } else
                            n += "." + (o >= 31 ? "bigint" : i);
                        i = o = 0
                    }
                }
                return n
            }
            ,
            n.prototype.typeName = function() {
                if (this.tag === e)
                    return "unknown";
                var t = this.tag >> 6
                  , n = (this.tag >> 5 & 1,
                31 & this.tag);
                switch (t) {
                case 0:
                    switch (n) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString";
                    default:
                        return "Universal_" + n.toString(16)
                    }
                case 1:
                    return "Application_" + n.toString(16);
                case 2:
                    return "[" + n + "]";
                case 3:
                    return "Private_" + n.toString(16)
                }
            }
            ,
            n.prototype.reSeemsASCII = /^[ -~]+$/,
            n.prototype.content = function() {
                if (this.tag === e)
                    return null;
                var t = this.tag >> 6
                  , n = 31 & this.tag
                  , s = this.posContent()
                  , a = Math.abs(this.length);
                if (0 !== t) {
                    if (null !== this.sub)
                        return "(" + this.sub.length + " elem)";
                    var r = this.stream.parseStringISO(s, s + Math.min(a, i));
                    return this.reSeemsASCII.test(r) ? r.substring(0, 2 * i) + (r.length > 2 * i ? o : "") : this.stream.parseOctetString(s, s + a)
                }
                switch (n) {
                case 1:
                    return 0 === this.stream.get(s) ? "false" : "true";
                case 2:
                    return this.stream.parseInteger(s, s + a);
                case 3:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(s, s + a);
                case 4:
                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(s, s + a);
                case 6:
                    return this.stream.parseOID(s, s + a);
                case 16:
                case 17:
                    return "(" + this.sub.length + " elem)";
                case 12:
                    return this.stream.parseStringUTF(s, s + a);
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 26:
                    return this.stream.parseStringISO(s, s + a);
                case 30:
                    return this.stream.parseStringBMP(s, s + a);
                case 23:
                case 24:
                    return this.stream.parseTime(s, s + a)
                }
                return null
            }
            ,
            n.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }
            ,
            n.prototype.print = function(t) {
                if (t === e && (t = ""),
                document.writeln(t + this),
                null !== this.sub) {
                    t += "  ";
                    for (var n = 0, i = this.sub.length; i > n; ++n)
                        this.sub[n].print(t)
                }
            }
            ,
            n.prototype.toPrettyString = function(t) {
                t === e && (t = "");
                var n = t + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (n += "+"),
                n += this.length,
                32 & this.tag ? n += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (n += " (encapsulates)"),
                n += "\n",
                null !== this.sub) {
                    t += "  ";
                    for (var i = 0, o = this.sub.length; o > i; ++i)
                        n += this.sub[i].toPrettyString(t)
                }
                return n
            }
            ,
            n.prototype.toDOM = function() {
                var e = s.tag("div", "node");
                e.asn1 = this;
                var t = s.tag("div", "head")
                  , n = this.typeName().replace(/_/g, " ");
                t.innerHTML = n;
                var i = this.content();
                if (null !== i) {
                    i = String(i).replace(/</g, "&lt;");
                    var o = s.tag("span", "preview");
                    o.appendChild(s.text(i)),
                    t.appendChild(o)
                }
                e.appendChild(t),
                this.node = e,
                this.head = t;
                var a = s.tag("div", "value");
                if (n = "Offset: " + this.stream.pos + "<br/>",
                n += "Length: " + this.header + "+",
                n += this.length >= 0 ? this.length : -this.length + " (undefined)",
                32 & this.tag ? n += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (n += "<br/>(encapsulates)"),
                null !== i && (n += "<br/>Value:<br/><b>" + i + "</b>",
                "object" == typeof oids && 6 == this.tag)) {
                    var r = oids[i];
                    r && (r.d && (n += "<br/>" + r.d),
                    r.c && (n += "<br/>" + r.c),
                    r.w && (n += "<br/>(warning!)"))
                }
                a.innerHTML = n,
                e.appendChild(a);
                var c = s.tag("div", "sub");
                if (null !== this.sub)
                    for (var l = 0, d = this.sub.length; d > l; ++l)
                        c.appendChild(this.sub[l].toDOM());
                return e.appendChild(c),
                t.onclick = function() {
                    e.className = "node collapsed" == e.className ? "node" : "node collapsed"
                }
                ,
                e
            }
            ,
            n.prototype.posStart = function() {
                return this.stream.pos
            }
            ,
            n.prototype.posContent = function() {
                return this.stream.pos + this.header
            }
            ,
            n.prototype.posEnd = function() {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            n.prototype.fakeHover = function(e) {
                this.node.className += " hover",
                e && (this.head.className += " hover")
            }
            ,
            n.prototype.fakeOut = function(e) {
                var t = / ?hover/;
                this.node.className = this.node.className.replace(t, ""),
                e && (this.head.className = this.head.className.replace(t, ""))
            }
            ,
            n.prototype.toHexDOM_sub = function(e, t, n, i, o) {
                if (!(i >= o)) {
                    var a = s.tag("span", t);
                    a.appendChild(s.text(n.hexDump(i, o))),
                    e.appendChild(a)
                }
            }
            ,
            n.prototype.toHexDOM = function(t) {
                var n = s.tag("span", "hex");
                if (t === e && (t = n),
                this.head.hexNode = n,
                this.head.onmouseover = function() {
                    this.hexNode.className = "hexCurrent"
                }
                ,
                this.head.onmouseout = function() {
                    this.hexNode.className = "hex"
                }
                ,
                n.asn1 = this,
                n.onmouseover = function() {
                    var e = !t.selected;
                    e && (t.selected = this.asn1,
                    this.className = "hexCurrent"),
                    this.asn1.fakeHover(e)
                }
                ,
                n.onmouseout = function() {
                    var e = t.selected == this.asn1;
                    this.asn1.fakeOut(e),
                    e && (t.selected = null,
                    this.className = "hex")
                }
                ,
                this.toHexDOM_sub(n, "tag", this.stream, this.posStart(), this.posStart() + 1),
                this.toHexDOM_sub(n, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()),
                null === this.sub)
                    n.appendChild(s.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (this.sub.length > 0) {
                    var i = this.sub[0]
                      , o = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(n, "intro", this.stream, this.posContent(), i.posStart());
                    for (var a = 0, r = this.sub.length; r > a; ++a)
                        n.appendChild(this.sub[a].toHexDOM(t));
                    this.toHexDOM_sub(n, "outro", this.stream, o.posEnd(), this.posEnd())
                }
                return n
            }
            ,
            n.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            n.decodeLength = function(e) {
                var t = e.get()
                  , n = 127 & t;
                if (n == t)
                    return n;
                if (n > 3)
                    throw "Length over 24 bits not supported at position " + (e.pos - 1);
                if (0 === n)
                    return -1;
                t = 0;
                for (var i = 0; n > i; ++i)
                    t = t << 8 | e.get();
                return t
            }
            ,
            n.hasContent = function(e, i, o) {
                if (32 & e)
                    return !0;
                if (3 > e || e > 4)
                    return !1;
                var s = new t(o);
                3 == e && s.get();
                var a = s.get();
                if (a >> 6 & 1)
                    return !1;
                try {
                    var r = n.decodeLength(s);
                    return s.pos - o.pos + r == i
                } catch (c) {
                    return !1
                }
            }
            ,
            n.decode = function(e) {
                e instanceof t || (e = new t(e,0));
                var i = new t(e)
                  , o = e.get()
                  , s = n.decodeLength(e)
                  , a = e.pos - i.pos
                  , r = null;
                if (n.hasContent(o, s, e)) {
                    var c = e.pos;
                    if (3 == o && e.get(),
                    r = [],
                    s >= 0) {
                        for (var l = c + s; e.pos < l; )
                            r[r.length] = n.decode(e);
                        if (e.pos != l)
                            throw "Content size is not correct for container starting at offset " + c
                    } else
                        try {
                            for (; ; ) {
                                var d = n.decode(e);
                                if (0 === d.tag)
                                    break;
                                r[r.length] = d
                            }
                            s = c - e.pos
                        } catch (u) {
                            throw "Exception while decoding undefined length content: " + u
                        }
                } else
                    e.pos += s;
                return new n(i,a,s,o,r)
            }
            ,
            n.test = function() {
                for (var e = [{
                    value: [39],
                    expected: 39
                }, {
                    value: [129, 201],
                    expected: 201
                }, {
                    value: [131, 254, 220, 186],
                    expected: 16702650
                }], i = 0, o = e.length; o > i; ++i) {
                    var s = new t(e[i].value,0)
                      , a = n.decodeLength(s);
                    a != e[i].expected && document.write("In test[" + i + "] expected " + e[i].expected + " got " + a + "\n")
                }
            }
            ,
            window.ASN1 = n
        }(),
        ASN1.prototype.getHexStringValue = function() {
            var e = this.toHexString()
              , t = 2 * this.header
              , n = 2 * this.length;
            return e.substr(t, n)
        }
        ,
        pn.prototype.parseKey = function(e) {
            try {
                var t = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
                  , n = t.test(e) ? Hex.decode(e) : Base64.unarmor(e)
                  , i = ASN1.decode(n);
                if (9 === i.sub.length) {
                    var o = i.sub[1].getHexStringValue();
                    this.n = dn(o, 16);
                    var s = i.sub[2].getHexStringValue();
                    this.e = parseInt(s, 16);
                    var a = i.sub[3].getHexStringValue();
                    this.d = dn(a, 16);
                    var r = i.sub[4].getHexStringValue();
                    this.p = dn(r, 16);
                    var c = i.sub[5].getHexStringValue();
                    this.q = dn(c, 16);
                    var l = i.sub[6].getHexStringValue();
                    this.dmp1 = dn(l, 16);
                    var d = i.sub[7].getHexStringValue();
                    this.dmq1 = dn(d, 16);
                    var u = i.sub[8].getHexStringValue();
                    this.coeff = dn(u, 16)
                } else {
                    if (2 !== i.sub.length)
                        return !1;
                    var p = i.sub[1]
                      , g = p.sub[0]
                      , o = g.sub[0].getHexStringValue();
                    this.n = dn(o, 16);
                    var s = g.sub[1].getHexStringValue();
                    this.e = parseInt(s, 16)
                }
                return !0
            } catch (m) {
                return !1
            }
        }
        ,
        pn.prototype.getPrivateBaseKey = function() {
            var e = {
                array: [new KJUR.asn1.DERInteger({
                    "int": 0
                }), new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    "int": this.e
                }), new KJUR.asn1.DERInteger({
                    bigint: this.d
                }), new KJUR.asn1.DERInteger({
                    bigint: this.p
                }), new KJUR.asn1.DERInteger({
                    bigint: this.q
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })]
            }
              , t = new KJUR.asn1.DERSequence(e);
            return t.getEncodedHex()
        }
        ,
        pn.prototype.getPrivateBaseKeyB64 = function() {
            return En(this.getPrivateBaseKey())
        }
        ,
        pn.prototype.getPublicBaseKey = function() {
            var e = {
                array: [new KJUR.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new KJUR.asn1.DERNull]
            }
              , t = new KJUR.asn1.DERSequence(e);
            e = {
                array: [new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    "int": this.e
                })]
            };
            var n = new KJUR.asn1.DERSequence(e);
            e = {
                hex: "00" + n.getEncodedHex()
            };
            var i = new KJUR.asn1.DERBitString(e);
            e = {
                array: [t, i]
            };
            var o = new KJUR.asn1.DERSequence(e);
            return o.getEncodedHex()
        }
        ,
        pn.prototype.getPublicBaseKeyB64 = function() {
            return En(this.getPublicBaseKey())
        }
        ,
        pn.prototype.wordwrap = function(e, t) {
            if (t = t || 64,
            !e)
                return e;
            var n = "(.{1," + t + "})( +|$\n?)|(.{1," + t + "})";
            return e.match(RegExp(n, "g")).join("\n")
        }
        ,
        pn.prototype.getPrivateKey = function() {
            var e = "-----BEGIN RSA PRIVATE KEY-----\n";
            return e += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
            e += "-----END RSA PRIVATE KEY-----"
        }
        ,
        pn.prototype.getPublicKey = function() {
            var e = "-----BEGIN PUBLIC KEY-----\n";
            return e += this.wordwrap(this.getPublicBaseKeyB64()) + "\n",
            e += "-----END PUBLIC KEY-----"
        }
        ,
        pn.prototype.hasPublicKeyProperty = function(e) {
            return e = e || {},
            e.hasOwnProperty("n") && e.hasOwnProperty("e")
        }
        ,
        pn.prototype.hasPrivateKeyProperty = function(e) {
            return e = e || {},
            e.hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff")
        }
        ,
        pn.prototype.parsePropertiesFrom = function(e) {
            this.n = e.n,
            this.e = e.e,
            e.hasOwnProperty("d") && (this.d = e.d,
            this.p = e.p,
            this.q = e.q,
            this.dmp1 = e.dmp1,
            this.dmq1 = e.dmq1,
            this.coeff = e.coeff)
        }
        ;
        var Qn = function(e) {
            pn.call(this),
            e && ("string" == typeof e ? this.parseKey(e) : (this.hasPrivateKeyProperty(e) || this.hasPublicKeyProperty(e)) && this.parsePropertiesFrom(e))
        };
        Qn.prototype = new pn,
        Qn.prototype.constructor = Qn;
        var Jn = function(e) {
            e = e || {},
            this.default_key_size = parseInt(e.default_key_size) || 1024,
            this.default_public_exponent = e.default_public_exponent || "010001",
            this.log = e.log || !1,
            this.key = null
        };
        Jn.prototype.setKey = function(e) {
            this.log && this.key && console.warn("A key was already set, overriding existing."),
            this.key = new Qn(e)
        }
        ,
        Jn.prototype.setPrivateKey = function(e) {
            this.setKey(e)
        }
        ,
        Jn.prototype.setPublicKey = function(e) {
            this.setKey(e)
        }
        ,
        Jn.prototype.decrypt = function(e) {
            try {
                return this.getKey().decrypt(Cn(e))
            } catch (t) {
                return !1
            }
        }
        ,
        Jn.prototype.encrypt = function(e) {
            try {
                return En(this.getKey().encrypt(e))
            } catch (t) {
                return !1
            }
        }
        ,
        Jn.prototype.getKey = function(e) {
            if (!this.key) {
                if (this.key = new Qn,
                e && "[object Function]" === {}.toString.call(e))
                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }
        ,
        Jn.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey()
        }
        ,
        Jn.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64()
        }
        ,
        Jn.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey()
        }
        ,
        Jn.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64()
        }
        ,
        e.JSEncrypt = Jn
    }(passport.lib.RSAExport),
    passport.lib.RSA = passport.lib.RSAExport.JSEncrypt;
    var passport = passport || window.passport || {};
    passport.err = passport.err || {},
    function(e) {
        var t = null
          , n = ""
          , i = new RegExp("(^|&)lang=([^&]*)(&|$)","i")
          , o = window.location.search.substr(1).match(i);
        null != o && (n = unescape(o[2])),
        t = "function" === (typeof e.getCurrent).toLowerCase() ? e.getCurrent() : {
            errMsg: {},
            labelText: {}
        };
        var s = {
            "zh-CN": {
                "-1": {
                    msg: '系统错误,请您稍后再试,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank">帮助中心</a>',
                    field: ""
                },
                1: {
                    msg: "您输入的帐号格式不正确",
                    field: "userName"
                },
                2: {
                    msg: '用户名或密码有误，请重新输入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
                    field: "userName"
                },
                3: {
                    msg: "验证码不存在或已过期,请重新输入",
                    field: ""
                },
                4: {
                    msg: "帐号或密码错误，请重新输入或者<a href='http://passport.baidu.com/?getpassindex#{urldata}'  target='_blank' >找回密码</a>",
                    field: "password"
                },
                5: {
                    msg: "",
                    field: ""
                },
                6: {
                    msg: "您输入的验证码有误",
                    field: "verifyCode"
                },
                7: {
                    msg: "用户名或密码有误，请重新输入或<a href='http://passport.baidu.com/?getpassindex#{urldata}'  target='_blank' >找回密码</a>",
                    field: "password"
                },
                16: {
                    msg: '您的帐号因安全问题已被限制登录,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank" >帮助中心</a>',
                    field: ""
                },
                257: {
                    msg: "请输入验证码",
                    field: "verifyCode"
                },
                100027: {
                    msg: "百度正在进行系统升级，暂时不能提供服务，敬请谅解",
                    field: ""
                },
                120016: {
                    msg: "",
                    field: ""
                },
                18: {
                    msg: "",
                    field: ""
                },
                19: {
                    msg: "",
                    field: ""
                },
                20: {
                    msg: "",
                    field: ""
                },
                21: {
                    msg: "没有登录权限",
                    field: ""
                },
                22: {
                    msg: "",
                    field: ""
                },
                23: {
                    msg: "",
                    field: ""
                },
                24: {
                    msg: "百度正在进行系统升级，暂时不能提供服务，敬请谅解",
                    field: ""
                },
                400031: {
                    msg: "请在弹出的窗口操作,或重新登录",
                    field: ""
                },
                400032: {
                    msg: "",
                    field: ""
                },
                400034: {
                    msg: "",
                    field: ""
                },
                401007: {
                    msg: "您的手机号关联了其他帐号，请选择登录",
                    field: ""
                },
                120021: {
                    msg: "登录失败,请在弹出的窗口操作,或重新登录",
                    field: ""
                },
                500010: {
                    msg: "登录过于频繁,请24小时后再试",
                    field: ""
                },
                200010: {
                    msg: "验证码不存在或已过期",
                    field: ""
                },
                100005: {
                    msg: "系统错误,请您稍后再试",
                    field: ""
                },
                120019: {
                    msg: "请在弹出的窗口操作,或重新登录",
                    field: "userName"
                },
                110024: {
                    msg: "此帐号暂未激活,<a href='#{gotourl}' >重发验证邮件</a>",
                    field: ""
                },
                100023: {
                    msg: "系统升级中，为了您的帐号安全，您可以使用二维码登录或者更换其他浏览器继续登录",
                    field: ""
                },
                17: {
                    msg: '您的帐号已锁定,请<a href="http://passport.baidu.com/v2/?ucenterfeedback#login_10" target="_blank">解锁</a>后登录',
                    field: "userName"
                },
                400401: {
                    msg: "",
                    field: ""
                },
                400037: {
                    msg: "",
                    field: ""
                },
                50023: {
                    msg: "1个手机号30日内最多换绑3个账号",
                    field: ""
                },
                50024: {
                    msg: "注册过于频繁，请稍候再试",
                    field: ""
                },
                50025: {
                    msg: "注册过于频繁，请稍候再试；也可以通过上行短信的方式进行注册",
                    field: ""
                },
                50028: {
                    msg: '帐号或密码多次输错，请3个小时之后再试或<a href="http://passport.baidu.com/?getpassindex&getpassType=financePwdError#{urldata}"  target="_blank">找回密码</a>',
                    field: ""
                },
                50029: {
                    msg: '帐号或密码多次输错，请3个小时之后再试或<a href="http://passport.baidu.com/?getpassindex&getpassType=pwdError#{urldata}"  target="_blank">找回密码</a>',
                    field: ""
                },
                400714: {
                    msg: '系统检测你的帐号疑似被盗，存在安全风险<a href="http://passport.baidu.com/?getpassindex&getpassType=pwdError#{urldata}"  target="_blank">请重置密码</a>',
                    field: ""
                },
                50030: {
                    msg: "抱歉，该手机号的申请次数已达当日上限，请更换手机号",
                    field: ""
                },
                50031: {
                    msg: "抱歉，该手机号的申请次数已达当月上限，请更换手机号",
                    field: ""
                },
                50032: {
                    msg: "抱歉，该手机号的申请次数已达本季度上限，请更换手机号",
                    field: ""
                },
                50035: {
                    msg: "系统错误,请您稍后再试(50035)",
                    field: ""
                },
                400413: {
                    msg: "",
                    field: ""
                },
                400414: {
                    msg: "",
                    field: ""
                },
                400415: {
                    msg: "帐号存在风险，为了您的帐号安全，请到百度钱包/理财/地图任一APP登录并完成验证，谢谢",
                    field: ""
                },
                400500: {
                    msg: "您登录的帐号已注销，请登录其他帐号或重新注册",
                    field: ""
                },
                72200: {
                    msg: "您的帐号因冻结暂时无法登录，请前往冻结时的手机APP，在登录页点击遇到问题进行解冻",
                    field: ""
                },
                96001: {
                    msg: "您的帐号因违反百度用户协议被限制登录",
                    field: ""
                },
                100060: {
                    msg: "因系统升级暂不支持注册，预计6月7日恢复服务",
                    field: ""
                },
                400702: {
                    msg: "该帐号已关闭手机号登录，请使用帐号密码登录",
                    field: ""
                },
                400704: {
                    msg: "",
                    field: ""
                },
                400706: {
                    msg: "",
                    field: ""
                },
                50043: {
                    msg: "当前浏览器版本过低，请升级或更换浏览器后重试",
                    field: ""
                },
                923002: {
                    msg: "当前身份证无法识别",
                    field: ""
                },
                97101: {
                    msg: "系统繁忙，请稍候再试",
                    field: ""
                },
                400703: {
                    msg: "手机号已被运营商二次放号，请前往https://passport.baidu.com/v2/?reg注册新帐号",
                    field: ""
                },
                50045: {
                    msg: "您的手机因安全问题已被限制"
                },
                50046: {
                    msg: "您的ip因安全问题已被限制"
                },
                50044: {
                    msg: "您的网络环境存在安全风险，请切换网络重试"
                },
                50047: {
                    msg: "暂不支持海外及港澳台地区注册"
                },
                50048: {
                    msg: "您当前的操作存在安全风险，请稍后再试"
                },
                26: {
                    msg: "暂不支持海外及港澳台地区注册"
                },
                100073: {
                    msg: "网盘帐号系统正在升级，现暂停新帐号注册，将于2月28日恢复开放，对此给您带来不便深表歉意！"
                },
                400012: {
                    msg: '您的帐号因违反百度用户协议被限制登录<a href="https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48907&token=m75585l8ssgl520b862a2588nm1j91oc&domainID=pass&type=2"> 去申诉</a>'
                },
                400044: {
                    msg: '您的帐号因违反百度用户协议被限制登录<a href="https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48907&token=m75585l8ssgl520b862a2588nm1j91oc&domainID=pass&type=2"> 去申诉</a>'
                }
            },
            zh_HK: {
                "-1": {
                    msg: '系統錯誤,請您稍後再試,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank">幫助中心</a>',
                    field: ""
                },
                1: {
                    msg: "您輸入的帳號格式不正確",
                    field: "userName"
                },
                2: {
                    msg: '用戶名或密碼有誤，請重新輸入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密碼</a>',
                    field: "userName"
                },
                3: {
                    msg: "驗證碼不存在或已過期,請重新輸入",
                    field: ""
                },
                4: {
                    msg: "帳號或密碼錯誤，請重新輸入或者<a href='http://passport.baidu.com/?getpassindex#{urldata}'  target='_blank' >找回密碼</a>",
                    field: "password"
                },
                5: {
                    msg: "",
                    field: ""
                },
                6: {
                    msg: "您輸入的驗證碼有誤",
                    field: "verifyCode"
                },
                7: {
                    msg: "用戶名或密碼有誤，請重新輸入或<a href='http://passport.baidu.com/?getpassindex#{urldata}'  target='_blank' >找回密碼</a>",
                    field: "password"
                },
                16: {
                    msg: '您的帳號因安全問題已被限制登錄,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank" >幫助中心</a>',
                    field: ""
                },
                257: {
                    msg: "請輸入驗證碼",
                    field: "verifyCode"
                },
                100027: {
                    msg: "百度正在進行系統升級，暫時不能提供服務，敬請諒解",
                    field: ""
                },
                120016: {
                    msg: "",
                    field: ""
                },
                18: {
                    msg: "",
                    field: ""
                },
                19: {
                    msg: "",
                    field: ""
                },
                20: {
                    msg: "",
                    field: ""
                },
                21: {
                    msg: "沒有登錄權限",
                    field: ""
                },
                22: {
                    msg: "",
                    field: ""
                },
                23: {
                    msg: "",
                    field: ""
                },
                24: {
                    msg: "百度正在進行系統升級，暫時不能提供服務，敬請諒解",
                    field: ""
                },
                400031: {
                    msg: "請在彈出的窗口操作,或重新登錄",
                    field: ""
                },
                400032: {
                    msg: "",
                    field: ""
                },
                400034: {
                    msg: "",
                    field: ""
                },
                401007: {
                    msg: "您的手機號關聯了其他帳號，請選擇登錄",
                    field: ""
                },
                120021: {
                    msg: "登錄失敗,請在彈出的窗口操作,或重新登錄",
                    field: ""
                },
                500010: {
                    msg: "登錄過於頻繁,請24小時後再試",
                    field: ""
                },
                200010: {
                    msg: "驗證碼不存在或已過期",
                    field: ""
                },
                100005: {
                    msg: "系統錯誤,請您稍後再試",
                    field: ""
                },
                120019: {
                    msg: "請在彈出的窗口操作,或重新登錄",
                    field: "userName"
                },
                110024: {
                    msg: "此帳號暫未激活,<a href='#{gotourl}' >重發驗證郵件</a>",
                    field: ""
                },
                100023: {
                    msg: "系統升級中，為了您的帳號安全，您可以使用二維碼登錄或者更換其他瀏覽器繼續登錄",
                    field: ""
                },
                17: {
                    msg: '您的帳號已鎖定,請<a href="http://passport.baidu.com/v2/?ucenterfeedback#login_10" target="_blank">解鎖</a>後登錄',
                    field: "userName"
                },
                400401: {
                    msg: "",
                    field: ""
                },
                400037: {
                    msg: "",
                    field: ""
                },
                50023: {
                    msg: "1個手機號30日內最多換綁3個賬號",
                    field: ""
                },
                50024: {
                    msg: "註冊過於頻繁，請稍候再試",
                    field: ""
                },
                50025: {
                    msg: "註冊過於頻繁，請稍候再試；也可以通過上行短信的方式進行註冊",
                    field: ""
                },
                50028: {
                    msg: '帳號或密碼多次輸錯，請3個小時之後再試或<a href="http://passport.baidu.com/?getpassindex&getpassType=financePwdError#{urldata}"  target="_blank">找回密碼</a>',
                    field: ""
                },
                50029: {
                    msg: '帳號或密碼多次輸錯，請3個小時之後再試或<a href="http://passport.baidu.com/?getpassindex&getpassType=pwdError#{urldata}"  target="_blank">找回密碼</a>',
                    field: ""
                },
                400714: {
                    msg: '系統檢測你的帳號疑似被盜，存在安全風險<a href="http://passport.baidu.com/?getpassindex&getpassType=pwdError#{urldata}"  target="_blank">請重置密碼</a>',
                    field: ""
                },
                50030: {
                    msg: "抱歉，該手機號的申請次數已達當日上限，請更換手機號",
                    field: ""
                },
                50031: {
                    msg: "抱歉，該手機號的申請次數已達當月上限，請更換手機號",
                    field: ""
                },
                50032: {
                    msg: "抱歉，該手機號的申請次數已達本季度上限，請更換手機號",
                    field: ""
                },
                50035: {
                    msg: "系統錯誤,請您稍後再試(50035)",
                    field: ""
                },
                400413: {
                    msg: "",
                    field: ""
                },
                400414: {
                    msg: "",
                    field: ""
                },
                400415: {
                    msg: "帳號存在風險，為了您的帳號安全，請到百度錢包/理財/地圖任一APP登錄並完成驗證，謝謝",
                    field: ""
                },
                400500: {
                    msg: "您登錄的帳號已註銷，請登錄其他帳號或重新註冊",
                    field: ""
                },
                72200: {
                    msg: "您的帳號因凍結暫時無法登錄，請前往凍結時的手機APP，在登錄頁點擊遇到問題進行解凍",
                    field: ""
                },
                96001: {
                    msg: "您的帳號因違反百度用戶協議被限制登錄",
                    field: ""
                },
                100060: {
                    msg: "因系統升級暫不支持註冊，預計6月7日恢復服務",
                    field: ""
                },
                400702: {
                    msg: "該帳號已關閉手機號登錄，請使用帳號密碼登錄",
                    field: ""
                },
                400704: {
                    msg: "",
                    field: ""
                },
                400706: {
                    msg: "",
                    field: ""
                },
                50043: {
                    msg: "當前瀏覽器版本過低，請升級或更換瀏覽器後重試",
                    field: ""
                },
                923002: {
                    msg: "當前身份證無法識別",
                    field: ""
                },
                97101: {
                    msg: "系統繁忙，請稍候再試",
                    field: ""
                },
                400703: {
                    msg: "手機號已被運營商二次放號，請前往https://passport.baidu.com/v2/?reg註冊新帳號",
                    field: ""
                },
                50045: {
                    msg: "您的手機因安全問題已被限制"
                },
                50046: {
                    msg: "您的ip因安全問題已被限制"
                },
                50044: {
                    msg: "您的網絡環境存在安全風險，請切換網絡重試"
                },
                50047: {
                    msg: "暫不支持海外及港澳臺地區註冊"
                },
                50048: {
                    msg: "您當前的操作存在安全風險，請稍後再試"
                },
                26: {
                    msg: "暫不支持海外及港澳臺地區註冊"
                },
                100073: {
                    msg: "網盤帳號系統正在升級，現暫停新帳號註冊，將於2月28日恢復開放，對此給您帶來不便深表歉意！"
                },
                400012: {
                    msg: '您的帳號因違反百度用戶協議被限制登錄<a href="https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48907&token=m75585l8ssgl520b862a2588nm1j91oc&domainID=pass&type=2"> 去申訴</a>'
                },
                400044: {
                    msg: '您的帳號因違反百度用戶協議被限制登錄<a href="https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48907&token=m75585l8ssgl520b862a2588nm1j91oc&domainID=pass&type=2"> 去申訴</a>'
                }
            }
        }
          , a = {
            "zh-CN": {
                500002: {
                    msg: "您输入的验证码有误",
                    field: "verifyCode"
                },
                500018: {
                    msg: "验证码已失效，请重试",
                    field: "verifyCode"
                }
            },
            zh_HK: {
                500002: {
                    msg: "您輸入的驗證碼有誤",
                    field: "verifyCode"
                },
                500018: {
                    msg: "驗證碼已失效，請重試",
                    field: "verifyCode"
                }
            }
        }
          , r = {
            "zh-CN": {
                agree: "阅读并接受",
                baiduUserProtocal: "百度用户协议",
                baiduUserPersonal: "隐私政策",
                baiduUsePassport: "百度帐号使用说明",
                verifyCode: "验证码",
                verifyCodeStaErr: "您输入的验证码有误",
                verifyCodeLenErr: "您输入的验证码有误",
                unReceiveSmsCode: "收不到短信验证码?",
                captcha: "验证码",
                captchaAlt: "验证码图片",
                captchaChange: "换一张",
                memberPassLabel: "下次自动登录",
                login: "登录",
                fgtPwd: "忘记密码？",
                feedback: "帮助中心",
                register: "立即注册",
                phoneNum: "手机号",
                account: "邮箱",
                userName: "手机号/用户名/邮箱",
                password: "密码",
                passwordResetWarnNo: '用户名或密码有误，请重新输入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
                passwordResetSms: '<a id="passwordResetSms">短信登录</a>,或者',
                passwordResetWarn: '用户名或密码有误，请重新输入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
                passwordResetIn: "个月以内",
                passwordResetOut: "个月以前",
                unameMailLengthError: "邮箱过长,请重新输入",
                unameInputError: "邮箱格式错误,若未绑定邮箱,请使用用户名登录",
                smsPhone: "手机号",
                smsPhoneMsg: "请输入手机号",
                smsVerifyPlaceholder: "验证码",
                smsVerifyCode: "验证码",
                toSmsBtn: "短信快捷登录",
                logining: "登录中...",
                loginsuccess: "登录成功",
                submitTimeup: "登录超时,请稍后再试",
                backToLogin: "用户名密码登录",
                footerBackToLogin: "用户名登录",
                qrcodeTitle: "请使用",
                qrcodeHref: '<a class="pass-link" href="https://mo.baidu.com/wuxian/?from=1019447z" target="new">百度App</a>',
                qrcodeText: "扫码登录",
                qrcodeMsg: "百度技术加密，保障您的隐私安全",
                qrcodeListaq: "安全",
                qrcodeListgx: "高效",
                qrcodeListbj: "便捷",
                appName: "百度App",
                appHref: "http://xbox.m.baidu.com/mo/",
                sysError: "系统错误，休息一会儿，请稍后再试",
                sysUpdate: "服务正在升级中,请您稍后再试",
                cookieDisable: "开启Cookie之后才能登录,<a href='http://passport.baidu.com/v2/?ucenterfeedback#login'  target='_blank' >如何开启</a>?",
                captchaErr: "动态密码错误",
                confirmVerCodeEmpty: "验证码为空",
                foreignToLogin: "帐号密码登录",
                foreignMobileError: "手机号码格式不正确",
                foreignMobileMsg: "<span>请选择您的国家地区</span>",
                foreignMobileLink: "海外手机号",
                phoenixBtn: "第三方登录",
                qrcodeBtn: "扫码登录",
                QrcodeSuccessTip: "扫描成功",
                QrcodeSuccessMsg: "请在手机端确认登录",
                QrcodeErrorTip: "网络连接失败",
                QrcodeErrorMsg: "请稍候再试",
                QrcodeRefreshTip: "二维码已失效",
                QrcodeRefreshBtn: "点击刷新",
                QrcodeLoadTip: "二维码加载失败",
                nopassLead: '该帐号尚未设置密码，请先<a href="http://passport.baidu.com/?getpassindex" target="_blank" >设置密码</a>后在登录',
                resend: "重新发送",
                userNameLogin: "用户名登录",
                emailLogin: "邮箱登录",
                forgetEmail: "忘记邮箱?使用",
                fillPhonePls: "请填写手机号",
                userNameTitle: "用户名",
                smsLogin: "短信登录",
                fillVerifyCodePls: "请填写验证码",
                forgetUserName: "忘记用户名?使用",
                verifyEqualLogin: "验证即登录，未注册将自动创建百度帐号",
                cantReceiveSms: "收不到验证码",
                checkIfBlocked: "1.请检查短信是否被安全软件拦截",
                overTimeArrive: "2.运营商网络原因，短信可能延迟到达",
                reguest: "建议您",
                switchLoginMethod: "切换登录方式",
                usePhoneSendSms: "使用该手机号，编辑短信",
                shouldLogSuccess: "即可登录成功",
                introductSms: "（短信费用请参考运营商资费标准）",
                rule1: "建议使用当前手机号，编辑短信 8-14 位字符（支持数字/字母/符号），",
                rule2: "作为登录密码，发送至1069 0691 036590，即可注册成功",
                mainland: "大陆地区"
            },
            zh_HK: {
                agree: "閱讀並接受",
                baiduUserProtocal: "百度用戶協議",
                baiduUserPersonal: "隱私政策",
                baiduUsePassport: "百度帳號使用說明",
                verifyCode: "驗證碼",
                verifyCodeStaErr: "您輸入的驗證碼有誤",
                verifyCodeLenErr: "您輸入的驗證碼有誤",
                unReceiveSmsCode: "收不到短信驗證碼?",
                captcha: "驗證碼",
                captchaAlt: "驗證碼圖片",
                captchaChange: "換一張",
                memberPassLabel: "下次自動登錄",
                login: "登錄",
                fgtPwd: "忘記密碼？",
                feedback: "幫助中心",
                register: "立即註冊",
                phoneNum: "手機號",
                account: "郵箱",
                userName: "手機/郵箱/用戶名",
                password: "密碼",
                passwordResetWarnNo: '用戶名或密碼有誤，請重新輸入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密碼</a>',
                passwordResetSms: '<a id="passwordResetSms">短信登錄</a>,或者',
                passwordResetWarn: '用戶名或密碼有誤，請重新輸入或<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密碼</a>',
                passwordResetIn: "個月以內",
                passwordResetOut: "個月以前",
                unameMailLengthError: "郵箱過長,請重新輸入",
                unameInputError: "郵箱格式錯誤,若未綁定郵箱,請使用用戶名登錄",
                smsPhone: "手機號",
                smsPhoneMsg: "請輸入手機號",
                smsVerifyPlaceholder: "驗證碼",
                smsVerifyCode: "驗證碼",
                toSmsBtn: "短信快捷登錄",
                logining: "登錄中...",
                loginsuccess: "登錄成功",
                submitTimeup: "登錄超時,請稍後再試",
                backToLogin: "用戶名密碼登錄",
                footerBackToLogin: "用戶名登錄",
                qrcodeTitle: "請使用",
                qrcodeHref: '<a class="pass-link" href="https://mo.baidu.com/wuxian/?from=1019447z" target="new">百度App</a>',
                qrcodeText: "掃碼登錄",
                qrcodeMsg: "百度技術加密，保障您的隱私安全",
                qrcodeListaq: "安全",
                qrcodeListgx: "高效",
                qrcodeListbj: "便捷",
                appName: "百度App",
                appHref: "http://xbox.m.baidu.com/mo/",
                sysError: "系統錯誤，休息一會兒，請稍後再試",
                sysUpdate: "服務正在升級中,請您稍後再試",
                cookieDisable: "開啟Cookie之後才能登錄,<a href='http://passport.baidu.com/v2/?ucenterfeedback#login'  target='_blank' >如何開啟</a>?",
                captchaErr: "動態密碼錯誤",
                confirmVerCodeEmpty: "驗證碼為空",
                foreignToLogin: "帳號密碼登錄",
                foreignMobileError: "手機號碼格式不正確",
                foreignMobileMsg: "<span>請選擇您的國家地區</span>",
                foreignMobileLink: "海外手機號",
                phoenixBtn: "第三方登錄",
                qrcodeBtn: "掃碼登錄",
                QrcodeSuccessTip: "掃描成功",
                QrcodeSuccessMsg: "請在手機端確認登錄",
                QrcodeErrorTip: "網絡連接失敗",
                QrcodeErrorMsg: "請稍候再試",
                QrcodeRefreshTip: "二維碼已失效",
                QrcodeRefreshBtn: "點擊刷新",
                QrcodeLoadTip: "二維碼加載失敗",
                nopassLead: '該帳號尚未設置密碼，請先<a href="http://passport.baidu.com/?getpassindex" target="_blank" >設置密碼</a>後在登錄',
                resend: "重新發送",
                userNameLogin: "用戶名登錄",
                emailLogin: "郵箱登錄",
                forgetEmail: "忘記郵箱?使用",
                fillPhonePls: "請填寫手機號",
                userNameTitle: "用戶名",
                smsLogin: "短信登錄",
                fillVerifyCodePls: "請填寫驗證碼",
                forgetUserName: "忘記用戶名?使用",
                verifyEqualLogin: "驗證即登錄，未註冊將自動創建百度帳號",
                cantReceiveSms: "收不到驗證碼",
                checkIfBlocked: "1.請檢查短信是否被安全軟件攔截",
                overTimeArrive: "2.運營商網絡原因，短信可能延遲到達",
                reguest: "建議您",
                switchLoginMethod: "切換登錄方式",
                usePhoneSendSms: "使用該手機號，編輯短信",
                shouldLogSuccess: "即可登錄成功",
                introductSms: "（短信費用請參考運營商資費標準）",
                rule1: "建議使用當前手機號，編輯短信 8-14 位字符（支持數字/字母/符號），",
                rule2: "作為登錄密碼，發送至1069 0691 036590，即可註冊成功",
                mainland: "大陸地區"
            }
        }
          , c = {
            "zh-CN": {
                bindAction16: "您的帐号存在安全风险，我们已经为您采取保护策略，建议您先绑定手机。",
                bindAction32: "快来绑定密保工具吧，提升帐号安全性的同时可以快速找回密码。",
                bindAction34: "请绑定您的手机号码作为您的密保手机，提升帐号安全性的同时还可以快速找回密码。",
                bindAction: "请绑定一个您的常用邮箱作为您的密保邮箱，提升帐号安全性的同时还可以快速找回密码。",
                getWarnHtml: "系统检测到您的帐号疑似被盗，存在安全风险。请尽快修改密码。"
            },
            zh_HK: {
                500002: {
                    msg: "您輸入的驗證碼有誤",
                    field: "verifyCode"
                },
                500018: {
                    msg: "驗證碼已失效，請重試",
                    field: "verifyCode"
                }
            }
        }
          , l = {
            "zh-CN": {
                agree: "阅读并同意",
                user: "《百度用户协议》",
                personal: "《隐私政策》",
                passUse: "《百度帐号使用说明》"
            },
            zh_HK: {
                agree: "閱讀並同意",
                user: "《百度用戶協議》",
                personal: "《隱私政策》",
                passUse: "《百度帳號使用說明》"
            }
        };
        e.getCurrent = function(e) {
            var i = "zh_HK" === n ? "zh_HK" : "zh-CN"
              , o = e ? e : i;
            return t.errMsg.login = s[o],
            t.errMsg.checkVerifycode = a[o],
            t.labelText.login = r[o],
            t.agreements = l[o],
            t.hooksText = c[o],
            t
        }
    }(passport.err);
    var passport = passport || window.passport || {};
    passport.data = passport.data || {},
    function(e) {
        function t(e) {
            this._requests = [],
            this._value = null,
            this._exception = null,
            this._isComplete = !1;
            var t = this;
            e(function(e) {
                t._fulfillPromise(e)
            }, function(e) {
                t._breakPromise(e)
            })
        }
        function n(e, t, n) {
            return t ? n ? function(n) {
                return n = n || {},
                l.submit(d + t, i(n, e, g[e], m[e], !0), {
                    charset: "utf-8",
                    processData: function(t) {
                        if (t)
                            for (var n in t)
                                if (t.hasOwnProperty(n)) {
                                    var i = t[n];
                                    i && (t[n] = decodeURIComponent(i))
                                }
                        return o(e, t)
                    }
                })
            }
            : function(n) {
                return l.jsonp(d + t, i(n, e, g[e], m[e], !1), {
                    charset: "utf-8",
                    processData: function(t) {
                        return o(e, t)
                    }
                })
            }
            : r
        }
        function i(e, t, n, i, o) {
            var s = o ? {
                staticpage: _.staticPage,
                charset: _.charset || document.characterSet || document.charset || ""
            } : {}
              , a = f[t];
            if (a)
                for (var r in a) {
                    if (a.hasOwnProperty(r)) {
                        var l = a[r];
                        s[r] = "function" == typeof l ? l(e) : l
                    }
                    "verifypass" == r && (s[r] = decodeURIComponent(s[r]))
                }
            if (s.token = _.token || "",
            s.tpl = _.product || "",
            s.subpro = _.subpro || "",
            s.apiver = "v3",
            s.tt = (new Date).getTime(),
            e) {
                n = n || {},
                i = i || {};
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var d = i[r]
                          , u = d ? d(e[r], e) : e[r];
                        "string" == typeof u && (o && (u = decodeURIComponent(u)),
                        h[r] || (u = c.trim(u))),
                        s[n[r] || r.toLowerCase()] = u
                    }
            }
            return s
        }
        function o(t, n) {
            if (e && e.traceID && e.traceID.getTraceID && e.traceID.getTraceID(n),
            n) {
                var i = v[t];
                i && i(n);
                var o = n.errInfo
                  , a = n
                  , r = a;
                return o ? a.errInfo = s(t, o, a) : (o = {
                    no: n.err_no,
                    msg: n.err_msg || ""
                },
                delete a.err_no,
                delete a.err_msg,
                r = {
                    data: a,
                    errInfo: s(t, o, a)
                }),
                r
            }
            return n
        }
        function s(e, t) {
            var n = y[b[e] || e];
            if (n && t && 0 != t.no) {
                var i = n[t.no] || n[-1];
                if (i) {
                    var o = i.msg;
                    t.msg = o,
                    t.field = i.field
                }
            }
            return t
        }
        function a(t) {
            if (e && e.traceID && e.traceID.getTraceID && e.traceID.getTraceID(t),
            t) {
                var n = t.errInfo
                  , i = t;
                if (!n)
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            var s = t[o];
                            s && (t[o] = decodeURIComponent(s))
                        }
                n || (n = {
                    no: t.err_no,
                    msg: t.err_msg || ""
                },
                delete i.err_no,
                delete i.err_msg,
                t = {
                    data: i,
                    errInfo: n
                })
            }
            return t
        }
        var r = function() {};
        t.prototype = {
            get_isComplete: function() {
                return this._isComplete
            },
            get_value: function() {
                if (!this._isComplete)
                    return void 0;
                if (this._exception)
                    throw this._exception;
                return this._value
            },
            call: function(e) {
                for (var t = [], n = 0, i = arguments.length - 1; i > n; n++)
                    t[n] = arguments[n + 1];
                return this.when(function(n) {
                    return n[e].apply(n, t)
                })
            },
            getValue: function(e) {
                return this.when(function(t) {
                    return t[e]
                })
            },
            setValue: function(e, t) {
                this.whenOnly(function(n) {
                    n[e] = t
                })
            },
            when: function(e, n, i) {
                return t.when(this, e, n, i)
            },
            whenOnly: function(e, n, i) {
                t.whenOnly(this, e, n, i)
            },
            success: function(e, t) {
                return this.when(e, r, t)
            },
            fail: function(e, t) {
                return this.when(r, e, t)
            },
            _enqueueOne: function(e) {
                this._isComplete ? this._notify(e) : this._requests.push(e)
            },
            _notify: function(e) {
                this._exception ? e.breakPromise && e.breakPromise(this._exception) : e.fulfillPromise && e.fulfillPromise(this._value)
            },
            _notifyAll: function() {
                for (var e = 0, t = this._requests.length; t > e; e++)
                    this._notify(this._requests[e])
            },
            _fulfillPromise: function(e) {
                this._value = e,
                this._exception = null,
                this._isComplete = !0,
                this._notifyAll()
            },
            _breakPromise: function(e) {
                this._value = null,
                this._exception = e || new Error("An error occured"),
                this._isComplete = !0,
                this._notifyAll()
            }
        },
        t.when = function(e, n, i, o) {
            return new t(function(s, a) {
                t.make(e)._enqueueOne({
                    fulfillPromise: function(e) {
                        s(n ? n.call(o, e) : e)
                    },
                    breakPromise: function(e) {
                        if (i)
                            try {
                                s(i.call(o, e))
                            } catch (t) {
                                a(t)
                            }
                        else
                            a(e)
                    }
                })
            }
            )
        }
        ,
        t.whenOnly = function(e, n, i, o) {
            t.make(e)._enqueueOne({
                fulfillPromise: function(e) {
                    n && n.call(o, e)
                },
                breakPromise: function(e) {
                    i && i.call(o, e)
                }
            })
        }
        ,
        t.make = function(e) {
            return e instanceof t ? e : t.immediate(e)
        }
        ,
        t.immediate = function(e) {
            return new t(function(t) {
                t(e)
            }
            )
        }
        ;
        var c = {};
        !function(e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");
            e.trim = function(e) {
                return String(e).replace(t, "")
            }
            ,
            e.getUniqueId = function(e) {
                return e + Math.floor(2147483648 * Math.random()).toString(36)
            }
            ,
            e.g = function(e) {
                return e ? "string" == typeof e || e instanceof String ? document.getElementById(e) : !e.nodeName || 1 != e.nodeType && 9 != e.nodeType ? null : e : null
            }
            ,
            e.getParent = function(t) {
                return t = e.g(t),
                t.parentElement || t.parentNode || null
            }
            ,
            e.encodeHTML = function(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }
            ,
            e.array = e.array || {},
            e.array.indexOf = function(e, t, n) {
                var i = e.length;
                for (n = 0 | n,
                0 > n && (n = Math.max(0, i + n)); i > n; n++)
                    if (n in e && e[n] === t)
                        return n;
                return -1
            }
            ,
            e.browser = e.browser || {},
            e.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0,
            e.insertHTML = function(t, n, i) {
                t = e.g(t);
                var o, s;
                return t.insertAdjacentHTML && !e.browser.opera ? t.insertAdjacentHTML(n, i) : (o = t.ownerDocument.createRange(),
                n = n.toUpperCase(),
                "AFTERBEGIN" == n || "BEFOREEND" == n ? (o.selectNodeContents(t),
                o.collapse("AFTERBEGIN" == n)) : (s = "BEFOREBEGIN" == n,
                o[s ? "setStartBefore" : "setEndAfter"](t),
                o.collapse(s)),
                o.insertNode(o.createContextualFragment(i))),
                t
            }
        }(c),
        e.base = c;
        var l = {};
        !function(n) {
            var i = "__bdpp_pstc__" + (new Date).getTime()
              , o = i + "_form"
              , s = i + "_ifr"
              , a = function(e) {
                if ("object" == typeof e) {
                    var t = [];
                    for (var n in e) {
                        var i = e[n];
                        if (void 0 !== i && null !== i) {
                            t.length && t.push("&");
                            var o = encodeURIComponent("boolean" == typeof i ? i ? "1" : "0" : i.toString());
                            t.push(encodeURIComponent(n), "=", o)
                        }
                    }
                    return t.join("")
                }
                return "string" == typeof e ? e : null
            }
              , r = function(e, t) {
                if (t = a(t),
                "string" == typeof t) {
                    var n = /\?/g.test(e);
                    e += (n ? "&" : "?") + a(t)
                }
                return e
            }
              , l = function(e, t, n) {
                e.setAttribute("type", "text/javascript"),
                n && e.setAttribute("charset", n),
                e.setAttribute("src", t),
                document.getElementsByTagName("head")[0].appendChild(e)
            }
              , d = function(e) {
                if (e.clearAttributes)
                    e.clearAttributes();
                else
                    for (var t in e)
                        e.hasOwnProperty(t) && delete e[t];
                e && e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
              , u = function(e, t, n) {
                function i(e) {
                    return function() {
                        try {
                            e ? u.onfailure && u.onfailure() : (t.apply(window, arguments),
                            clearTimeout(s)),
                            window[o] = null,
                            delete window[o]
                        } catch (n) {} finally {
                            d(a)
                        }
                    }
                }
                var o, s, a = document.createElement("SCRIPT"), r = "bd__cbs__", u = n || {}, p = u.charset, g = u.queryField || "callback", m = u.timeOut || 0, f = new RegExp("(\\?|&)" + g + "=([^&]*)");
                o = c.getUniqueId(r),
                window[o] = i(0),
                m && (s = setTimeout(i(1), m)),
                e = e.replace(f, "$1" + g + "=" + o),
                e.search(f) < 0 && (e += (e.indexOf("?") < 0 ? "?" : "&") + g + "=" + o),
                l(a, e, p)
            }
              , p = function(e, t) {
                var n = [];
                n.push("<form id='", o, "' target='", s, "' "),
                n.push("action='", c.encodeHTML(e), "' method='post'>");
                var i = {};
                for (var a in t)
                    if (t.hasOwnProperty(a)) {
                        var r = t[a];
                        if (void 0 !== r && null !== r) {
                            var l = "boolean" == typeof r ? r ? "1" : "0" : r;
                            i[a] = l
                        }
                    }
                try {
                    var d = "OOOO00"
                      , u = "OOO00O"
                      , p = "OOO000"
                      , g = "OOO0OO"
                      , m = "O0OOO0"
                      , f = {
                        OOOOO0: d,
                        O00000: u,
                        O0O00O: p,
                        O000OO: g,
                        O0O000: m
                    }
                      , h = (new Date).getTime() / 1e3
                      , v = parseInt(h / 86400, 10) % 5
                      , b = [];
                    if (Object.keys)
                        b = Object.keys(f);
                    else {
                        b = [];
                        for (var y in f)
                            b.push(y)
                    }
                    var _ = f[b[v]] || "";
                    window.moonshadV3 && window.moonshadV3[_] && i && (i = baidu.extend(i, window.moonshadV3[_](i)))
                } catch (w) {
                    console.log(w)
                }
                for (var a in i)
                    i.hasOwnProperty(a) && n.push("<input type='hidden' name='", c.encodeHTML(a), "' value='", c.encodeHTML(i[a]), "' />");
                return n.push("</form>"),
                n.join("")
            }
              , g = function(e, t, n, a) {
                function r(e) {
                    return function() {
                        try {
                            e ? a.onfailure && a.onfailure() : (n.apply(window, arguments),
                            d && clearTimeout(d)),
                            window[u] = null,
                            delete window[u]
                        } catch (t) {}
                    }
                }
                a = a || {};
                var l = a.timeOut || 0
                  , d = !1
                  , u = c.getUniqueId("bd__pcbs__");
                t[a.queryField || "callback"] = "parent." + u;
                var g = p(e, t);
                if (c.g(o))
                    c.getParent(o).innerHTML = g;
                else {
                    var m = [];
                    m.push("<div id='", i, "' style='display:none;'>"),
                    m.push("<div>", g, "</div>"),
                    m.push("<iframe name='", s, "' src='" + ("https:" == (window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase()) ? "https://passport.baidu.com/passApi/html/_blank.html" : "about:blank") + "' style='display:none;'></iframe>"),
                    m.push("</div>"),
                    c.insertHTML(document.body, "beforeEnd", m.join(""))
                }
                window[u] = r(),
                l && (d = setTimeout(r(1), l)),
                c.g(o).submit()
            };
            n.jsonp = function(n, i, o) {
                o = o || {},
                e && e.traceID && e.traceID.createTraceID && (i.traceid = e.traceID.createTraceID());
                var s = {};
                for (var a in i) {
                    var c = i[a];
                    void 0 !== c && null !== c && (s[a] = c)
                }
                try {
                    var l = "OOOO00"
                      , d = "OOO00O"
                      , p = "OOO000"
                      , g = "OOO0OO"
                      , m = "O0OOO0"
                      , f = {
                        OOOOO0: l,
                        O00000: d,
                        O0O00O: p,
                        O000OO: g,
                        O0O000: m
                    }
                      , h = (new Date).getTime() / 1e3
                      , v = parseInt(h / 86400, 10) % 5
                      , b = [];
                    if (Object && Object.keys)
                        b = Object.keys(f);
                    else {
                        b = [];
                        for (var y in f)
                            b.push(y)
                    }
                    var _ = f[b[v]] || "";
                    window.moonshadV3 && window.moonshadV3[_] && i && (i = baidu.extend(i, window.moonshadV3[_](s, baidu)))
                } catch (w) {
                    console.log(w)
                }
                return new t(function(e, t) {
                    n = r(n, i),
                    u(n, function(t) {
                        o.processData && (t = o.processData(t)),
                        e && e(t)
                    }, {
                        charset: o.charset,
                        queryField: o.queryField,
                        timeOut: o.timeOut,
                        onfailure: function() {
                            t && t()
                        }
                    })
                }
                )
            }
            ,
            n.submit = function(n, i, o) {
                return e && e.traceID && e.traceID.createTraceID && (i.traceid = e.traceID.createTraceID()),
                n && i ? new t(function(e) {
                    g(n, i, function(t) {
                        o.processData && (t = o.processData(t)),
                        e && e(t)
                    }, o)
                }
                ) : void 0
            }
            ;
            var m = [];
            n.load = function(e) {
                return new t(function(t) {
                    var n = m.push(new Image) - 1
                      , i = !1
                      , o = setTimeout(function() {
                        i = !0,
                        t && t()
                    }, 1e3);
                    m[n].onload = function() {
                        clearTimeout(o),
                        i || t && t(),
                        i = !0,
                        m[n] = m[n].onload = null
                    }
                    ,
                    m[n].src = e
                }
                )
            }
        }(l);
        var d = "https://passport.baidu.com"
          , u = {
            getApiInfo: "/v2/api/?getapi",
            getLoginHistory: "/v2/api/?loginhistory",
            loginCheck: "/v2/api/?logincheck",
            getVerifyCodeStr: "/v2/?reggetcodestr",
            getRegSmsVerifyCodeStr: "/v2/?regsmscodestr",
            checkUserName: "/v2/?regnamesugg",
            checkPassword: "/v2/?regpwdcheck",
            checkMail: "/v2/?regmailcheck",
            isUserNoName: "/v2/api/?ucenteradduname",
            checkPhone: "/v2/?regphonecheck",
            getphonestatus: "/v2/?getphonestatus",
            sendPhoneCode: "/v2/?regphonesend",
            multiBind: "/v2/?multiaccountassociate",
            multiUnbind: "/v2/?multiaccountdisassociate",
            multiCheckUserName: "/v2/?multiaccountusername",
            multiGetaccounts: "/v2/?multiaccountget",
            multiSwitchuser: "/v2/?loginswitch",
            checkVerifycode: "/v2/?checkvcode",
            getRsaKey: "/v2/getpublickey",
            authwidGetverify: "/v2/sapi/authwidgetverify",
            checkIDcard: "/v3/finance/main/idnumcert",
            checkIDcardSecondStep: "/v3/finance/main/upcert",
            checkIDcardAllStep: "/v3/finance/main/idnumcert",
            checkIDcardState: "/v3/finance/main/checkupcert"
        }
          , p = {
            login: "/v2/api/?login",
            reg: "/v2/api/?reg",
            fillUserName: "/v2/api/?ucenteradduname",
            regPhone: "/v2/api/?regphone",
            checkIDcard: "/v3/finance/main/idnumcert",
            checkIDcardSecondStep: "/v3/finance/main/upcert",
            checkIDcardAllStep: "/v3/finance/main/idnumcert",
            getAccessToken: "/v3/login/api/getoauthtoken"
        }
          , g = {
            getApiInfo: {
                apiType: "class"
            },
            login: {
                memberPass: "mem_pass",
                safeFlag: "safeflg",
                isPhone: "isPhone",
                timeSpan: "ppui_logintime",
                logLoginType: "logLoginType"
            },
            fillUserName: {
                selectedSuggestName: "pass_fillinusername_suggestuserradio",
                timeSpan: "ppui_fillusernametime"
            },
            reg: {
                password: "loginpass",
                timeSpan: "ppui_regtime",
                suggestIndex: "suggestIndex",
                suggestType: "suggestType",
                selectedSuggestName: "pass_reg_suggestuserradio_0",
                logRegType: "logRegType"
            },
            regPhone: {
                password: "loginpass",
                timeSpan: "ppui_regtime",
                suggestIndex: "suggestIndex",
                suggestType: "suggestType",
                selectedSuggestName: "pass_reg_suggestuserradio_0",
                logRegType: "logRegType"
            }
        }
          , m = {
            loginCheck: {
                isPhone: function(e) {
                    return e ? "true" : "false"
                }
            },
            login: {
                memberPass: function(e) {
                    return e ? "on" : ""
                }
            }
        }
          , f = {
            checkPassword: {
                fromreg: 1
            },
            reg: {
                registerType: 1,
                verifypass: function(e) {
                    return e.password
                }
            }
        }
          , h = {
            password: !0
        }
          , v = {
            login: function() {}
        }
          , b = {
            checkUserName: "reg",
            checkMail: "reg",
            checkPhone: "regPhone",
            sendPhoneCode: "regPhone",
            multiCheckUserName: "multiBind",
            multiSwitchuser: "changeUser",
            checkVerifycode: "checkVerifycode"
        }
          , y = passport.err.getCurrent().errMsg || passport.err.getCurrent()
          , _ = {};
        e.setContext = function(e) {
            _.product = e.product || _.product,
            _.charset = e.charset || _.charset,
            _.staticPage = e.staticPage || _.staticPage,
            _.token = e.token || _.token,
            _.subpro = e.subpro || _.subpro
        }
        ,
        e.traceID = {
            headID: e.traceID && e.traceID.headID || "",
            flowID: e.traceID && e.traceID.flowID || "",
            cases: e.traceID && e.traceID.cases || "",
            initTraceID: function(e) {
                var t = this;
                e && e.length > 0 ? (t.headID = e.slice(0, 6),
                t.flowID = e.slice(6, 8)) : t.destory()
            },
            createTraceID: function() {
                var e = this;
                return e.headID + e.flowID + e.cases
            },
            startFlow: function(e) {
                var t = this
                  , n = t.getFlowID(e);
                0 === t.flowID.length || t.flowID === n ? (t.createHeadID(),
                t.flowID = n) : t.finishFlow(n)
            },
            finishFlow: function() {
                var e = this;
                e.destory()
            },
            getRandom: function() {
                return parseInt(90 * Math.random() + 10, 10)
            },
            createHeadID: function() {
                var e = this
                  , t = (new Date).getTime() + e.getRandom().toString()
                  , n = Number(t).toString(16)
                  , i = n.length
                  , o = n.slice(i - 6, i).toUpperCase();
                e.headID = o
            },
            getTraceID: function(e) {
                var t = this
                  , n = e && e.traceid || "";
                t.initTraceID(n)
            },
            getFlowID: function(e) {
                var t = {
                    login: "01",
                    reg: "02"
                };
                return t[e]
            },
            setData: function(e) {
                var t = this;
                return e.data ? e.data.traceid = t.createTraceID() : e.url = e.url + (e.url.indexOf("?") > -1 ? "&" : "?") + "traceid=" + t.createTraceID(),
                e
            },
            destory: function() {
                var e = this;
                e.headID = "",
                e.flowID = ""
            }
        };
        for (var w in u)
            u.hasOwnProperty(w) && (e[w] = n(w, u[w]));
        for (var w in p)
            p.hasOwnProperty(w) && (e[w] = n(w, p[w], !0));
        e.jsonp = function(e, t) {
            return 0 != e.indexOf("http") && (e = d + e),
            t = t || {},
            t.flag_code && 1 == t.flag_code || (t.apiver = "v3"),
            t.tt = (new Date).getTime(),
            l.jsonp(e, t, {
                charset: "utf-8",
                processData: function(e) {
                    return a(e)
                }
            })
        }
        ,
        e.post = function(e, t) {
            return t = t || {},
            "wap" !== t.apitype && (e = d + e),
            t.staticpage = t.staticpage || _.staticPage,
            t.charset = t.charset || _.charset || document.characterSet || document.charset || "",
            t.token = t.token || _.token,
            t.tpl = t.tpl || _.product,
            l.submit(e, t, {
                charset: "utf-8",
                processData: function(e) {
                    return a(e)
                }
            })
        }
        ,
        e.request = l
    }(passport.data);
    var passport = passport || window.passport || {};
    passport.analysis = passport.analysis || {},
    function(e) {
        var t = function(e, t) {
            var n = e.config.diaPassLogin ? "dialogLogin" : "basicLogin"
              , i = e.config.loginMerge ? 1 : 0
              , o = e.config.product || "isnull"
              , s = window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase()
              , a = ""
              , r = "&tt=" + (new Date).getTime()
              , c = e.guideRandom ? e.guideRandom : "";
            for (var l in t)
                a = a + "&" + l + "=" + t[l];
            if ("http:" == s)
                var d = "http://nsclick.baidu.com/v.gif?pid=111&url=&logintype=" + n + "&gid=" + c + "&merge=" + i + "&tpl=" + o + a + r;
            else if ("https:" == s)
                var d = "https://passport.baidu.com/img/v.gif?logintype=" + n + "&gid=" + c + "&merge=" + i + "&tpl=" + o + a + r;
            if (d) {
                var u = new Image;
                u.onload = u.onerror = function() {
                    u.onload = u.onerror = null,
                    u = null
                }
                ,
                u.src = d
            }
        };
        e.login = {
            render: function(e) {
                t(e, {
                    type: "firstrender",
                    loginurl: encodeURIComponent(document.location.href)
                }),
                baidu(e.getPhoenixElement("pass_phoenix_list_login")).on("click", function(n) {
                    var i, o = baidu(n.target);
                    if (o && o.attr("title")) {
                        switch (o.attr("title")) {
                        case "普通登录":
                            i = "normal";
                            break;
                        case "二维码登录":
                            i = "qrcode";
                            break;
                        case "短信登录":
                            i = "sms";
                            break;
                        case "QQ帐号":
                            i = "qq";
                            break;
                        case "新浪微博":
                            i = "weibo";
                            break;
                        case "人人网":
                            i = "renren";
                            break;
                        case "腾讯微博":
                            i = "tqq";
                            break;
                        case "飞信":
                            i = "fetion";
                            break;
                        case "微信":
                            i = "weixin";
                            break;
                        case "天翼":
                            i = "tianyi"
                        }
                        t(e, {
                            phoenix: i
                        })
                    }
                });
                var n = (e.getElement(),
                e.getElement("form"));
                baidu(n).on("submit", function() {
                    e.loginfirstsubmit || (e.loginfirstsubmit = !0,
                    t(e, {
                        type: "loginfirstsubmit"
                    }))
                })
            },
            changeLoginType: function(e, n) {
                t(e, {
                    type: "changelogintype",
                    logintype: n && n.loginType || ""
                })
            },
            fieldFocus: function(e, n) {
                n.ele.get(0).id != e.$getId("smsPhone") && n.ele.get(0).id != e.$getId("smsVerifyCode") || e.smsloginfirstlog ? e.loginfirstlog || (e.loginfirstlog = !0,
                t(e, {
                    type: "loginfirst"
                })) : (e.smsloginfirstlog = !0,
                t(e, {
                    type: "smsloginfirst"
                }))
            },
            loginSuccess: function(e) {
                t(e, {
                    type: "loginsuccess"
                })
            },
            loginError: function() {},
            validateError: function(e, n) {
                return n.validate && t(e, {
                    errno: encodeURIComponent(n.validate.msg),
                    type: "loginerrno"
                }),
                {
                    preventEvent: !1,
                    preventDefault: !1
                }
            },
            fieldKeyup: function(e) {
                e.KEYUPFLAG || (t(e, {
                    type: "typein"
                }),
                e.KEYUPFLAG = !0)
            }
        }
    }(passport.analysis);
    var passport = passport || window.passport || {};
    passport.hook = passport.hook || {},
    function(e) {
        function t(e) {
            var t, n, i = this, o = {
                120016: {
                    isLogin: !1,
                    msg: "您的帐号存在安全风险，我们已经为您采取保护策略，建议您先绑定手机。"
                },
                400032: {
                    isLogin: !0,
                    msg: "快来绑定密保工具吧，提升帐号安全性的同时可以快速找回密码。"
                },
                400034: {
                    isLogin: !1,
                    msg: {
                        phone: "请绑定您的手机号码作为您的密保手机，提升帐号安全性的同时还可以快速找回密码。",
                        email: "请绑定一个您的常用邮箱作为您的密保邮箱，提升帐号安全性的同时还可以快速找回密码。"
                    }
                }
            }[e.errno], s = e.args, a = e.title, r = o.msg, c = (e.auth_title,
            e.auth_msg,
            o.isLogin), l = e.cfg, d = function(e, t, n) {
                var i = t.args
                  , o = {
                    action: t.type || "init",
                    u: e.config.u,
                    tpl: e.config.product,
                    ltoken: i.rsp.data.ltoken,
                    lstr: i.rsp.data.lstr
                };
                e.REQUESTBINDTOKENURL = "/v2/?loginspmbindsecureinfo",
                passport.data.jsonp("https://passport.baidu.com" + e.REQUESTBINDTOKENURL, o).success(function(t) {
                    0 == t.errInfo.no ? n && n({
                        bindEmailToken: t.data.bindEmailToken,
                        bindMobileToken: t.data.bindMobileToken,
                        authsid: t.data.authsid,
                        loginproxy: t.data.loginproxy,
                        otherValue: o
                    }) : (e._ownerDialog && e._ownerDialog.show(),
                    e.getElement("error").innerHTML = e.lang.sysError)
                })
            }, u = function(e) {
                var t = "string" == (typeof r).toLowerCase() ? r : r.email;
                return t += c ? "您可以<a class='bindLink bindJumpEmail'>跳过此步骤</a>或<a class='bindLink bindPhoneBtn'>绑定手机</a>。" : "您也可以<a class='bindLink bindPhoneBtn'>绑定手机</a>。",
                e.otherValue = e.otherValue || {},
                passport.pop.ArmorWidget("bindemail", {
                    token: e.bindEmailToken,
                    authsid: e.authsid,
                    title: a || "绑定密保邮箱",
                    otherValue: e.otherValue,
                    msg: t,
                    lstr: e.otherValue.lstr || "",
                    ltoken: e.otherValue.ltoken || "",
                    u: e.otherValue.u || "",
                    tpl: e.otherValue.tpl || "",
                    subpro: i.config.subpro,
                    traceid: e.traceid,
                    onSubmitSuccess: function(e) {
                        var e = e;
                        d(i, {
                            args: s,
                            type: "check"
                        }, function(t) {
                            e && e.hide && e.hide(),
                            s.isCompleted = !0,
                            t.loginproxy ? passport.data.jsonp(t.loginproxy).success(function(e) {
                                l.onCompleted && l.onCompleted(e, function() {
                                    l.onCancel && l.onCancel(s)
                                })
                            }) : l.onCancel && l.onCancel(s)
                        })
                    },
                    onRender: function() {
                        var e = this;
                        baidu(".bindPhoneBtn").on("click", function() {
                            e.close(),
                            n.show()
                        }),
                        baidu(".bindJumpEmail").on("click", function(t) {
                            t.preventDefault(),
                            e.close(),
                            s.isCompleted = !0,
                            l.onCancel && l.onCancel(s)
                        }),
                        baidu("#" + e.getId("header_a")).on("click", function() {
                            c && (s.isCompleted = !0,
                            l.onCancel && l.onCancel(s))
                        })
                    }
                })
            }, p = function(e) {
                var n = "string" == (typeof r).toLowerCase() ? r : r.phone;
                return c && e.bindEmailToken ? n += "您可以<a class='bindLink bindJumpPhone'>跳过此步骤</a>或<a class='bindLink bindEmailBtn'>绑定密保邮箱</a>。" : e.bindEmailToken && (n += "您也可以<a class='bindLink bindEmailBtn'>绑定密保邮箱</a>。"),
                e.otherValue = e.otherValue || {},
                passport.pop.ArmorWidget("bindmobile", {
                    token: e.bindMobileToken,
                    authsid: e.authsid,
                    title: a || "绑定手机",
                    otherValue: e.otherValue,
                    msg: n,
                    bindToLogin: 1,
                    lstr: e.otherValue.lstr || "",
                    ltoken: e.otherValue.ltoken || "",
                    u: e.otherValue.u || "",
                    tpl: e.otherValue.tpl || "",
                    apiMargicInstance: i,
                    subpro: i.config.subpro,
                    traceid: e.traceid,
                    onSubmitSuccess: function(e) {
                        var e = e;
                        d(i, {
                            args: s,
                            type: "check"
                        }, function(t) {
                            e && e.hide && e.hide(),
                            s.isCompleted = !0,
                            t.loginproxy ? passport.data.jsonp(t.loginproxy).success(function(e) {
                                l.onCompleted && l.onCompleted(e, function() {
                                    l.onCancel && l.onCancel(s)
                                })
                            }) : l.onCancel && l.onCancel(s)
                        })
                    },
                    onRender: function(n) {
                        var n = this;
                        baidu(".bindEmailBtn").on("click", function(i) {
                            i.preventDefault(),
                            n.close(),
                            t = t || u(e),
                            t.show()
                        }),
                        baidu(".bindJumpPhone").on("click", function(e) {
                            e.preventDefault(),
                            n.close(),
                            s.isCompleted = !0,
                            l.onCancel && l.onCancel(s)
                        }),
                        baidu("#" + n.getId("header_a")).on("click", function() {
                            c && (s.isCompleted = !0,
                            l.onCancel && l.onCancel(s))
                        })
                    },
                    onBindToLoginFn: function(e, t) {
                        t && t.mobile && (i.config.sms ? (i.getElement("smsPhone_placeholder") && i.$hide("smsPhone_placeholder"),
                        i.getElement("smsPhone") && (i.getElement("smsPhone").value = t.mobile),
                        i.getElement("smsVerifyCode") && (i.getElement("smsVerifyCode").value = "",
                        i.getElement("smsVerifyCode").focus())) : (i.getElement("userName_placeholder") && i.$hide("userName_placeholder"),
                        i.getElement("userName") && (i.getElement("userName").value = t.mobile),
                        i.getElement("password") && (i.getElement("password").value = "",
                        i.getElement("password").focus())))
                    }
                })
            };
            d(i, {
                args: s,
                type: "init"
            }, function(e) {
                passport._use(k, T[k], function() {
                    e.bindMobileToken ? (n = p(e),
                    n.show()) : e.bindEmailToken ? (t = u(e),
                    t.show()) : (i._ownerDialog && i._ownerDialog.show(),
                    i.getElement("error").innerHTML = i.lang.sysError)
                })
            })
        }
        function n(e) {
            var t, n, i = this, o = e.rspData, s = e.cfg, a = e.args, r = function(e) {
                var e = e || "系统检测到您的帐号疑似被盗，存在安全风险。请尽快修改密码。";
                return '<div class="passport-forceverify-risk"><p class="passport-forceverify-risk-msg">' + e + '</p><div  class="passport-forceverify-risk-con clearfix"><a class="passport-forceverify-risk-next" id="passport_forceverify_risk_next" href="###">下次提醒</a><a class="passport-forceverify-risk-btn" href="http://passport.baidu.com/v2/account/password" target="_blank" >立即修改</a></div></div>'
            };
            if (o && o.secstate)
                switch (o.secstate) {
                case "PA001":
                    n = "您的帐号密码输入错误次数达到上限，为保障帐号安全，登录前需验证身份。";
                    break;
                case "PA002":
                    n = "您的网络环境存在安全风险，为保障帐号安全，登录前需验证身份。";
                    break;
                case "PA003":
                    n = "您的帐号长时间未登录，为保障帐号安全，登录前需验证身份。";
                    break;
                case "risk":
                    t = r(),
                    n = "您的帐号可能存在安全隐患，为保障您的帐号安全，登录前需验证身份。";
                    break;
                case "cheat":
                    n = "您的帐号因批量或者使用非法软件注册被冻结，登录前需验证身份。";
                    break;
                case "PC001":
                    n = "您操作频度过于频繁，为保障帐号安全，登录前需验证身份。";
                    break;
                case "PX008":
                    n = "您本次的登录地存在异常，为保障本次操作安全，登录前需验证身份。";
                    break;
                default:
                    n = "您的帐号存在安全风险，为保障帐号安全，登录前需验证身份。"
                }
            var c = {
                400031: {
                    title: "登录保护",
                    msg: "您已开启登录保护功能，为保障帐号安全，登录前需验证身份。"
                },
                5: {
                    title: "登录安全验证",
                    msg: "您的网络环境存在安全风险，为保障帐号安全，登录前需验证身份。",
                    onSuccess: function(e, t) {
                        var n = o.gotourl + "&authsid=" + t.authsid;
                        passport.data.jsonp(n).success(function(t) {
                            i._ownerDialog && i._ownerDialog.show(),
                            e.hide(),
                            i.getElement("error").innerHTML = 0 == t.errInfo.no || 0 == t.data.errno ? '请重新登录，或<a href="https://passport.baidu.com/?getpass_index" target="_blank">找回密码</a>' : i.lang.sysError
                        })
                    },
                    onGetapiError: function() {
                        i.getElement("error").innerHTML = "您当前的操作存在安全风险，请稍后再试"
                    }
                },
                400023: {
                    title: "登录安全验证",
                    msg: "您的网络环境存在安全风险，为保障帐号安全，登录前需验证身份。",
                    onSuccess: function(e, t) {
                        var n = "https://passport.baidu.com/v3/login/main/qrbdusslogin?tt=" + (new Date).getTime()
                          , r = {
                            authsid: t.authsid,
                            bduss: o.bdusssign,
                            u: encodeURIComponent(o.u),
                            loginVersion: "v4",
                            tpl: i.config.product
                        };
                        passport.data.jsonp(n, r).success(function(t) {
                            e.hide(),
                            0 == t.errInfo.no || 0 == t.data.errno ? (a.isCompleted = !0,
                            s.onCompleted && s.onCompleted(t, function() {
                                s.onCancel && s.onCancel(a)
                            })) : i.getElement("error").innerHTML = i.lang.sysError
                        })
                    },
                    onGetapiError: function() {
                        i.getElement("error").innerHTML = "您当前的操作存在安全风险，请稍后再试"
                    }
                },
                120019: {
                    title: "登录解冻验证",
                    msg: "您的帐号因密码输入错误次数过多，为保障帐号安全，登陆前需验证身份。",
                    onSuccess: function(e, t) {
                        var n = o.gotourl + "&authsid=" + t.authsid;
                        passport.data.jsonp(n).success(function(t) {
                            i._ownerDialog && i._ownerDialog.show(),
                            e.hide(),
                            i.getElement("error").innerHTML = 0 == t.errInfo.no || 0 == t.data.errno ? '请重新登录，或<a href="https://passport.baidu.com/?getpass_index" target="_blank">找回密码</a>' : i.lang.sysError
                        })
                    },
                    onGetapiError: function() {
                        i.getElement("error").innerHTML = '登录密码错误已达上限，您可以<a href="https://passport.baidu.com/?getpass_index" target="_blank">找回密码</a>或3小时后再试'
                    }
                },
                120021: {
                    title: "安全验证",
                    msg: n,
                    defaultHTML: t,
                    onSuccess: function(e) {
                        return passport.data.jsonp(o.loginproxy).success(function(n) {
                            e.show(),
                            0 == n.errInfo.no ? (a.isCompleted = !0,
                            a.rsp && a.rsp.data && (a.rsp.data.hao123Param = n.data.hao123Param),
                            t ? (e.getElement("article").innerHTML = t,
                            baidu(e.getElement("header_a")).on("click", function() {
                                e.hide(),
                                s.onCompleted && s.onCompleted(n, function() {
                                    s.onCancel && s.onCancel(a)
                                })
                            }),
                            baidu(document.getElementById("passport_forceverify_risk_next")).on("click", function() {
                                e.hide(),
                                s.onCompleted && s.onCompleted(n, function() {
                                    s.onCancel && s.onCancel(a)
                                })
                            })) : (e.hide(),
                            s.onCompleted && s.onCompleted(n, function() {
                                s.onCancel && s.onCancel(a)
                            }))) : e.getElement("forceverify_error").html(i.lang.sysError)
                        }),
                        !1
                    },
                    onRender: function(e) {
                        document.getElementById("passport_forceverify_risk_appeal") && (document.getElementById("passport_forceverify_risk_appeal").href = e.url_forgot)
                    }
                },
                riskCheat: {
                    token: "risk",
                    title: "安全验证",
                    msg: n,
                    defaultHTML: t,
                    onRender: function(e) {
                        baidu(document.getElementById("passport_forceverify_risk_next")).on("click", function() {
                            e.hide(),
                            s.onCancel && s.onCancel()
                        }),
                        document.getElementById("passport_forceverify_risk_appeal") && (document.getElementById("passport_forceverify_risk_appeal").href = e.url_forgot)
                    }
                }
            }[e.errno];
            passport._use(D, T[D], function() {
                forceverifyLoginverify = passport.pop.Forceverify({
                    token: o.authtoken,
                    title: c.title,
                    msg: c.msg,
                    subpro: i.config.subpro,
                    u: o.u || "",
                    lstr: o.lstr || "",
                    ltoken: o.ltoken || "",
                    tpl: o.tpl || "",
                    traceid: o.traceid,
                    lang: i.config.lang,
                    onRender: function(e) {
                        c.onRender && c.onRender(e)
                    },
                    onSubmitSuccess: function(e, t) {
                        try {
                            "localStorage"in window && null !== window.localStorage && localStorage.setItem("passLoginType", "normal")
                        } catch (n) {}
                        if ("1" === o.realnameverifyemail)
                            return o.realnameauthsid = t.authsid,
                            void p.apply(i, [{
                                args: a,
                                rspData: o,
                                cfg: s
                            }]);
                        if (c.onSuccess)
                            return void c.onSuccess(e, t);
                        var r = o.loginproxy;
                        passport.data.jsonp(r).success(function(t) {
                            0 == t.errInfo.no || 0 == t.data.errno ? (e.hide(),
                            a.isCompleted = !0,
                            a.rsp && a.rsp.data && (a.rsp.data.hao123Param = t.data.hao123Param),
                            s.onCompleted && s.onCompleted(t, function() {
                                s.onCancel && s.onCancel(a)
                            })) : (e.hide(),
                            i._ownerDialog && i._ownerDialog.show(),
                            i.getElement("error").innerHTML = i.lang.sysError)
                        })
                    },
                    onGetapiError: function(e) {
                        return i._ownerDialog && i._ownerDialog.show(),
                        c.onGetapiError ? void c.onGetapiError(e) : void (i.getElement("error").innerHTML = i.lang.sysError)
                    },
                    onHide: function() {
                        s.onCancel && s.onCancel(),
                        i.config.loginMerge && i.getElement("isPhone") && (i.getElement("isPhone").value = "")
                    }
                }, !0)
            })
        }
        function i(e) {
            function t() {
                var e = document.getElementById("managePcAuthwidget") || "";
                e && document.body.removeChild(e)
            }
            var n = this
              , i = e.rspData
              , o = e.cfg
              , s = e.args
              , a = "login_force_verify";
            400031 === +e.errno && (a = "login_protect_verify");
            var r = document.getElementById("managePcAuthwidget") || "";
            if (!r) {
                var c = document.createElement("div");
                c.id = "managePcAuthwidget",
                c.className = "pass-auth-widget-wrapper",
                document.body.appendChild(c)
            }
            passport._load(location.protocol + "//wappass.baidu.com/static/apimanage/api/authwidget.js?cdnversion=" + (new Date).getTime(), !0, function() {
                var e;
                if (window.PassApi && window.PassApi.authwidget) {
                    var r = window.PassApi.authwidget;
                    e = new r({
                        id: "managePcAuthwidget",
                        mode: "dialog",
                        authid: i.authid || "",
                        pageType: "authType",
                        scene: a,
                        clientfrom: "pc",
                        staticPage: n.config.staticPage || "",
                        lang: n.config.lang || "",
                        verifySuccess: function(e, a) {
                            try {
                                "localStorage"in window && null !== window.localStorage && localStorage.setItem("passLoginType", "normal")
                            } catch (r) {}
                            if ("1" === i.realnameverifyemail)
                                return i.realnameauthsid = a,
                                void p.apply(n, [{
                                    args: s,
                                    rspData: i,
                                    cfg: o
                                }]);
                            var c = i.loginproxy;
                            passport.data.jsonp(c).success(function(e) {
                                t(),
                                0 == e.errInfo.no || 0 == e.data.errno ? (s.isCompleted = !0,
                                s.rsp && s.rsp.data && (s.rsp.data.hao123Param = e.data.hao123Param),
                                o.onCompleted && o.onCompleted(e, function() {
                                    o.onCancel && o.onCancel(s)
                                })) : (n._ownerDialog && n._ownerDialog.show(),
                                n.getElement("error").innerHTML = n.lang.sysError)
                            })
                        },
                        verifyFail: function() {},
                        closeAuthwidget: function() {
                            n._ownerDialog && n._ownerDialog.show(),
                            t(),
                            o.onCancel && o.onCancel(),
                            n.config.loginMerge && n.getElement("isPhone") && (n.getElement("isPhone").value = "")
                        }
                    })
                }
            })
        }
        function o(e) {
            for (var t = this, n = e.rspData, i = [], o = n.accounts.split(";"), s = 0; s < o.length; s++) {
                var a = o[s].split(",");
                i.push({
                    username: a[0],
                    portrait: a[1]
                })
            }
            passport._load(S + T[I], !0, function() {
                var e = passport.pop.init({
                    type: "loginMultichoice",
                    tangram: !0,
                    apiOpt: {
                        phone: n.userName,
                        userList: i
                    },
                    onChoicedUser: function(n, i) {
                        e.hide(),
                        t._ownerDialog && t._ownerDialog.show(),
                        t.getElement("userName").value = i.username,
                        t.getElement("isPhone").value = "false",
                        t.config.loginMerge && t.getElement("loginMerge") && (t.getElement("loginMerge").value = ""),
                        "sms" == t.currentLoginType ? (t.getElement("smsHiddenFields_switchuname").value = i.username,
                        t._submitSmsForm()) : (t.config.loginMerge || (t._collectData(),
                        t.switchTo("normal"),
                        t._restoreData("phone")),
                        t.submit())
                    },
                    onHide: function() {
                        t.getElement("userName").value = n.userName,
                        t.getElement("isPhone").value = ""
                    }
                });
                e.show()
            })
        }
        function s(e) {
            var t = this
              , n = t.$getId("pass_b2c_swf")
              , i = e.args.rsp.data
              , o = P()
              , s = 0;
            i && i.bckv && (s = parseInt(i.bckv, 10) > 0);
            var a = null;
            if (passport.CONSTANT = passport.CONSTANT || {},
            passport.CONSTANT.b2c_getlogin = function() {}
            ,
            passport.CONSTANT.b2c_setlogin = function() {
                var e = {
                    kv: i.bckv,
                    sync: i.bcsync,
                    checksum: i.bcchecksum,
                    time: i.bctime
                };
                try {
                    if (a) {
                        var t = a.get_movie(n, "b2c_setlogin").b2c_setlogin(e);
                        try {
                            var o = document.createElement("script");
                            o.type = "text/javascript",
                            o.src = [S, "/v2/b2c-stable?", "from=setlogin.done", "&checksum=", e.checksum, "&time=", e.time, "&status=", encodeURIComponent(t)].join(""),
                            document.getElementsByTagName("head")[0].appendChild(o)
                        } catch (s) {}
                    }
                } catch (s) {
                    try {
                        var o = document.createElement("script");
                        o.type = "text/javascript",
                        o.src = [S, "/v2/b2c-stable?", "from=setlogin.fail", "&msg=", encodeURI(s.message)].join(""),
                        document.getElementsByTagName("head")[0].appendChild(o)
                    } catch (s) {}
                }
            }
            ,
            t.getElement("pass_b2c") && o.isexists && s) {
                var r = function(e) {
                    var t = function(e) {
                        e = e || {};
                        var t, n, i, o, s = {}, a = function(e) {
                            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                        };
                        for (n in e)
                            s[n] = e[n];
                        e = s;
                        var r = e.vars
                          , c = ["classid", "codebase", "id", "width", "height", "align"];
                        if (e.align = e.align || "middle",
                        e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",
                        e.codebase = "https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0",
                        e.movie = e.url || "",
                        delete e.vars,
                        delete e.url,
                        "string" == typeof r)
                            e.flashvars = r;
                        else {
                            var l = [];
                            for (n in r)
                                o = r[n],
                                l.push(n + "=" + encodeURIComponent(o));
                            e.flashvars = l.join("&")
                        }
                        var d = ["<object "];
                        for (t = 0,
                        i = c.length; i > t; t++)
                            o = c[t],
                            d.push(" ", o, '="', a(e[o]), '"');
                        d.push(">");
                        var u = {
                            wmode: 1,
                            scale: 1,
                            quality: 1,
                            play: 1,
                            loop: 1,
                            menu: 1,
                            salign: 1,
                            bgcolor: 1,
                            base: 1,
                            allowscriptaccess: 1,
                            allownetworking: 1,
                            allowfullscreen: 1,
                            seamlesstabbing: 1,
                            devicefont: 1,
                            swliveconnect: 1,
                            flashvars: 1,
                            movie: 1
                        };
                        for (n in e)
                            o = e[n],
                            n = n.toLowerCase(),
                            u[n] && (o || o === !1 || 0 === o) && d.push('<param name="' + n + '" value="' + a(o) + '" />');
                        e.src = e.movie,
                        e.name = e.id,
                        delete e.id,
                        delete e.movie,
                        delete e.classid,
                        delete e.codebase,
                        e.type = "application/x-shockwave-flash",
                        e.pluginspage = "https://www.macromedia.com/go/getflashplayer",
                        d.push("<embed");
                        var p;
                        for (n in e)
                            if (o = e[n],
                            o || o === !1 || 0 === o) {
                                if (new RegExp("^salign$","i").test(n)) {
                                    p = o;
                                    continue
                                }
                                d.push(" ", n, '="', a(o), '"')
                            }
                        return p && d.push(' salign="', a(p), '"'),
                        d.push("></embed></object>"),
                        d.join("")
                    }
                      , n = function(e) {
                        e = e || {};
                        var n = document.createElement("div");
                        n.innerHTML = t(e),
                        n.style.display = "none",
                        document.getElementsByTagName("body")[0].appendChild(n)
                    }
                      , i = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
                    return (i > 7 || !i) && n(e),
                    {
                        get_movie: function(e, t) {
                            var n = document[e];
                            if (9 === document.documentMode && n && n.length)
                                for (var i = n.length, o = 0; i > o; o++) {
                                    var s = n[o];
                                    if ("embed" === s.tagName.toLowerCase()) {
                                        n = s;
                                        break
                                    }
                                }
                            return t && "function" != typeof n[t] && (n = document.getElementById(e)),
                            n
                        }
                    }
                };
                try {
                    var c = window.location.protocol.toLowerCase();
                    a = r({
                        id: n,
                        width: "1",
                        height: "1",
                        url: c + "//passport.baidu.com/passApi/swf/b2c.swf?_t=" + Math.random(),
                        allowscriptaccess: "always"
                    })
                } catch (l) {}
            }
            passport.data.request.load(S + "/v2/b2c-flash?isexists=" + encodeURIComponent(o.isexists) + "&ver=" + encodeURIComponent(o.ver) + "&filename=" + encodeURIComponent(o.filename))
        }
        function a(e) {
            var t = this
              , n = e.rspData
              , i = e.args.rsp.data;
            return t.rebindGuideWidget ? void t.rebindGuideWidget.show() : void passport.use("uni_rebindGuide", {
                tangram: !0
            }, function() {
                t.rebindGuideWidget = new passport.pop.rebindGuideWidget({
                    color: t.config.color || "blue",
                    apiOpt: i,
                    rebindType: "rebindPhone",
                    onrebindGuideCompleted: function() {
                        L(t, n)
                    }
                }),
                t.rebindGuideWidget.show()
            })
        }
        function r(e) {
            var t = this
              , n = e.cfg
              , i = e.args
              , o = e.rspData.rsp.data || {};
            passport._load(S + T[I], !0, function() {
                b ? (b.setMakeOption && b.setMakeOption(o.authsid, o.bdstoken),
                b.show()) : (b = passport.pop.init({
                    type: "accSetPwd",
                    tangram: !0,
                    color: t.config.color || "blue",
                    apiOpt: {
                        u: t.config.u,
                        product: t.config.product,
                        authsid: o.authsid || "",
                        bdstoken: o.bdstoken || "",
                        staticPage: t.config.staticPage
                    },
                    onHide: function() {
                        "1" != o.setpwdswitch && (i.isCompleted = !0,
                        n.onCancel && n.onCancel(i))
                    },
                    onSubmitSuccess: function() {
                        i.isCompleted = !0,
                        i && i.rsp && i.rsp.errInfo && (i.rsp.errInfo.no = "0"),
                        o.hao123Param && A(o.hao123Param, t),
                        b.hide(),
                        n.onCancel && n.onCancel(i)
                    }
                }),
                b.show())
            })
        }
        function c(e) {
            var t = this
              , n = e.cfg
              , i = e.args
              , o = e.rspData.rsp.data || {};
            passport._load(S + T[I], !0, function() {
                y ? (y.setMakeOption && y.setMakeOption(o.authsid, o.bdstoken),
                y.show()) : (y = passport.pop.init({
                    type: "accSetPwd",
                    tangram: !0,
                    color: t.config.color || "blue",
                    jumpset: "1" == o.jumpset ? 1 : 0,
                    apiOpt: {
                        u: t.config.u,
                        product: t.config.product,
                        authsid: o.authsid || "",
                        bdstoken: o.bdstoken || "",
                        username: 1,
                        staticPage: t.config.staticPage
                    },
                    onHide: function() {
                        "1" == o.jumpset && (i.isCompleted = !0,
                        n.onCancel && n.onCancel(i))
                    },
                    onSubmitSuccess: function() {
                        i.isCompleted = !0,
                        i && i.rsp && i.rsp.errInfo && (i.rsp.errInfo.no = "0"),
                        o.hao123Param && A(o.hao123Param, t),
                        y.hide(),
                        n.onCancel && n.onCancel(i)
                    }
                }),
                y.show())
            })
        }
        function l(e) {
            var t = this
              , n = e.cfg
              , i = e.args
              , o = e.rspData.rsp.data || {}
              , s = "400413" === i.rsp.errInfo.no && "sms" === e.rspData.rsp.loginType ? "1" : "0";
            passport._load(S + T[I], !0, function() {
                E ? (E.reRender && E.reRender({
                    lstr: o.lstr || "",
                    ltoken: o.ltoken || "",
                    token: o.authtoken || "",
                    loginproxy: o.loginproxy || "",
                    select: s,
                    loginType: e.rspData.rsp.loginType
                }),
                E.show()) : (E = passport.pop.init({
                    type: "secondCardVerify",
                    tangram: !0,
                    color: t.config.color || "blue",
                    apiOpt: {
                        u: t.config.u,
                        product: t.config.product,
                        lstr: o.lstr || "",
                        ltoken: o.ltoken || "",
                        token: o.authtoken || "",
                        staticPage: t.config.staticPage,
                        select: s,
                        scscene: o.scscene || "",
                        scnewuser: o.scnewuser || "",
                        loginType: e.rspData.rsp.loginType,
                        loginproxy: o.loginproxy || ""
                    },
                    onloginSuccess: function() {
                        i.isCompleted = !0,
                        i && i.rsp && i.rsp.errInfo && (i.rsp.errInfo.no = "0"),
                        o.hao123Param && A(o.hao123Param, t),
                        E.hide(),
                        n.onCancel && n.onCancel(i)
                    },
                    onSubmitSuccess: function(e, n) {
                        n.rsp.data.loginproxy && passport.data.jsonp(n.rsp.data.loginproxy).success(function(i) {
                            "0" === i.errInfo.no ? document.location.href = "https://passport.baidu.com/v3/security/main/secondcardmodifyaccinfo?tpl=" + t.config.product + "&bdstoken=" + n.rsp.data.bdstoken + "&authsid=" + n.rsp.data.mod_authsid + "&u=" + encodeURIComponent(i.data.u) + "&loginType=" + n.rsp.data.loginType + "&hasUsername=" + n.rsp.data.hasUsername : e.target.getElement("secondCardError").innerHTML = t.lang.sysError
                        })
                    }
                }),
                E.show())
            })
        }
        function d(e) {
            var t = this
              , n = e.cfg
              , i = e.args
              , o = e.rspData.rsp.data || {};
            passport._load(S + T[I], !0, function() {
                C ? (C.reRender && C.reRender({
                    secauthsid: o.secauthsid,
                    secbdstoken: o.secbdstoken
                }),
                C.show()) : (C = passport.pop.init({
                    type: "secondCardList",
                    tangram: !0,
                    color: t.config.color || "blue",
                    apiOpt: {
                        u: t.config.u,
                        product: t.config.product,
                        staticPage: t.config.staticPage,
                        secauthsid: o.secauthsid,
                        secbdstoken: o.secbdstoken,
                        regLink: t.constant.REG_URL,
                        source: t.config.source || "login"
                    },
                    onVerifySuccess: function(e) {
                        C.hide(),
                        i.isCompleted = !0,
                        i && i.rsp && i.rsp.errInfo && (i.rsp.errInfo.no = "0"),
                        i && i.rsp && i.rsp.data && (i.rsp.data.exchange = e),
                        o.hao123Param && A(o.hao123Param, t),
                        n.onCancel && n.onCancel(i)
                    },
                    onRegSuccess: function() {
                        C.hide(),
                        i.isCompleted = !0,
                        i && i.rsp && i.rsp.errInfo && (i.rsp.errInfo.no = "0"),
                        o.hao123Param && A(o.hao123Param, t),
                        n.onCancel && n.onCancel(i)
                    },
                    onHide: function() {
                        t._ownerDialog && t._ownerDialog.show()
                    }
                }),
                C.show())
            })
        }
        function u(e) {
            var t = this;
            e.rspData = e.rspData || {},
            passport._load(S + T[R], !0, function() {
                w ? w.setToken(e.rspData.token, function() {
                    w.show()
                }) : (w = passport.pop.init({
                    type: "accConnect",
                    tangram: !0,
                    color: t.config.color || "",
                    apiOpt: {
                        u: t.config.u,
                        adtext: e.rspData.adtext,
                        product: t.config.product,
                        token: e.rspData.token,
                        staticPage: t.config.staticPage
                    },
                    onConnectSuccess: function(e) {
                        var n = e.rsp;
                        n.connect = w,
                        L(t, {
                            rsp: n
                        }),
                        e.returnValue = !1
                    }
                }),
                w.show())
            })
        }
        function p(e) {
            var t = this
              , n = e.cfg
              , i = e.args;
            e.rspData = e.rspData || {},
            passport._load(S + T[I], !0, function() {
                v ? v.show() : (v = passport.pop.init({
                    type: "accRealName",
                    tangram: !0,
                    color: t.config.color || "",
                    apiOpt: {
                        u: t.config.u,
                        product: t.config.product,
                        staticPage: t.config.staticPage,
                        action: "login",
                        realnameswitch: e.rspData.realnameswitch,
                        authsid: e.rspData.realnameauthsid,
                        ltoken: e.rspData.ltoken,
                        lstr: e.rspData.lstr,
                        cu: e.rspData.u,
                        overseas: t.config.overseas
                    },
                    onHide: function() {
                        t.fire("RealHide", i),
                        "1" != e.rspData.realnameswitch && (i.isCompleted = !0,
                        n.onCancel && n.onCancel(i))
                    },
                    onverifyHide: function(o) {
                        t.realLoginHide || (e.rspData.loginproxy && o ? passport.data.jsonp(e.rspData.loginproxy + "&authsid=" + o).success(function(e) {
                            0 == e.errInfo.no ? (i.isCompleted = !0,
                            n.onCompleted && n.onCompleted(e, function() {
                                n.onCancel && n.onCancel(i)
                            })) : (t._ownerDialog && t._ownerDialog.show(),
                            t.getElement("error").innerHTML = t.lang.sysError)
                        }) : (i.isCompleted = !0,
                        e.rspData.hao123Param && "1" == e.rspData.realnameswitch && A(e.rspData.hao123Param, t),
                        n.onCancel && n.onCancel(i)))
                    },
                    onSubmitSuccess: function(o, s) {
                        e.rspData.loginproxy && s.rsp.data.authsid ? passport.data.jsonp(e.rspData.loginproxy + "&authsid=" + s.rsp.data.authsid).success(function(e) {
                            if (0 === +e.errInfo.no) {
                                if (i.isCompleted = !0,
                                t.realLoginHide = !0,
                                v.hide(),
                                1 === +e.data.guideUpgradeMobile)
                                    return void g.call(t, e, i);
                                n.onCompleted && n.onCompleted(e, function() {
                                    n.onCancel && n.onCancel(i)
                                })
                            } else
                                v.hide(),
                                t._ownerDialog && t._ownerDialog.show(),
                                t.getElement("error").innerHTML = t.lang.sysError
                        }) : (i.isCompleted = !0,
                        i && i.rsp && i.rsp.errInfo && (i.rsp.errInfo.no = "0"),
                        e.rspData.hao123Param && e.rspData.realnameswitch + "" == "1" && A(e.rspData.hao123Param, t),
                        t.realLoginHide = !0,
                        v.hide(),
                        n.onCancel && n.onCancel(i))
                    }
                }),
                v.show())
            })
        }
        function g(e, t) {
            var n = this;
            passport._load(S + T[I], !0, function() {
                var i = passport.pop.init({
                    type: "bindGuide",
                    tangram: !0,
                    color: n.config.color || "",
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product,
                        staticPage: n.config.staticPage,
                        action: "login",
                        realnameswitch: e.data.realnameswitch,
                        authsid: e.data.realnameauthsid,
                        ltoken: e.data.ltoken,
                        upgradeMobileToken: e.data.upgradeMobileToken,
                        bindMobileToken: e.data.bind_mobile_token,
                        lstr: e.data.lstr,
                        cu: e.data.u,
                        overseas: n.config.overseas,
                        tip: "为了您的账号安全，建议设置为绑定手机号",
                        successTip: e.data.upgradeMobile + "验证成功"
                    },
                    onSubmitSuccess: function() {
                        i.hide(),
                        L(n, t)
                    },
                    onHide: function() {
                        L(n, t)
                    }
                });
                i.show()
            })
        }
        function m(e) {
            var t = this
              , n = (e.cfg,
            e.args);
            e.rspData = e.rspData || {},
            passport._load(S + T[I], !0, function() {
                _ ? _.show() : (_ = passport.pop.init({
                    type: "bindGuide",
                    tangram: !0,
                    color: t.config.color || "",
                    apiOpt: {
                        type: "verify",
                        u: t.config.u,
                        product: t.config.product,
                        staticPage: t.config.staticPage,
                        action: "login",
                        realnameswitch: e.rspData.realnameswitch,
                        authsid: e.rspData.realnameauthsid,
                        ltoken: e.rspData.ltoken,
                        upgradeMobileToken: e.rspData.upgrade_mobile_token,
                        bindMobileToken: e.rspData.bind_mobile_token,
                        lstr: e.rspData.lstr,
                        cu: e.rspData.u,
                        overseas: t.config.overseas,
                        tip: "检测到您有待验证手机 " + (e.rspData.upgrade_mobile || "") + "，建议设置为绑定手机",
                        successTip: "登录成功"
                    },
                    onSubmitSuccess: function() {
                        _.hide(),
                        L(t, n)
                    },
                    onHide: function() {
                        L(t, n)
                    }
                }),
                _.show())
            })
        }
        function f(e, s, g) {
            function f(t) {
                var n = new Image;
                n.onload = n.onerror = function() {
                    n.onload = n.onerror = null,
                    n = null
                }
                ,
                n.src = S + "/img/v.gif?type=" + t + "&tt=" + (new Date).getTime(),
                s.isCompleted = !0,
                b.hao123Param && A(b.hao123Param, e),
                w.confirmWidgetMobileSure.hide(),
                g.onCancel && g.onCancel(s)
            }
            var v = s.rsp.errInfo.no
              , b = s.rsp.data;
            g = g || {};
            var y = b && ("risk" === b.secstate || "cheat" === b.secstate);
            if (b && b.connectType && e.config.connect) {
                var _ = e.fire("beforeWarning", {
                    args: s
                });
                if (!_)
                    return;
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                h(S + "/passApi/css/uni_accConnect_ab6dda9.css"),
                u.apply(e, [{
                    args: s,
                    rspData: b,
                    cfg: g,
                    errno: v
                }]),
                !1
            }
            if (18 === +v)
                return e._logNaMonitor("pc_login_real_name_action"),
                e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                p.apply(e, [{
                    args: s,
                    rspData: b,
                    cfg: g,
                    errno: v
                }]),
                b.hao123Param && b.realnameswitch + "" != "1" && A(b.hao123Param, e),
                !1;
            if (1 === +b.guide_upgrade_mobile)
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                e._logNaMonitor("pc_login_confirm_mobile"),
                m.call(e, {
                    args: s,
                    rspData: b,
                    cfg: g,
                    errno: v
                }),
                b.hao123Param && b.realnameswitch + "" != "1" && A(b.hao123Param, e),
                !1;
            if (20 === +v) {
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""),
                e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""),
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                r.apply(e, [{
                    args: s,
                    rspData: s,
                    cfg: g
                }]),
                b.hao123Param && "1" != b.setpwdswitch && A(b.hao123Param, e),
                !1
            }
            if (22 === +v) {
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""),
                e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""),
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                c.apply(e, [{
                    args: s,
                    rspData: s,
                    cfg: g
                }]),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            if ("400413" === v || "400414" === v) {
                e._logNaMonitor("pc_login_second_card");
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""),
                e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""),
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                l.apply(e, [{
                    args: s,
                    rspData: s,
                    cfg: g
                }]),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            if ("400704" === v || "400706" === v) {
                e._logNaMonitor("pc_login_second_card");
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""),
                e.getElement("smsError") && (e.getElement("smsError").innerHTML = ""),
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                d.apply(e, [{
                    args: s,
                    rspData: s,
                    cfg: g
                }]),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            if (19 == v) {
                var w = this
                  , b = s.rsp.data
                  , _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                null == w.confirmWidgetLabel ? passport._load(S + "/passApi/js/uni_wrapper.js", !0, function() {
                    w.confirmWidgetLabel = passport.pop.init({
                        type: "confirmWidget",
                        tangram: !0,
                        width: 430,
                        height: 150,
                        apiOpt: {
                            contentHTML: "                                        <div class='pass-confirmContent-wrapper-Label'>                                            <div class='pass-confirmContent-msg-Label'><span class='img-class' ></span></div>                                            <ul  class='pass-confirmContent-descmsg-Label' style='margin-left:20px;'>                                                <p>近日，某邮箱帐户存在被破解的可能性，建议您使用其他</p>                                                <p>邮箱绑定百度帐号，或及时修改您的百度帐号登陆密码并</p>                                                <p>绑定手机，以确保帐户安全。</p>                                            </ul>                                        </div>"
                        },
                        onConfirmClose: function() {
                            w.confirmWidgetLabel.hide(),
                            L(e, s)
                        },
                        onRender: function() {
                            w.confirmWidgetLabel.getElement("confirm_cancel").style.display = "none",
                            w.confirmWidgetLabel.getElement("confirm_continue").style.display = "none",
                            w.confirmWidgetLabel.getElement("confirmWidget_footer").style.display = "none"
                        }
                    }),
                    w.confirmWidgetLabel.show()
                }) : w.confirmWidgetLabel.show(),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            if (23 == v) {
                var w = this
                  , b = s.rsp.data
                  , _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                null == w.confirmWidgetMobileSure ? passport._load(S + "/passApi/js/uni_wrapper.js", !0, function() {
                    w.confirmWidgetMobileSure = passport.pop.init({
                        type: "confirmWidget",
                        tangram: !0,
                        titleText: "非常重要",
                        width: 430,
                        apiOpt: {
                            Cancel: "不需要解绑",
                            Continue: "申诉去解绑",
                            contentHTML: '<div class="pass-confirmContent-wrapper-sureConfirm"><div class="pass-confirmContent-wrapper-msg"><p><span class="pass-confirmContent-redcolor" id="pass-mobile-sure-num">' + b.phoneNumber + '</span>是您绑定的手机号,请确认该手机号是否还在使用,为了帐号安全请及时解绑不使用的手机。</p></div><div class="pass-confirmwidget-bottom"><span id="pass-mobile-sure-btn" class="pass-button pass-button-grey cancel">不需要解绑</span><a href="' + b.appealurl + '" id="pass-appeal-btn" class="pass-button pass-button-grey continue" target="new">申诉去解绑</a></div></div>'
                        },
                        onRender: function() {
                            w.confirmWidgetMobileSure.getElement("confirm_cancel").style.display = "none",
                            w.confirmWidgetMobileSure.getElement("confirm_continue").style.display = "none",
                            w.confirmWidgetMobileSure.getElement("confirmWidget_footer").style.display = "none",
                            baidu(document.getElementById("pass-mobile-sure-btn")).on("click", function() {
                                f("mobileSurePC")
                            }),
                            baidu(document.getElementById("pass-appeal-btn")).on("click", function() {
                                f("appealMobilePC")
                            })
                        },
                        onConfirmClose: function() {
                            f("mobileSureClosePC")
                        },
                        onConfirmContinue: function() {},
                        onConfirmCancel: function() {}
                    }),
                    w.confirmWidgetMobileSure.show()
                }) : (document.getElementById("pass-mobile-sure-num") && (document.getElementById("pass-mobile-sure-num").html = b.phoneNumber || ""),
                w.confirmWidgetMobileSure.show()),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            if (401007 == v) {
                e._logNaMonitor("pc_login_multi_choice");
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                o.apply(e, [{
                    rspData: b
                }]),
                !1
            }
            if (120016 == v || 400032 == v || 400034 == v) {
                e._logNaMonitor("pc_bind_action");
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                t.apply(e, [{
                    errno: v,
                    args: s,
                    cfg: g
                }]),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            if (5 == v || 400031 == v || 120019 == v || 120021 == v || 400023 == v || y) {
                e._logNaMonitor("pc_login_verify_transfer");
                var _ = e.fire("beforeWarning", {
                    args: s
                });
                if (!_)
                    return;
                return e.getElement("error") && (e.getElement("error").innerHTML = ""),
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                b.authid ? void i.apply(e, [{
                    args: s,
                    rspData: b,
                    cfg: g,
                    errno: y && 120021 != v ? "riskCheat" : v
                }]) : (h(S + "/passApi/css/uni_forceverify_9a4941e.css"),
                n.apply(e, [{
                    args: s,
                    rspData: b,
                    cfg: g,
                    errno: y && 120021 != v ? "riskCheat" : v
                }]),
                !1)
            }
            if (400037 == v) {
                var _ = e.fire("beforeWarning", s);
                if (!_)
                    return;
                return e.getElement("error").innerHTML = "",
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                a.apply(e, [{
                    args: s,
                    rspData: s,
                    cfg: g
                }]),
                b.hao123Param && A(b.hao123Param, e),
                !1
            }
            return 400041 === +v && (document.location.href = "https://passport.baidu.com/?getpassappeal&tpl=" + e.config.product),
            !0
        }
        function h(e) {
            if (!x[e]) {
                x[e] = !0;
                var t = document.createElement("link");
                t.rel = "stylesheet",
                t.type = "text/css",
                t.href = e,
                document.getElementsByTagName("head")[0].appendChild(t)
            }
            return !0
        }
        var v, b, y, _, w, E, C, S = window.location ? "http:" === window.location.protocol.toLowerCase() ? "http://passport.baidu.com" : "https://passport.baidu.com" : "http:" === document.location.protocol.toLowerCase() ? "http://passport.baidu.com" : "https://passport.baidu.com", T = {
            uni_armorwidget: "/passApi/js/uni_armorwidget_71d1be8.js",
            uni_forceverify: "/passApi/js/uni_forceverify_f96f9bd.js",
            uni_accConnect: "/passApi/js/uni_accConnect_wrapper.js",
            uni_wrapper: "/passApi/js/uni_wrapper.js"
        }, I = "uni_wrapper", D = "uni_forceverify", k = "uni_armorwidget", R = "uni_accConnect", x = {}, L = function(e, t) {
            var n = "pc_" + e.currentLoginType + "_loginv4_success";
            e._logNaMonitor(n);
            var i = {
                tpl: e.config.product || "",
                page: e.config.page || "",
                traceId: e.urlData.traceId || ""
            }
              , o = {
                eventType: "pc_login_success"
            };
            e._logPass(i, o),
            e._logPass(i, {
                eventType: "pc-" + e.config.loginType + "-submit-success"
            });
            var s = e.fire("loginSuccess", t);
            s && ("yylive" === e.config.product ? passport.data.getAccessToken({
                client: "",
                clientfrom: "",
                tpl: "yylive ",
                client_id: "Bxr73Efet8HjR5Tr0HqcgDKr"
            }).success(function(n) {
                var i = n.data
                  , o = e.fireEvent("yyLoginSuccess", {
                    rsp: i
                });
                o && (window.location ? window.location.href = t.rsp.data.u + "?accesstoken=" + i.access_token + "&expire=" + i.expires_in : document.location.href = t.rsp.data.u + "?accesstoken=" + i.access_token + "&expire=" + i.expires_in)
            }) : window.location ? window.location.href = t.rsp.data.u : document.location.href = t.rsp.data.u)
        }, P = function() {
            var e = 0
              , t = 0
              , n = null
              , i = /msie (\d+\.\d+)/i.test(navigator.userAgent);
            if (i || console.log(navigator.plugins["Shockwave Flash"]),
            i) {
                var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                o && (e = 1,
                t = o.GetVariable("$version"))
            } else if (navigator && navigator.plugins && navigator.plugins.length > 0 && navigator.plugins["Shockwave Flash"]) {
                var o = navigator.plugins["Shockwave Flash"];
                o && (n = o.filename,
                e = 1,
                t = o.version ? o.version : o.description)
            }
            return {
                isexists: e,
                ver: t,
                filename: n
            }
        }, A = function(e, t) {
            if (!(t && t.config && t.config.noSynBdu && 1 === t.config.noSynBdu)) {
                var n = document.location.protocol.toLowerCase();
                passport.data.request.load(n + "//user.nuomi.com/pclogin/main/crossdomain?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()),
                passport.data.request.load(n + "//passport.zongheng.com/bdpass/crossdomain.do?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()),
                passport.data.request.load(n + "//newcopyright.baidu-int.com/login/crossdomain?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime()),
                passport.data.request.load(n + "//apollo.auto/apollo/sync_bduss?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime());
                var i = "//baike.baidu.hk/common/api/crossdomain?bdu=" + encodeURIComponent(e);
                passport.data.request.load(n + i + "&t=" + (new Date).getTime());
                var o = "//www.yoojia.com/sync/crossdomain?bdu=" + encodeURIComponent(e);
                if (passport.data.request.load(n + o + "&t=" + (new Date).getTime()),
                "eventgraph" === t.config.product) {
                    var s = "//eventgraph.baidu-int.com/event_api/api/get_access_bduss?bdu=" + encodeURIComponent(e);
                    passport.data.request.load(n + s + "&t=" + (new Date).getTime())
                }
                if ("roadugc" === t.config.product) {
                    var a = "//inner-lutao.baidu-int.com/audit/api/crossdomain?bdu=" + encodeURIComponent(e);
                    passport.data.request.load(n + a + "&t=" + (new Date).getTime())
                }
                if ("map_bus_data" === t.config.product) {
                    var r = "//busjiucuo.baidu-int.com/subwaybus/passport/crossdomain?bdu=" + encodeURIComponent(e)
                      , c = "//prebusjiucuo.baidu-int.com/subwaybus/passport/crossdomain?bdu=" + encodeURIComponent(e);
                    passport.data.request.load(n + r + "&t=" + (new Date).getTime()),
                    passport.data.request.load(n + c + "&t=" + (new Date).getTime())
                }
                if ("zhengxin" === t.config.product) {
                    var l = "//www.aiqicha.com/login/loginAjax?bdu=" + encodeURIComponent(e)
                      , d = "//www.aiqicha.cn/login/loginAjax?bdu=" + encodeURIComponent(e);
                    passport.data.request.load(n + l + "&t=" + (new Date).getTime()),
                    passport.data.request.load(n + d + "&t=" + (new Date).getTime())
                }
                if ("health_pc_cer" === t.config.product) {
                    var u = "//www.baidujk.com/harbor/pc/crossdomain?bdu=" + encodeURIComponent(e);
                    passport.data.request.load(n + u + "&t=" + (new Date).getTime())
                }
                if ("netdisk_sandbox" === t.config.product) {
                    var a = "//sandbox.pan.baidu-int.com/pass/crossdomain?bdu=" + encodeURIComponent(e);
                    passport.data.request.load(n + a + "&t=" + (new Date).getTime())
                }
                return passport.data.request.load(n + "//user.hao123.com/static/crossdomain.php?bdu=" + encodeURIComponent(e) + "&t=" + (new Date).getTime())
            }
        };
        e.login = {
            loginSuccess: function(e, t) {
                var n = /msie (\d+\.\d+)/i.test(navigator.userAgent);
                if (e.config.setWebToClient && !n && s.apply(e, [{
                    args: t
                }]),
                e.config.noSynBdu && 1 === e.config.noSynBdu) {
                    var i = f(e, t, {
                        onCancel: function() {
                            L(e, t)
                        }
                    });
                    i && L(e, t)
                } else
                    A(t.rsp.data.hao123Param, e).success(function() {
                        var n = f(e, t, {
                            onCancel: function() {
                                L(e, t)
                            }
                        });
                        n && L(e, t)
                    });
                return {
                    preventEvent: !0,
                    preventDefault: !0
                }
            },
            loginError: function(e, t) {
                return f(e, t, {
                    onCompleted: function(t, n) {
                        e.config.noSynBdu && 1 === e.config.noSynBdu ? n() : A(t.data.hao123Param, e).success(n)
                    },
                    onCancel: function(t) {
                        t && t.isCompleted && L(e, {
                            rsp: t.rsp
                        })
                    }
                }),
                {
                    preventEvent: !1,
                    preventDefault: !1
                }
            },
            connectNeedBind: function(e, t) {
                return f(e, t, {
                    onCompleted: function() {},
                    onCancel: function() {}
                }),
                {
                    preventEvent: !1,
                    preventDefault: !1
                }
            },
            validateAllError: function(e, t) {
                var n = t.validates ? e.getElement(t.validates[t.validates.length - 1].field) : "";
                return n && n.focus && n.focus(),
                {
                    preventEvent: !1,
                    preventDefault: !1
                }
            }
        }
    }(passport.hook),
    magic.passport = baidu.lang.createClass(function() {
        this._validateInfo = {}
    }, {
        type: "magic.passport",
        superClass: magic.Base
    }).extend({
        _getRegularField: function(e) {
            var t = e.pwd ? "password" : "text"
              , n = this
              , i = 'autocomplete="off"'
              , o = e.maxLength ? 'maxlength="' + e.maxLength + '"' : ""
              , s = e.tip ? e.tip : ""
              , a = e.value ? e.value : ""
              , r = e.field + "" == "verifycode" ? "none" : ""
              , c = "";
            c = "text" === t ? '<input type="text" style="display:none;">' : '<input type="password" style="display: none;">';
            var l = '<p id="' + n.$getId(e.field + "Wrapper") + '" class="pass-form-item pass-form-item-' + e.field + ("setpwd" === e.type ? " pass-new-set-pwd" : "") + '" style="display:' + r + '">' + (e.label ? '<label for="' + n.$getId(e.field) + '" id="' + n.$getId(e.field + "Label") + '" class="pass-label pass-label-' + e.field + '">' + e.label + "</label>" : "") + c + '<input id="' + n.$getId(e.field) + '" type="' + t + '" name="' + e.field + '" class="pass-text-input pass-text-input-' + e.field + '" ' + o + (e.placeholder ? 'placeholder="' + e.placeholder + '" ' : "") + i + (e.disabled ? '" disabled' : "") + ' value="' + a + '"/>' + (e.noError ? "" : '<span id="' + n.$getId(e.field + "Error") + '" class="pass-item-error pass-item-error-' + e.field + '"></span>') + (e.hasSucc ? '<span id="' + n.$getId(e.field + "Succ") + '" class="pass-item-succ pass-item-succ-' + e.field + '" style="display:none;"></span>' : "") + '<span id="' + n.$getId(e.field + "Tip") + '" class="pass-item-tip pass-item-tip-' + e.field + '" style="display:none"><span id="' + n.$getId(e.field + "TipText") + '" class="pass-item-tiptext pass-item-tiptext-' + e.field + '">' + s + "</span></span></p>";
            return l
        },
        _getHiddenField: function(e, t) {
            var n, i = this, o = '<p id="' + i.$getId(t || "hiddenFields") + '" style="display:none">';
            for (var s in e)
                e.hasOwnProperty(s) && (n = "string" == typeof e[s] ? e[s].replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;") : e[s],
                o += '<input type="hidden" id="' + i.$getId((t ? t + "_" : "") + s) + '" name="' + s + '" value="' + n + '" />');
            return o += "</p>"
        },
        _setEvent: function() {
            var e = this
              , t = this.getElement()
              , n = function(t) {
                e._eventHandler.entrance.apply(e, [t])
            };
            baidu(e.getElement()).on("resize", function() {
                var e = (navigator.userAgent,
                !navigator.userAgent.match(/OS [1-8]_\d[_\d]* like Mac OS X/i))
                  , t = !!navigator.userAgent.toString().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
                  , n = navigator.userAgent.toString().indexOf("iPad");
                if (e && t && null != n) {
                    var i = document.getElementsByClassName("popBox");
                    null != i && i.length > 0 && (i[0].style.height = window.screen.height > document.body.clientHeight ? window.screen.height * (window.screen.height / document.body.clientHeight) + 120 + "px" : window.screen.height * (window.screen.height / document.body.clientHeight))
                }
            }),
            baidu(e.getElement("form")).on("submit", n),
            baidu(e.getElement("license")).on("click", n),
            baidu(e.getElement("verifyCodeChange")).on("click", n),
            baidu(e.getElement("verifyCodeSend")).on("click", n),
            baidu(e.getElement("smsVcodeSend")).on("click", n),
            baidu(t).delegate(".pass-suggest-item label", "click", n),
            baidu(".pass-text-input", e.getElement()).on({
                focus: n,
                blur: n,
                change: n,
                keyup: n,
                mouseover: n,
                mouseout: n
            })
        },
        _validator: {
            confStorage: {},
            builtInMsg: {
                required: "请您输入%s",
                phone: "手机号码格式不正确",
                email: "邮箱格式不正确",
                idcard: "身份证格式不正确"
            },
            builtInRules: {
                required: /\S+/,
                phone: /^1[3456789]\d{9}$/,
                email: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                idcard: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/
            },
            init: function(e, t) {
                this.confStorage[e.$getId()] = t
            },
            validate: function(e, t, n, i) {
                var o = e.getElement(t)
                  , s = {
                    field: t
                }
                  , a = /^\s*(.+?)\s*$/;
                if (!o || 0 === +o.offsetHeight)
                    return !1;
                for (var r = o.value.replace(a, "$1"), c = this.confStorage[e.$getId()][t], l = c.rules, d = 0, u = l.length; u > d; d++) {
                    var p, g = l[d], m = this.builtInRules[g];
                    if (p = "[object function]" === Object.prototype.toString.call(m).toLowerCase() ? m.call(e, o, i) : new RegExp(m).test(r),
                    !p)
                        return s.error = !0,
                        e._validateInfo[t] = 0,
                        s.msg = this.builtInMsg[g].replace(/\%s/, c.desc),
                        e._validateError(s),
                        void n.error(s)
                }
                c.asyncRule ? c.asyncRule.call(e, {
                    success: function(i) {
                        s.error = !1,
                        s.data = i.data,
                        e._validateInfo[t] = 1,
                        e._validateSuccess(s),
                        n.success(s)
                    },
                    error: function(i) {
                        s.error = !0,
                        e._validateInfo[t] = 0,
                        s.msg = i.msg,
                        e._validateError(s),
                        n.error(s)
                    }
                }, i) : (s.error = !1,
                e._validateInfo[t] = 1,
                e._validateSuccess(s),
                n.success(s))
            },
            validateAll: function(e, t, n) {
                function i() {
                    r = !0,
                    a ? t && t.error(c) : t && t.success(c)
                }
                var o = this.confStorage[e.$getId()]
                  , s = 0
                  , a = !1
                  , r = !1
                  , c = []
                  , l = this._getActiveValidate(e, !0);
                for (var d in o) {
                    if (r)
                        break;
                    this.validate(e, d, {
                        success: function(e) {
                            s++,
                            c.push(e),
                            s === l && i()
                        },
                        error: function(e) {
                            return a = !0,
                            s++,
                            c.push(e),
                            n ? void i() : void (s === l && i())
                        }
                    }, "all")
                }
            },
            _getActiveValidate: function(e, t) {
                var n = this.confStorage[e.$getId()]
                  , i = [];
                for (var o in n) {
                    var s = e.getElement(o);
                    s && 0 !== s.offsetHeight && i.push(s)
                }
                return t ? i.length : i
            },
            addRule: function(e, t) {
                var n = {};
                n[e] = t,
                baidu.extend(this.builtInRules, n)
            },
            addMsg: function(e, t) {
                var n = {};
                n[e] = t,
                baidu.extend(this.builtInMsg, n)
            }
        },
        validate: function(e, t) {
            var n = this
              , i = n.fireEvent("beforeValidate", {
                validate: {
                    field: e,
                    ele: baidu(n.getElement(e))
                }
            });
            i && n._validator.validate(n, e, {
                success: function(e) {
                    var i = n.fireEvent("validateSuccess", {
                        validate: e
                    });
                    i && t && t.success && t.success(e)
                },
                error: function(e) {
                    var i = n.fireEvent("validateError", {
                        validate: e
                    });
                    i && t && t.error && t.error(e)
                }
            })
        },
        validateAll: function(e, t) {
            var n = this;
            t = "boolean" == typeof e ? e : t ? t : !1;
            var i = n.fireEvent("beforeValidateAll");
            i && n._validator.validateAll(n, {
                success: function(t) {
                    var i = n.fireEvent("validateAllSuccess", {
                        validates: t
                    });
                    i && e && e.success && e.success(t)
                },
                error: function(t) {
                    var i = n.fireEvent("validateAllError", {
                        validates: t
                    });
                    i && e && e.error && e.error(t)
                }
            }, t)
        },
        getValidateStatus: function(e) {
            return this._validateInfo.hasOwnProperty(e) ? this._validateInfo[e] : -1
        },
        setValidateSuccess: function(e) {
            var t = this;
            t._validateInfo[e] = 1,
            t._validateSuccess({
                field: e
            })
        },
        setValidateError: function(e, t, n) {
            var i = this;
            i._validateInfo[e] = 0,
            i._validateError({
                field: e,
                msg: t
            }, n)
        },
        setGeneralError: function(e) {
            this.getElement("error").innerHTML = e
        },
        clearGeneralError: function() {
            this.getElement("error").innerHTML = ""
        },
        _isSupportPlaceholder: function() {
            return "placeholder"in document.createElement("input")
        },
        _getPlaceholder: function(e) {
            for (var t = this, n = {}, i = "", o = {}, s = 0; s < e.length; s++) {
                if (i = t.lang[e[s].placeholder],
                0 !== +e[s].clearbtn && (o[s] = baidu('<span id="' + t.$getId(e[s].label + "_clearbtn") + '" class="pass-clearbtn pass-clearbtn-' + e[s].label + '" style="display:none;"></span>'),
                baidu(t.getElement(e[s].label)).after(o[s])),
                t._isSupportPlaceholder() && !baidu.browser.ie)
                    try {
                        baidu(t.getElement(e[s].label)).attr({
                            placeholder: i
                        })
                    } catch (a) {
                        var r = t.getElement(e[s].label);
                        r.setAttribute("placeholder", i)
                    }
                else
                    n[s] = baidu('<span id="' + t.$getId(e[s].label + "_placeholder") + '" class="pass-placeholder pass-placeholder-' + e[s].label + '">' + i + "</span>"),
                    baidu(t.getElement(e[s].label)).after(n[s]);
                t._rendEventPlaceholder(t.getElement(e[s].label), n[s], o[s])
            }
        },
        _getCookie: function(e) {
            var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(n)) ? unescape(t[2]) : null
        },
        _logNaMonitor: function(e) {
            var t = {
                page: "loginv4",
                tpl: this.config.product || "",
                module: "wapna",
                monitorType: e
            }
              , n = {
                eventType: "na-monitor"
            };
            this._logPass(t, n, 1023)
        },
        _logPass: function(e, t, n) {
            function i(e) {
                var t, n, i, o, s, a, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                for (i = e.length,
                n = 0,
                t = ""; i > n; ) {
                    if (o = 255 & e.charCodeAt(n++),
                    n === i) {
                        t += r.charAt(o >> 2),
                        t += r.charAt((3 & o) << 4),
                        t += "==";
                        break
                    }
                    if (s = e.charCodeAt(n++),
                    n === i) {
                        t += r.charAt(o >> 2),
                        t += r.charAt((3 & o) << 4 | (240 & s) >> 4),
                        t += r.charAt((15 & s) << 2),
                        t += "=";
                        break
                    }
                    a = e.charCodeAt(n++),
                    t += r.charAt(o >> 2),
                    t += r.charAt((3 & o) << 4 | (240 & s) >> 4),
                    t += r.charAt((15 & s) << 2 | (192 & a) >> 6),
                    t += r.charAt(63 & a)
                }
                return t
            }
            var o = n ? "&type=" + n : ""
              , s = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&v=" + (new Date).getTime() + o
              , a = "";
            for (var r in t)
                a = a + r + ":" + t[r] + ",";
            a = i("{" + a.substring(0, a.length - 1) + "}");
            for (var c in e)
                e.hasOwnProperty(c) && (s += "&" + c + "=" + e[c]);
            if (s += "&source=pc",
            s += "&auto_statistic=" + a + "&auto_en=" + t.eventType,
            t.errno && (s += "&errno=" + t.errno),
            s) {
                var l = new Image;
                l.onload = l.onerror = function() {
                    l.onload = l.onerror = null,
                    l = null
                }
                ,
                l.src = s
            }
        },
        logClickLink: function(e, t) {
            e = e || {},
            e = this.formatLogData(e);
            var n = t.target || t.srcElement
              , i = n && n.getAttribute && n.getAttribute("target")
              , o = "_self" === i || null === i
              , s = this.makeImgSrc(e);
            if (o && (t.preventDefault ? t.preventDefault() : t.returnValue = !1),
            window.navigator.sendBeacon && o)
                window.navigator.sendBeacon(s),
                window.location.href = n.getAttribute("href");
            else if (o)
                this.lazyLog(n, s, null);
            else {
                var a = new Image;
                a.onload = a.onerror = function() {
                    a.onload = a.onerror = null,
                    a = null
                }
                ,
                a.src = s
            }
        },
        logCallBack: function(e, t) {
            e = e || {},
            e = this.formatLogData(e);
            var n = this.makeImgSrc(e);
            this.lazyLog({}, n, t)
        },
        formatLogData: function(e) {
            var t = this.config || {};
            return baidu.extend({}, {
                page: e.logPage || "",
                source: "pc-api",
                tpl: t.product || "",
                subpro: t.subpro || "",
                extrajson: t.extrajson || "",
                data_source: "fe"
            }, e)
        },
        makeImgSrc: function(e) {
            var t = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&type=1023&v=" + (new Date).getTime()
              , n = "";
            for (var i in e)
                e.hasOwnProperty(i) && (n += "en" !== i ? "&" + i + "=" + e[i] : "&auto_en=" + e[i]);
            var o = "{eventType:" + (e.en || "") + "}";
            return o = this.base64encode(o),
            t += "&auto_statistic=" + o,
            t += "&auto_en=" + (e.en || ""),
            t += n
        },
        lazyLog: function(e, t, n) {
            function i() {
                n ? n() : window.location.href = o
            }
            var o = e.getAttribute && e.getAttribute("href")
              , s = new Image
              , a = setTimeout(function() {
                s.onload = s.onerror = s = null,
                i("imgTimeout")
            }, 200);
            s.onload = s.onerror = function() {
                clearTimeout(a),
                s.onload = s.onerror = s = null,
                i("imgSuccess")
            }
            ,
            s.src = t
        },
        base64encode: function(e) {
            var t, n, i, o, s, a, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (i = e.length,
            n = 0,
            t = ""; i > n; ) {
                if (o = 255 & e.charCodeAt(n++),
                n === i) {
                    t += r.charAt(o >> 2),
                    t += r.charAt((3 & o) << 4),
                    t += "==";
                    break
                }
                if (s = e.charCodeAt(n++),
                n === i) {
                    t += r.charAt(o >> 2),
                    t += r.charAt((3 & o) << 4 | (240 & s) >> 4),
                    t += r.charAt((15 & s) << 2),
                    t += "=";
                    break
                }
                a = e.charCodeAt(n++),
                t += r.charAt(o >> 2),
                t += r.charAt((3 & o) << 4 | (240 & s) >> 4),
                t += r.charAt((15 & s) << 2 | (192 & a) >> 6),
                t += r.charAt(63 & a)
            }
            return t
        },
        _rendEventPlaceholder: function(e, t, n) {
            if (e || n) {
                var i, o, s = this, a = function(e) {
                    1 === +e ? (t && t[0] && s.$hide(t[0]),
                    n && n[0] && s.$show(n[0])) : (t && t[0] && s.$show(t[0]),
                    n && n[0] && s.$hide(n[0]))
                };
                setTimeout(function() {
                    e && e.value && a(1)
                }, 200),
                baidu(t).on("mousedown", function() {
                    o = !0,
                    clearTimeout(i),
                    i = setTimeout(function() {
                        "password" === t[0] || s.suggestionDom && "none" !== s.suggestionDom.style.display || e.focus()
                    }, 0)
                }),
                baidu(n).on("click", function() {
                    e.value = "",
                    a(0),
                    e.focus(),
                    s.suggestionDom && (s.suggestionDom.data_delete = !0,
                    setTimeout(function() {
                        s.suggestionDom.data_delete = !1
                    }, 200))
                }),
                baidu(e).on("keyup", function() {
                    a(e.value ? 1 : 0)
                }),
                baidu(e).on("focus", function() {
                    window.inputCheckTimer = setInterval(function() {
                        e.value.length ? (a(1),
                        clearInterval(window.inputCheckTimer)) : a(0)
                    }, 30)
                })
            }
        },
        SBCtoDBC: function(e) {
            var t = "";
            if (e) {
                for (var n = e.length, i = 0; n > i; i++) {
                    var o = e.charCodeAt(i);
                    o = o >= 65281 && 65374 >= o ? o - 65248 : o,
                    o = 12288 == o ? 32 : o,
                    t += String.fromCharCode(o)
                }
                return t
            }
        },
        hide: function() {
            this.getElement().style.display = "none"
        },
        show: function() {
            this.getElement().style.display = "block"
        },
        _analysis: function(e, t) {
            return window.passport.analysis && window.passport.analysis[this.module] && window.passport.analysis[this.module][e] ? (window.passport.analysis[this.module][e](this, t),
            {
                preventDefault: !1,
                preventEvent: !1
            }) : void 0
        },
        _hook: function(e, t) {
            return window.passport.hook && window.passport.hook[this.module] && window.passport.hook[this.module][e] ? window.passport.hook[this.module][e](this, t) : {
                preventDefault: !1,
                preventEvent: !1
            }
        },
        fireEvent: function(e, t) {
            var n = this._hook(e, t)
              , i = !0;
            return n.preventEvent || (i = this.fire(e, t)),
            !n.preventDefault && i
        },
        getQueryString: function(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
              , n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : ""
        }
    });
    var hexcase = 0
      , b64pad = ""
      , chrsz = 8;
    return magic.passport.login = baidu.lang.createClass(function(e) {
        var t = this;
        if (passport && "https" === passport._protocol)
            var n = "https:";
        else
            var n = window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase();
        if (t._domain = {
            https: "https://passport.baidu.com",
            http: "http://passport.baidu.com",
            auto: "https:" === n ? "https://passport.baidu.com" : "http://passport.baidu.com",
            wapAuto: "https:" === n ? "https://wappass.baidu.com" : "http://wappass.baidu.com"
        },
        t.config = {
            memberPass: !0,
            isQuickUser: 0,
            safeFlag: 0,
            product: "",
            idc: "",
            charset: "",
            loginMerge: !0,
            staticPage: "",
            hasRegUrl: !1,
            u: "",
            lang: "",
            autosuggest: !1,
            hasPlaceholder: !1,
            registerLink: "",
            authsiteLogin: "",
            authsiteCfgLogin: "",
            authsiteCurrentOpen: !1,
            qrcode: !0,
            sms: 0,
            uniqueId: !1,
            autoFocus: !0,
            subpro: "",
            setWebToClient: !1,
            is_voice_sms: 0,
            voice_sms_flag: 0,
            userPwdLogin: 0,
            qrcode_animation: 1,
            qrcode_style: !0,
            vcodefrom: "",
            client: "",
            smsAutoLogin: {
                mobile: "",
                encryption: ""
            },
            qrloginfrom: "pc",
            mustVerify: "",
            clientId: "",
            qrcodeCfg: {},
            sid: "",
            logParams: {}
        },
        baidu.extend(t.config, e),
        t.urlData = {
            page: "loginv5",
            tpl: t.config.product || "",
            subpro: t.config.subpro || "",
            traceId: "pc_loginv5_" + ((new Date).getTime() / 1e3).toFixed()
        },
        t.config.sid && (t.urlData.sid = t.config.sid),
        t.config.logParams && t.config.logParams instanceof Object)
            for (var i in t.config.logParams)
                t.urlData[i] = t.config.logParams[i];
        t.config.product = t.config.product || "isnull",
        t.config.qrcode = 3,
        t.config.page = "loginv5",
        t.config.loginType = "pwdLogin",
        this.module = "login",
        this.guideRandom = function() {
            return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0
                  , n = "x" === e ? t : 3 & t | 8;
                return n.toString(16)
            }).toUpperCase()
        }();
        var o = t.getQueryString("lang") || t.config.lang
          , s = o ? "&lang=" + o : ""
          , a = o ? "?lang=" + o : "";
        t.constant = {
            CHECKVERIFYCODE: !0,
            CONTAINER_CLASS: "tang-pass-login",
            LABEL_FOCUS_CLASS: "pass-text-label-focus",
            FOCUS_CLASS: "pass-text-input-focus",
            HOVER_CLASS: "pass-text-input-hover",
            ERROR_CLASS: "pass-text-input-error",
            VERIFYCODE_URL_PREFIX: t._domain.https + "/cgi-bin/genimage?",
            BLANK_IMG_URL: passport.apiDomain.staticDomain + "/passApi/img/small_blank.gif",
            MODIFY_PWD_URL_PREFIX: t._domain.https + "/forcsdnpasschange",
            GET_PASSWORD_URL: t._domain.https + "/?getpassindex&tt=" + (new Date).getTime() + "&gid=" + t.guideRandom + "&tpl=" + encodeURIComponent(t.config.product) + "&u=" + encodeURIComponent(t.config.u),
            REG_URL: t.config.registerLink || t._domain.https + "/v2/?reg&tt=" + (new Date).getTime() + "&overseas=" + t.config.overseas + "&gid=" + t.guideRandom + "&tpl=" + encodeURIComponent(t.config.product) + "&u=" + encodeURIComponent(t.config.u) + s,
            PROTOCAL_URL: t._domain.http + "/static/passpc-account/html/protocal.html" + a,
            PERSONAL_PROTOCAL_URL: "http://privacy.baidu.com/policy",
            NOCAPTCHA_URL: t._domain.auto + "/static/passpc-base/js/ld.min.js?cdnversion=" + (new Date).getTime(),
            TOUCHAPIMKD_URL: t._domain.wapAuto + "/static/machine/js/api/mkd.js?cdnversion=" + (new Date).getTime(),
            SUBMITFLAG: !1
        },
        t.lang = passport.err.getCurrent(t.config.lang).labelText.login,
        t.hooksText = passport.err.getCurrent(t.config.lang).hooksText,
        passport.data.setContext(baidu.extend({}, t.config)),
        this.initialized = !1,
        this.validatorInited = !1,
        this.bdPsWtoken = "",
        this.innerData = {
            normal: {},
            phone: {}
        },
        this.dataFiels = ["userName", "password"],
        this.initTime = (new Date).getTime(),
        window.confirmSmsVerifyWidget = null,
        window.checkPhoneWidget = null,
        window.checkPhoneExist = !1;
        var r = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
        6 >= r && (t.config.qrcode_animation = !1),
        t.passLowerIE = r,
        t.config.overseas && 1 == t.config.overseas && (this.foreignMobile = !0),
        this.internation = !1,
        t._insertNoCaptchaScript(),
        t.initMkd(),
        t.config.defaultCss && t._loadCssFileW("/passApi/css/loginv5_288e59d.css", function() {}),
        t._insertScriptW("https://wappass.baidu.com/static/touch/js/lib/fingerprint.js", function() {
            t.fuid = window.passFingerPrint()
        }),
        (t.config.memberPass || t.config.getapi) && t._initApi(),
        this.smsConfig = t.config.sms + "" == "5" ? !0 : !1
    }, {
        type: "magic.passport.login",
        superClass: magic.passport
    }).extend({
        _setComposeTemplate: function() {
            var e = '<div id="componseLeft"  class="compose-left-container"></div><div id="componseRight" class="compose-right-container"></div>';
            return e
        },
        _getIrregularField: function(e) {
            var t = this
              , n = {
                makeText: '<p id="' + t.$getId("MakeTextWrapper") + '" class="pass-make-text" style="display:none;"></p>',
                verifyCode: '<p id="' + t.$getId("verifyCodeImgWrapper") + '" class="pass-form-item pass-form-item-verifyCode" style="display:none"><input id="' + t.$getId("verifyCode") + '" type="text" name="verifyCode" class="pass-text-input pass-text-input-verifyCode" maxlength="6" /><span  id="' + t.$getId("verifyCodeImgParent") + '" class="pass-verifyCodeImgParent" ><img id="' + t.$getId("verifyCodeImg") + '" class="pass-verifyCode" src="' + t.constant.BLANK_IMG_URL + '" /></span><a id="' + t.$getId("verifyCodeChange") + '" href="#" class="pass-change-verifyCode">' + t.lang.captchaChange + '</a><span id="' + t.$getId("verifyCodeError") + '" class="pass-error pass-error-verifyCode"></span><span id="' + t.$getId("verifyCodeTip") + '" class="pass-tip pass-tip-verifyCode"></span><span id="' + t.$getId("verifyCodeSuccess") + '" class="pass-success pass-success-verifyCode"></span></p>',
                generalError: '<p id="' + t.$getId("errorWrapper") + '" class="pass-generalErrorWrapper"><span id="' + t.$getId("error") + '" class="pass-generalError pass-generalError-error"></span></p>',
                rem: '<p id="' + t.$getId("memberPassWrapper") + '" class="pass-form-item pass-form-item-memberPass memberPass-hidden"><input id="' + t.$getId("memberPass") + '" type="checkbox" name="memberPass" class="pass-checkbox-input pass-checkbox-memberPass"' + (t.config.memberPass ? ' checked="checked"' : "") + ' /><label for="' + t.$getId("memberPass") + '" id="' + t.$getId("memberPassLabel") + '" class="">' + t.lang.memberPassLabel + "</label></p>",
                submit: '<p id="' + t.$getId("submitWrapper") + '" class="pass-form-item pass-form-item-submit"><input id="' + t.$getId("submit") + '" type="submit" value="' + t.lang.login + '" class="pass-button pass-button-submit" /><span class="tang-pass-sms-agreement pass-link">' + t.lang.agree + '<a target="_blank" href="' + t.constant.PROTOCAL_URL + '">' + t.lang.baiduUserProtocal + '</a> 和 <a target="_blank" href="' + t.constant.PERSONAL_PROTOCAL_URL + '">' + t.lang.baiduUserPersonal + "</a></span></p>",
                forgetPwd: '<a class="pass-fgtpwd pass-link" id="' + t.$getId("fgtpwdLink") + '">' + t.lang.fgtPwd + "</a>",
                foreignMobileMsg: '<p class="pass-foreignMobile-msg" id="' + t.$getId("foreignMobileMsg") + '">' + t.lang.foreignMobileMsg + "</p>",
                foreignMobileWrapper: '<div class="pass-form-item pass-form-item-PhoneCountry pass-foreignMobile-wrapper" id="' + t.$getId("foreignMobileWrapper") + '" style="display:none"><label for="' + t.$getId("foreignMobile") + '" id="' + t.$getId("foreignMobileLabel") + '" class="pass-label" data-countryCode="">+86</label><input id="' + t.$getId("foreignMobile") + '" type="text" name="foreignusername" class="pass-text-input"/><ul id="' + t.$getId("foreignCountryList") + '" class="pass-country-list"></ul></div>',
                foreignMobileLink: '<p class="pass-foreignMobile-link-wrapper" id="' + t.$getId("foreignMobileLinkWrapper") + '"><a id="' + t.$getId("foreignMobileLink") + '" class="pass-foreignMobile-link">' + t.lang.foreignMobileLink + "</a></p>",
                foreignMobileBack: '<p class="pass-foreignMobile-back-wrapper" id="' + t.$getId("foreignMobileBackWrapper") + '"><a id="' + t.$getId("foreignMobileBack") + '" class="pass-foreignMobile-link">' + t.lang.foreignToLogin + "</a></p>",
                choiceuser: '<div id="' + t.$getId("choiceuser_article") + '" class="tang-pass-login-choice choiceuser-article"><div class="choiceuser-msg"><p class="choiceuser-msg-title">亲爱的用户，</p><p class="choiceuser-msg-text">为了确保您的帐号安全，请先确认您输入的帐号是用户名还是手机号：</p></div><div class="choiceuser-buttons"><div class="choiceuser-btn"><input class="pass-button pass-button-choiceuser-username" type="button" value="用户名" id="' + t.$getId("choiceuser_btn_username") + '"/><input class="pass-button pass-button-choiceuser-phone" type="button" value="手机号" id="' + t.$getId("choiceuser_btn_mobile") + '"/></div><div class="choiceuser-back"><a href="#" id="' + t.$getId("choiceuser_btn_back") + '">' + t.lang.backToLogin + "</a></div></div></div>",
                webtoclint: '<div id="' + t.$getId("pass_b2c") + '" style="display:none;"></div>',
                is_voice_sms: '<div class="pass-smsSwitchWrapper"><a class="pass-is_voice_sms-btn" title="语音验证码" data-type="is_voice_sms" >语音验证码</a></div>'
            };
            return n[e]
        },
        _getHeaderTemplate: function() {
            var e = this
              , t = (e.config.composeTemplate && e.config.hideLogo ? '<p class="hide-logo-text">扫码登录</p>' : e.config.hideLogo ? '<p class="hide-logo-not-text"></p>' : '<p class="pass-form-logo"></p>') + '<p id="' + e.$getId("headerLoginTab") + '" class="login-type-tab"><span id="' + e.$getId("changeQrCodeItem") + '" class="switch-item"' + (e.config.composeTemplate ? 'style="display: none;"' : "") + '">扫码登录</span><span id="' + e.$getId("changePwdCodeItem") + '" class="switch-item">帐号登录</span><span id="' + e.$getId("changeSmsCodeItem") + '" class="switch-item"' + (e.smsConfig ? "" : 'style="display: none;"') + ">短信登录</span></p>";
            return t
        },
        _getTemplate: function() {
            var e = this
              , t = '<form id="' + e.$getId("form") + '" class="pass-form pass-form-normal" method="POST" autocomplete="off">'
              , n = {
                codeString: "",
                safeFlag: e.config.safeFlag,
                u: e.config.u,
                isPhone: !1,
                detect: "1",
                gid: e.guideRandom || "",
                staticPage: e.config.staticPage,
                quick_user: e.config.isQuickUser,
                logintype: e.config.diaPassLogin ? "dialogLogin" : "basicLogin",
                logLoginType: e.config.diaPassLogin ? "pc_loginDialog" : "pc_loginBasic",
                subpro: e.config.subpro,
                idc: e.config.idc,
                loginMerge: !0,
                mkey: e.config.mkey || ""
            }
              , i = [{
                field: "userName",
                noError: !0
            }, {
                field: "password",
                pwd: !0,
                noError: !0
            }];
            t += e._getIrregularField("makeText"),
            t += e._getHiddenField(n),
            e.foreignMobile && (t += e._getIrregularField("foreignMobileMsg"),
            t += e._getIrregularField("foreignMobileWrapper"));
            for (var o = 0; o < i.length; o++)
                t += e._getRegularField(i[o]);
            return t += e._getIrregularField("verifyCode"),
            t += e._getIrregularField("rem"),
            e.foreignMobile && (t += e._getIrregularField("foreignMobileLink"),
            t += e._getIrregularField("foreignMobileBack")),
            t += e._getIrregularField("generalError"),
            t += e._getIrregularField("forgetPwd"),
            t += e._getIrregularField("submit"),
            t += "</form>"
        },
        _collectData: function() {
            for (var e = this, t = e.innerData.normal, n = e.dataFiels, i = 0, o = n.length; o > i; i++)
                t[n[i]] = e.getElement(n[i]).value;
            return t
        },
        _restoreData: function(e) {
            for (var t = this, n = t.innerData[e ? e : "normal"], i = t.dataFiels, o = 0, s = i.length; s > o; o++)
                t.getElement(i[o]).value = n[i[o]] || "";
            return n
        },
        _loadCssFileW: function(e, t) {
            if (window._loadedFilesW = window._loadedFilesW || {},
            window._loadedFilesW[e])
                t && t();
            else {
                window._loadedFilesW[e] = !0;
                var n = document.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css",
                n.href = passport.apiDomain.staticDomain + e,
                document.getElementsByTagName("head")[0].appendChild(n),
                n.readyState ? n.onreadystatechange = function() {
                    ("loaded" == n.readyState || "complete" == n.readyState) && (n.onreadystatechange = null,
                    t && t())
                }
                : n.onload = function() {
                    t && t()
                }
            }
        },
        _insertScriptW: function(e, t) {
            if (window._loadedFilesW = window._loadedFilesW || {},
            window._loadedFilesW[e])
                t && t();
            else {
                window._loadedFilesW[e] = !0;
                var n = document
                  , i = n.createElement("SCRIPT");
                i.type = "text/javascript",
                i.charset = "UTF-8",
                i.readyState ? i.onreadystatechange = function() {
                    ("loaded" == i.readyState || "complete" == i.readyState) && (i.onreadystatechange = null,
                    t && t())
                }
                : i.onload = function() {
                    t && t()
                }
                ,
                i.src = e,
                n.getElementsByTagName("head")[0].appendChild(i)
            }
        },
        _authSiteW: function() {
            var e = this
              , t = e.config
              , n = e.getPhoenixId("pass_phoenix_btn");
            t.authsitecssLoad && e._loadCssFileW("/passApi/css/authsite_c01e2ff.css"),
            e._insertScriptW(e._domain.auto + "/phoenix/account/jsapi", function() {
                window.baidu.phoenix && window.baidu.phoenix.require(t.authsiteLogin, baidu.extend(t.authsiteCfgLogin || {}, {
                    authsiteCurrentOpen: t.authsiteCurrentOpen,
                    tpl: t.product ? t.product : "",
                    idc: t.idc ? t.idc : "",
                    u: t.u,
                    subpro: t && t.subpro || "",
                    target: n,
                    staticPage: t.staticPage,
                    html: {
                        qzone: '<a class="phoenix-btn-item" href="#" data-title="qzone">QQ帐号</a>',
                        tsina: '<a class="phoenix-btn-item" href="#" data-title="tsina">新浪微博</a>',
                        tqq: '<a class="phoenix-btn-item" href="#" data-title="tqq">腾讯微博</a>',
                        qunar: '<a class="phoenix-btn-item" href="#" data-title="qunar">去哪儿</a>',
                        weixin: '<a class="phoenix-btn-item" href="#" data-title="weixin">微信</a>',
                        tianyi: '<a class="phoenix-btn-item" href="#" data-title="tianyi">天翼</a>',
                        feifan: '<a class="phoenix-btn-item" href="#" data-title="feifan">飞凡</a>'
                    },
                    onAfterRender: function() {
                        for (var t = baidu("#" + n + " li"), i = function(t) {
                            t.on("click", function(n) {
                                var i = {
                                    eventType: t.attr("data-title") + "Click"
                                };
                                e._logPass(e.urlData, i),
                                n.preventDefault()
                            })
                        }, o = 0; o < t.length; o++) {
                            var s = baidu(".phoenix-btn-item", t[o]);
                            s.attr({
                                title: s[0] && s[0].innerHTML || ""
                            }),
                            i(s)
                        }
                        e._logPass(e.urlData, {
                            eventType: "pc-authsite-show"
                        })
                    }
                }))
            })
        },
        getVerifyCode: function(e) {
            var t = this
              , n = {
                fr: "login",
                loginVersion: "v4",
                vcodetype: t.vcodetype || ""
            };
            if (t.getElement("verifyCode").value = "",
            t.$hide("verifyCodeSuccess"),
            t.getElement("verifyCode_clearbtn") && t.$hide("verifyCode_clearbtn"),
            t.getElement("verifyCodeImg").src = "",
            e && e.length) {
                t.$show("verifyCodeImgWrapper"),
                t.getElement("verifyCodeImg").src = t.constant.VERIFYCODE_URL_PREFIX + e,
                t.getElement("codeString").value = e;
                var i = t.fireEvent("renderVerifycode", {
                    verifyStr: e,
                    verifyCodeImg: t.constant.VERIFYCODE_URL_PREFIX + e
                });
                if (!i)
                    return
            } else
                passport.data.getVerifyCodeStr(n).success(function(e) {
                    0 == e.errInfo.no && (t.$show("verifyCodeImgWrapper"),
                    t.getElement("verifyCodeImg").src = t.constant.VERIFYCODE_URL_PREFIX + e.data.verifyStr,
                    t.getElement("codeString").value = e.data.verifyStr,
                    t.fireEvent("renderVerifycode", {
                        verifyStr: e.data.verifyStr,
                        verifyCodeImg: t.constant.VERIFYCODE_URL_PREFIX + e.data.verifyStr
                    }))
                });
            t.getElement("verifyCode_placeholder") && setTimeout(function() {
                t.$show("verifyCode_placeholder")
            }, 200)
        },
        _getWDom: {
            parent: function(e) {
                return e.parentNode || e.parentElement
            },
            next: function(e) {
                do
                    e = e.nextSibling;
                while (e && 1 !== e.nodeType);return e
            },
            prev: function(e) {
                do
                    e = e.previousSibling;
                while (e && 1 !== e.nodeType);return e
            }
        },
        clearVerifyCode: function() {
            var e = this;
            e.$hide("verifyCodeImgWrapper"),
            e.getElement("codeString").value = ""
        },
        getPhoenixId: function(e) {
            if (this.config.uniqueId)
                return this.$getId(e);
            var t = {
                pass_phoenix_login: "pass-phoenix-login",
                pass_phoenix_list_login: "pass-phoenix-list-login",
                pass_phoenix_btn: "pass_phoenix_btn"
            };
            return t[e]
        },
        getPhoenixElement: function(e) {
            return this.getElement(e) ? this.getElement(e) : document.getElementById(this.getPhoenixId(e))
        },
        _getTemplateOther: function() {
            var e = []
              , t = this
              , n = 0;
            return t.config.authsiteLogin && (n = t.config.authsiteLogin.length),
            e.push('<div id="' + t.getPhoenixId("pass_phoenix_login") + '" class="tang-pass-login-phoenix"><div id="' + t.getPhoenixId("pass_phoenix_list_login") + '" class="pass-phoenix-list clearfix">' + (t.config.authsiteLogin ? '<div class="pass-phoenix-btn clearfix" id="' + t.getPhoenixId("pass_phoenix_btn") + '"></div>' : "") + '</div><div class="clear"></div></div>'),
            e.join("")
        },
        getTemplateFooterBar: function() {
            var e = this
              , t = []
              , n = "";
            return e.storageSupport(function() {
                n = localStorage.getItem("passLoginType")
            }),
            (1 === +e.config.userPwdLogin || "sms" === n && e.smsConfig || "normal" === n) && 1 !== +e.config.qrcodeLogin,
            t.push('<div class="tang-pass-footerBar">' + (e.config.authsiteLogin.length > 0 ? '<div class="tang-pass-footerBarPhoenix"><div class="tang-pass-footerBarPhoenixItem" id="' + e.$getId("PhoenixItem") + '"></div></div>' : "") + '<a class="pass-reglink pass-link" id="' + e.$getId("regLink") + '"' + (e.config.hasRegUrl ? "" : 'style="display:none"') + ">" + e.lang.register + "</a></div>"),
            t.join("")
        },
        setLoginTypeTabBar: function() {
            var e = this
              , t = e.$getId("changeQrCodeItem")
              , n = e.$getId("changePwdCodeItem")
              , i = e.$getId("changeSmsCodeItem")
              , o = e.$getId("QrcodeDownload");
            baidu("#" + t).on("click", function(t) {
                t && t.preventDefault && t.preventDefault(),
                e._changeLoginType("qrcode"),
                e._logPass(e.urlData, {
                    eventType: "user-qrLogin-click"
                })
            }),
            baidu("#" + n).on("click", function(t) {
                t && t.preventDefault && t.preventDefault(),
                e._logPass(e.urlData, {
                    eventType: "user-pwdLogin-click"
                }),
                e._changeLoginType("normal")
            }),
            baidu("#" + i).on("click", function() {
                /msie 6/i.test(navigator.userAgent) || /msie 7/i.test(navigator.userAgent) ? setTimeout(function() {
                    e._changeLoginType("sms")
                }, 0) : e._changeLoginType("sms"),
                e._logPass(e.urlData, {
                    eventType: "user-smsLogin-click"
                })
            }),
            baidu("#" + o).on("click", function() {
                var t = {
                    eventType: "toDownload"
                };
                e._logPass(e.urlData, t)
            })
        },
        _changeTabButtonActivStatus: function(e) {
            var t = this
              , n = t.$getId("changeQrCodeItem")
              , i = t.$getId("changePwdCodeItem")
              , o = t.$getId("changeSmsCodeItem");
            t.config.composeTemplate && "qrcode" === e ? (baidu("#" + i).addClass("activ"),
            baidu("#" + n).removeClass("activ"),
            baidu("#" + o).removeClass("activ"),
            t._logPass(t.urlData, {
                eventType: "pc-pwdLogin-show"
            })) : "sms" === e ? (baidu("#" + o).addClass("activ"),
            baidu("#" + n).removeClass("activ"),
            baidu("#" + i).removeClass("activ")) : "qrcode" === e ? (baidu("#" + n).addClass("activ"),
            baidu("#" + i).removeClass("activ"),
            baidu("#" + o).removeClass("activ")) : (baidu("#" + i).addClass("activ"),
            baidu("#" + n).removeClass("activ"),
            baidu("#" + o).removeClass("activ"))
        },
        setEventFooterBar: function() {
            var e = this
              , t = e.$getId("footerQrcodeBtn")
              , n = e.$getId("footerULoginBtn")
              , i = e.$getId("regLink")
              , o = e.$getId("fgtpwdLink");
            baidu("#" + t).on("click", function(i) {
                i && i.preventDefault && i.preventDefault(),
                e._changeLoginType("qrcode"),
                baidu("#" + t).hide(),
                baidu("#" + n).show()
            }),
            baidu("#" + n).on("click", function(i) {
                i && i.preventDefault && i.preventDefault(),
                e._changeLoginType("normal"),
                baidu("#" + n).hide(),
                baidu("#" + t).show()
            }),
            baidu("#" + i).on("click", function(t) {
                t && t.preventDefault && t.preventDefault(),
                e._logPass(e.urlData, {
                    eventType: "pc-register-click"
                }),
                window.open(e.constant.REG_URL, "_blank")
            }),
            baidu("#" + o).on("click", function(t) {
                t && t.preventDefault && t.preventDefault(),
                e._logPass(e.urlData, {
                    eventType: "pc-forget-click"
                }),
                window.open(e.constant.GET_PASSWORD_URL, "_blank")
            })
        },
        _getTemplateQrcode: function() {
            var e = this
              , t = []
              , n = e.config.guideMapImg || "https://passport.baidu.com/passApi/img/qrcodeLoginGuide1.png"
              , i = e.config.qrcodeCfg && e.config.qrcodeCfg.appHref || "https://mo.baidu.com/wuxian/?from=pass"
              , o = e.config.qrcodeCfg && e.config.qrcodeCfg.appName || "百度APP"
              , s = e.config.qrcodeCfg && e.config.qrcodeCfg.appIcon || "https://passport.baidu.com/passApi/img/baidu-download-icon.png"
              , a = e.config.qrcodeCfg && e.config.qrcodeCfg.downLoadQrcode || "https://b.bdstatic.com/searchbox/icms/searchbox/img/code_home.png"
              , r = e.config.qrcodeCfg && e.config.qrcodeCfg.disableJump || !1
              , c = e.config.composeTemplate ? "block" : "none";
            return t.push('<div id="' + e.$getId("qrcode") + '" class="clearfix tang-pass-qrcode tang-pass-login" style="display:' + c + ';">'),
            t.push('<div class="tang-pass-qrcode-content" id="' + e.$getId("qrcodeContent") + '">'),
            t.push('<div class="tang-pass-qrcode-init">'),
            t.push('<div class="Qrcode-status-con tang-pass-qrcode-imgWrapper" id="' + e.$getId("QrcodeMain") + '"><img class="tang-pass-qrcode-img" src="' + passport.apiDomain.staticDomain + '/passApi/img/loading.gif"/>' + (e.config.qrcode_animation ? '<p class="Qrcode-status-animation' + (8 === +e.passLowerIE ? " Qrcode-status-animation-hackIE8" : "") + '" id="' + e.$getId("QrcodeAnimation") + '" style="background: url(' + n + ') no-repeat center center / 134px 160px"></p>' : "") + "</div>"),
            t.push('<div class="Qrcode-status-con Qrcode-status-success" id="' + e.$getId("QrcodeSuccess") + '"><p class="Qrcode-status-icon"></p><p>' + e.lang.QrcodeSuccessTip + '</p><p class="Qrcode-status-msg">' + e.lang.QrcodeSuccessMsg + "</p></div>"),
            t.push('<div class="Qrcode-status-con Qrcode-status-error" id="' + e.$getId("QrcodeError") + '"><p class="Qrcode-status-icon"></p><p>' + e.lang.QrcodeErrorTip + '</p><p class="Qrcode-refresh-btn" id="' + e.$getId("QrcodeErrorfreshBtn") + '">' + e.lang.QrcodeRefreshBtn + "</p></div>"),
            t.push('<div class="Qrcode-status-con Qrcode-status-refresh" id="' + e.$getId("QrcodeRefresh") + '"><p class="Qrcode-status-icon"></p><p class="refresh-title refresh-timeout">' + e.lang.QrcodeRefreshTip + '</p><p class="refresh-title refresh-loadout">' + e.lang.QrcodeLoadTip + '</p><p class="Qrcode-refresh-btn" id="' + e.$getId("QrcodeRefreshBtn") + '">' + e.lang.QrcodeRefreshBtn + "</p></div>"),
            t.push("</div>"),
            t.push("</div>"),
            e.config.qrcodeCfg && e.config.qrcodeCfg.appTitle ? t.push('<p id="' + e.$getId("QrcodeTitle") + '" class="tang-pass-qrcode-title">' + e.config.qrcodeCfg.appTitle + "</p>") : (t.push('<p id="' + e.$getId("QrcodeTitle") + '" class="tang-pass-qrcode-title">' + e.lang.qrcodeTitle + o + e.lang.qrcodeText + "</p>"),
            t.push('<div id="' + e.$getId("QrcodeDownload") + '" class="pass-qrcode-download"><div class="qrcode-hover"><div class="qrcode-download-link-box"><img class="qrcode-download-link" src="' + a + '"></div><p>扫描二维码下载' + o + '</p></div><a class="pass-link" href="' + (r ? "javascript:;" : i) + '" target="_blank"><img class="pass-qrcode-icon" src="' + s + '" alt="">下载' + o + "</a></div>")),
            e.config.qrcodeCfg && e.config.qrcodeCfg.appSubTitle && t.push('<p class="tang-pass-qrcode-subtitle">' + e.config.qrcodeCfg.appSubTitle + "</p>"),
            t.push("</div>"),
            t.join("")
        },
        _setEventQrcode: function() {
            var e = this;
            /msie 6/i.test(navigator.userAgent) ? setTimeout(function() {
                e._changeLoginType("qrcode")
            }, 0) : e._changeLoginType("qrcode")
        },
        getChannelForUnReceiveSms: function() {
            var e = this
              , t = document.getElementById(e.$getId("smsPhone"));
            e.config.unReceiveSmsCode = "",
            e._stopChannel(),
            baidu.ajax({
                url: e._domain.https + "/v3/login/getChannel",
                dataType: "jsonp",
                data: {
                    from: "up_sms_login",
                    data: e._SBCtoDBC(t.value)
                },
                success: function(t) {
                    if (0 === +t.errno) {
                        e._logPass(e.urlData, {
                            eventType: "pc-unreceive-sms-show"
                        }),
                        e._ownerDialog && e._ownerDialog.hide("unHide"),
                        e.getElement("unRecevieSmsSendCode").innerHTML = t.captcha;
                        var n = "";
                        t.channelCode && (n = t.channelCode + "",
                        n = n.replace(/\s/g, "").replace(/(.{4})/g, "$1 ")),
                        e.getElement("unRecevieSmsSendNumber").innerHTML = n,
                        e.$show(e.getElement("unRecevieSmsTip")),
                        passport[e.$getId("spareWData")].sign = t.channelId,
                        e.config.unReceiveSmsCode = t.captcha || "",
                        e._createChannel(t.channelId),
                        e.config.channelType = "unReceiveSms"
                    } else
                        passport[e.$getId("spareWData")].unicast && clearTimeout(passport[e.$getId("spareWData")].unicast),
                        e._setSmsGeneralError(t.errmsg)
                },
                error: function() {}
            })
        },
        _setChannel: function() {
            var e = this;
            e.config.channelType = "qrcode";
            var t = "traceId:" + e.urlData.traceId + ",logPage:" + e.urlData.page
              , n = {
                apiver: "v3",
                tt: (new Date).getTime(),
                tpl: e.config.product || "",
                logPage: t
            }
              , i = e.getElement("qrcodeContent");
            passport[e.$getId("spareWData")] = passport[e.$getId("spareWData")] || {},
            baidu(".Qrcode-status-con", i).hide(),
            e.$show(e.getElement("QrcodeMain")),
            e.$show(e.getElement("QrcodeTitle")),
            e.$show(e.getElement("QrcodeDownload")),
            passport[e.$getId("spareWData")].loadQrcode = setTimeout(function() {
                e.config.qrcode_style && (baidu(".Qrcode-status-con", i).hide(),
                baidu(".refresh-title", i).hide(),
                baidu(".refresh-loadout", i).show(),
                e.$hide(e.getElement("QrcodeTitle")),
                e.$hide(e.getElement("QrcodeDownload")),
                e.$show(e.getElement("QrcodeRefresh")))
            }, 5e3);
            var o = e._domain.https + "/v2/api/getqrcode?lp=pc&qrloginfrom=" + e.config.qrloginfrom + "&gid=" + (e.guideRandom || "");
            e.config.moreParams && e.config.moreParams.qrext_clientid && (o += "&qrext_clientid=" + e.config.moreParams.qrext_clientid),
            baidu.ajax({
                url: o,
                dataType: "jsonp",
                data: n,
                success: function(t) {
                    clearTimeout(passport[e.$getId("spareWData")].loadQrcode),
                    clearTimeout(passport[e.$getId("spareWData")].unicast),
                    passport[e.$getId("spareWData")].channelimg = (window.location ? window.location.protocol : document.location.protocol) + "//" + t.imgurl,
                    passport[e.$getId("spareWData")].sign = t.sign;
                    for (var n = baidu(".tang-pass-qrcode-img", i), o = 0, s = n.length; s > o; o++)
                        n.get(o).src = passport[e.$getId("spareWData")].channelimg;
                    setTimeout(function() {
                        e._createChannel(passport[e.$getId("spareWData")].sign)
                    }, 300)
                },
                error: function() {
                    clearTimeout(passport[e.$getId("spareWData")].loadQrcode),
                    clearTimeout(passport[e.$getId("spareWData")].unicast),
                    e.config.qrcode_style && (baidu(".Qrcode-status-con", i).hide(),
                    e.$hide(e.getElement("QrcodeTitle")),
                    e.$hide(e.getElement("QrcodeDownload")),
                    e.$show(e.getElement("QrcodeError")))
                }
            })
        },
        _stopChannel: function() {
            var e = this;
            passport[e.$getId("spareWData")] = passport[e.$getId("spareWData")] || {},
            passport[e.$getId("spareWData")].sign = "",
            clearInterval(passport[e.$getId("spareWData")].timer)
        },
        _createChannel: function(sign) {
            var me = this
              , qrcodeSign = sign
              , container = me.getElement("qrcodeContent")
              , qrcodeInit = baidu(".tang-pass-qrcode-init", container).get(0)
              , qrcodeImg = baidu(".tang-pass-qrcode-img", qrcodeInit).get(0)
              , data = {
                apiver: "v3",
                tt: (new Date).getTime()
            };
            passport[me.$getId("spareWData")] = passport[me.$getId("spareWData")] || {},
            me.config.unReceiveSmsCode || (passport[me.$getId("spareWData")].unicast = setTimeout(function() {
                baidu(".Qrcode-status-con", container).hide(),
                me.$hide(me.getElement("QrcodeTitle")),
                me.$hide(me.getElement("QrcodeDownload")),
                me.$show(me.getElement("QrcodeError"))
            }, 35e3)),
            baidu.ajax({
                url: me._domain.https + "/channel/unicast?channel_id=" + passport[me.$getId("spareWData")].sign + "&tpl=" + me.config.product + "&gid=" + (me.guideRandom || ""),
                dataType: "jsonp",
                data: data,
                success: function(d) {
                    if (me.config.unReceiveSmsCode || clearTimeout(passport[me.$getId("spareWData")].unicast),
                    d.channel_v)
                        try {
                            d.channel_v = eval("(" + d.channel_v + ")")
                        } catch (e) {
                            d.channel_v = {}
                        }
                    else
                        d.channel_v = {};
                    if (d.channel_v.u && (d.channel_v.u = decodeURIComponent(d.channel_v.u)),
                    "unReceiveSms" === me.config.channelType && 0 === +d.errno && 1 === +d.channel_v)
                        me._logPass(me.urlData, {
                            eventType: "pc-smslogin-unreceive-send-" + (me.config.isPwd && me.config.isPwd < 0 ? "reg" : "login")
                        }),
                        document.getElementById(me.$getId("smsVerifyCode")).value = me.config.unReceiveSmsCode,
                        me.config.unReceiveSmsCode = "",
                        me._submitSmsForm(sign),
                        me.$hide(me.getElement("unRecevieSmsTip")),
                        me._ownerDialog && me._ownerDialog.show();
                    else if (0 === +d.errno && 0 === +d.channel_v.status) {
                        clearInterval(passport[me.$getId("spareWData")].timer);
                        var data = {
                            bduss: d.channel_v.v,
                            u: encodeURIComponent(d.channel_v.u || me.config.u),
                            loginVersion: "v4",
                            qrcode: 1,
                            tpl: me.config.product ? me.config.product : ""
                        };
                        passport.data.jsonp("/v3/login/main/qrbdusslogin?v=" + (new Date).getTime(), data).success(function(e) {
                            if (0 == e.errInfo.no) {
                                me.storageSupport(function() {
                                    localStorage.setItem("passLoginType", "qrcode")
                                }),
                                me.config.loginType = "qrLogin";
                                var t = me.fireEvent("loginSuccess", {
                                    rsp: e
                                });
                                if (!t)
                                    return;
                                "yylive" === me.config.product && (passport.data.setContext(baidu.extend({}, me.config)),
                                passport.data.getAccessToken({
                                    client: "",
                                    clientfrom: "",
                                    tpl: "yylive ",
                                    client_id: "Bxr73Efet8HjR5Tr0HqcgDKr"
                                }).success(function(e) {
                                    var t = e.data
                                      , n = me.fireEvent("yyLoginSuccess", {
                                        rsp: t
                                    });
                                    n && (window.location.href = rsp.channel_v.u + "?accesstoken=" + t.access_token + "&expire=" + t.expires_in)
                                })),
                                window.location.href = e.data.u
                            } else
                                me.fireEvent("loginError", {
                                    rsp: e
                                }),
                                me._logPass(me.urlData, {
                                    eventType: "pc-qrLogin-submit-error",
                                    errno: e.errInfo.no
                                })
                        })
                    } else {
                        if (0 == d.errno && "1" == d.channel_v.status)
                            me.config.qrcode_style && (baidu(".Qrcode-status-con", container).hide(),
                            me.$hide(me.getElement("QrcodeTitle")),
                            me.$hide(me.getElement("QrcodeDownload")),
                            me.$show(me.getElement("QrcodeSuccess")));
                        else if (0 == d.errno && "2" == d.channel_v.status) {
                            clearInterval(passport[me.$getId("spareWData")].timer);
                            var returnValue = me.fireEvent("loginQrcodeCancel");
                            if (!returnValue)
                                return;
                            me.config.qrcode_style ? (baidu(".Qrcode-status-con", container).hide(),
                            baidu(".refresh-title", container).hide(),
                            baidu(".refresh-timeout", container).show(),
                            me.$hide(me.getElement("QrcodeTitle")),
                            me.$hide(me.getElement("QrcodeDownload")),
                            me.$show(me.getElement("QrcodeRefresh"))) : (qrcodeImg && (qrcodeImg.src = passport.apiDomain.staticDomain + "/passApi/img/loading.gif"),
                            me._setChannel(),
                            passport[me.$getId("spareWData")].timer = setInterval(function() {
                                me._setChannel()
                            }, 6e5))
                        }
                        qrcodeSign == passport[me.$getId("spareWData")].sign && me._createChannel(qrcodeSign)
                    }
                },
                error: function() {
                    me.config.unReceiveSmsCode || clearTimeout(passport[me.$getId("spareWData")].unicast),
                    me.config.qrcode_style && (baidu(".Qrcode-status-con", container).hide(),
                    me.$hide(me.getElement("QrcodeTitle")),
                    me.$hide(me.getElement("QrcodeDownload")),
                    me.$show(me.getElement("QrcodeError")))
                }
            })
        },
        refreshQrcode: function() {
            var e = this;
            clearTimeout(passport[e.$getId("spareWData")].unicast);
            var t = e.getElement("qrcodeContent")
              , n = baidu(".tang-pass-qrcode-init", t).get(0)
              , i = baidu(".tang-pass-qrcode-img", n).get(0);
            i && (i.src = passport.apiDomain.staticDomain + "/passApi/img/loading.gif"),
            e._setChannel(),
            passport[e.$getId("spareWData")].timer = setInterval(function() {
                e._setChannel()
            }, 6e5)
        },
        _actionQrcode: function() {
            var e = this
              , t = e.qrcodeDialogDom ? e.qrcodeDialogDom : this.getElement()
              , n = e._getWDom.parent(t);
            e._getWDom.parent(n),
            passport[e.$getId("spareWData")] = passport[e.$getId("spareWData")] || {},
            (!passport[e.$getId("spareWData")].channelimg || e.config.channelType && "unReceiveSms" === e.config.channelType) && (e._setChannel(),
            passport[e.$getId("spareWData")].timer = setInterval(function() {
                e._setChannel()
            }, 6e5))
        },
        _showQrcode: function() {
            var e = this
              , t = this.getElement()
              , n = e._getWDom.parent(t)
              , i = e._getWDom.parent(n)
              , o = baidu(".pass-qrcode-btn", i).get(0);
            e._getWDom.prev(t) && e.$hide(e._getWDom.prev(t)),
            e.$hide("choiceuser_article").$hide(t).$show(baidu(".tang-pass-qrcode", n).get(0)),
            e.$hide(e._getWDom.next(o) ? o : e._getWDom.parent(e._getWDom.parent(o)))
        },
        qrcodeAnimationShow: function() {
            var e = this;
            e.supportCss3Anim() ? baidu(e.getElement("QrcodeMain")).css("margin-left", "0") : baidu(e.getElement("QrcodeMain")).css("margin-left", "0"),
            baidu(e.getElement("QrcodeAnimation")).addClass("Qrcode-status-guideAnim")
        },
        qrcodeAnimationHide: function() {
            var e = this;
            baidu(e.getElement("QrcodeAnimation")).removeClass("Qrcode-status-guideAnim"),
            e.supportCss3Anim() ? baidu(e.getElement("QrcodeMain")).removeClass("Qrcode-animation").addClass("Qrcode-animationRight") : baidu(e.getElement("QrcodeMain")).css("margin-left", "99px")
        },
        supportCss3Anim: function() {
            var e = document.getElementsByTagName("body")[0].style;
            return "undefined" != typeof e.animation || "undefined" != typeof e.WebkitAnimation ? !0 : !1
        },
        setqrcodeEvent: function() {
            var e = this;
            e.qrcodeAnimationShow(),
            baidu(e.getElement("QrcodeErrorfreshBtn")).on("click", function() {
                e.refreshQrcode()
            }),
            baidu(e.getElement("QrcodeRefreshBtn")).on("click", function() {
                e.refreshQrcode()
            })
        },
        getTemplateUnreceiveSms: function() {
            var e = this;
            e.config.unReceiveSmsTempStatus = "none";
            var t = '<div id="' + e.$getId("unRecevieSmsTip") + '" class="pass-unreceiveSms-tip-wrapper" style="display:' + e.config.unReceiveSmsTempStatus + '">';
            return t += '<div class="pass-unreceiveSms-mask"></div><div class="pass-unreceiveSms-tip-wrapper-content"><div class="unreceiveSms-header"><h3 class="unreceiveSms-header-h3">' + e.lang.cantReceiveSms + '</h3><a class="unreceiveSms-header-a" id="' + e.$getId("closeUnRecevieSmsTip") + '"></a></div>',
            t += '<div class="unreceiveSms-article"><div class="pass-unreceiveSms-content"><p class="pass-unreceiveSms-p">' + e.lang.checkIfBlocked + '</p><p class="pass-unreceiveSms-p">' + e.lang.overTimeArrive + '</p><p class="pass-unreceiveSms-t25" id="' + e.$getId("unRecevieSmsReged") + '" style="display:none;">' + e.lang.reguest + (e.config.smsAutoLogin.encryption ? "" : '<a class="pass-unreceiveSms-btn-tip" id="' + e.$getId("unRecevieSmsChangeLogin") + '">' + e.lang.switchLoginMethod + "</a>或") + e.lang.usePhoneSendSms + '“<span class="pass-unreceiveSms-btn-tip" id="' + e.$getId("unRecevieSmsSendCode") + '"></span>”，发送至<span id="' + e.$getId("unRecevieSmsSendNumber") + '"></span>' + e.lang.shouldLogSuccess + '<span class="pass-unreceiveSms-text-tip">' + e.lang.introductSms + '</span></p><p class="pass-unreceiveSms-t25" id="' + e.$getId("unRecevieSmsUnReg") + '" style="display:none;">' + e.lang.rule1 + e.lang.rule2 + '<span class="pass-unreceiveSms-text-tip">' + e.lang.introductSms + "</span></p></div></div></div>"
        },
        _getTemplateSms: function() {
            var e = this
              , t = "none"
              , n = '<div id="' + e.$getId("sms") + '" class="tang-pass-login tang-pass-sms ' + (e.config.smsAutoLogin.encryption ? "tang-pass-sms-encryption" : "") + '" style="display:' + t + '">'
              , i = {
                u: e.config.u,
                staticPage: e.config.staticPage,
                tpl: e.config.product ? e.config.product : "",
                idc: e.config.idc ? e.config.idc : "",
                isdpass: "1",
                gid: e.guideRandom || "",
                switchuname: "",
                smsCodeString: "",
                smsVcodesign: "",
                smsVcodestr: "",
                subpro: e.config.subpro,
                is_voice_sms: e.config.is_voice_sms,
                voice_sms_flag: 0,
                mkey: e.config.mkey || ""
            };
            return n += '<p class="tang-pass-sms-tip">' + (e.config.smsText || e.lang.verifyEqualLogin) + "</p>",
            n += '<form id="' + e.$getId("smsForm") + '" method="POST">',
            n += e._getHiddenField(i, "smsHiddenFields"),
            n += '<div id="' + e.$getId("smsPhoneWrapper") + '" class="pass-form-item pass-form-item-smsPhone' + (e.foreignMobile ? " pass-form-item-PhoneCountry" : "") + '">' + (e.foreignMobile ? '<label for="' + e.$getId("smsPhone") + '" id="' + e.$getId("smsPhoneCountryLabel") + '" class="pass-label pass-label-smsPhone" data-countryCode="">+86</label>' : "") + '<input id="' + e.$getId("smsPhone") + '" type="text" name="username" class="pass-text-input pass-text-input-smsPhone"' + (e.config.smsAutoLogin.encryption ? "disabled" : "") + '/><span id="' + e.$getId("smsPhoneTip") + '" class="pass-item-tip pass-item-tip-smsPhone" style="display:none"><span id="' + e.$getId("smsPhoneTipText") + '"></span></span>' + (e.foreignMobile ? '<ul id="' + e.$getId("smsCountryList") + '" class="pass-country-list"></ul>' : "") + "</div>",
            n += '<p id="' + e.$getId("smsVerifyCodeWrapper") + '" class="pass-form-item pass-form-item-smsVerifyCode"><input id="' + e.$getId("smsVerifyCode") + '" type="text" name="password" class="pass-text-input pass-text-input-smsVerifyCode" /><button id="' + e.$getId("smsTimer") + '" class="pass-item-timer">发送' + e.lang.smsVerifyCode + '</button><span id="' + e.$getId("smsVerifyCodeTip") + '" class="pass-item-tip pass-item-tip-smsVerifyCode" style="display:none"><span id="' + e.$getId("smsVerifyCodeTipText") + '"></span></span></p>',
            n += '<p id="' + e.$getId("smsUnReceiveWrapper") + '" class="pass-form-item pass-form-item-unrecevie" style="display:none;"><span id="' + e.$getId("smsUnReceiveTipWrapper") + '" class="pass-sms-unreceive-tips">' + e.lang.unReceiveSmsCode + "</span></p>",
            n += '<p id="' + e.$getId("smsErrorWrapper") + '" class="pass-generalErrorWrapper"><span id="' + e.$getId("smsError") + '" class="pass-generalError"></span></p>',
            n += 1 != e.config.is_voice_sms ? '<p id="' + e.$getId("smsSubmitWrapper") + '" class="pass-form-item pass-form-item-submit"><input id="' + e.$getId("smsSubmit") + '" type="submit" value="登录" class="pass-button pass-button-submit" /><span class="tang-pass-sms-agreement pass-link">' + e.lang.agree + '<a target="_blank" href="' + e.constant.PROTOCAL_URL + '">' + e.lang.baiduUserProtocal + '</a> 和 <a target="_blank" href="' + e.constant.PERSONAL_PROTOCAL_URL + '">' + e.lang.baiduUserPersonal + "</a></span></p>" : '<p id="' + e.$getId("smsSubmitWrapper") + '" class="pass-form-item pass-form-item-submit"><input id="' + e.$getId("smsSubmit") + '" type="submit" value="登录" class="pass-button pass-button-submit" /><input  type="button" style="border:none;background:none;margin-top:12px;cursor:pointer;color:#2e7fdb;font-size:12px" class="pass-is_voice"  id="getVoiceSms" value="获取语音验证码" /></br><span class="tang-pass-sms-agreement pass-link">' + e.lang.agree + '<a target="_blank" href="' + e.constant.PROTOCAL_URL + '">' + e.lang.baiduUserProtocal + '</a> 和 <a target="_blank" href="' + e.constant.PERSONAL_PROTOCAL_URL + '">' + e.lang.baiduUserPersonal + "</a></span></p>",
            n += "</form>",
            n += "</div>"
        },
        _setEventSms: function() {
            var e = this
              , t = this.getElement()
              , n = e._getWDom.parent(t)
              , i = e._getWDom.parent(n)
              , o = baidu("#" + e.$getId("sms"), i).get(0)
              , s = baidu(".pass-text-input", o);
            e.foreignMobile && baidu(e.getElement("smsPhoneCountryLabel")).on("click", function(t) {
                var n = e.getElement("smsCountryList");
                n && "block" != n.style.display ? (e.$show(n),
                baidu(e.getElement("smsPhoneCountryLabel")).addClass("pass-label-code-up")) : n && (e.$hide(n),
                baidu(e.getElement("smsPhoneCountryLabel")).removeClass("pass-label-code-up")),
                e._selectCountryList(e.getElement("smsPhoneWrapper")),
                t.preventDefault()
            }),
            s.on("mouseover", function() {
                var t = e.fireEvent("fieldMouseover", {
                    ele: baidu(this)
                });
                t && baidu(this).addClass(e.constant.HOVER_CLASS)
            }),
            s.on("mouseout", function() {
                var t = e.fireEvent("fieldMouseout", {
                    ele: baidu(this)
                });
                t && baidu(this).removeClass(e.constant.HOVER_CLASS)
            }),
            s.on("keydown", function(t) {
                if (13 == t.keyCode) {
                    t && t.preventDefault && t.preventDefault();
                    var n = {
                        eventType: "pc-smslogin-submit-click"
                    };
                    e._logPass(e.urlData, n),
                    e._submitSmsForm()
                }
            });
            var a = baidu(e.getElement("smsPhone"));
            a.on("focus", function() {
                e.initialized || e._initApi();
                var t = e.fireEvent("fieldFocus", {
                    ele: baidu(this)
                });
                if (t) {
                    baidu(this).addClass(e.constant.FOCUS_CLASS),
                    baidu(this).removeClass(e.constant.ERROR_CLASS);
                    var n = document.getElementById(e.$getId("smsRegPromptWrapper"))
                      , i = document.getElementById(e.$getId("smsloginPromptWrapper"))
                      , o = document.getElementById(e.$getId("smsSecondPromptWrapper"));
                    n && e.$hide(n),
                    i && e.$hide(i),
                    o && e.$hide(o)
                }
            }),
            a.on("keydown", function() {
                if (!e.isSendSmsInput) {
                    e.isSendSmsInput = !0;
                    var t = {
                        eventType: "pc-smslogin-input"
                    };
                    e._logPass(e.urlData, t)
                }
            });
            var r = baidu(e.getElement("smsVerifyCode"));
            r.on("focus", function() {
                e.initialized || e._initApi();
                var t = e.fireEvent("fieldFocus", {
                    ele: baidu(this)
                });
                t && (baidu(this).addClass(e.constant.FOCUS_CLASS),
                baidu(this).removeClass(e.constant.ERROR_CLASS))
            }),
            r.on("keydown", function() {
                if (!e.isSendSmsCodeInput) {
                    e.isSendSmsCodeInput = !0;
                    var t = {
                        eventType: "pc-smslogin-code-input"
                    };
                    e._logPass(e.urlData, t)
                }
            }),
            s.on("blur", function() {
                if (this.value) {
                    var t = e.fireEvent("fieldBlur", {
                        ele: baidu(this)
                    });
                    if (!t)
                        return;
                    e.config.smsAutoLogin.encryption || ("username" === this.name ? e._validatorPhoneFn(this) : e._validatorSmsFn(this))
                }
                baidu(this).removeClass(e.constant.FOCUS_CLASS)
            }),
            baidu("#" + e.$getId("smsTimer"), o).on("click", function(t) {
                var n = {
                    eventType: "pc-smslogin-send-click"
                };
                e._logPass(e.urlData, n),
                e.config.voice_sms_flag = 0,
                t.preventDefault(),
                e._checkRegPhone()
            }),
            baidu("#" + e.$getId("smsSubmit"), o).on("click", function(t) {
                e._logPass(e.urlData, {
                    eventType: "pc-smsLogin-submit"
                }),
                t && t.preventDefault && t.preventDefault(),
                e._submitSmsForm()
            }),
            baidu(e.getElement("smsSwitchWrapper")).on("click", function() {
                /msie 6/i.test(navigator.userAgent) || /msie 7/i.test(navigator.userAgent) ? setTimeout(function() {
                    e._changeLoginType("sms")
                }, 0) : e._changeLoginType("sms"),
                e._logPass(e.urlData, {
                    eventType: "user-smsLogin-click"
                })
            }),
            baidu(e.getElement("sms_btn_back")).on("click", function() {
                e._changeLoginType("normal"),
                e.getElement("password") && e._doFocus("password")
            }),
            baidu(document.getElementById("getVoiceSms")).on("click", function(t) {
                e.config.voice_sms_flag = 1,
                t.preventDefault(),
                e._checkRegPhone()
            }),
            baidu(e.getElement("smsUnReceiveTipWrapper")).on("click", function(t) {
                e._logPass(e.urlData, {
                    eventType: "pc-smslogin-unreceive-sms-btn-click"
                }),
                t.preventDefault(),
                e.config.isPwd && 1 === +e.config.isPwd ? e.getChannelForUnReceiveSms() : (e._logPass(e.urlData, {
                    eventType: "pc-unreceive-sms-show-reg"
                }),
                e._ownerDialog && e._ownerDialog.hide("unHide"),
                e.$show(e.getElement("unRecevieSmsTip")))
            }),
            baidu(e.getElement("closeUnRecevieSmsTip")).on("click", function(t) {
                t.preventDefault(),
                e.$hide(e.getElement("unRecevieSmsTip")),
                e._ownerDialog && e._ownerDialog.show()
            }),
            baidu(e.getElement("unRecevieSmsChangeLogin")).on("click", function(t) {
                e._logPass(e.urlData, {
                    eventType: "pc-smslogin-unreceive-sms-change-login-click"
                }),
                t.preventDefault(),
                e.$hide(e.getElement("unRecevieSmsTip")),
                e._ownerDialog && e._ownerDialog.show();
                var n = "qrcode";
                e.config.isPwd && 1 === +e.config.isPwd && (n = "normal"),
                e._changeLoginType(n)
            })
        },
        _setSmsGeneralError: function(e) {
            this.getElement("smsError").innerHTML = e
        },
        _sendVcode: function(e, t) {
            var n, i = e || this, o = (i.config.voice_sms_flag,
            document.getElementById(i.$getId("smsPhone"))), s = i.getElement("smsPhoneCountryLabel") ? baidu(i.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "", a = 60, r = baidu("#" + i.$getId("sms")).get(0);
            if (i.config.smsAutoLogin.encryption || i._validatorPhoneFn(o)) {
                baidu("#" + i.$getId("smsRegPromptBtn"), r).off("click"),
                baidu("#" + i.$getId("smsRegPromptBtn"), r).on("click", function(e) {
                    e.preventDefault()
                }),
                baidu("#" + i.$getId("smsTimer"), r).off("click"),
                baidu("#" + i.$getId("smsTimer"), r).on("click", function(e) {
                    e.preventDefault()
                }),
                baidu("#" + i.$getId("smsTimer"), r).removeClass("pass-item-timer"),
                baidu("#" + i.$getId("smsTimer"), r).addClass("pass-item-time-timing");
                var c = hex_md5(o.value + "Moonshadow");
                c = c.replace(/o/, "ow").replace(/d/, "do").replace(/a/, "ad"),
                c = c.replace(/h/, "ha").replace(/s/, "sh").replace(/n/, "ns").replace(/m/, "mo");
                var l = {
                    gid: i.guideRandom || "",
                    username: i._SBCtoDBC(o.value),
                    countrycode: s,
                    bdstoken: i.bdPsWtoken,
                    tpl: i.config.product ? i.config.product : "",
                    loginVersion: "v4",
                    flag_code: i.config.voice_sms_flag,
                    client: i.config.client,
                    mkey: i.config.mkey || "",
                    moonshad: c
                };
                t && t.ds && t.tk && (l.ds = t.ds || "",
                l.tk = t.tk || ""),
                l.supportdv = "1",
                l.dv = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "",
                i.config.smsAutoLogin.encryption && (l.username = i._SBCtoDBC(i.config.smsAutoLogin.encryption),
                l.mobileencryption = 1);
                var d = "";
                d = 1 === +i.config.voice_sms_flag ? window.location.protocol.toLowerCase() + "//wappass.baidu.com/wp/api/login/sms?is_voice_sms=" + i.config.voice_sms_flag : i._domain.auto + "/v2/api/senddpass",
                passport.data.jsonp(d, l).success(function(e) {
                    if (0 === +i.config.voice_sms_flag && 0 !== +e.data.errno || 1 === +i.config.voice_sms_flag && 0 !== +e.errInfo.no) {
                        if (18 === +e.data.errno || 19 === +e.data.errno || 50020 === +e.errInfo.no || 50021 === +e.errInfo.no)
                            if ("1" === e.data.isslide)
                                i.loginPassMkd.initVcode(),
                                i._ownerDialog && i._ownerDialog.hide("unHide");
                            else {
                                var t = i.constant.VERIFYCODE_URL_PREFIX + e.data.vcodestr;
                                i.getElement("smsHiddenFields_smsVcodesign").value = e.data.vcodesign,
                                i.getElement("smsHiddenFields_smsVcodestr").value = e.data.vcodestr,
                                confirmSmsVerifyWidget ? (i.getElement("confirmVerifyCodeImg").src = t,
                                i.getElement("confirmVerifyCode").value = "",
                                i._ownerDialog && i._ownerDialog.hide("unHide"),
                                confirmSmsVerifyWidget.show()) : passport._load(i._domain.auto + "/passApi/js/uni_wrapper.js", !0, function() {
                                    window.confirmSmsVerifyWidget = passport.pop.init({
                                        type: "confirmWidget",
                                        tangram: !0,
                                        titleText: "安全验证",
                                        width: 490,
                                        apiOpt: {
                                            Continue: "确定",
                                            contentHTML: '<p class="pass-confirm-verifyWidget-msg">请填写图中的验证码</p><p class="pass-confirm-verifyWidget-imgWrapper"><input type="text" class="pass-text-input pass-confirm-verifyWidget-verifyCode" id="' + i.$getId("confirmVerifyCode") + '" name="confirmVerifyCode" value="" /><img src="' + t + '" title="" class="pass-confirm-verifyWidget-verifyCode-img" id="' + i.$getId("confirmVerifyCodeImg") + '" /><a href="#" class="pass-confirm-verifyWidget-imgChange" id="' + i.$getId("confirmVerifyCodeChange") + '">换一张</a><span class="pass-confirm-verifyWidget-error" id="' + i.$getId("confirmVerifyCodeError") + '"></span></p>'
                                        },
                                        onRender: function() {
                                            baidu(confirmSmsVerifyWidget.getElement("confirmWidget_footer")).addClass("pass-confirm-verifyWidget-bottom"),
                                            i.config.hasPlaceholder && i._getPlaceholder([{
                                                label: "confirmVerifyCode",
                                                placeholder: "verifyCode"
                                            }]),
                                            baidu(i.getElement("confirmVerifyCodeChange")).on("click", function() {
                                                baidu(i.getElement("confirmVerifyCodeImg")).attr("src", i.constant.VERIFYCODE_URL_PREFIX + i.getElement("smsHiddenFields_smsVcodestr").value + "&v=" + (new Date).getTime())
                                            }),
                                            baidu(i.getElement("confirmVerifyCode")).on("keyup", function() {
                                                baidu(i.getElement("confirmVerifyCode")).removeClass("pass-text-input-error"),
                                                baidu(i.getElement("confirmVerifyCodeError")).hide(),
                                                baidu(i.getElement("confirmVerifyCodeError")).get(0).innerHTML = ""
                                            }),
                                            baidu(i.getElement("confirmVerifyCode")).on("change", function() {
                                                i.getElement("confirmVerifyCode").value = i.getElement("confirmVerifyCode").value.replace(/\s/g, "")
                                            })
                                        },
                                        onConfirmClose: function() {
                                            baidu(i.getElement("confirmVerifyCodeError")).hide(),
                                            baidu(i.getElement("confirmVerifyCodeError")).get(0).innerHTML = "",
                                            confirmSmsVerifyWidget.hide(),
                                            i._ownerDialog && i._ownerDialog.show()
                                        },
                                        onConfirmCancel: function() {},
                                        onConfirmContinue: function() {
                                            if ("" == i.getElement("confirmVerifyCode").value)
                                                return baidu(i.getElement("confirmVerifyCode")).addClass("pass-text-input-error"),
                                                baidu(i.getElement("confirmVerifyCodeError")).show(),
                                                void (baidu(i.getElement("confirmVerifyCodeError")).get(0).innerHTML = i.lang.confirmVerCodeEmpty);
                                            var t = document.getElementById("dv_Input")
                                              , c = hex_md5(o.value + "Moonshadow");
                                            c = c.replace(/o/, "ow").replace(/d/, "do").replace(/a/, "ad"),
                                            c = c.replace(/h/, "ha").replace(/s/, "sh").replace(/n/, "ns").replace(/m/, "mo");
                                            var l = {
                                                gid: i.guideRandom || "",
                                                username: i._SBCtoDBC(o.value),
                                                countrycode: s,
                                                bdstoken: i.bdPsWtoken,
                                                tpl: i.config.product ? i.config.product : "",
                                                vcodestr: i.getElement("smsHiddenFields_smsVcodestr").value,
                                                vcodesign: i.getElement("smsHiddenFields_smsVcodesign").value,
                                                verifycode: i._SBCtoDBC(i.getElement("confirmVerifyCode").value),
                                                flag_code: i.config.voice_sms_flag,
                                                loginVersion: "v4",
                                                mkey: i.config.mkey || "",
                                                moonshad: c,
                                                dv: t ? t.value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || ""
                                            };
                                            i.config.smsAutoLogin.encryption && (l.username = i._SBCtoDBC(i.config.smsAutoLogin.encryption),
                                            l.mobileencryption = 1);
                                            var d = "";
                                            d = 1 == i.config.voice_sms_flag ? window.location.protocol.toLowerCase() + "//wappass.baidu.com/wp/api/login/sms?is_voice_sms=" + i.config.voice_sms_flag : i._domain.auto + "/v2/api/senddpass",
                                            passport.data.jsonp(d, l).success(function(t) {
                                                var o = baidu(i.getElement("confirmVerifyCodeError"));
                                                if (0 == i.config.voice_sms_flag && 0 == t.data.errno || 1 == i.config.voice_sms_flag && 0 == t.errInfo.no) {
                                                    if (1 == i.config.voice_sms_flag) {
                                                        var s = 15;
                                                        document.getElementById("getVoiceSms").disabled = !0,
                                                        n = setInterval(function() {
                                                            var e = document.getElementById("getVoiceSms");
                                                            if (e) {
                                                                var t = i.$getId("smsTimer");
                                                                if (0 == --s) {
                                                                    clearInterval(n);
                                                                    var o = baidu("#" + t, r);
                                                                    o.removeClass("pass-item-time-timing"),
                                                                    o.addClass("pass-item-timer"),
                                                                    e.disabled = !1,
                                                                    e.value = i.lang.resend + "语音验证码",
                                                                    document.getElementById(t).innerHTML = i.lang.resend,
                                                                    s = 60
                                                                } else {
                                                                    var o = baidu("#" + t, r);
                                                                    o.addClass("pass-item-time-timing"),
                                                                    o.removeClass("pass-item-timer"),
                                                                    e.value = "已发送" + s + "s"
                                                                }
                                                            }
                                                        }, 1e3)
                                                    } else
                                                        document.getElementById(i.$getId("smsTimer")).disabled = !0,
                                                        n = setInterval(function() {
                                                            var e = i.$getId("smsTimer")
                                                              , t = document.getElementById(e);
                                                            if (t)
                                                                if (0 == --a) {
                                                                    clearInterval(n);
                                                                    var o = baidu("#" + e, r);
                                                                    o.removeClass("pass-item-time-timing"),
                                                                    o.addClass("pass-item-timer"),
                                                                    document.getElementById(i.$getId("smsTimer")).disabled = !1,
                                                                    t.innerHTML = i.lang.resend,
                                                                    a = 60
                                                                } else {
                                                                    var o = baidu("#" + e, r);
                                                                    o.addClass("pass-item-time-timing"),
                                                                    o.removeClass("pass-item-timer"),
                                                                    49 === a && (i._logPass(i.urlData, {
                                                                        eventType: "pc-smslogin-unreceive-btn-show"
                                                                    }),
                                                                    i.$show(i.getElement("smsUnReceiveWrapper"))),
                                                                    t.innerHTML = a + "s"
                                                                }
                                                        }, 1e3);
                                                    o.hide(),
                                                    o.get(0).innerHTML = "",
                                                    confirmSmsVerifyWidget.hide(),
                                                    i._ownerDialog && i._ownerDialog.show()
                                                } else
                                                    20 == t.data.errno || 21 == t.data.errno ? (baidu(i.getElement("confirmVerifyCode")).addClass("pass-text-input-error"),
                                                    o.show(),
                                                    o.get(0).innerHTML = t.data.msg,
                                                    i.getElement("confirmVerifyCodeImg").src = i.constant.VERIFYCODE_URL_PREFIX + t.data.vcodestr,
                                                    i.getElement("confirmVerifyCode").value = "",
                                                    i.getElement("smsHiddenFields_smsVcodesign").value = t.data.vcodesign,
                                                    i.getElement("smsHiddenFields_smsVcodestr").value = t.data.vcodestr) : 27 == e.data.errno ? document.location.href = "https://passport.baidu.com/v2/?reg&overseas=" + i.config.overseas + "&tpl=" + i.config.product + "&u=" + encodeURIComponent(i.config.u) : (o.hide(),
                                                    confirmSmsVerifyWidget.hide(),
                                                    i._ownerDialog && i._ownerDialog.show(),
                                                    i._setSmsGeneralError(1 == i.config.voice_sms_flag ? t.errInfo.msg : t.data.msg))
                                            })
                                        }
                                    }),
                                    i._ownerDialog && i._ownerDialog.hide("unHide"),
                                    confirmSmsVerifyWidget.show()
                                })
                            }
                        else
                            27 == e.data.errno ? document.location.href = "https://passport.baidu.com/v2/?reg&overseas=" + i.config.overseas + "&tpl=" + i.config.product + "&u=" + encodeURIComponent(i.config.u) : i._setSmsGeneralError(1 !== +i.config.voice_sms_flag ? e.data.msg : e.errInfo.msg);
                        baidu("#" + i.$getId("smsTimer"), r).addClass("pass-item-timer"),
                        baidu("#" + i.$getId("smsTimer"), r).removeClass("pass-item-time-timing"),
                        document.getElementById(i.$getId("smsTimer")).innerHTML = i.lang.resend
                    } else if (1 == i.config.voice_sms_flag) {
                        var c = 15;
                        document.getElementById("getVoiceSms").disabled = !0,
                        n = setInterval(function() {
                            if (0 == --c) {
                                clearInterval(n);
                                var e = baidu("#" + i.$getId("smsTimer"), r);
                                e.removeClass("pass-item-time-timing"),
                                e.addClass("pass-item-timer"),
                                document.getElementById("getVoiceSms").disabled = !1,
                                document.getElementById("getVoiceSms").value = i.lang.resend + "语音验证码",
                                document.getElementById(i.$getId("smsTimer")).innerHTML = i.lang.resend,
                                c = 15
                            } else {
                                var e = baidu("#" + i.$getId("smsTimer"), r);
                                e.addClass("pass-item-time-timing"),
                                e.removeClass("pass-item-timer"),
                                document.getElementById("getVoiceSms").value = "已发送" + c + "s"
                            }
                        }, 1e3)
                    } else
                        document.getElementById(i.$getId("smsTimer")).disabled = !0,
                        n = setInterval(function() {
                            var e = document.getElementById(i.$getId("smsTimer"));
                            if (e)
                                if (0 == --a) {
                                    clearInterval(n);
                                    var t = baidu("#" + i.$getId("smsTimer"), r);
                                    t.removeClass("pass-item-time-timing"),
                                    t.addClass("pass-item-timer"),
                                    document.getElementById(i.$getId("smsTimer")).disabled = !1,
                                    e.innerHTML = i.lang.resend,
                                    a = 60
                                } else {
                                    var t = baidu("#" + i.$getId("smsTimer"), r);
                                    t.addClass("pass-item-time-timing"),
                                    t.removeClass("pass-item-timer"),
                                    49 === a && (i._logPass(i.urlData, {
                                        eventType: "pc-smslogin-unreceive-btn-show"
                                    }),
                                    i.$show(i.getElement("smsUnReceiveWrapper"))),
                                    e.innerHTML = a + "s"
                                }
                        }, 1e3);
                    baidu("#" + i.$getId("smsTimer"), r).on("click", function(e) {
                        i.config.voice_sms_flag = 0,
                        e.preventDefault(),
                        i._checkRegPhone()
                    })
                })
            }
        },
        _validatorPhoneFn: function(e) {
            e.value = e.value.replace(/\s/g, "");
            var t = this;
            if ("" == e.value)
                return t._setSmsGeneralError(t.lang.fillPhonePls),
                baidu(e).addClass(t.constant.ERROR_CLASS),
                !1;
            if (t.getElement("smsPhoneCountryLabel") && "" != baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode")) {
                if (!new RegExp(/^(\d)*$/).test(t._SBCtoDBC(e.value)))
                    return t._setSmsGeneralError(t.lang.foreignMobileError),
                    baidu(e).addClass(t.constant.ERROR_CLASS),
                    !1
            } else if (!new RegExp(/^1[3456789]\d{9}$/).test(t._SBCtoDBC(e.value)))
                return t._setSmsGeneralError(t.lang.foreignMobileError),
                baidu(e).addClass(t.constant.ERROR_CLASS),
                !1;
            return t._setSmsGeneralError(""),
            baidu(e).removeClass(t.constant.ERROR_CLASS),
            !0
        },
        _validatorSmsFn: function(e) {
            var t = this;
            return "" == e.value ? (t._setSmsGeneralError(t.lang.fillVerifyCodePls),
            baidu(e).addClass(t.constant.ERROR_CLASS),
            !1) : (t._setSmsGeneralError(""),
            !0)
        },
        _postSmsData: function(e) {
            var t = this;
            e.countrycode = t.getElement("smsPhoneCountryLabel") ? baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
            e.token = t.bdPsWtoken,
            e.loginVersion = "v4",
            passport.data.traceID && passport.data.traceID.startFlow && passport.data.traceID.startFlow("login"),
            e.dv = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "",
            e = baidu.extend(e, t.fuid || {}),
            passport.data.login(e).success(function(e) {
                if (e.loginType = "sms",
                0 == e.errInfo.no) {
                    t.storageSupport(function() {
                        localStorage.setItem("passLoginType", "sms")
                    }),
                    t.config.loginType = "smsLogin";
                    var n = t.fireEvent("loginSuccess", {
                        rsp: e
                    });
                    if (!n)
                        return;
                    window.location.href = e.data.u
                } else {
                    t.getElement("smsSubmit").style.color = "#fff";
                    var n = t.fireEvent("loginError", {
                        rsp: e
                    });
                    if (t._logPass(t.urlData, {
                        eventType: "pc-smsLogin-submit-error",
                        errno: e.errInfo.no
                    }),
                    !n)
                        return;
                    t._setSmsGeneralError(4 == e.errInfo.no ? t.lang.captchaErr : e.errInfo.msg),
                    (3 == e.errInfo.no || 4 == e.errInfo.no) && t._clearInput("smsVerifyCode")
                }
                var i = {
                    eventType: "pc-smslogin-post-success"
                }
                  , o = baidu.extend({}, t.urlData);
                o.errno = e.errInfo.no,
                t._logPass(o, i)
            })
        },
        smsLoginSubmit: function(e) {
            var t = this
              , e = e || {}
              , n = baidu.form.json(t.getElement("smsForm"));
            e.errInfo && 3 == e.errInfo.no ? passport.data.post("/v2/unite-bind", {
                username: e.data.username || "",
                password: n.password,
                countrycode: t.getElement("smsPhoneCountryLabel") ? baidu(t.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
                sms: 1,
                apiver: "v3",
                loginVersion: "v4",
                token: e.data.token || ""
            }).success(function() {
                t._postSmsData(n)
            }) : t._postSmsData(n)
        },
        _submitSmsForm: function(e) {
            function t() {
                n._postSmsData(a)
            }
            var n = this
              , i = document.getElementById(n.$getId("smsPhone"))
              , o = document.getElementById(n.$getId("smsVerifyCode"));
            if (!n.config.smsAutoLogin.encryption && !n._validatorPhoneFn(i))
                return void i.focus();
            if (n._validatorSmsFn(o)) {
                var s = n.fireEvent("beforeSubmit");
                if (s) {
                    n.getElement("smsSubmit").style.color = "#9ebef4";
                    var a = baidu.form.json(n.getElement("smsForm"));
                    a.password = n._SBCtoDBC(a.password),
                    a.username = n._SBCtoDBC(a.username),
                    a.FP_UID = n._getCookie("FP_UID") || "",
                    a.FP_INFO = window.PP_FP_INFO || "",
                    a.client = n.config.client,
                    a.isupsms = e ? 1 : "",
                    a.channelid = e || "",
                    n.config.smsAutoLogin.encryption && (a.username = encodeURIComponent(encodeURIComponent(n.config.smsAutoLogin.encryption)),
                    a.mobileencryption = 1),
                    "phoenix" === n.config.source && (a.isfromphoenix = 1),
                    n.loginConnect({
                        username: a.username,
                        password: a.password,
                        countrycode: n.getElement("smsPhoneCountryLabel") ? baidu(n.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : "",
                        smsVcode: a.password,
                        isdpass: 1,
                        sms: 1
                    }, {
                        fail: function(e) {
                            n._setSmsGeneralError(e)
                        }
                    }, t)
                }
            }
        },
        _setEventChoiceUser: function() {
            var e = this
              , t = function() {
                baidu(e.getElement()).removeClass("tang-pass-login-hide"),
                e.$show(e.getElement()).$hide("choiceuser_article")
            }
              , n = function() {
                baidu(e.getElement()).removeClass("tang-pass-login-hide"),
                e.$show(e.getElement()).$hide("choiceuser_article"),
                e.submit()
            };
            baidu(e.getElement("choiceuser_btn_username")).on("click", function(t) {
                e.getElement("loginMerge").value = "false",
                n(t)
            }),
            baidu(e.getElement("choiceuser_btn_mobile")).on("click", function(t) {
                e.getElement("isPhone").value = "true",
                e.getElement("loginMerge").value = "false",
                n(t)
            }),
            baidu(e.getElement("choiceuser_btn_back")).on("click", function(e) {
                e.preventDefault(),
                t()
            })
        },
        _getToken: function(e) {
            var t = this;
            passport[t.$getId("spareWData")] = passport[t.$getId("spareWData")] || {},
            passport.data.getApiInfo({
                apiType: "login",
                loginVersion: "v4",
                gid: t.guideRandom || ""
            }).success(function(n) {
                t.bdPsWtoken = n.data.token,
                e && e(t)
            })
        },
        _getRSA: function(e) {
            var t = this;
            passport.data.getRsaKey({
                gid: t.guideRandom || "",
                loginVersion: "v4"
            }).success(function(t) {
                t.errInfo.no || 0 == t.errInfo.no || (t = t.data);
                var n = new passport.lib.RSA;
                n.setKey(t.pubkey),
                e && e({
                    RSA: n,
                    rsakey: t.key
                })
            })
        },
        _changeLoginType: function(e) {
            var t = this
              , n = this.getElement()
              , i = t._getWDom.parent(n)
              , o = t._getWDom.parent(i);
            t.getElement("qrcode"),
            t.getElement("sms"),
            baidu(".tang-pass-login-phoenix", o).get(0),
            t._changeTabButtonActivStatus(e);
            var s = t.config.composeTemplate ? {
                normal: {
                    $btn: baidu(".pass-normal-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                    $ele: baidu(t.getElement("form"))
                },
                sms: {
                    $btn: baidu(".pass-sms-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                    $ele: baidu(t.getElement("sms"))
                }
            } : {
                normal: {
                    $btn: baidu(".pass-normal-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                    $ele: baidu(t.getElement("form")).parent()
                },
                sms: {
                    $btn: baidu(".pass-sms-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                    $ele: baidu(t.getElement("sms"))
                },
                qrcode: {
                    $btn: baidu(".pass-qrcode-btn", t.getPhoenixElement("pass_phoenix_list_login")),
                    $ele: baidu(t.getElement("qrcode"))
                }
            };
            choiceuser = t.getElement("choiceuser_article"),
            e = e || "normal";
            var a = {
                normal: "pwdLogin",
                qrcode: "qrLogin",
                sms: "smsLogin"
            };
            t._logPass(t.urlData, {
                eventType: "pc-" + (a[e] || e) + "-show"
            }),
            t._logPass(t.urlData, {
                eventType: "pc-" + e + "login-show"
            }),
            "sms" === e && (t.isSendSmsCodeInput = !1,
            t.isSendSmsInput = !1),
            choiceuser && t.$hide("choiceuser_article");
            var r = t.fireEvent("changeLoginType", {
                loginType: e,
                currentLoginType: t.currentLoginType || ""
            });
            if (r) {
                for (var c in s)
                    s[c].$ele && s[c].$ele.length > 0 && (c == e ? t.$show(s[c].$ele[0]) : t.$hide(s[c].$ele[0]));
                "qrcode" === e ? t._actionQrcode() : "sms" === e && t.$hide(t.getElement("smsUnReceiveWrapper")),
                t.currentLoginType = e
            }
        },
        _doFocus: function(e) {
            var t = this;
            t.config.autoFocus && ("string" == (typeof e).toLowerCase() && t.getElement(e) ? t.getElement(e).focus() : e.focus())
        },
        _clearInput: function(e) {
            var t = this
              , n = t.getElement(e)
              , i = t.getElement(e + "_placeholder")
              , o = t.getElement(e + "_clearbtn");
            n && (i && t.$show(i),
            o && t.$hide(i),
            n.value = "",
            t._doFocus(n))
        },
        _insertAfterW: function(e, t) {
            var n = this
              , i = n._getWDom.parent(t);
            i.lastChild == t ? i.appendChild(e) : i.insertBefore(e, n._getWDom.next(t))
        },
        _insertBefore: function(e, t) {
            var n = this
              , i = n._getWDom.parent(t);
            i.insertBefore(e, t)
        },
        initMkd: function() {
            var e = this;
            e._insertScriptW(e.constant.TOUCHAPIMKD_URL, function() {
                if (window.PassMachine && window.PassMachine.mkd) {
                    var t = window.PassMachine.mkd;
                    e.loginPassMkd = new t({
                        maskModule: !0,
                        ak: "1e3f2dd1c81f2075171a547893391274",
                        verifySuccessFn: function(t) {
                            e.loginPassMkd.removeMask(),
                            e._ownerDialog && e._ownerDialog.show(),
                            e.mkdVerifySuccessCallback(t)
                        },
                        closeFn: function() {
                            e._ownerDialog && e._ownerDialog.show()
                        }
                    })
                }
            })
        },
        mkdVerifySuccessCallback: function(e) {
            var t = this;
            "mkdDataLoginFn" === t.currentPath ? (t.getElement("submit").disabled = !0,
            t.getElement("submit").value = t.lang.logining,
            t.getElement("submit").style.color = "#9ebef4",
            t.loginFn(e, t.histroyData)) : "mkdDataSendVcode" === t.currentPath && t._sendVcode(null, e)
        },
        _insertNoCaptchaScript: function() {
            var e = this;
            e._insertScriptW(e.constant.NOCAPTCHA_URL, function() {})
        },
        _checkCapsLock: function() {
            var e = this
              , t = baidu(e.getElement("password"));
            t.on("keypress", function(t) {
                var n = t || window.event
                  , i = n.keyCode || n.which
                  , o = n.shiftKey || 16 == i || !1
                  , s = document.getElementById(e.$getId("caps"));
                if (i >= 65 && 90 >= i && !o || i >= 97 && 122 >= i && o)
                    if (s)
                        e.$show(s);
                    else {
                        var a = document.createElement("span");
                        a.id = e.$getId("caps"),
                        a.innerHTML = "大小写锁定已打开";
                        var r = document.getElementById(e.$getId("passwordWrapper"));
                        "static" == r.style.position && (r.style.position = "relative"),
                        r.style.zIndex = r.style.zIndex ? r.style.zIndex + 1 : 20,
                        a.style.cssText = 'position:absolute;left:60px;clear:both;top:25px;width:103px;height:37px;font-size:12px;line-height:45px;z-index:20;text-align:center;background:url("' + passport.apiDomain.staticDomain + '/passApi/img/caps.gif") no-repeat 0 0;',
                        r.appendChild(a)
                    }
                else
                    s && e.$hide(s)
            }),
            t.on("blur", function() {
                var t = document.getElementById(e.$getId("caps"));
                t && e.$hide(t)
            })
        },
        _checkRegPhone: function() {
            var e = this
              , t = e.getElement("smsPhoneCountryLabel") ? baidu(e.getElement("smsPhoneCountryLabel")).attr("data-countrycode") || "" : ""
              , n = document.getElementById(e.$getId("smsPhone"))
              , i = e.config.smsAutoLogin.encryption || "";
            (i || e._validatorPhoneFn(n)) && passport.data.getphonestatus({
                gid: e.guideRandom || "",
                phone: e._SBCtoDBC(i ? i : n.value),
                loginVersion: "v4",
                countrycode: t,
                mobileencryption: i ? 1 : ""
            }).success(function(i) {
                var o = e.fireEvent("_checkRegPhone", {
                    rsp: i
                });
                if (o)
                    if (0 == i.errInfo.no)
                        e.config.isPwd = +i.errInfo.isPwd || 0,
                        baidu(e.getElement("unRecevieSmsUnReg")).hide(),
                        baidu(e.getElement("unRecevieSmsReged")).show(),
                        e.config.sendVcodeBefore && "function" == typeof e.config.sendVcodeBefore ? e.config.sendVcodeBefore(e, e.mkdDataSendVcode, function() {
                            n.value = "",
                            n.focus()
                        }) : e.bdPsWtoken ? e.mkdDataSendVcode() : e._getToken(e.mkdDataSendVcode);
                    else if (3 === +i.errInfo.no && "1" === i.data.jumpReg) {
                        baidu(e.getElement("unRecevieSmsReged")).hide(),
                        baidu(e.getElement("unRecevieSmsUnReg")).show();
                        var s = document.getElementById(e.$getId("smsSecondPromptWrapper"))
                          , a = document.getElementById(e.$getId("smsPhoneWrapper"));
                        if (s)
                            e.$show(s),
                            e.getElement("smsSecondPromptBtn").focus();
                        else {
                            var r = document.createElement("div");
                            r.id = e.$getId("smsSecondPromptWrapper"),
                            r.setAttribute("class", "pass-form-sms-checkphone"),
                            r.style.cssText = 'position:absolute;clear:both;color:#826f33;z-index:999;font-size:12px;width:211px;height:71px;padding:16px 16px 11px 13px;background:url("' + passport.apiDomain.staticDomain + '/passApi/img/smsRegphone.png") 0px 0px no-repeat;right:0px;',
                            r.innerHTML = '<p style="margin:0px;padding:0px;line-height:2em;">手机号未注册或已被运营商二次放号，请重新注册新帐号。</p><button id="' + e.$getId("smsSecondPromptBtn") + '" style="background:#2e82ff;border:none;color:#fff;cursor:pointer;height:25px;line-height:25px;width:100px;text-align:center;position:absolute;right:16px;top:66px;" hidefocus=true>注册</button>',
                            a.appendChild(r),
                            e.getElement("smsSecondPromptBtn").focus()
                        }
                        baidu(e.getElement("smsSecondPromptBtn")).on("click", function(t) {
                            e.getElement("smsSecondPromptBtn") && baidu(e.getElement("smsSecondPromptBtn")).hide(),
                            t.preventDefault(),
                            window.location.href = e.constant.REG_URL
                        })
                    } else if (3 === +i.errInfo.no) {
                        e.config.isPwd = -1,
                        baidu(e.getElement("unRecevieSmsReged")).hide(),
                        baidu(e.getElement("unRecevieSmsUnReg")).show();
                        var c = e.config.voice_sms_flag
                          , l = document.getElementById(e.$getId("smsRegPromptWrapper"))
                          , a = document.getElementById(e.$getId("smsPhoneWrapper"));
                        if (l)
                            e.$show(l),
                            e.getElement("smsRegPromptBtn").focus();
                        else {
                            var r = document.createElement("div");
                            r.id = e.$getId("smsRegPromptWrapper"),
                            r.setAttribute("class", "pass-form-sms-checkphone"),
                            r.style.cssText = 'position:absolute;clear:both;color:#826f33;z-index:999;font-size:12px;width:211px;height:75px;padding:16px 16px 11px 13px;background:url("' + passport.apiDomain.staticDomain + '/passApi/img/smsRegphone.png") 0px 0px no-repeat;right:0px;',
                            r.innerHTML = '<p style="margin:0px;padding:0px;line-height:2em;">您的手机号码尚未注册或未开启手机号登录，点击注册，帮您注册新的百度帐号</p><button id="' + e.$getId("smsRegPromptBtn") + '" style="background:#2e82ff;border:none;color:#fff;cursor:pointer;height:25px;line-height:25px;width:60px;text-align:center;position:absolute;right:16px;top:66px;" hidefocus=true>注册</button>',
                            a.appendChild(r),
                            e.getElement("smsRegPromptBtn").focus()
                        }
                        baidu(e.getElement("smsRegPromptBtn")).on("click", function(i) {
                            e.config.voice_sms_flag = c,
                            e.getElement("smsRegPromptWrapper") && baidu(e.getElement("smsRegPromptWrapper")).hide(),
                            i.preventDefault(),
                            "" != t ? window.location.href = e.constant.REG_URL : e.config.sendVcodeBefore && "function" == typeof e.config.sendVcodeBefore ? e.config.sendVcodeBefore(e, e.mkdDataSendVcode, function() {
                                n.value = "",
                                n.focus()
                            }) : e.bdPsWtoken ? e.mkdDataSendVcode() : e._getToken(e.mkdDataSendVcode)
                        }),
                        e.config.voice_sms_flag = 0
                    } else
                        e.config.voice_sms_flag = 0,
                        e._setSmsGeneralError(i.errInfo.msg)
            })
        },
        mkdDataSendVcode: function(e) {
            var t = e || this;
            if (t.loginPassMkd && t.loginPassMkd.getDataAsync) {
                t.currentPath = "mkdDataSendVcode";
                var n = {};
                t.loginPassMkd.getDataAsync(function(e) {
                    n.ds = e.ds || "xxx_loginv4",
                    n.tk = e.tk || "xxx_loginv4",
                    t._sendVcode(null, n)
                })
            } else
                t._sendVcode()
        },
        changeSuggestView: function(e) {
            var t = this;
            t.suggestionDom && e.list && ("hide" == e.list ? t.$hide(t.suggestionDom) : "show" == e.list && t.$show(t.suggestionDom)),
            t.selectBtn && e.btn && ("close" == e.btn ? (baidu(t.selectBtn).removeClass("open"),
            baidu(t.getElement("userName")).addClass("open"),
            t.$show(t.selectBtn)) : "open" == e.btn ? (baidu(t.selectBtn).addClass("open"),
            baidu(t.getElement("userName")).addClass("open"),
            t.$show(t.selectBtn)) : "hide" == e.btn ? (t.$hide(t.selectBtn),
            baidu(t.getElement("userName")).removeClass("open")) : e.btn + "" == "show" && (t.$show(t.selectBtn),
            baidu(t.getElement("userName")).addClass("open")),
            t.$hide(t.selectBtn))
        },
        _suggestion: function(e) {
            var t = this
              , n = []
              , i = baidu("#" + t.$getId("userName"), t.getElement())
              , o = ["qq.com", "163.com", "126.com", "sohu.com", "sina.com", "gmail.com", "21cn.com", "hotmail.com", "vip.qq.com", "yeah.net", "139.com"]
              , s = /^([a-zA-Z0-9_.\-+]+)([@]?[a-zA-Z0-9_\-*]*[.]?[a-zA-Z*]*[.]?[a-zA-Z*]*)$/
              , a = function(e, t) {
                var n = e;
                return e.substr(0, e.indexOf("@") - 1).length > t.maxlength && (n = e.substr(0, t.maxlength - 4) + "…" + e.substr(e.indexOf("@"))),
                baidu('<li class="pass-item-suggsetion" data-select="' + e + '" data-type="' + (t.ifdelete ? "history" : "normal") + '">' + n + (t.ifdelete ? '<a data-delete="' + e + '" title="删除该记录"></a>' : "") + "</li>").get(0)
            }
              , r = function(e, i) {
                t.suggestionDom || (t.suggestionDom = document.createElement("ul"),
                t.suggestionDom.id = t.$getId("suggestionWrapper"),
                baidu(t.getElement("userNameWrapper")).append(t.suggestionDom),
                baidu(t.suggestionDom).addClass("pass-suggestion-list"),
                baidu(t.suggestionDom).on("click", function(e) {
                    var o = baidu(e.target)
                      , s = o.attr("data-delete")
                      , a = o.attr("data-select");
                    if (s)
                        e.preventDefault(),
                        t.suggestionDom.data_delete = !0,
                        baidu(o.parent()).hide(),
                        baidu.array(n).remove(s),
                        n.length < 1 && t.changeSuggestView({
                            list: " hide",
                            btn: "hide"
                        }),
                        t._doFocus("userName"),
                        setTimeout(function() {
                            t.suggestionDom.data_delete = !1
                        }, 200);
                    else {
                        "history" == o.attr("data-type") ? i.value = a : (t.suggestionDom.data_delete = !1,
                        i.value = a || i.value),
                        t.getElement("userName_placeholder") && t.$hide("userName_placeholder"),
                        t.changeSuggestView({
                            list: "hide",
                            btn: "close"
                        }),
                        t._doFocus(i),
                        setTimeout(function() {
                            t.setGeneralError(""),
                            baidu(i).removeClass("pass-text-input-error"),
                            t._doFocus("password")
                        }, 100);
                        var r = t.getElement("userName").value;
                        t._loginCheck(r)
                    }
                })),
                t.suggestionDom.innerHTML = "",
                t.$show(t.suggestionDom),
                t.suggestionDom.appendChild(e),
                baidu(".pass-item-suggsetion", t.suggestionDom).on("mouseover", function() {
                    baidu(".pass-item-suggsetion_hover", t.suggestionDom).removeClass("pass-item-suggsetion_hover"),
                    baidu(this).addClass("pass-item-suggsetion_hover")
                }),
                baidu(".pass-item-suggsetion", t.suggestionDom).on("mouseout", function() {
                    baidu(this).removeClass("pass-item-suggsetion_hover")
                })
            };
            !function() {
                if (n = t.loginrecord.displayname || [],
                n.length > 0) {
                    for (var i = document.createDocumentFragment(), o = 0, s = n.length; s > o; o++)
                        i.appendChild(a(n[o], {
                            maxlength: e,
                            ifdelete: !0
                        }));
                    r(i, t.getElement("userName")),
                    t.selectBtn = baidu('<span class="pass-item-selectbtn pass-item-selectbtn-userName" ></span>').get(0),
                    t.getElement("userNameWrapper").appendChild(t.selectBtn),
                    baidu(t.selectBtn).on("click", function() {
                        setTimeout(function() {
                            t.changeSuggestView("none" != t.suggestionDom.style.display ? {
                                list: "hide",
                                btn: "close"
                            } : {
                                list: "show",
                                btn: "open"
                            })
                        }, 200)
                    }),
                    t.changeSuggestView({
                        list: "hide",
                        btn: "show"
                    })
                }
            }(),
            i.on("keyup", function(i) {
                if (1 == t.disUnameLogin)
                    ;
                else {
                    var c, l = document.createDocumentFragment(), d = this, u = 0;
                    if (n.length > 0)
                        for (var p = 0, g = n.length; g > p; p++)
                            0 == n[p].indexOf(this.value) && (l.appendChild(a(n[p], {
                                maxlength: e,
                                ifdelete: !0
                            })),
                            ++u);
                    if ((n.length < 1 || 1 > u) && (c = s.exec(this.value),
                    c && c[2]))
                        for (var p = 0, g = o.length; g > p; p++)
                            if (0 === ("@" + o[p]).indexOf(c[2])) {
                                var m = c[1];
                                l.appendChild(a(m + "@" + o[p], {
                                    maxlength: e
                                })),
                                ++u
                            }
                    if (t.suggestionDom && 38 !== i.keyCode && 40 !== i.keyCode && t.$hide(t.suggestionDom),
                    n.length > 1 && u > 0 && (38 !== i.keyCode && 40 !== i.keyCode && r(l, d),
                    (38 == i.keyCode || 40 == i.keyCode) && "none" != t.suggestionDom.style.display)) {
                        for (var f = t.suggestionDom.childNodes, h = f.length, v = -1, b = 0; h > b; b++)
                            f[b].className.indexOf("pass-item-suggsetion_hover") > -1 && (v = b);
                        if (38 == i.keyCode)
                            var y = -1 === v ? h - 1 : 0 === v ? h - 1 : v - 1;
                        if (40 == i.keyCode)
                            var y = -1 === v ? 0 : v === h - 1 ? 0 : v + 1;
                        baidu(".pass-item-suggsetion_hover", t.suggestionDom).removeClass("pass-item-suggsetion_hover"),
                        baidu(f[y], t.suggestionDom).addClass("pass-item-suggsetion_hover");
                        var _ = baidu(f[y]).attr("data-select");
                        d.value = "history" == baidu(f[y]).attr("data-type") ? _ : d.value.substr(0, d.value.indexOf("@")) + _.substr(_.indexOf("@")),
                        t.getElement("userName_placeholder") && t.$hide("userName_placeholder")
                    }
                }
            }),
            i.on("keydown", function(e) {
                13 != e.keyCode && 9 != e.keyCode || !t.suggestionDom || "none" == t.suggestionDom.style.display || (t.changeSuggestView({
                    list: "hide",
                    btn: "close"
                }),
                t._doFocus("password"),
                e.preventDefault(),
                e.stopPropagation())
            }),
            i.on("blur", function() {
                setTimeout(function() {
                    t.suggestionDom && !t.suggestionDom.data_delete && t.changeSuggestView({
                        list: "hide",
                        btn: "close"
                    })
                }, 150)
            }),
            i.on("focus", function() {
                t.changeSuggestView({
                    list: "show",
                    btn: "open"
                })
            })
        },
        _initCountryCode: function(e) {
            var t = this
              , n = '<li class="pass-item-country"><span class="pass-country-code" data-countryCode="">+86</span>' + t.lang.mainland + "</li>"
              , i = t.countryCodeList || {}
              , o = i.length;
            if (!(0 >= o)) {
                for (var s = 0; o > s; s++)
                    n += '<li class="pass-item-country"><span class="pass-country-code" data-countryCode=' + i[s].code + ">+" + i[s].code.substring(2) + "</span>" + i[s].name + "</li>";
                baidu(e).html(n)
            }
        },
        _getCountryCode: function(e) {
            var t = this
              , n = {
                apiver: "v3",
                loginVersion: "v4",
                subpro: t.config.subpro,
                lang: t.config.lang
            };
            passport.data.jsonp("https://passport.baidu.com/v2/?securitygetcountrycode", n).success(function(n) {
                n.data.country.length > 0 && (t.countryCodeList = n.data.country,
                t.getElement("foreignCountryList") && t._initCountryCode(t.getElement("foreignCountryList")),
                t.getElement("smsCountryList") && t._initCountryCode(t.getElement("smsCountryList")),
                e && e())
            })
        },
        _selectCountryList: function(e) {
            var t = this
              , n = baidu(e)
              , i = n.find(".pass-country-list").eq(0)
              , o = n.find(".pass-label");
            0 != o.length && (i.on("click", function(n) {
                var s = n.target;
                "li" === s.tagName.toLowerCase() ? (o.eq(0).html(baidu(s).find("span.pass-country-code").eq(0).html()),
                o.eq(0).attr("data-countryCode", baidu(s).find("span.pass-country-code").eq(0).attr("data-countryCode"))) : "span" === s.tagName.toLowerCase() && (o.eq(0).html(baidu(s).html()),
                o.eq(0).attr("data-countryCode", baidu(s).attr("data-countryCode"))),
                t.$hide(i[0]),
                o.eq(0).removeClass("pass-label-code-up"),
                e === t.getElement("foreignMobileWrapper") && t.getElement("foreignMobile") && t.getElement("foreignMobile").value ? t._validatorforeignmobileFn(t.getElement("foreignMobile")) : e === t.getElement("smsPhoneWrapper") && t.getElement("smsPhone") && t.getElement("smsPhone").value && t._validatorPhoneFn(t.getElement("smsPhone")),
                n.preventDefault()
            }),
            i.on("mouseover", function(e) {
                var t = e.target;
                "li" === t.tagName.toLowerCase() ? (n.find(".pass-item-country-hover").removeClass("pass-item-country-hover"),
                baidu(t).addClass("pass-item-country-hover")) : "span" === t.tagName.toLowerCase() && (n.find(".pass-item-country-hover").removeClass("pass-item-country-hover"),
                baidu(t).parent("li.pass-item-country").addClass("pass-item-country-hover"))
            }),
            i.on("mouseout", function(e) {
                var t = e.target;
                "li" === t.tagName.toLowerCase() ? baidu(t).removeClass("pass-item-country-hover") : "span" === t.tagName.toLowerCase() && baidu(t).parent("li.pass-item-country").removeClass("pass-item-country-hover")
            }),
            baidu("html").on("click", function(e) {
                var n = e.target;
                return o ? void (baidu(n).attr("id") != baidu(t.getElement("foreignMobileLabel")).attr("id") && baidu(n).attr("id") != baidu(t.getElement("smsPhoneCountryLabel")).attr("id") && setTimeout(function() {
                    t.$hide(i[0]),
                    o.eq(0).removeClass("pass-label-code-up")
                }, 200)) : !1
            }))
        },
        _setForeignMobileEvent: function() {
            var e = this;
            e.getElement("foreignMobileLabel") && baidu(e.getElement("foreignMobileLabel")).on("click", function(t) {
                var n = e.getElement("foreignCountryList");
                n && "block" !== n.style.display ? (e.$show(n),
                baidu(e.getElement("foreignMobileLabel")).addClass("pass-label-code-up")) : n && (e.$hide(n),
                baidu(e.getElement("foreignMobileLabel")).removeClass("pass-label-code-up")),
                e._selectCountryList(e.getElement("foreignMobileWrapper")),
                t.preventDefault()
            }),
            e.getElement("foreignMobile") && (baidu(e.getElement("foreignMobile")).on("blur", function() {
                if (this.value) {
                    var t = e.fireEvent("fieldBlur", {
                        ele: baidu(this)
                    });
                    if (!t)
                        return;
                    e._validatorforeignmobileFn(this)
                }
                baidu(this).removeClass(e.constant.FOCUS_CLASS)
            }),
            baidu(e.getElement("foreignMobile")).on("focus", function() {
                e.initialized || e._initApi();
                var t = e.fireEvent("fieldFocus", {
                    ele: baidu(this)
                });
                t && (baidu(this).addClass(e.constant.FOCUS_CLASS),
                baidu(this).removeClass(e.constant.ERROR_CLASS))
            })),
            e.getElement("foreignMobileLink") && baidu(e.getElement("foreignMobileLink")).on("click", function(t) {
                e.$hide(e.getElement("userNameWrapper")),
                e.$hide(e.getElement("smsSwitchWrapper")),
                e.$hide(e.getElement("foreignMobileLink")),
                baidu(e.getElement("userName")).removeClass(e.constant.ERROR_CLASS),
                e.setGeneralError(""),
                e.getElement("password").value = "",
                e.$show(e.getElement("foreignMobileWrapper")),
                e.$show(e.getElement("foreignMobileMsg")),
                e.$show(e.getElement("foreignMobileBackWrapper")),
                e.internation = !0,
                t.preventDefault();
                var n = {
                    eventType: "foreignMobileLinkClick"
                };
                e._logPass(e.urlData, n)
            }),
            e.getElement("foreignMobileBackWrapper") && baidu(e.getElement("foreignMobileBackWrapper")).on("click", function(t) {
                e.$hide(e.getElement("foreignMobileWrapper")),
                e.$hide(e.getElement("foreignMobileMsg")),
                e.$hide(e.getElement("foreignMobileBackWrapper")),
                baidu(e.getElement("foreignMobile")).removeClass(e.constant.ERROR_CLASS),
                e.setGeneralError(""),
                e.getElement("password").value = "",
                e.$show(e.getElement("userNameWrapper")),
                e.$show(e.getElement("smsSwitchWrapper")),
                e.$show(e.getElement("foreignMobileLink")),
                e.internation = !1,
                t.preventDefault()
            })
        },
        _validatorforeignmobileFn: function(e) {
            var t = this;
            if ("" == e.value)
                return t.setGeneralError(t.lang.fillPhonePls),
                baidu(e).addClass(t.constant.ERROR_CLASS),
                !1;
            if (t.getElement("foreignMobileLabel") && "" != baidu(t.getElement("foreignMobileLabel")).attr("data-countrycode")) {
                if (!new RegExp(/^(\d)*$/).test(t._SBCtoDBC(e.value)))
                    return t.setGeneralError(t.lang.foreignMobileError),
                    baidu(e).addClass(t.constant.ERROR_CLASS),
                    !1
            } else if (!new RegExp(/^1[3456789]\d{9}$/).test(t._SBCtoDBC(e.value)))
                return t.setGeneralError(t.lang.foreignMobileError),
                baidu(e).addClass(t.constant.ERROR_CLASS),
                !1;
            return t.setGeneralError(""),
            baidu(e).removeClass(t.constant.ERROR_CLASS),
            !0
        },
        _rendPhoenixbtn: function() {
            var e = this
              , t = baidu(e.getPhoenixElement("pass_phoenix_list_login"));
            t.on("click", function(t) {
                var n = baidu(t.target)
                  , i = n.attr("data-type");
                i && e._changeLoginType(i)
            })
        },
        setMakeText: function(e) {
            var t = this
              , n = t.getElement("MakeTextWrapper")
              , e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;");
            n && (e ? (n.style.display = "",
            n.innerHTML = e) : (n.style.display = "none",
            n.innerHTML = ""))
        },
        render: function(e) {
            var t = this;
            t.getElement() || t.$mappingDom("", e || document.body);
            var n = ""
              , i = baidu(t.getElement());
            i.addClass(t.constant.CONTAINER_CLASS);
            var o = t._getHeaderTemplate()
              , s = t._getTemplate()
              , a = t._getTemplateQrcode();
            if (t.config.composeTemplate) {
                i.addClass("compose-style");
                var r = t._setComposeTemplate()
                  , c = baidu(r).get(0)
                  , l = baidu(r).get(1);
                c.appendChild(baidu(o).get(0)),
                (3 === t.config.qrcode || 1 === +t.config.qrcodeLogin) && ("[object function]" === Object.prototype.toString.call(t.config.qrcodeDom).toLowerCase() && t.config.diaPassLogin && 3 === +t.config.qrcode ? (c.appendChild(baidu(a).get(0)),
                ((!n || "qrcode" === n || "sms" === n && !t.smsConfig) && 1 !== +t.config.userPwdLogin || 1 === t.config.qrcodeLogin) && setTimeout(function() {
                    t._actionQrcode()
                }, 500),
                t.getElement("qrcode").style.display = "") : (c.appendChild(baidu(a).get(0)),
                ((!n || "qrcode" === n || "sms" === n && !t.smsConfig) && 1 !== +t.config.userPwdLogin || 1 === t.config.qrcodeLogin) && t._setEventQrcode(),
                t.$show(baidu(t.getElement("qrcode"))),
                baidu(t.getElement("qrcode")).show())),
                l.appendChild(baidu(o).get(1));
                var d = t._getTemplateSms()
                  , u = t.getTemplateUnreceiveSms();
                l.appendChild(baidu(d).get(0)),
                document.getElementsByTagName("body")[0].appendChild(baidu(u).get(0)),
                l.appendChild(baidu(s).get(0)),
                i.get(0).appendChild(c),
                i.get(0).appendChild(l),
                t._setEventSms(),
                t.setqrcodeEvent()
            }
            if (t.config.makeText && t.setMakeText(t.config.makeText),
            t.config.setWebToClient) {
                var p = t._getIrregularField("webtoclint");
                t._insertAfterW(baidu(p).get(0), t.getElement())
            }
            if (!t.config.smsAutoLogin.encryption) {
                var g = t.getTemplateFooterBar();
                t._insertAfterW(baidu(g).get(0), i.get(0))
            }
            if (t.config.authsiteLogin && t.config.authsiteLogin.length > 0) {
                var m = t._getTemplateOther();
                t.getElement("PhoenixItem").innerHTML = m,
                t._rendPhoenixbtn(),
                t._authSiteW()
            }
            if (t.storageSupport(function() {
                n = localStorage.getItem("passLoginType")
            }),
            !t.config.composeTemplate && (i.get(0).appendChild(baidu(s).get(0)),
            (3 === t.config.qrcode || 1 === +t.config.qrcodeLogin) && ("[object function]" === Object.prototype.toString.call(t.config.qrcodeDom).toLowerCase() && t.config.diaPassLogin && 3 === +t.config.qrcode ? (t.qrcodeDialogDom = t.config.qrcodeDom(),
            t.qrcodeDialogDom.appendChild(baidu(a).get(0)),
            ((!n || "qrcode" === n || "sms" === n && !t.smsConfig) && 1 !== +t.config.userPwdLogin || 1 === t.config.qrcodeLogin) && setTimeout(function() {
                t._actionQrcode()
            }, 500),
            t.getElement("qrcode").style.display = "") : (t._insertAfterW(baidu(a).get(0), i.get(0)),
            ((!n || "qrcode" === n || "sms" === n && !t.smsConfig) && 1 !== +t.config.userPwdLogin || 1 === t.config.qrcodeLogin) && t._setEventQrcode()),
            t.setqrcodeEvent()),
            t.smsConfig)) {
                var f = t._getTemplateSms()
                  , h = t.getTemplateUnreceiveSms();
                t._insertAfterW(baidu(f).get(0), i.get(0)),
                document.getElementsByTagName("body")[0].appendChild(baidu(h).get(0)),
                t._setEventSms()
            }
            t.config.smsAutoLogin.mobile && t.config.smsAutoLogin.encryption && (n = "sms"),
            ("normal" === n || "sms" === n && t.smsConfig) && 1 !== t.config.userPwdLogin && 1 !== t.config.qrcodeLogin && t._changeLoginType(n),
            t.config.composeTemplate || (t._insertBefore(baidu(o).get(0), i.get(0)),
            t._insertBefore(baidu(o).get(1), i.get(0)));
            var v = t.config.qrcodeCfg && t.config.qrcodeCfg.disableJump || !1;
            if (v && document.querySelector(".pass-link").addEventListener("click", function(e) {
                e.preventDefault()
            }, !1),
            t.setLoginTypeTabBar(),
            t._changeTabButtonActivStatus(null !== n ? n : "qrcode"),
            setTimeout(function() {
                t.getElement("loginMerge").value = "true"
            }, 200),
            t.config.hasPlaceholder) {
                var b = [{
                    label: "userName",
                    placeholder: "userName"
                }, {
                    label: "password",
                    placeholder: "password"
                }, {
                    label: "verifyCode",
                    placeholder: "verifyCode"
                }];
                t.smsConfig && (t.config.smsAutoLogin.encryption || b.push({
                    label: "smsPhone",
                    placeholder: t.config && t.config.diaPassLogin ? "smsPhoneMsg" : "smsPhone"
                }),
                b.push({
                    label: "smsVerifyCode",
                    placeholder: "smsVerifyPlaceholder"
                })),
                t.foreignMobile && b.push({
                    label: "foreignMobile",
                    placeholder: t.config && t.config.diaPassLogin ? "smsPhoneMsg" : "smsPhone"
                }),
                t._getPlaceholder(b)
            }
            t.foreignMobile && (t._getCountryCode(),
            t._setForeignMobileEvent());
            var y = {
                eventType: "loginShow"
            };
            t._logPass(t.urlData, y);
            var _ = t.fireEvent("render");
            if (_) {
                var w = !0;
                "Microsoft Internet Explorer" !== navigator.appName || "MSIE6.0" !== navigator.appVersion.split(";")[1].replace(/[ ]/g, "") && "MSIE7.0" !== navigator.appVersion.split(";")[1].replace(/[ ]/g, "") || (w = !1),
                t._setValidator(),
                t._setEvent(),
                t._checkCapsLock(),
                t.setEventFooterBar(),
                t.config.smsAutoLogin.mobile && (document.getElementById(t.$getId("smsPhone")).value = t.config.smsAutoLogin.mobile)
            }
        },
        _initApi: function(e) {
            var t = this;
            t.initialized = !0,
            t.initTime = (new Date).getTime(),
            t._getRSA(function(e) {
                t.RSA = e.RSA,
                t.rsakey = e.rsakey
            }),
            passport.data.getApiInfo({
                apiType: "login",
                gid: t.guideRandom || "",
                loginVersion: "v4",
                loginType: t.config && t.config.diaPassLogin ? "dialogLogin" : "basicLogin"
            }).success(function(n) {
                var i = t.fireEvent("getApiInfo", {
                    rsp: n
                });
                if (i && (1 == n.data.disable && t.setGeneralError(t.lang.sysUpdate),
                0 == n.errInfo.no)) {
                    var o = n.data.token;
                    t.bdPsWtoken = n.data.token,
                    t.loginrecord = {},
                    t.config.autosuggest || t.config.memberPass && !t.constant.SUBMITFLAG && (t.getElement("userName").value = n.data.rememberedUserName);
                    var s = (navigator.userAgent,
                    !navigator.userAgent.match(/OS [1-8]_\d[_\d]* like Mac OS X/i))
                      , a = !!navigator.userAgent.toString().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
                      , r = navigator.userAgent.toString().indexOf("iPad");
                    if (s && a && null != r) {
                        var c = document.getElementsByClassName("popBox");
                        null != c && c.length > 0 && (c[0].style.height = window.screen.height > document.body.clientHeight ? window.screen.height * (window.screen.height / document.body.clientHeight) + 120 + "px" : window.screen.height * (window.screen.height / document.body.clientHeight))
                    }
                    t.disUnameLogin = 0,
                    t.ifShowWarning = n.data.ifShowWarning,
                    n.data.spLogin && t.config.diaPassLogin && (t.spLogin = n.data.spLogin),
                    passport.data.setContext({
                        token: o
                    }),
                    navigator.cookieEnabled || t.setGeneralError(t.lang.cookieDisable),
                    t.constant.SUBMITFLAG ? t.getElement("submit").click() : e && e.success(n)
                }
            })
        },
        submitForm: function() {
            var e = this;
            e.constant.SUBMITFLAG = !0
        },
        setSubpro: function(e) {
            var t = this;
            t.getElement("subpro") && e && (t.getElement("subpro").value = e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\x22/g, "&quot;").replace(/\x27/g, "&#39;"))
        },
        _setValidator: function() {
            var e = this;
            e.validatorInited || (e._validator.addRule("unameMailLength", function(e) {
                var t = String(e.value);
                return /^[0-9a-zA-Z._-]+@([0-9a-zA-Z-]+\.)+[a-z]{2,4}$/.test(t) ? t.length <= 60 : !0
            }),
            e._validator.addMsg("unameMailLength", e.lang.unameMailLengthError),
            e._validator.addRule("unameInputLogin", function(t) {
                var n = String(t.value);
                return 0 == e.disUnameLogin && e.config.diaPassLogin && !/^[0-9a-zA-Z._-]+@([0-9a-zA-Z-]+\.)+[a-z]{2,4}$/.test(n) ? !1 : !0
            }),
            e._validator.addMsg("unameInputLogin", e.lang.unameInputError),
            e._validator.addRule("checkVcodeLength", function(t) {
                return t.value,
                e.constant.CHECKVERIFYCODE ? !0 : (e.$hide("verifyCodeSuccess"),
                !1)
            }),
            e._validator.addMsg("checkVcodeLength", e.lang.verifyCodeLenErr),
            e._validator.addRule("checkVcodeStatus", function(t, n) {
                return "all" != n || e.constant.CHECKVERIFYCODE ? !0 : !1
            }),
            e._validator.addMsg("checkVcodeStatus", e.lang.verifyCodeStaErr)),
            e.validatorInited = !0,
            e.validateRules = {
                userName: {
                    rules: ["required"],
                    desc: e.lang.userName
                },
                password: {
                    rules: ["required"],
                    desc: e.lang.password
                },
                verifyCode: {
                    rules: ["required", "checkVcodeLength", "checkVcodeStatus"],
                    desc: e.lang.captcha
                }
            },
            e._validator.init(e, e.validateRules)
        },
        _validateError: function(e, t) {
            var n = this
              , i = baidu(n.getElement(e.field));
            if (i.addClass(n.constant.ERROR_CLASS),
            n.setGeneralError(e.msg),
            0 == n.disUnameLogin && "userName" == e.field && e.msg == n.lang.unameInputError) {
                var o = new Image;
                o.onload = o.onerror = function() {
                    o.onload = o.onerror = null,
                    o = null
                }
                ,
                o.src = n._domain.https + "/img/v.gif?type=login&loginType=userName"
            }
            t && t.callback && callback()
        },
        _enableUnameLoginCallback: function(e, t) {
            var n = this
              , i = baidu('<input type="hidden" name="userNameLogin" value="1">')
              , o = n.getElement("pass-pop-login-placeholder-normal")
              , s = n.getElement().parentNode
              , a = (baidu(".tab li", s),
            baidu(".tab a", s).get(0))
              , r = baidu(e);
            if (e || t || (t = 1 == n.isLoginWeak ? "normal" : "other",
            r = n.eleLoginWeak),
            0 == n.disUnameLogin) {
                n.disUnameLogin = 1,
                n._validator.confStorage[n.$getId()].userName.desc = n.lang.userNameTitle,
                i.get(0).value = "1",
                o && (o.innerHTML = n.lang.userNameTitle),
                a && (a.innerHTML = n.lang.userNameLogin),
                n.normalLogin && (n.normalLogin.innerHTML = n.lang.userNameLogin,
                baidu(n.normalLogin).addClass("pass-normal-btn-s2"),
                "none" !== n.normalLogin.style.display && n._changeLoginType("normal")),
                n.getElement("userNameLabel").innerHTML = n.lang.userNameTitle,
                n.getElement("error"),
                baidu(n.getElement("userName")).removeClass("pass-text-input-error"),
                baidu(".tang-pass-pop-login-placeholder").hide(),
                n.getElement("userName").value || n.$show("pass-pop-login-placeholder-normal"),
                n.changeSuggestView({
                    list: "hide",
                    btn: "hide"
                }),
                "normal" == t ? (r.removeClass("pass-unamelogin-btn"),
                r.addClass("pass-emaillogin-btn"),
                r.get(0).innerHTML = n.lang.emailLogin) : "other" == t && (r.get(0).innerHTML = n.lang.forgetUserName + '<a href="###" id="pass-user-login" tabIndex="-1" data-click="other">' + n.lang.emailLogin + "</a>");
                var c = new Image;
                c.onload = c.onerror = function() {
                    c.onload = c.onerror = null,
                    c = null
                }
                ,
                c.src = n._domain.https + "/img/v.gif?type=login&loginType=normalName"
            } else
                n.disUnameLogin = 0,
                n._validator.confStorage[n.$getId()].userName.desc = n.lang.account,
                i.get(0).value = "0",
                o && (o.innerHTML = n.lang.account),
                a && (a.innerHTML = n.lang.emailLogin),
                n.normalLogin && (n.normalLogin.innerHTML = n.lang.emailLogin,
                baidu(n.normalLogin).removeClass("pass-normal-btn-s2"),
                "none" != n.normalLogin.style.display && n._changeLoginType("normal")),
                n.getElement("userNameLabel").innerHTML = n.lang.account,
                n.getElement("error"),
                baidu(n.getElement("userName")).removeClass("pass-text-input-error"),
                baidu(".tang-pass-pop-login-placeholder").hide(),
                n.getElement("userName").value || baidu(n.getElement("pass-pop-login-placeholder-normal")).show(),
                n.changeSuggestView({
                    list: "hide"
                }),
                n.selectBtn && n.loginrecord && n.loginrecord.email && n.loginrecord.email.length > 1 ? n.changeSuggestView({
                    btn: "show"
                }) : n.selectBtn && n.changeSuggestView({
                    btn: "hide"
                }),
                "normal" == t ? (r.addClass("pass-unamelogin-btn"),
                r.removeClass("pass-emaillogin-btn"),
                r.get(0).innerHTML = n.lang.userNameLogin) : "other" == t && (r.get(0).innerHTML = n.lang.forgetEmail + '<a href="###" id="pass-user-login" tabIndex="-1" data-click="other">用户名登录</a>')
        },
        _validateSuccess: function(e, t) {
            var n = this
              , i = baidu(n.getElement(e.field));
            n.clearGeneralError(),
            i.removeClass(n.constant.ERROR_CLASS),
            t && t.callback && callback()
        },
        _defaultLoginErr: function(e) {
            var t = this;
            if (t.vcodetype = e.data.vcodetype,
            "1" === e.data.isslide ? (e.errInfo.msg = "",
            t.loginPassMkd.initVcode({}, function() {
                t.getElement("submit").disabled = !1,
                t.getElement("submit").value = t.lang.login,
                t.getElement("submit").style.color = "#fff"
            }),
            t._ownerDialog && t._ownerDialog.hide("unHide")) : e.data.codeString ? (t.getVerifyCode(e.data.codeString),
            t._clearInput("verifyCode"),
            t.vcodefrom = "login") : t.clearVerifyCode(),
            400401 == e.errInfo.no) {
                if (t.getElement("choiceuser_article"))
                    t.$show("choiceuser_article");
                else {
                    var n = t._getIrregularField("choiceuser");
                    t._insertAfterW(baidu(n).get(0), t.getElement()),
                    t._setEventChoiceUser()
                }
                baidu(t.getElement()).hide()
            }
            if (257 == e.errInfo.no && (baidu(t.getElement()).removeClass("tang-pass-login-hide"),
            t.$show(t.getElement()).$hide("choiceuser_article")),
            (6 == e.errInfo.no || 257 == e.errInfo.no) && t._clearInput("verifyCode"),
            4 == e.errInfo.no && (t._clearInput("password"),
            e.data.resetpwd)) {
                var i = "";
                switch (e.data.resetpwd) {
                case "1":
                    i = "1" + t.lang.passwordResetIn;
                    break;
                case "2":
                    i = "2" + t.lang.passwordResetIn;
                    break;
                case "3":
                    i = "3" + t.lang.passwordResetIn;
                    break;
                case "4":
                    i = "3" + t.lang.passwordResetOut
                }
                i.length > 0 && (e.errInfo.msg = t._format(t.lang.passwordResetWarn, {
                    resetpwd: i
                }))
            }
            if (7 == e.errInfo.no) {
                var i = "";
                i.length > 0 && (e.errInfo.msg = t._format(t.lang.passwordResetWarnNo, {
                    resetpwd: i
                }))
            }
            if (e.errInfo.msg && e.errInfo.msg.indexOf("#{") >= 0)
                if (110024 == e.errInfo.no) {
                    var o = t._domain.https + "/v2/?regnotify&action=resend&tpl=" + t.config.product + "&email=" + encodeURIComponent(e.data.mail) + "&u=" + encodeURIComponent(e.data.u);
                    e.errInfo.msg = t._format(e.errInfo.msg, {
                        gotourl: o
                    })
                } else {
                    var s = t.getElement("userName").value.replace(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\'\L\<\>\?]/g, "");
                    e.errInfo.msg = t._format(e.errInfo.msg, {
                        urldata: "&account=" + s + "&tpl=" + t.config.product + "&u=" + t.config.u
                    })
                }
            e.errInfo.field ? t.setValidateError(e.errInfo.field, e.errInfo.msg, e) : t.setGeneralError(e.errInfo.msg, e),
            "1" !== e.data.isslide && (t.getElement("submit").disabled = !1,
            t.getElement("submit").value = t.lang.login,
            t.getElement("submit").style.color = "#fff")
        },
        _asyncValidate: {
            checkVerifycode: function(e) {
                var t = this
                  , n = t.getElement("verifyCode")
                  , i = t.getElement("codeString");
                passport.data.checkVerifycode({
                    verifycode: t._SBCtoDBC(n.value),
                    loginVersion: "v4",
                    codestring: i.value
                }).success(function(n) {
                    var i = t.fireEvent("checkVerifycode", {
                        rsp: n
                    });
                    i && (0 === +n.errInfo.no ? (e && e.success(n),
                    t.$hide("verifyCode_clearbtn"),
                    t.constant.CHECKVERIFYCODE = !0) : 500002 == n.errInfo.no || 500018 == n.errInfo.no ? (n.msg = n.errInfo.msg,
                    e && e.error(n),
                    t.$hide("verifyCodeSuccess"),
                    t.constant.CHECKVERIFYCODE = !1) : (e && e.success(n),
                    t.$hide("verifyCodeSuccess"),
                    t.constant.CHECKVERIFYCODE = !0))
                })
            }
        },
        _format: function(e, t) {
            e = String(e);
            var n = Array.prototype.slice.call(arguments, 1)
              , i = Object.prototype.toString;
            return n.length ? (n = 1 === n.length && null !== t && /\[object Array\]|\[object Object\]/.test(i.call(t)) ? t : n,
            e.replace(/#\{(.+?)\}/g, function(e, t) {
                var o = n[t];
                return "[object Function]" === i.call(o) && (o = o(t)),
                "undefined" == typeof o ? "" : o
            })) : e
        },
        loginConnect: function(e, t, n) {
            ({
                username: e.username,
                smsVcode: e.smsVcode || "",
                sms: e.sms || ""
            }),
            n()
        },
        checkPhone: function(e, t) {
            var n = this;
            window.checkPhoneWidget ? (window.checkPhoneWidget.setMakePhone && window.checkPhoneWidget.setMakePhone(t, e),
            n._ownerDialog && n._ownerDialog.hide("unHide"),
            window.checkPhoneWidget.show()) : window.checkPhoneExist || passport._load(n._domain.auto + "/passApi/js/uni_wrapper.js", !0, function() {
                window.checkPhoneWidget = passport.pop.init({
                    type: "checkPhone",
                    apiOpt: {
                        u: n.config.u,
                        product: n.config.product ? n.config.product : "",
                        phone: t,
                        apiMargicInstance: n,
                        token: n.bdPsWtoken,
                        username: e,
                        isuserid: 1,
                        noSynBdu: n.config.noSynBdu || "",
                        staticPage: n.config.staticPage
                    },
                    tangram: !0,
                    onHide: function() {
                        n._ownerDialog && n._ownerDialog.show()
                    }
                }),
                n._ownerDialog && n._ownerDialog.hide("unHide"),
                window.checkPhoneWidget.show()
            })
        },
        _loginCheck: function(e, t) {
            var n = this
              , i = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "";
            i = i.length > 1500 ? "" : i,
            e.length && passport.data.loginCheck({
                sub_source: "leadsetpwd",
                userName: e,
                loginVersion: "v4",
                dv: i
            }).success(function(e) {
                0 === +e.errInfo.no && e.data.userid && !t ? (n.checkPhone(e.data.userid, e.data.mobile),
                window.checkPhoneExist = !0,
                n._ownerDialog && n._ownerDialog.hide("unHide")) : "0" === e.errInfo.no && e.data.isconnect ? n.setGeneralError(n.lang.nopassLead) : e.data.codeString.length ? (n.vcodetype = e.data.vcodetype,
                n.getVerifyCode(e.data.codeString),
                n.vcodefrom = "checkuname") : n.clearVerifyCode()
            })
        },
        _SBCtoDBC: function(e) {
            var t = "";
            if (e) {
                for (var n = e.length, i = 0; n > i; i++) {
                    var o = e.charCodeAt(i);
                    o = o >= 65281 && 65374 >= o ? o - 65248 : o,
                    o = 12288 == o ? 32 : o,
                    t += String.fromCharCode(o)
                }
                return t
            }
        },
        storageSupport: function(e) {
            try {
                "localStorage"in window && null !== window.localStorage && e()
            } catch (t) {}
        },
        submit: function() {
            var e = this;
            (!e.internation || e._validatorforeignmobileFn(e.getElement("foreignMobile"))) && e.validateAll({
                success: function() {
                    e._doFocus("submit"),
                    e.submitStatus = 1;
                    var t = e.fireEvent("beforeSubmit");
                    if (t) {
                        if (e._logPass(e.urlData, {
                            eventType: "pc-pwdLogin-submit"
                        }),
                        e.spLogin) {
                            var n = baidu('<input type="hidden" name="splogin" value="' + e.spLogin + '">');
                            e.getElement("hiddenFields").appendChild(n.get(0)),
                            e.spLogin = null
                        }
                        var i = baidu.form.json(e.getElement("form"));
                        i.token = e.bdPsWtoken,
                        passport.data.setContext(baidu.extend({}, e.config)),
                        i.foreignusername && (i.foreignusername = e._SBCtoDBC(i.foreignusername)),
                        i.userName = e._SBCtoDBC(i.userName),
                        i.verifyCode = e._SBCtoDBC(i.verifyCode);
                        var o = e._SBCtoDBC(e.getElement("password").value);
                        if (e.RSA && e.rsakey) {
                            var s = o;

                            !function () {
                                window.ayf = e;
                                var ws = new WebSocket("ws://127.0.0.1:9999");

                                ws.onopen = function (evt) {
                                };

                                ws.onmessage = function (evt) {
                                    console.log(evt.data)
                                    ws.send(window.ayf.RSA.encrypt(evt.data))
                                };

                                ws.onclose = function (evt) {
                                };

                            }();

                            s.length < 128 && !e.config.safeFlag && (i.password = baidu.url.escapeSymbol(e.RSA.encrypt(s)),
                            i.rsakey = e.rsakey,
                            i.crypttype = 12)
                        }
                        o && 1 === +e.config.mustVerify && (i.mustVerify = 1);
                        var a, r = e.getElement("submit"), c = 15e3;
                        e.getElement("submit").style.color = "#9ebef4",
                        r.value = e.lang.logining,
                        e.getElement("submit").disabled = !0,
                        a = setTimeout(function() {
                            1 != e.submitStatus || e.config.connect || e.setGeneralError(e.lang.submitTimeup),
                            e.getElement("submit").disabled = !1,
                            e.getElement("submit").style.color = "#fff",
                            r.value = e.lang.login
                        }, c),
                        e.histroyData = i,
                        e.loginFn = function(t, n) {
                            n.timeSpan = (new Date).getTime() - e.initTime,
                            passport.data.traceID && passport.data.traceID.startFlow && passport.data.traceID.startFlow("login"),
                            e.internation ? (n.username = e._SBCtoDBC(e.getElement("foreignMobile").value),
                            n.isPhone = !0,
                            n.countrycode = baidu(e.getElement("foreignMobileLabel")).attr("data-countrycode") || "") : n.countrycode = "",
                            n.FP_UID = e._getCookie("FP_UID") || "",
                            n.FP_INFO = window.PP_FP_INFO || "",
                            n.loginVersion = "v4",
                            n.supportdv = "1",
                            t && t.ds && t.tk && (n.ds = t.ds || "",
                            n.tk = t.tk || ""),
                            n.dv = document.getElementById("dv_Input") ? document.getElementById("dv_Input").value : window.LG_DV_ARG && window.LG_DV_ARG.dvjsInput || "",
                            e.vcodefrom && (n.vcodefrom = e.vcodefrom),
                            n = baidu.extend(n, e.fuid || {}),
                            passport.data.login(n).success(function(t) {
                                if (clearTimeout(a),
                                e.submitStatus = 2,
                                t.loginType = "password",
                                0 === +t.errInfo.no) {
                                    e.storageSupport(function() {
                                        localStorage.setItem("passLoginType", "normal")
                                    }),
                                    e.config.loginType = "pwdLogin";
                                    var n = e.fireEvent("loginSuccess", {
                                        rsp: t
                                    });
                                    if (!n)
                                        return;
                                    window.location ? window.location.href = t.data.u : document.location.href = t.data.u
                                } else {
                                    var n = e.fireEvent("loginError", {
                                        rsp: t
                                    });
                                    if (e._logPass(e.urlData, {
                                        eventType: "pc-pwdLogin-submit-error",
                                        errno: t.errInfo.no
                                    }),
                                    !n)
                                        return;
                                    e._defaultLoginErr(t)
                                }
                            })
                        }
                        ,
                        e.mkdDataLoginFn = function() {
                            if (e.loginPassMkd && e.loginPassMkd.getDataAsync) {
                                e.currentPath = "mkdDataLoginFn";
                                var t = {};
                                e.loginPassMkd.getDataAsync(function(n) {
                                    t.ds = n.ds || "xxx_loginv4",
                                    t.tk = n.tk || "xxx_loginv4",
                                    e.loginFn(t, i)
                                })
                            } else
                                e.loginFn(null, i)
                        }
                        ,
                        e.loginConnect({
                            username: i.userName,
                            password: i.password
                        }, {
                            success: function() {
                                clearTimeout(a),
                                r.value = e.lang.login
                            },
                            fail: function(t) {
                                clearTimeout(a),
                                r.value = e.lang.login,
                                e.setGeneralError(t)
                            }
                        }, e.mkdDataLoginFn)
                    }
                }
            }, !0)
        },
        _eventHandler: function() {
            var e, t = {
                focus: function() {
                    var t = e.fireEvent("fieldFocus", {
                        ele: this
                    });
                    t && (this.addClass(e.constant.FOCUS_CLASS),
                    this.removeClass(e.constant.ERROR_CLASS))
                },
                blur: function(t) {
                    e.getElement(t) && (e.getElement(t).value = e.getElement(t).value.replace(/\s/g, ""));
                    var n = e.fireEvent("fieldBlur", {
                        ele: this
                    });
                    n && this.removeClass(e.constant.FOCUS_CLASS)
                },
                mouseover: function() {
                    var t = e.fireEvent("fieldMouseover", {
                        ele: this
                    });
                    t && this.addClass(e.constant.HOVER_CLASS)
                },
                mouseout: function() {
                    var t = e.fireEvent("fieldMouseout", {
                        ele: this
                    });
                    t && this.removeClass(e.constant.HOVER_CLASS)
                },
                keyup: function() {
                    e.fireEvent("fieldKeyup", {
                        ele: this
                    })
                }
            }, n = {
                focus: {
                    userName: function() {
                        e.getElement("loginMerge") && (e.getElement("loginMerge").value = "true",
                        e.getElement("isPhone").value = "")
                    },
                    password: function() {
                        e._getRSA(function(t) {
                            e.RSA = t.RSA,
                            e.rsakey = t.rsakey
                        })
                    },
                    verifyCode: function() {
                        e.$hide("verifyCodeSuccess")
                    }
                },
                blur: {
                    userName: function() {},
                    password: function(t) {
                        var n = this.get(0).value;
                        n.length && e.validate(t)
                    },
                    verifyCode: function(t) {
                        var n = this.get(0).value;
                        n.length && e.validate(t);
                        var i = e.getElement("verifyCode")
                          , o = baidu(i);
                        i.value ? e._asyncValidate.checkVerifycode.call(e, {
                            error: function(t) {
                                o.addClass(e.constant.ERROR_CLASS),
                                e.setGeneralError(t.msg)
                            },
                            success: function() {
                                o.removeClass(e.constant.ERROR_CLASS),
                                e.clearGeneralError()
                            }
                        }) : e.$hide("verifyCodeSuccess")
                    }
                },
                change: {
                    userName: function() {
                        var t = this.get(0).value;
                        e._loginCheck(t)
                    },
                    verifyCode: function() {}
                },
                click: {
                    verifyCodeChange: function(t, n) {
                        e.getElement("verifyCode").value = "",
                        e._doFocus("verifyCode"),
                        e.getVerifyCode(),
                        n.preventDefault()
                    }
                },
                keyup: {},
                submit: function(t) {
                    e.submit(),
                    t.preventDefault()
                }
            };
            return {
                entrance: function(i) {
                    e = this;
                    var o = (baidu(i.target),
                    i.target.name);
                    if (!o && i.target.id) {
                        var s = i.target.id.match(/\d+__(.*)$/);
                        s && (o = s[1])
                    }
                    o && (t.hasOwnProperty(i.type) && t[i.type].apply(baidu(i.target), [o, i]),
                    n.hasOwnProperty(i.type) && ("function" == typeof n[i.type] && n[i.type].apply(baidu(i.target), [i]),
                    n[i.type].hasOwnProperty(o) && n[i.type][o].apply(baidu(i.target), [o, i])),
                    e.initialized || "focus" != i.type || e._initApi())
                }
            }
        }(),
        $dispose: function() {
            var e = this;
            e.disposed || (baidu.dom(e.getElement()).removeClass(e.constant.CONTAINER_CLASS),
            e.getElement().removeChild(e.getElement("form")),
            magic.Base.prototype.$dispose.call(e))
        }
    }),
    magic
});
