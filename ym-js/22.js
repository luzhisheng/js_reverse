var CryptoJS = require("crypto-js");
var key = "ABC123456789";   // key

function encrypt(text) {
    // AES支持三种长度的密钥：128位，192位，256位
    return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,  // ECB模式
        padding: CryptoJS.pad.Pkcs7 // Pkcs7 填充模式
    })
}

function decrypt(text) {
    var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return result.toString(CryptoJS.enc.Utf8)
}

var text = "xianyuplus";
var encoded = encrypt(text);
console.log(encoded.toString());
console.log(decrypt(encoded));