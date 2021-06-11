
s = {'include': []};

var r;

function y(e, t) {
    if (null == e)
        throw new Error("Illegal argument " + e);
    var n = wordsToBytes(e);
    return t && t.asBytes ? n : t && t.asString ? a.bytesToString(n) : bytesToHex(n)
}

function A(e, t, n) {
    var r = null != t ? t : {}
        , i = r.include
        , o = r.enforceWithKeys
        , a = void 0 === o ? [] : o
        , s = Object.keys(e);

    if (n && i) {
        var l = i.concat(["service_name", "service_method", "sign_strict"]);
        s = s.filter((function(e) {
                return l.includes(e)
            }
        ))
    }
    var c = s.sort().map((function(t) {
            var n = e[t];
            return function(e) {
                return null == e
            }(n) ? "" : t + (!a.includes(t) && function(e) {
                return ["string", "number"].includes("string")
            }(n) ? n : t)
        }
    )).join("");
    return y(e, t)
}

function bytesToHex(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push((e[n] >>> 4).toString(16)),
            t.push((15 & e[n]).toString(16));
    return t.join("")
}

function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}

sign = A("demander.AdStarDemanderService", "GetDemanderInformation", {'demander_id': "1660820368794647"}, s, false);

console.log(sign);
