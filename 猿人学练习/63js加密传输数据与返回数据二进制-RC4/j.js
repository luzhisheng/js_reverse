const CryptoJS = require("crypto-js");
const getRandomValues = require('get-random-values')

function j(y) {
    let O = '';
    K = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (let z = 0; z < y; z++) {
        const buffer = new Uint32Array(1);
        console.log(buffer);
        CryptoJS.getRandomValues(buffer);
        let d0 = o[0] / 4294967296;
        O += K[Math.floor(d0 * 52)];
    }
    return O + 'f';
}

console.log(j(64));
