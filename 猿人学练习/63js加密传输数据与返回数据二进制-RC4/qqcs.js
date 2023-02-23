const CryptoJS = require("crypto-js");
const crypto = require('crypto').webcrypto;

window = global;
global['crypto'] = crypto;

var Qqcs = {
    'xEVab': '0|1|3|4|2',
    'YaKji': '12345678912345678912345678912345',
    'cRGWF': function(O, K) {
        return O < K;
    },
    'MYXEs': function(O, K) {
        return O * K;
    },
    'lzaCv': function(O, K) {
        return O + K;
    },
    'qnZwR': '3|0|4|2|5|1|6',
    'GJoEW': function(O, K) {
        return O instanceof K;
    },
    'cnlES': function(O, K) {
        return O + K;
    },
    'wHMQT': '</td>',
    'KPlxS': '6|3|2|0|1|4|5',
    'wDbRF': '<tr\x20class=\x22odd\x22>',
    'aBCOr': function(y, O) {
        return y(O);
    },
    'uhAav': function(y, O) {
        return y(O);
    },
    'kFJjX': '.data',
    'xNObd': '</tr>',
    'hCaVp': '#page',
    'qromH': function(y, O) {
        return y(O);
    },
    'XpwtN': 'POST',
    'GSDkP': 'binary',
    'TuchL': 'arraybuffer'
};

function s(y) {
    var O = ['0', '1', '3', '4', '2'], K = 0;
    while (true) {
        switch (O[K++]) {
            case '0':
                var z = CryptoJS;
                continue;
            case '1':
                var o = '12345678912345678912345678912345';
                continue;
            case '2':
                return d1['toString']();
            case '3':
                var d0 = z['enc']['Utf8']['parse'](o);
                continue;
            case '4':
                var d1 = z['RC4']['encrypt'](y, d0, {});
                continue;
        }
        break;
    }
}


function j(y) {
    let O = ''
        , K = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (let z = -0x17 * -0x195 + -0x5 * -0x6c7 + 0x202 * -0x23; Qqcs['cRGWF'](z, y); z++) {
        const o = new Uint32Array(0x186a + -0xf76 * 0x1 + -0x8f3);
        window['crypto']['getRandomValues'](o);
        let d0 = o[-0xa0 * 0x1 + 0x220 + -0x180] / (-0x102ce1257 * -0x1 + 0x32a7 * 0x8c8e5 + -0x1bfc5d9bb * 0x1 + (-0x145 * -0x17 + 0x234 * 0x11 + -0x42a6));
        O += K[Math['floor'](Qqcs['MYXEs'](d0, 0x35b + -0x2e * -0x9c + 0x1f2f * -0x1))];
    }
    return Qqcs['lzaCv'](O, 'f');
}


code = s(j(64) + '1');
console.log(code);
atob_code = atob(code);
console.log(atob_code);

function sign(data, types) {
    if (types == 'atob'){
        console.log(data.toString());
        code = s(j(64) + data.toString());
        atob_code = atob(code);
        return atob_code;
    }else if (types == 'btoa') {
        console.log(data.toString());
        return btoa(data.toString())
    }
}


module.exports =
    {
        sign
    };
