const CryptoJS = require("crypto-js");

function f_v(aes_value, secret_iv) {
    let value = aes_value;
    let secret_value = secret_iv; //密匙 16位
    let iv_value = secret_iv; // 初始向量 initial vector 16位

    // 密匙和向量处理
    let secret = CryptoJS.enc.Utf8.parse(secret_value);
    let iv = CryptoJS.enc.Utf8.parse(iv_value);

    // 加密
    let encrypted = CryptoJS.AES.encrypt(value, secret, {
        iv: iv,
        // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
        mode: CryptoJS.mode.CBC,

        // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
        padding: CryptoJS.pad.Pkcs7
    });

    // 将加密结果转换为字符串
    encrypted = encrypted.toString();
    return encrypted
}


function get_v(aes_value, secret_iv) {
    var v = f_v(aes_value, secret_iv);
    return v
}

let aes_value = "3|265m281,265d281,265d281,265u281,265u281"; //待加密的字符串
let secret_iv = "65a8205065a82050"; //密匙 16位
console.log(get_v(aes_value, secret_iv));


module.exports =
    {
        get_v
    };
