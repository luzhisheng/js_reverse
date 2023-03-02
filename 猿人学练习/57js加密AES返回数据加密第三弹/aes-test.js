const CryptoJS = require("crypto-js");

function I(X, l) {
    var k = CryptoJS
        , C = X
        , q = k['enc']['Utf8']['parse'](C)
        , v = k.DES.decrypt(l, q, {
        'mode': k['mode']['ECB'],
        'padding': k['pad']['Pkcs7']
    });
    return v['toString'](k['enc']['Utf8']);
}


X = "lVyahWFq";
L = "ohKADHk8zYXczliObcRsvE70kmTI2RiN94ZOxQgxbhQ7pueMCCcH7mnDZU2Tj2KwP0cqYgzsflRzt/Qls+efrZtGFaLomQw24v9FvIOso6lMYKrKtw5qP3b8d13G1tQXIuHILMMXDSrtUjX3vV+nUl7lV8KebHccY0STT0un12bMkODx2FTcv93sn2UHoBMTIWBM3CY+cQpOYEYB7iovImwasNLA5vsYxgntDuyxubvP5oi7FZPvHqtThy3gw9ivk+MyCBpW21Gr2aF/Wz/BHA10B5alDqSzP0cqYgzsflQCxHiUkgI+FptGFaLomQw2T1hUihgNUvLYnFuUWRJ6sw==";

console.log(I(X, L));