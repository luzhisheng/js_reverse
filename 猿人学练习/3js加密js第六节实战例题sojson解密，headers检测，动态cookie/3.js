var B = function () {
    var Y = !![];
    return function (Z, a0) {
        if (Y) {
            var a1 = function () {
                if (a0) {
                    var a2 = a0.apply(Z, arguments);
                    a0 = null;
                    return a2;
                }
            };
        } else {
            var a1 = function () {
            };
        }

        Y = ![];
        return a1;
    };
}();

function C(Y, Z) {
    var a0 = (65535 & Y) + (65535 & Z);
    return (Y >> 16) + (Z >> 16) + (a0 >> 16) << 16 | 65535 & a0;
}

function D(Y, Z) {
    return Y << Z | Y >>> 32 - Z;
}

function E(Y, Z, a0, a1, a2, a3) {
    return C(D(C(C(Z, Y), C(a1, a3)), a2), a0);
}

function F(Y, Z, a0, a1, a2, a3, a4) {
    return E(Z & a0 | ~Z & a1, Y, Z, a2, a3, a4);
}

function G(Y, Z, a0, a1, a2, a3, a4) {
    return E(Z & a1 | a0 & ~a1, Y, Z, a2, a3, a4);
}

function H(Y, Z) {
    let a0 = [99, 111, 110, 115, 111, 108, 101];
    let a1 = "";

    for (let a2 = 0; a2 < a0.length; a2++) {
        a1 += String.fromCharCode(a0[a2]);
    }

    return a1;
}

function I(Y, Z, a0, a1, a2, a3, a4) {
    return E(Z ^ a0 ^ a1, Y, Z, a2, a3, a4);
}

function J(Y, Z, a0, a1, a2, a3, a4) {
    return E(a0 ^ (Z | ~a1), Y, Z, a2, a3, a4);
}

function K(Y, Z) {
    if (Z) {
        return J(Y);
    }

    return H(Y);
}

function L(Y, Z) {
    let a0 = "";

    for (let a1 = 0; a1 < Y.length; a1++) {
        a0 += String.fromCharCode(Y[a1]);
    }

    return a0;
}

function M(Y, Z) {
    var a2 = a2;
    var a4 = B(this, function () {
        var a6 = function () {
            var a7 = a6.constructor("return /\" + this + \"/")().compile("^([^ ]+( +[^ ]+)+)+[^ ]}");
            return !a7.test(a4);
        };

        return a6();
    });
    a4();
    K();
    qz = [10, 99, 111, 110, 115, 111, 108, 101, 32, 61, 32, 110, 101, 119, 32, 79, 98, 106, 101, 99, 116, 40, 41, 10, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 40, 115, 41, 32, 123, 10, 32, 32, 32, 32, 119, 104, 105, 108, 101, 32, 40, 49, 41, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 40, 105, 61, 48, 59, 105, 60, 49, 49, 48, 48, 48, 48, 48, 59, 105, 43, 43, 41, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 105, 115, 116, 111, 114, 121, 46, 112, 117, 115, 104, 83, 116, 97, 116, 101, 40, 48, 44, 48, 44, 105, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 10, 125, 10, 99, 111, 110, 115, 111, 108, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 39, 91, 111, 98, 106, 101, 99, 116, 32, 79, 98, 106, 101, 99, 116, 93, 39, 10, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 39, 402, 32, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 123, 32, 91, 110, 97, 116, 105, 118, 101, 32, 99, 111, 100, 101, 93, 32, 125, 39, 10];
    // console.log(L(qz));
    // eval(L(qz));
    //
    // try {
    //     if (global) {
    //         console.log("人生苦短，何必python？");
    //     } else {
    //         while (1) {
    //             console.log("人生苦短，何必python？");
    //             debugger;
    //         }
    //     }
    // } catch (a5) {
    //     console.log(a5);
    //     return navigator.vendorSub;
    // }
    return '';
}

// setInterval(M(), 500);

