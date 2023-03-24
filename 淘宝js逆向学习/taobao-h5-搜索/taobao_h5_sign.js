r = {
    AntiCreep: undefined,
    AntiFlood: undefined,
    H5Request: true,
    LoginRequest: undefined,
    WindVaneRequest: false,
    failureCallback: undefined,
    getJSONP: true,
    mainDomain: "taobao.com",
    prefix: "h5api",
    safariGoLogin: true,
    subDomain: "m",
    successCallback: undefined,
    token: "e851de04ed8c9a7b1f9adffc961d4581",
    useAlipayJSBridge: false,
    useJsonpResultType: false
};

n = {
    api: "mtop.relationrecommend.WirelessRecommend.recommend",
    data: "{\"appId\":\"29859\",\"params\":\"{\\\"isBeta\\\":\\\"false\\\",\\\"grayHair\\\":\\\"false\\\"," +
        "\\\"appId\\\":\\\"29859\\\",\\\"from\\\":\\\"nt_history\\\",\\\"brand\\\":\\\"HUAWEI\\\"," +
        "\\\"info\\\":\\\"wifi\\\",\\\"index\\\":\\\"4\\\",\\\"ttid\\\":\\\"600000@taobao_android_10.7.0\\\"," +
        "\\\"needTabs\\\":\\\"true\\\",\\\"rainbow\\\":\\\"\\\",\\\"areaCode\\\":\\\"CN\\\",\\\"vm\\\":\\\"nw\\\"," +
        "\\\"schemaType\\\":\\\"auction\\\",\\\"elderHome\\\":\\\"false\\\",\\\"device\\\":\\\"HMA-AL00\\\"," +
        "\\\"isEnterSrpSearch\\\":\\\"true\\\",\\\"newSearch\\\":\\\"false\\\",\\\"network\\\":\\\"wifi\\\"," +
        "\\\"subtype\\\":\\\"\\\",\\\"hasPreposeFilter\\\":\\\"false\\\",\\\"client_os\\\":\\\"Android\\\"," +
        "\\\"gpsEnabled\\\":\\\"false\\\",\\\"searchDoorFrom\\\":\\\"srp\\\"," +
        "\\\"debug_rerankNewOpenCard\\\":\\\"false\\\",\\\"homePageVersion\\\":\\\"v7\\\"," +
        "\\\"searchElderHomeOpen\\\":\\\"false\\\",\\\"style\\\":\\\"wf\\\",\\\"page\\\":2," +
        "\\\"n\\\":\\\"10\\\",\\\"q\\\":\\\"小佩\\\",\\\"search_action\\\":\\\"initiative\\\"," +
        "\\\"sugg\\\":\\\"_4_1\\\",\\\"m\\\":\\\"h5\\\",\\\"sversion\\\":\\\"13.6\\\"" +
        ",\\\"prepositionVersion\\\":\\\"v2\\\",\\\"tab\\\":\\\"all\\\",\\\"channelSrp\\\":\\\"newh5\\\"," +
        "\\\"tagSearchKeyword\\\":null,\\\"sort\\\":\\\"_coefp\\\",\\\"filterTag\\\":\\\"\\\"," +
        "\\\"prop\\\":\\\"\\\",\\\"itemIds\\\":\\\"656322922597,655946061789,667101797078," +
        "655961868027,655896384830,673459435581,656787170299,669111296958,673143569947," +
        "630595856320\\\",\\\"itemS\\\":10}\"}",
    dataType: "jsonp",
    type: "get",
    v: "2.0",
};


