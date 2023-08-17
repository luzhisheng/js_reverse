
X_Sign = function a(t) {

    function T(t) {
        var e = t.slice;
        return t === o || t instanceof Array && e === o.slice ? r : e
    }

    function E(t) {
        var e = t.indexOf;
        return t === o || t instanceof Array && e === o.indexOf ? r : e
    }

    function A(t){
        var e = t.concat;
        return t === o || t instanceof Array && e === o.concat ? r : e
    }

    function R(t, e) {
        if (null == t)
            throw new Error("Illegal argument " + t);
        var n = r.wordsToBytes(s(t, e));
        return e && e.asBytes ? n : e && e.asString ? a.bytesToString(n) : r.bytesToHex(n)
    }

    function aaa(t, e, n) {
        if (!e)
            return t;
        var i;
        if (n)
            i = n(e);
        else if (r.isURLSearchParams(e))
            i = e.toString();
        else {
            var a = [];
            r.forEach(e, (function (t, e) {
                    null != t && (r.isArray(t) ? e += "[]" : t = [t],
                        r.forEach(t, (function (t) {
                                r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)),
                                    a.push(o(e) + "=" + o(t))
                            }
                        )))
                }
            )),
                i = a.join("&")
        }
        if (i) {
            var s = t.indexOf("#");
            -1 !== s && (t = t.slice(0, s)),
                t += (-1 === t.indexOf("?") ? "?" : "&") + i
        }
        return t
    };


    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "X", o = t.url,
        i = void 0 === o ? "" : o, a = t.params, s = t.paramsSerializer;
    return i = T()(i).call(i, E()(i).call(i, "/fe_api/"), i.length),
        "X" === r ? A()(n = "".concat(r)).call(n, R()(aaa(i, a, s) + "WSUDD")) : ""
}(t, aaa.http.buildURL);

console.log(X_Sign);
