const CryptoJS = require("crypto-js");

function I(X, l) {
    var k = CryptoJS
        , C = X
        , q = k['enc']['Utf8']['parse'](C)
        , v = k.DES.decrypt(l, q, {
        'mode': k['mode']['ECB'],
        'padding': k['pad']['Pkcs7']
    });
    console.log(v);
    return v['toString'](k['enc']['Utf8']);
}

X = "XNQigEGA";
L = "hXjidu7fiaX+zCIK3g4Uj8F1fwIlgQKEHMiYw4KDmw4NT9Xpbs7b1//EL7IbezLAREIvqYZzUHRIK9ZpZmxkx7A/rzQbl+3VbzZaP8dTTaclgzq12BWctvyyMGq2DiQstSzpRSxymQGXL9R8uz+iHiL/MdXfTcYhS9bR+yIJjritl7UYPDsYy5uN2AGzE3oRov+yJIc2C4Uh8eQgHNQD4SUJMr9CUfz/kU3gjuUwkt0Gp3aygJBV1uvtxMCYq2UFGPx6IEto+Kap24JiqVYS/q0vjHftTFQcREIvqYZzUHS4XnOJJbJOqrA/rzQbl+3VWQXcqSkLjfqolh7H0BF7hQ==";

console.log(I(X, L));


function sign(key, data) {
    return I(key, data);
}


module.exports =
    {
        sign
    };