function ayf(e) {
    function t(e, t) {
        return e << t | e >>> 32 - t
    }

    function n(e, t) {
        var n, r, o, i, a;
        return o = 2147483648 & e,
            i = 2147483648 & t,
            a = (1073741823 & e) + (1073741823 & t),
            (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
    }

    function r(e, r, o, i, a, c, s) {
        return e = n(e, n(n(function (e, t, n) {
            return e & t | ~e & n
        }(r, o, i), a), s)),
            n(t(e, c), r)
    }

    function o(e, r, o, i, a, c, s) {
        return e = n(e, n(n(function (e, t, n) {
            return e & n | t & ~n
        }(r, o, i), a), s)),
            n(t(e, c), r)
    }

    function i(e, r, o, i, a, c, s) {
        return e = n(e, n(n(function (e, t, n) {
            return e ^ t ^ n
        }(r, o, i), a), s)),
            n(t(e, c), r)
    }

    function a(e, r, o, i, a, c, s) {
        return e = n(e, n(n(function (e, t, n) {
            return t ^ (e | ~n)
        }(r, o, i), a), s)),
            n(t(e, c), r)
    }

    function c(e) {
        var t, n = "", r = "";
        for (t = 0; 3 >= t; t++)
            n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
        return n
    }

    var s, u, l, f, g, p, d, E, h, A;
    for (e = function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192),
                t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                t += String.fromCharCode(r >> 6 & 63 | 128),
                t += String.fromCharCode(63 & r | 128))
        }
        return t
    }(e),
             A = function (e) {
                 for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, c = 0; n > c;)
                     a = c % 4 * 8,
                         i[t = (c - c % 4) / 4] = i[t] | e.charCodeAt(c) << a,
                         c++;
                 return a = c % 4 * 8,
                     i[t = (c - c % 4) / 4] = i[t] | 128 << a,
                     i[o - 2] = n << 3,
                     i[o - 1] = n >>> 29,
                     i
             }(e),
             p = 1732584193,
             d = 4023233417,
             E = 2562383102,
             h = 271733878,
             s = 0; s < A.length; s += 16)
        u = p,
            l = d,
            f = E,
            g = h,
            p = r(p, d, E, h, A[s + 0], 7, 3614090360),
            h = r(h, p, d, E, A[s + 1], 12, 3905402710),
            E = r(E, h, p, d, A[s + 2], 17, 606105819),
            d = r(d, E, h, p, A[s + 3], 22, 3250441966),
            p = r(p, d, E, h, A[s + 4], 7, 4118548399),
            h = r(h, p, d, E, A[s + 5], 12, 1200080426),
            E = r(E, h, p, d, A[s + 6], 17, 2821735955),
            d = r(d, E, h, p, A[s + 7], 22, 4249261313),
            p = r(p, d, E, h, A[s + 8], 7, 1770035416),
            h = r(h, p, d, E, A[s + 9], 12, 2336552879),
            E = r(E, h, p, d, A[s + 10], 17, 4294925233),
            d = r(d, E, h, p, A[s + 11], 22, 2304563134),
            p = r(p, d, E, h, A[s + 12], 7, 1804603682),
            h = r(h, p, d, E, A[s + 13], 12, 4254626195),
            E = r(E, h, p, d, A[s + 14], 17, 2792965006),
            p = o(p, d = r(d, E, h, p, A[s + 15], 22, 1236535329), E, h, A[s + 1], 5, 4129170786),
            h = o(h, p, d, E, A[s + 6], 9, 3225465664),
            E = o(E, h, p, d, A[s + 11], 14, 643717713),
            d = o(d, E, h, p, A[s + 0], 20, 3921069994),
            p = o(p, d, E, h, A[s + 5], 5, 3593408605),
            h = o(h, p, d, E, A[s + 10], 9, 38016083),
            E = o(E, h, p, d, A[s + 15], 14, 3634488961),
            d = o(d, E, h, p, A[s + 4], 20, 3889429448),
            p = o(p, d, E, h, A[s + 9], 5, 568446438),
            h = o(h, p, d, E, A[s + 14], 9, 3275163606),
            E = o(E, h, p, d, A[s + 3], 14, 4107603335),
            d = o(d, E, h, p, A[s + 8], 20, 1163531501),
            p = o(p, d, E, h, A[s + 13], 5, 2850285829),
            h = o(h, p, d, E, A[s + 2], 9, 4243563512),
            E = o(E, h, p, d, A[s + 7], 14, 1735328473),
            p = i(p, d = o(d, E, h, p, A[s + 12], 20, 2368359562), E, h, A[s + 5], 4, 4294588738),
            h = i(h, p, d, E, A[s + 8], 11, 2272392833),
            E = i(E, h, p, d, A[s + 11], 16, 1839030562),
            d = i(d, E, h, p, A[s + 14], 23, 4259657740),
            p = i(p, d, E, h, A[s + 1], 4, 2763975236),
            h = i(h, p, d, E, A[s + 4], 11, 1272893353),
            E = i(E, h, p, d, A[s + 7], 16, 4139469664),
            d = i(d, E, h, p, A[s + 10], 23, 3200236656),
            p = i(p, d, E, h, A[s + 13], 4, 681279174),
            h = i(h, p, d, E, A[s + 0], 11, 3936430074),
            E = i(E, h, p, d, A[s + 3], 16, 3572445317),
            d = i(d, E, h, p, A[s + 6], 23, 76029189),
            p = i(p, d, E, h, A[s + 9], 4, 3654602809),
            h = i(h, p, d, E, A[s + 12], 11, 3873151461),
            E = i(E, h, p, d, A[s + 15], 16, 530742520),
            p = a(p, d = i(d, E, h, p, A[s + 2], 23, 3299628645), E, h, A[s + 0], 6, 4096336452),
            h = a(h, p, d, E, A[s + 7], 10, 1126891415),
            E = a(E, h, p, d, A[s + 14], 15, 2878612391),
            d = a(d, E, h, p, A[s + 5], 21, 4237533241),
            p = a(p, d, E, h, A[s + 12], 6, 1700485571),
            h = a(h, p, d, E, A[s + 3], 10, 2399980690),
            E = a(E, h, p, d, A[s + 10], 15, 4293915773),
            d = a(d, E, h, p, A[s + 1], 21, 2240044497),
            p = a(p, d, E, h, A[s + 8], 6, 1873313359),
            h = a(h, p, d, E, A[s + 15], 10, 4264355552),
            E = a(E, h, p, d, A[s + 6], 15, 2734768916),
            d = a(d, E, h, p, A[s + 13], 21, 1309151649),
            p = a(p, d, E, h, A[s + 4], 6, 4149444226),
            h = a(h, p, d, E, A[s + 11], 10, 3174756917),
            E = a(E, h, p, d, A[s + 2], 15, 718787259),
            d = a(d, E, h, p, A[s + 9], 21, 3951481745),
            p = n(p, u),
            d = n(d, l),
            E = n(E, f),
            h = n(h, g);
    return (c(p) + c(d) + c(E) + c(h)).toLowerCase()
};

