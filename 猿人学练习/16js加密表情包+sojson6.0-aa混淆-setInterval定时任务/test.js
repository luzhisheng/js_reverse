var hexcase = 0;
var b64pad = "";
var chrsz = 8;

window = global;
global.Buffer = global.Buffer || require('buffer').Buffer;

if (typeof btoa === 'undefined') {
    global.btoa = function (str) {
        return new Buffer.from(str).toString('base64');
    };
}

if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
        return new Buffer.from(b64Encoded, 'base64').toString();
    };
}


function hex_sha1(lIIii1) {
    return binb2hex(core_sha1(str2binb(lIIii1), lIIii1.length * chrsz));
}

function b64_sha1(lili1) {
    return binb2b64(core_sha1(str2binb(lili1), lili1.length * chrsz));
}

function str_sha1(lliiii) {
    return binb2str(core_sha1(str2binb(lliiii), lliiii.length * chrsz));
}

function hex_hmac_sha1(IIll1, ll1il) {
    return binb2hex(core_hmac_sha1(IIll1, ll1il));
}

function b64_hmac_sha1(Illl1I, lliiiI) {
    return binb2b64(core_hmac_sha1(Illl1I, lliiiI));
}

function str_hmac_sha1(ii1lI, I1ilIl) {
    return binb2str(core_hmac_sha1(ii1lI, I1ilIl));
}

