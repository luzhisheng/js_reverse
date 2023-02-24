const CryptoJS = require("crypto-js");

function I(X, l) {
    var k = CryptoJS
        , C = X
        , q = k['enc']['Utf8']['parse'](C)
        , v = k['AES']['decrypt'](l, q, {
        'mode': k['mode']['ECB'],
        'padding': k['pad']['Pkcs7']
    });
    console.log(q);
    console.log(v);
    return v['toString'](k['enc']['Utf8']);
}


X = "NoGUVXYc";
L = "hPiHP8zbvCXWheyH1CyC0pqd9M+km4uxagKU9I+zJpdwNYyZSFCHAoCimE9qC4iwzQ8Wx78wtJRirE5X6mnG0qUezyWj+8naom/Oen7JfJKAP8fgyHFpUFWx0RoPbXojeTJ2W5UFw6obkOU+pmREaXRO9sbMAd7FSnd5jlXcQijvZwufSvN66NKYnBl6jXv1SUmpQq3lCrnZ8sjxtZqjcYT6mUwdKdKRVEdFm1yx63mnwxgG4YH46MFIXI6WR66SxpJzXC5Fen64rTc4R4S17oI2iZv9zwOnzQ8Wx78wtJTHaqqABL5LZKUezyWj+8na4NdY6EO/LduPLpuG/SohTQ==";

console.log(I(X, L));