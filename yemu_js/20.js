var CryptoJS = require("crypto-js");
var key = "ABC123456789";   // key
var iv = "1234567812345678";  // 初始向量

function encrypt(text) {
    // AES支持三种长度的密钥：128位，192位，256位
    return CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,  // CBC模式
        padding: CryptoJS.pad.Pkcs7 // Pkcs7 填充模式
    })
}

function decrypt(text) {
    var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return result.toString(CryptoJS.enc.Utf8)
}

var text = "xianyuplus";
var encoded = encrypt(text);
console.log(encoded.toString());
console.log(decrypt(encoded));