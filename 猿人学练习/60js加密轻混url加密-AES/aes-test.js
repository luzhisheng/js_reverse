const CryptoJS = require("crypto-js");


function L(j) {
    var I = '2|3|0|4|1'['split']('|')
        , J = 0xd * -0x4 + 0x1f35 * -0x1 + -0x2db * -0xb;
    while (!![]) {
        switch (I[J++]) {
            case '0':
                var d = Y['enc']['Utf8']['parse'](S);
                continue;
            case '1':
                return D['toString']();
            case '2':
                var Y = CryptoJS;
                continue;
            case '3':
                var S = 'aiding88';
                continue;
            case '4':
                var D = Y['AES']['encrypt'](j, d, {
                    'mode': Y['mode']['ECB'],
                    'padding': Y['pad']['Pkcs7']
                });
                console.log(D);
                continue;
        }
        break;
    }
}


console.log(L('1'));