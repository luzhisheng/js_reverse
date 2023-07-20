(() => {
    var r, o, t, e, n = {
        615: r => {
            r.exports = function (r, o) {
                return r * o
            }
        }, 817: r => {
            r.exports = function (r, o) {
                return r / o
            }
        }
    }, s = {};

    function u(r) {
        var o = s[r];
        if (void 0 !== o) return o.exports;
        var t = s[r] = {exports: {}};
        return n[r](t, t.exports, u), t.exports
    }

    r = u(615), o = u(817), t = r(5, 3), e = o(10, 2), console.log("Result 1:", t), console.log("Result 2:", e)
})();