function sha1_vm_test() {
    return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

function core_sha1(liliI, ll1lI) {
    liliI[ll1lI >> 5] |= 128 << 24 - ll1lI % 32;
    liliI[(ll1lI + 64 >> 9 << 4) + 15] = ll1lI;
    var ii1I11 = Array(80);
    var liIi1 = 1732584193;
    var lI11II = -271733879;
    var l1llI1 = -1732584194;
    var llIIll = 271733878;
    var IillIi = -1009589776;

    for (var lii = 0; lii < liliI.length; lii += 16) {
        var liIl1 = liIi1;
        var llliil = lI11II;
        var II1lll = l1llI1;
        var II1lli = llIIll;
        var ii1I1I = IillIi;

        for (var lil = 0; lil < 80; lil++) {
            if (lil < 16) {
                ii1I11[lil] = liliI[lii + lil];
            } else {
                ii1I11[lil] = rol(ii1I11[lil - 3] ^ ii1I11[lil - 8] ^ ii1I11[lil - 14] ^ ii1I11[lil - 16], 1);
            }

            var IillIl = safe_add(safe_add(rol(liIi1, 5), sha1_ft(lil, lI11II, l1llI1, llIIll)), safe_add(safe_add(IillIi, ii1I11[lil]), sha1_kt(lil)));
            IillIi = llIIll;
            llIIll = l1llI1;
            l1llI1 = rol(lI11II, 30);
            lI11II = liIi1;
            liIi1 = IillIl;
        }

        liIi1 = safe_add(liIi1, liIl1);
        lI11II = safe_add(lI11II, llliil);
        l1llI1 = safe_add(l1llI1, II1lll);
        llIIll = safe_add(llIIll, II1lli);
        IillIi = safe_add(IillIi, ii1I1I);
    }

    return Array(liIi1, lI11II, l1llI1, llIIll, IillIi);
}

function sha1_ft(IiIi, iI1ll1, IlI1Il, l1il1l) {
    if (IiIi < 20) {
        return iI1ll1 & IlI1Il | ~iI1ll1 & l1il1l;
    }

    if (IiIi < 40) {
        return iI1ll1 ^ IlI1Il ^ l1il1l;
    }

    if (IiIi < 60) {
        return iI1ll1 & IlI1Il | iI1ll1 & l1il1l | IlI1Il & l1il1l;
    }

    return iI1ll1 ^ IlI1Il ^ l1il1l;
}

function sha1_kt(i11I11) {
    return i11I11 < 20 ? 1518500249 : i11I11 < 40 ? 1859775393 : i11I11 < 60 ? -1894007588 : -899497514;
}

function core_hmac_sha1(llI, llliI) {
    var iil1iI = str2binb(llI);

    if (iil1iI.length > 16) {
        iil1iI = core_sha1(iil1iI, llI.length * chrsz);
    }

    var IlIllI = Array(16);
    var il1i1I = Array(16);

    for (var iI11II = 0; iI11II < 16; iI11II++) {
        IlIllI[iI11II] = iil1iI[iI11II] ^ 909522486;
        il1i1I[iI11II] = iil1iI[iI11II] ^ 1549556828;
    }

    var lI1li1 = core_sha1(IlIllI.concat(str2binb(llliI)), 512 + llliI.length * chrsz);
    return core_sha1(il1i1I.concat(lI1li1), 672);
}

function safe_add(iIII1I, ilil1i) {
    var lI1liI = (iIII1I & 65535) + (ilil1i & 65535);
    var i1i1Ii = (iIII1I >> 16) + (ilil1i >> 16) + (lI1liI >> 16);
    return i1i1Ii << 16 | lI1liI & 65535;
}

function rol(lllii, iI11Ii) {
    return lllii << iI11Ii | lllii >>> 32 - iI11Ii;
}

function str2binb(il1i11) {
    var iil1ii = Array();
    var IlIlli = (1 << chrsz) - 1;

    for (var il1i1i = 0; il1i1i < il1i11.length * chrsz; il1i1i += chrsz) {
        iil1ii[il1i1i >> 5] |= (il1i11.charCodeAt(il1i1i / chrsz) & IlIlli) << 24 - il1i1i % 32;
    }

    return iil1ii;
}

function binb2str(i11ilI) {
    var lil11I = "";
    var Iliii1 = (1 << chrsz) - 1;

    for (var iIiIi = 0; iIiIi < i11ilI.length * 32; iIiIi += chrsz) {
        lil11I += String.fromCharCode(i11ilI[iIiIi >> 5] >>> 24 - iIiIi % 32 & Iliii1);
    }

    return lil11I;
}

function binb2hex(iil1ll) {
    if (hexcase) {
        var lI1lll = "0123456789ABCDEF";
    } else {
        var lI1lll = "0123456789abcdef";
    }

    var iIiII = "";

    for (var iil1lI = 0; iil1lI < iil1ll.length * 4; iil1lI++) {
        iIiII += lI1lll.charAt(iil1ll[iil1lI >> 2] >> (3 - iil1lI % 4) * 8 + 4 & 15) + lI1lll.charAt(iil1ll[iil1lI >> 2] >> (3 - iil1lI % 4) * 8 & 15);
    }

    return iIiII;
}

function binb2b64(iiiliI) {
    var IIIII1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var I1lIlI = "";

    for (var ii1ill = 0; ii1ill < iiiliI.length * 4; ii1ill += 3) {
        var II1iI = (iiiliI[ii1ill >> 2] >> 8 * (3 - ii1ill % 4) & 255) << 16 | (iiiliI[ii1ill + 1 >> 2] >> 8 * (3 - (ii1ill + 1) % 4) & 255) << 8 | iiiliI[ii1ill + 2 >> 2] >> 8 * (3 - (ii1ill + 2) % 4) & 255;

        for (var llI1II = 0; llI1II < 4; llI1II++) {
            if (ii1ill * 8 + llI1II * 6 > iiiliI.length * 32) {
                I1lIlI += b64pad;
            } else {
                I1lIlI += IIIII1.charAt(II1iI >> 6 * (3 - llI1II) & 63);
            }
        }
    }

    return I1lIlI;
}


// a = '1678067697';
// b64_sha1_a = b64_sha1(a);
// console.log(b64_sha1_a);
//
// binb2b64_a = binb2b64(hex_sha1(window.btoa(core_sha1(a))));
// console.log(binb2b64_a);
//
// btoa_a = window.btoa(a);
// console.log(btoa_a);


function safe(timestamp) {
    let a;
    a = window.btoa(timestamp) + ('|') + binb2b64(hex_sha1(window.btoa(core_sha1(timestamp)))) + b64_sha1(timestamp);
    return a;
}


module.exports =
    {
        safe
    };
