const crypto = require('crypto');

function encryptMD5(data) {
    const hash = crypto.createHash('md5');
    hash.update(data);
    return hash.digest('hex');
}

function encryptParams(g) {
    var O = {
        "salt": "asjdfoaur3ur829322"
    }
        , X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
        , J = Object.keys(g).sort()
        , me = "";
    J.forEach(function (Rn) {
        me += Rn + g[Rn] + O.salt
    });

    for (var Ce = encryptMD5(me + X), Ze = "", Sn = 0, Ke = Ce.length - 1; Sn < Ce.length && !(Sn >= Ke); Sn++,
        Ke--)
        Ze += (parseInt(Ce[Sn], 16) ^ parseInt(Ce[Ke], 16)).toString(16);
    var dn = Ze + Ce.substring(Sn);
    return dn
}


g = {
    "_time": 1720545957, // Math.floor(Date.now() / 1000) 时间戳
    "cnonce": 53701680 // Math.floor(10000000 + Math.random() * 90000000) 随机数
};

da = ''; // 有点接口是带d加盐的{"type":{"headers":{"lang":"ZH_CN"}}}

console.log(encryptParams(g, da));

