class S {
    getSaltValue() {
        return this.salt
    }
    encryptParams(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
            , o = Object.keys(e).sort()
            , n = "";
        o.forEach(t => {
                n += t + e[t] + this.salt
            }
        );
        let r = '678fda83f6395c7fbca21c8e4817a2cc' //这部分加密完全可以用crypto去解决
            , i = ""
            , a = 0
            , s = r.length - 1;
        for (; a < r.length && !(a >= s); a++,
            s--)
            i += (parseInt(r[a], 16) ^ parseInt(r[s], 16)).toString(16);
        return i + r.substring(a)
    }
    constructor() {
        this.salt = "LAA6edGHBkcc3eTiOIRfg89bu9ODA6PB"
    }
}
let A = new S;

let d = {_time: 1742306633, cnonce: 48292081};
h = A.encryptParams({...d}, S);

console.log(h);