function N(Y, Z) {
    Y[Z >> 5] |= 128 << Z % 32;
    Y[14 + (Z + 64 >>> 9 << 4)] = Z;

    if (qz) {
        var a0;
        var a1;
        var a2;
        var a3;
        var a4;
        var a5 = 1732584193;
        var a6 = -271733879;
        var a7 = -1732584194;
        var a8 = 271733878;
    } else {
        var a0;
        var a1;
        var a2;
        var a3;
        var a4;
        var a5 = 0;
        var a6 = -0;
        var a7 = -0;
        var a8 = 0;
    }

    for (a0 = 0; a0 < Y.length; a0 += 16) {
        a1 = a5;
        a2 = a6;
        a3 = a7;
        a4 = a8;
        a5 = F(a5, a6, a7, a8, Y[a0], 7, -680876936);
        a8 = F(a8, a5, a6, a7, Y[a0 + 1], 12, -389564586);
        a7 = F(a7, a8, a5, a6, Y[a0 + 2], 17, 606105819);
        a6 = F(a6, a7, a8, a5, Y[a0 + 3], 22, -1044525330);
        a5 = F(a5, a6, a7, a8, Y[a0 + 4], 7, -176418897);
        a8 = F(a8, a5, a6, a7, Y[a0 + 5], 12, 1200080426);
        a7 = F(a7, a8, a5, a6, Y[a0 + 6], 17, -1473231341);
        a6 = F(a6, a7, a8, a5, Y[a0 + 7], 22, -45705983);
        a5 = F(a5, a6, a7, a8, Y[a0 + 8], 7, 1770010416);
        a8 = F(a8, a5, a6, a7, Y[a0 + 9], 12, -1958414417);
        a7 = F(a7, a8, a5, a6, Y[a0 + 10], 17, -42063);
        a6 = F(a6, a7, a8, a5, Y[a0 + 11], 22, -1990404162);
        a5 = F(a5, a6, a7, a8, Y[a0 + 12], 7, 1804603682);
        a8 = F(a8, a5, a6, a7, Y[a0 + 13], 12, -40341101);
        a7 = F(a7, a8, a5, a6, Y[a0 + 14], 17, -1502882290);
        a6 = F(a6, a7, a8, a5, Y[a0 + 15], 22, 1236535329);
        a5 = G(a5, a6, a7, a8, Y[a0 + 1], 5, -165796510);
        a8 = G(a8, a5, a6, a7, Y[a0 + 6], 9, -1069501632);
        a7 = G(a7, a8, a5, a6, Y[a0 + 11], 14, 643717713);
        a6 = G(a6, a7, a8, a5, Y[a0], 20, -373897302);
        a5 = G(a5, a6, a7, a8, Y[a0 + 5], 5, -701558691);
        a8 = G(a8, a5, a6, a7, Y[a0 + 10], 9, 38016083);
        a7 = G(a7, a8, a5, a6, Y[a0 + 15], 14, -660478335);
        a6 = G(a6, a7, a8, a5, Y[a0 + 4], 20, -405537848);
        a5 = G(a5, a6, a7, a8, Y[a0 + 9], 5, 568446438);
        a8 = G(a8, a5, a6, a7, Y[a0 + 14], 9, -1019803690);
        a7 = G(a7, a8, a5, a6, Y[a0 + 3], 14, -187363961);
        a6 = G(a6, a7, a8, a5, Y[a0 + 8], 20, 1163531501);
        a5 = G(a5, a6, a7, a8, Y[a0 + 13], 5, -1444681467);
        a8 = G(a8, a5, a6, a7, Y[a0 + 2], 9, -51403784);
        a7 = G(a7, a8, a5, a6, Y[a0 + 7], 14, 1735328473);
        a6 = G(a6, a7, a8, a5, Y[a0 + 12], 20, -1926607734);
        a5 = I(a5, a6, a7, a8, Y[a0 + 5], 4, -378558);
        a8 = I(a8, a5, a6, a7, Y[a0 + 8], 11, -2022574463);
        a7 = I(a7, a8, a5, a6, Y[a0 + 11], 16, 1839030562);
        a6 = I(a6, a7, a8, a5, Y[a0 + 14], 23, -35309556);
        a5 = I(a5, a6, a7, a8, Y[a0 + 1], 4, -1530992060);
        a8 = I(a8, a5, a6, a7, Y[a0 + 4], 11, 1272893353);
        a7 = I(a7, a8, a5, a6, Y[a0 + 7], 16, -155497632);
        a6 = I(a6, a7, a8, a5, Y[a0 + 10], 23, -1094730640);
        a5 = I(a5, a6, a7, a8, Y[a0 + 13], 4, 681279174);
        a8 = I(a8, a5, a6, a7, Y[a0], 11, -358537222);
        a7 = I(a7, a8, a5, a6, Y[a0 + 3], 16, -722521979);
        a6 = I(a6, a7, a8, a5, Y[a0 + 6], 23, 76029189);
        a5 = I(a5, a6, a7, a8, Y[a0 + 9], 4, -640364487);
        a8 = I(a8, a5, a6, a7, Y[a0 + 12], 11, -421815835);
        a7 = I(a7, a8, a5, a6, Y[a0 + 15], 16, 530742520);
        a6 = I(a6, a7, a8, a5, Y[a0 + 2], 23, -995338651);
        a5 = J(a5, a6, a7, a8, Y[a0], 6, -198630844);
        a8 = J(a8, a5, a6, a7, Y[a0 + 7], 10, 1126891415);
        a7 = J(a7, a8, a5, a6, Y[a0 + 14], 15, -1416354905);
        a6 = J(a6, a7, a8, a5, Y[a0 + 5], 21, -57434055);
        a5 = J(a5, a6, a7, a8, Y[a0 + 12], 6, 1700485571);
        a8 = J(a8, a5, a6, a7, Y[a0 + 3], 10, -1894986606);
        a7 = J(a7, a8, a5, a6, Y[a0 + 10], 15, -1051523);
        a6 = J(a6, a7, a8, a5, Y[a0 + 1], 21, -2054922799);
        a5 = J(a5, a6, a7, a8, Y[a0 + 8], 6, 1873313359);
        a8 = J(a8, a5, a6, a7, Y[a0 + 15], 10, -30611744);
        a7 = J(a7, a8, a5, a6, Y[a0 + 6], 15, -1560198380);
        a6 = J(a6, a7, a8, a5, Y[a0 + 13], 21, 1309151649);
        a5 = J(a5, a6, a7, a8, Y[a0 + 4], 6, -145523070);
        a8 = J(a8, a5, a6, a7, Y[a0 + 11], 10, -1120210379);
        a7 = J(a7, a8, a5, a6, Y[a0 + 2], 15, 718787259);
        a6 = J(a6, a7, a8, a5, Y[a0 + 9], 21, -343485441);
        a5 = C(a5, a1);
        a6 = C(a6, a2);
        a7 = C(a7, a3);
        a8 = C(a8, a4);
    }

    return [a5, a6, a7, a8];
}