// var s = 'e851de04ed8c9a7b1f9adffc961d4581&1650884137457&12574478&{"appId":"24707","params":"{\\"area\\":\\"shouye_query_rec_hintq_rolling\\"}"}';
// var s2 = '9bccf82b4b7f76fcb7b8f862d73a1a57&1650888426636&12574478&{"appId":"29859","params":"{\\"isBeta\\":\\"false\\",\\"grayHair\\":\\"false\\",\\"appId\\":\\"29859\\",\\"from\\":\\"nt_history\\",\\"brand\\":\\"HUAWEI\\",\\"info\\":\\"wifi\\",\\"index\\":\\"4\\",\\"ttid\\":\\"600000@taobao_android_10.7.0\\",\\"needTabs\\":\\"true\\",\\"rainbow\\":\\"\\",\\"areaCode\\":\\"CN\\",\\"vm\\":\\"nw\\",\\"schemaType\\":\\"auction\\",\\"elderHome\\":\\"false\\",\\"device\\":\\"HMA-AL00\\",\\"isEnterSrpSearch\\":\\"true\\",\\"newSearch\\":\\"false\\",\\"network\\":\\"wifi\\",\\"subtype\\":\\"\\",\\"hasPreposeFilter\\":\\"false\\",\\"client_os\\":\\"Android\\",\\"gpsEnabled\\":\\"false\\",\\"searchDoorFrom\\":\\"srp\\",\\"debug_rerankNewOpenCard\\":\\"false\\",\\"homePageVersion\\":\\"v7\\",\\"searchElderHomeOpen\\":\\"false\\",\\"style\\":\\"wf\\",\\"page\\":1,\\"n\\":\\"10\\",\\"q\\":\\"小佩\\",\\"search_action\\":\\"initiative\\",\\"sugg\\":\\"_4_1\\",\\"m\\":\\"h5\\",\\"sversion\\":\\"13.6\\",\\"prepositionVersion\\":\\"v2\\",\\"tab\\":\\"all\\",\\"channelSrp\\":\\"newh5\\",\\"tagSearchKeyword\\":null,\\"sort\\":\\"_coefp\\",\\"filterTag\\":\\"\\",\\"prop\\":\\"\\"}"}';
// 0e287c5b0b9845caf6f0756b9b29333f

// console.log(ayf(s2));

function sign(s) {
    sign = ayf(s);
    console.log(sign);
    return sign;
}

module.exports =
    {
        sign
    };
