!function(window, factory) {
    "undefined" != typeof module && module.exports ? module.exports = factory(window) : "function" == typeof define && define.amd ? define(function() {
        return factory(window)
    }) : window.SohuPassport = factory(window)
}(window, function(window) {
    function SohuPassport(options) {
        this.options = utils.extend({}, defaultOptions, options || {}),
            this._id = "passport" + VERSION.replace(/\D/g, ""),
            this.version = VERSION,
            this.appid = this.options.appid,
        this.options.gidinf && this.options.serialno && (setCookie("gidinf", this.options.gidinf),
            setCookie("srn", this.options.serialno)),
            setCookie("t", nonce),
            this.setCommonCookie()
    }
    var VERSION = "4.0.3"
        , nonce = (new Date).getTime()
        , prefix = "https://v4.passport.sohu.com/i/"
        , defaultOptions = ("https://msapi.t.sohu.com",
        "https://m.passport.sohu.com",
        {
            appid: "",
            url: {
                commonCookie: prefix + "cookie/common",
                challenge: prefix + "jf/code",
                loginByUserId: prefix + "login",
                mobileLogin: prefix + "login/mobile",
                passportLogin: prefix + "login/passport",
                scanCodeLogin: prefix + "login/token",
                ifPictureCaptchaByUserId: prefix + "require/captcha",
                pictureCaptcha: prefix + "captcha/picture",
                signInCaptcha: prefix + "smcode/mobile/signin",
                registerCaptcha: prefix + "smcode/mobile/signup",
                bindPhoneCaptcha: prefix + "smcode/mobile/sblmobile",
                logout: prefix + "logout",
                register: prefix + "register",
                bindPhone: prefix + "login/bind/mobile",
                checkPhone: prefix + "verify/mobile/bind",
                checkUserPhoneBind: prefix + "verify/user/mobile"
            }
        })
        , utils = {
        extend: function() {
            var i, name, options, copy, target = arguments[0] || {}, len = arguments.length;
            for (i = 1; i < len; i++)
                if (null !== (options = arguments[i]))
                    for (name in options)
                        void 0 !== (copy = options[name]) && (target[name] = copy);
            return target
        },
        inArray: function(item, ary) {
            for (var i = 0; i < ary.length; i++)
                if (ary[i] === item)
                    return i;
            return -1
        },
        isString: function(o) {
            return "string" == typeof o
        },
        isFunction: function(o) {
            return "function" == typeof o
        },
        isBool: function(o) {
            return "boolean" == typeof o
        },
        bind: function(func, context) {
            return function() {
                func.apply(context, arguments)
            }
        },
        trim: function(str) {
            return this.isString(str) ? str.replace(/^\s+/, "").replace(/\s+$/, "") : str
        },
        param: function(o) {
            var ary = [];
            for (var key in o)
                ary.push(key + "=" + o[key]);
            return ary.join("&")
        },
        url: function(u, o) {
            return u += (/\?/.test(u) ? "&" : "?") + this.param(o)
        },
        md5: function(args) {
            function hex_md5(s) {
                return binl2hex(core_md5(str2binl(s), s.length * chrsz))
            }
            function core_md5(x, len) {
                x[len >> 5] |= 128 << len % 32,
                    x[14 + (len + 64 >>> 9 << 4)] = len;
                for (var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < x.length; i += 16) {
                    var olda = a
                        , oldb = b
                        , oldc = c
                        , oldd = d;
                    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936),
                        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586),
                        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819),
                        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330),
                        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897),
                        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426),
                        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341),
                        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983),
                        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416),
                        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417),
                        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063),
                        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162),
                        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682),
                        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101),
                        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290),
                        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329),
                        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510),
                        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632),
                        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713),
                        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302),
                        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691),
                        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083),
                        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335),
                        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848),
                        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438),
                        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690),
                        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961),
                        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501),
                        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467),
                        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784),
                        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473),
                        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734),
                        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558),
                        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463),
                        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562),
                        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556),
                        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060),
                        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353),
                        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632),
                        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640),
                        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174),
                        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222),
                        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979),
                        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189),
                        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487),
                        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835),
                        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520),
                        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651),
                        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844),
                        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415),
                        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905),
                        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055),
                        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571),
                        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606),
                        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523),
                        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799),
                        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359),
                        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744),
                        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380),
                        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649),
                        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070),
                        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379),
                        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259),
                        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551),
                        a = safe_add(a, olda),
                        b = safe_add(b, oldb),
                        c = safe_add(c, oldc),
                        d = safe_add(d, oldd)
                }
                return Array(a, b, c, d)
            }
            function md5_cmn(q, a, b, x, s, t) {
                return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
            }
            function md5_ff(a, b, c, d, x, s, t) {
                return md5_cmn(b & c | ~b & d, a, b, x, s, t)
            }
            function md5_gg(a, b, c, d, x, s, t) {
                return md5_cmn(b & d | c & ~d, a, b, x, s, t)
            }
            function md5_hh(a, b, c, d, x, s, t) {
                return md5_cmn(b ^ c ^ d, a, b, x, s, t)
            }
            function md5_ii(a, b, c, d, x, s, t) {
                return md5_cmn(c ^ (b | ~d), a, b, x, s, t)
            }
            function safe_add(x, y) {
                var lsw = (65535 & x) + (65535 & y);
                return (x >> 16) + (y >> 16) + (lsw >> 16) << 16 | 65535 & lsw
            }
            function bit_rol(num, cnt) {
                return num << cnt | num >>> 32 - cnt
            }
            function str2binl(str) {
                for (var bin = Array(), mask = (1 << chrsz) - 1, i = 0; i < str.length * chrsz; i += chrsz)
                    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
                return bin
            }
            function binl2hex(binarray) {
                for (var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", str = "", i = 0; i < 4 * binarray.length; i++)
                    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
                return str
            }
            var hexcase = 0
                , chrsz = 8;
            return hex_md5(args)
        }
    }
    window.ayf = utils;
    var isSohu = /\.sohu.com/.test(location.host)
        , browser = function() {
        var w = window
            , ver = w.opera ? opera.version().replace(/\d$/, "") - 0 : parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.exec(navigator.userAgent) || [, 0])[1]);
        return {
            ie: !!w.VBArray && Math.max(document.documentMode || 0, ver),
            firefox: !!w.netscape && ver,
            opera: !!w.opera && ver,
            chrome: !!w.chrome && ver,
            safari: /apple/i.test(navigator.vendor) && ver
        }
    }()
        , getCookie = function(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
    }
        , setCookie = function(name, value, domain) {
        var exp = new Date;
        exp.setTime(exp.getTime() + 2592e6),
            document.cookie = domain ? name + "=" + escape(value) + ";domain=" + domain + ";path=/;expires=" + exp.toGMTString() : name + "=" + escape(value) + ";domain=sohu.com;path=/;expires=" + exp.toGMTString()
    }
        , pageTokenLogin = nonce + 1
        , pageTokenPhone = nonce + 2
        , pageTokenRegister = nonce + 3;
    return SohuPassport.prototype = {
        randomName: function(prefix) {
            return this._id + "_" + prefix + nonce++
        },
        createIFrame: function(name) {
            name = name || this.randomName("passportIframe");
            var ifa;
            return browser.ie && browser.ie < 9 ? ifa = document.createElement('<iframe src="about:blank" name="' + name + '"></iframe>') : (ifa = document.createElement("iframe"),
                ifa.setAttribute("name", name)),
                ifa.style.display = "none",
                document.body.appendChild(ifa),
                ifa
        },
        createForm: function(formData) {
            var hidden, name, value, form = document.createElement("form");
            for (name in formData)
                value = formData[name],
                    hidden = document.createElement("input"),
                    hidden.type = "hidden",
                    hidden.name = name,
                    hidden.value = value,
                    form.appendChild(hidden);
            return form.style.display = "none",
                document.body.appendChild(form),
                form
        },
        formData: function(args, type) {
            var data = {};
            for (var param in args)
                args[param] && ("password" === param ? data.password = utils.trim(args.password) : data[param] = utils.trim(args[param]));
            return data
        },
        getJSONP: function(url, callback, charset) {
            var ret, cbName = this.randomName("cb"), head = document.getElementsByTagName("head")[0], script = document.createElement("script"), rquery = /\?/, jsonp = /(=)\?(?=&|$)|\?\?/, rts = /([?&])_=[^&]*/, ts = (new Date).getTime();
            url = url.replace(jsonp, "$1" + cbName),
                ret = url.replace(rts, "$1_=" + ts),
                url = ret + (ret === url ? (rquery.test(url) ? "&" : "?") + "_=" + ts : ""),
                window[cbName] = function(data) {
                    utils.isFunction(callback) && callback(data),
                        window[cbName] = void 0,
                        head.removeChild(script)
                }
                ,
                script.type = "text/javascript",
                script.charset = charset || "UTF-8",
                script.src = url,
                script.onerror = function(err) {
                    var data = {
                        status: 500
                    };
                    window[cbName](data)
                }
                ,
                head.appendChild(script)
        },
        formToIFrame: function(args, url) {
            var that = this
                , cbName = this.randomName("cb");
            if (args.callback) {
                var callback = utils.bind(args.callback, this);
                window[cbName] = function(data) {
                    utils.isFunction(callback) && callback(data),
                        window[cbName] = void 0,
                        document.body.removeChild(that._form),
                        document.body.removeChild(that._iframe)
                }
            }
            var formData = this.formData(args);
            formData.callback = cbName,
            isSohu && (document.domain = "sohu.com"),
                this._iframe = this.createIFrame(),
                this._form = this.createForm(formData),
                this._form.action = url,
                this._form.method = "POST",
                this._form.target = this._iframe.name,
                this._form.submit(),
                setTimeout(function() {
                    if (window[cbName]) {
                        var data = {
                            status: 500
                        };
                        window[cbName](data)
                    }
                }, 5e3)
        },
        bridging: function(args) {
            var option = {
                error: args.error,
                success: args.success
            }
                , params = args.params || {};
            return params.appid = this.options.appid,
                params.callback = function(resp) {
                    if (!resp)
                        return void (option.error && option.error(resp));
                    var data = resp.body;
                    200 === Number(resp.status) || 201 === Number(resp.status) || 206 === Number(resp.status) ? option.success && option.success(data, resp.status) : option.error && option.error(resp)
                }
                ,
                params
        },
        setCommonCookie: function() {
            if (!getCookie("gidinf") || !getCookie("reqtype")) {
                var url = this.options.url.commonCookie
                    , opt = {
                    callback: "?"
                };
                isSohu || (opt.domain = document.domain),
                    url = utils.url(url, opt),
                    this.getJSONP(url, function() {})
            }
        },
        getChallenge: function(back, args) {
            var callback = function(data) {
                window.eval(data),
                    args.params = args.params || {},
                !isSohu && document._jv && (args.params._jv = document._jv),
                back && back(args)
            }
                , opt = {
                callback: "?",
                type: isSohu ? 0 : 1
            }
                , url = utils.url(this.options.url.challenge, opt);
            this.getJSONP(url, callback)
        },
        login: function(args) {
            var self = this
                , url = self.options.url.loginByUserId + "/" + self.options.appid;
            args.params.password = utils.md5(args.params.password),
            args.params.captcha && (args.params.pagetoken = pageTokenLogin),
                self.getChallenge(function(args2) {
                    self.formToIFrame(self.bridging(args2), url)
                }, args)
        },
        mobileLogin: function(args) {
            var self = this
                , url = self.options.url.mobileLogin + "/" + self.options.appid;
            self.getChallenge(function(args2) {
                self.formToIFrame(self.bridging(args2), url)
            }, args)
        },
        getThirdLoginUrl: function(args) {
            return "weChat" === args.provider ? "https://plus.sohu.com/spassport/bind/" + this.options.appid + "/wechat?ru=" + args.ru : "//passport.sohu.com/openlogin/request.action?provider=" + args.provider + "&appid=" + this.options.appid + "&ru=" + args.ru
        },
        getWechatMPLoginUrl: function(args) {
            return prefix.substring(0, prefix.length - 2) + "/oauth/loginurl?appid=" + this.options.appid + "&openkey=" + args.openkey + "&platform=wechat&ru=" + args.ru
        },
        logout: function(args) {
            var self = this
                , url = self.options.url.logout + "/" + self.options.appid;
            self.getChallenge(function(args2) {
                self.formToIFrame(self.bridging(args2), url)
            }, args)
        },
        getLoginPicture: function() {
            return this.options.url.pictureCaptcha + "?pagetoken=" + pageTokenLogin + "&random=" + this.randomName("sdk")
        },
        getPhonePicture: function() {
            return this.options.url.pictureCaptcha + "?pagetoken=" + pageTokenPhone + "&random=" + this.randomName("sdk")
        },
        getRegisterPicture: function() {
            return this.options.url.pictureCaptcha + "?pagetoken=" + pageTokenRegister + "&random=" + this.randomName("sdk")
        },
        getMethod: function(args, url) {
            var self = this
                , params = self.bridging(args)
                , callback = params.callback;
            params.callback = "?",
                url = utils.url(url, params),
                this.getJSONP(url, callback)
        },
        getSignInCaptcha: function(args) {
            args.params.pagetoken = pageTokenPhone,
                this.getMethod(args, this.options.url.signInCaptcha)
        },
        getRegisterCaptcha: function(args) {
            args.params.pagetoken = pageTokenRegister,
                this.getMethod(args, this.options.url.registerCaptcha)
        },
        getBindPhoneCaptcha: function(args) {
            this.getMethod(args, this.options.url.bindPhoneCaptcha)
        },
        register: function(args) {
            var self = this
                , url = self.options.url.register + "/" + self.options.appid;
            self.getChallenge(function(args2) {
                self.formToIFrame(self.bridging(args2), url)
            }, args)
        },
        bindPhone: function(args) {
            var self = this
                , url = self.options.url.bindPhone + "/" + self.options.appid;
            self.getChallenge(function(args2) {
                self.formToIFrame(self.bridging(args2), url)
            }, args)
        },
        checkPhone: function(args) {
            this.getMethod(args, this.options.url.checkPhone)
        },
        checkUserPhoneBind: function(args) {
            var self = this
                , url = self.options.url.checkUserPhoneBind + "/" + self.options.appid;
            this.getMethod(args, url)
        },
        passportLogin: function(args) {
            var self = this
                , url = self.options.url.passportLogin + "/" + self.options.appid;
            args.params.password = utils.md5(args.params.password),
                self.getChallenge(function(args2) {
                    self.formToIFrame(self.bridging(args2), url)
                }, args)
        },
        scanCodeLogin: function(args) {
            var self = this
                , url = self.options.url.scanCodeLogin + "/" + self.options.appid;
            args.params.password = utils.md5(args.params.password),
                self.getChallenge(function(args2) {
                    self.formToIFrame(self.bridging(args2), url)
                }, args)
        }
    },
        window.SohuPassport = SohuPassport,
        SohuPassport
});
