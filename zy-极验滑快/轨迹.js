aaa = function () {
    var $_BEGIH = lTloj.$_CX
        , $_BEGHL = ['$_BEHBT'].concat($_BEGIH)
        , $_BEGJJ = $_BEGHL[1];
    $_BEGHL.shift();
    var $_BEHAr = $_BEGHL[0];

    function n(t) {
        var $_DBEIz = lTloj.$_DP()[0][4];
        for (; $_DBEIz !== lTloj.$_DP()[2][3];) {
            switch ($_DBEIz) {
                case lTloj.$_DP()[0][4]:
                    var e = $_BEGJJ(430)
                        , n = e[$_BEGJJ(182)]
                        , r = $_BEGIH(33)
                        , i = Math[$_BEGIH(383)](t)
                        , o = parseInt(i / n);
                    n <= o && (o = n - 1),
                    o && (r = e[$_BEGIH(122)](o));
                    var s = $_BEGIH(33);
                    return t < 0 && (s += $_BEGJJ(456)),
                    r && (s += $_BEGJJ(459)),
                    s + r + e[$_BEGIH(122)](i %= n);
                    break;
            }
        }
    }

    var t = function (t) {
        var $_BEHDi = lTloj.$_CX
            , $_BEHCK = ['$_BEHGM'].concat($_BEHDi)
            , $_BEHEF = $_BEHCK[1];
        $_BEHCK.shift();
        var $_BEHFx = $_BEHCK[0];
        for (var e, n, r, i = [], o = 0, s = 0, a = t[$_BEHEF(182)] - 1; s < a; s++)
            e = Math[$_BEHEF(156)](t[s + 1][0] - t[s][0]),
                n = Math[$_BEHDi(156)](t[s + 1][1] - t[s][1]),
                r = Math[$_BEHDi(156)](t[s + 1][2] - t[s][2]),
            0 == e && 0 == n && 0 == r || (0 == e && 0 == n ? o += r : (i[$_BEHEF(140)]([e, n, r + o]),
                o = 0));
        return 0 !== o && i[$_BEHDi(140)]([e, n, o]),
            i;
    }(this[$_BEGJJ(361)])
        , r = []
        , i = []
        , o = [];
    return new ct(t)[$_BEGIH(84)](function (t) {
        var $_BEHIs = lTloj.$_CX
            , $_BEHHw = ['$_BEIBE'].concat($_BEHIs)
            , $_BEHJy = $_BEHHw[1];
        $_BEHHw.shift();
        var $_BEIAO = $_BEHHw[0];
        var e = function (t) {
            var $_BEIDv = lTloj.$_CX
                , $_BEICk = ['$_BEIGW'].concat($_BEIDv)
                , $_BEIEU = $_BEICk[1];
            $_BEICk.shift();
            var $_BEIFh = $_BEICk[0];
            for (var e = [[1, 0], [2, 0], [1, -1], [1, 1], [0, 1], [0, -1], [3, 0], [2, -1], [2, 1]], n = 0, r = e[$_BEIDv(182)]; n < r; n++)
                if (t[0] == e[n][0] && t[1] == e[n][1])
                    return $_BEIEU(413)[n];
            return 0;
        }(t);
        e ? i[$_BEHIs(140)](e) : (r[$_BEHJy(140)](n(t[0])),
            i[$_BEHJy(140)](n(t[1]))),
            o[$_BEHJy(140)](n(t[2]));
    }),
    r[$_BEGJJ(444)]($_BEGIH(33)) + $_BEGIH(407) + i[$_BEGIH(444)]($_BEGJJ(33)) + $_BEGIH(407) + o[$_BEGIH(444)]($_BEGIH(33));
}