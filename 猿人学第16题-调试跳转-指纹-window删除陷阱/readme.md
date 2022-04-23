# 任务十六：抓取这5页的数字，计算加和并提交结果

打开f12发现直接跳转到首页

    https://blog.csdn.net/sonichty/article/details/106337097
    
添加新书签，网址为以下JS：
    
    javascript:window.addEventListener('beforeunload', function (e) { e.preventDefault();e.returnValue = '' });

网页加载完后，点击这个书签注入JS

下面开始查请求内容

    https://match.yuanrenxue.com/api/match/16?page=1&m=yRGKX8mcMrTseFH04e67aa2178c08b2cbead16007e5bd66DSJ6YzK5KF&t=1650734803000
    https://match.yuanrenxue.com/api/match/16?page=1&m=x6SpyZZMNySDd7td1f3ce3d0c4c6bde96f904d2d8a428aaYDCZS2Sdxk&t=1650734804000
    https://match.yuanrenxue.com/api/match/16?page=1&m=x2BFAdXwr7d4G6md1f3ce3d0c4c6bde96f904d2d8a428aaBDe5nNDkmX&t=1650734805000
    
m 就是一个变量值

开始打断点

    r.m = n[e(528)](btoa, p_s)
    
找到主逻辑

    window[u(208)] = function(e) {
        var t = u
          , r = {};
        r.TGmSp = t(244) + "ARACTER_ERR",
        r[t(238)] = t(224) + t(250) + "/",
        r[t(205)] = "^([^ ]+( +" + t(230) + t(259),
        r.aYkvo = function(e) {
            return e()
        }
        ,
        r[t(254)] = function(e, t) {
            return e % t
        }
        ,
        r.evetF = function(e, t) {
            return e >> t
        }
        ,
        r.GfTek = t(196),
        r[t(260)] = function(e, t) {
            return e << t
        }
        ,
        r[t(229)] = function(e, t) {
            return e | t
        }
        ,
        r[t(242)] = function(e, t) {
            return e << t
        }
        ,
        r[t(228)] = function(e, t) {
            return e & t
        }
        ,
        r[t(207)] = function(e, t) {
            return e << t
        }
        ,
        r[t(202)] = function(e, t) {
            return e & t
        }
        ,
        r.jdwcO = function(e, t) {
            return e === t
        }
        ,
        r.kPdGe = t(231),
        r[t(195)] = t(213),
        r[t(201)] = function(e, t) {
            return e & t
        }
        ,
        r[t(206)] = function(e, t) {
            return e == t
        }
        ,
        r[t(219)] = function(e, t) {
            return e + t
        }
        ,
        r[t(220)] = function(e, t) {
            return e(t)
        }
        ;
        var i = r;
        if (/([^\u0000-\u00ff])/.test(e))
            throw new Error(i.TGmSp);
        for (var o, a, s, l = 0, c = []; l < e[t(261)]; ) {
            switch (a = e[t(237)](l),
            s = i.kukBH(l, 6)) {
            case 0:
                delete window,
                delete document,
                c[t(246)](f[t(245)](i[t(212)](a, 2)));
                break;
            case 1:
                try {
                    "WhHMm" === i[t(198)] || n.g && c[t(246)](f[t(245)](i.pHtmC(2 & o, 3) | i.evetF(a, 4)))
                } catch (e) {
                    c[t(246)](f[t(245)](i[t(229)](i.cVCcp(3 & o, 4), a >> 4)))
                }
                break;
            case 2:
                c[t(246)](f[t(245)](i[t(229)](i[t(242)](15 & o, 2), i.evetF(a, 6)))),
                c[t(246)](f[t(245)](i[t(228)](a, 63)));
                break;
            case 3:
                c[t(246)](f[t(245)](i[t(212)](a, 3)));
                break;
            case 4:
                c.push(f[t(245)](i[t(229)](i[t(207)](i.OWUOc(o, 4), 6), i[t(212)](a, 6))));
                break;
            case 5:
                c[t(246)](f[t(245)](i[t(229)](i[t(207)](i[t(202)](o, 15), 4), a >> 8))),
                c.push(f.charAt(i[t(202)](a, 63)))
            }
            o = a,
            l++
        }
        return 0 == s ? i[t(226)](i[t(241)], i[t(195)]) || (c[t(246)](f[t(245)](i[t(201)](o, 3) << 4)),
        c.push("FM")) : i.eMnqD(s, 1) && (c[t(246)](f[t(245)]((15 & o) << 2)),
        c[t(246)]("K")),
        i[t(219)](i.aQCDK(d(15), window.md5(c[t(234)](""))), i[t(220)](d, 10))
    }
    
这里的 u(208) 就是 btoa ，就是一个base65函数，接下来就是缺啥补啥。

关键点，当你都补全了后会发现，请求还是不行，问题在于

    switch (a = e[t(237)](l),
    s = i.kukBH(l, 6)) {
    case 0:
        delete window,
        delete document,
        c[t(246)](f[t(245)](i[t(212)](a, 2)));
        break;
    case 1:
        try {
            "WhHMm" === i[t(198)] || n.g && c[t(246)](f[t(245)](i.pHtmC(2 & o, 3) | i.evetF(a, 4)))
        } catch (e) {
            c[t(246)](f[t(245)](i[t(229)](i.cVCcp(3 & o, 4), a >> 4)))
        }
        break;
    case 2:
        c[t(246)](f[t(245)](i[t(229)](i[t(242)](15 & o, 2), i.evetF(a, 6)))),
        c[t(246)](f[t(245)](i[t(228)](a, 63)));
        break;
    case 3:
        c[t(246)](f[t(245)](i[t(212)](a, 3)));
        break;
    case 4:
        c.push(f[t(245)](i[t(229)](i[t(207)](i.OWUOc(o, 4), 6), i[t(212)](a, 6))));
        break;
    case 5:
        c[t(246)](f[t(245)](i[t(229)](i[t(207)](i[t(202)](o, 15), 4), a >> 8))),
        c.push(f.charAt(i[t(202)](a, 63)))
    }
    o = a,
    l++

问题就在于控制流平坦，delete window和delete document,这就是用来搞爬虫工程师的

![debugger](../img/75.png)

这里的 n 生成

    function n(r) {
            if (t[r])
                return t[r].exports;
            var i = t[r] = {
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n),
            i.exports
        }
        n.g = function() {
            if ("object" == typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window)
                    return window
            }
        }(),
        n(454),
        window.ScrollReveal = n(859),
        jQuery = n(46),
        window.jQuery = jQuery,
        window.$ = jQuery,
        n(127),
        n(98),
        n(129),
        n(772),
        n(639),
        n(732),
        n(58),
        n(570)
    }

代码实现

[js代码](./btoa.js)

[python代码实现](./案例.py)