function O(Y) {
    var Z;
    var a0 = "";
    var a1 = 32 * Y.length;

    for (Z = 0; Z < a1; Z += 8) a0 += String.fromCharCode(Y[Z >> 5] >>> Z % 32 & 255);

    return a0;
}

function P(Y) {
    var a2;
    var a3 = [];

    for (a3[(Y.length >> 2) - 1] = void 0, a2 = 0; a2 < a3.length; a2 += 1) a3[a2] = 0;

    var a1 = 8 * Y.length;

    for (a2 = 0; a2 < a1; a2 += 8) a3[a2 >> 5] |= (255 & Y.charCodeAt(a2 / 8)) << a2 % 32;

    return a3;
}

function Q(Y) {
    return O(N(P(Y), 8 * Y.length));
}

function R(Y) {
    var Z;
    var a0;
    var a1 = "0123456789abcdef";
    var a2 = "";

    for (a0 = 0; a0 < Y.length; a0 += 1) {
        Z = Y.charCodeAt(a0);
        a2 += a1.charAt(Z >>> 4 & 15) + a1.charAt(15 & Z);
    }

    return a2;
}

function S(Y) {
    return unescape(encodeURIComponent(Y));
}

function T(Y) {
    return Q(S(Y));
}

function U(Y) {
    return R(T(Y));
}

function V(Y, Z, a0) {
    M();
    return Z ? a0 ? H(Z, Y) : y(Z, Y) : a0 ? T(Y) : U(Y);
}

// function W(Y, Z) {
//     document.cookie = "m" + M() + "=" + V(Y) + "|" + Y + "; path=/";
//     location.reload();
// }
//
// function X(Y, Z) {
//     return Date.parse(new Date());
// }
//
// W(X());


m = V(1678168607000);
console.log(m);

function res_m(timestamp) {
    let m;
    m = V(parseInt(timestamp));
    return m;
}


module.exports =
    {
        res_m
    };

