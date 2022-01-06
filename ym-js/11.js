const CryptoJS = require("crypto-js");

let value = "123456"; //待加密的字符串
let secret_value = "af25-87hk-a35v-5"; //密匙 16位
let iv_value = "af25-87hk-a35v-5"; // 初始向量 initial vector 16位

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

// 解密，传入密文，密钥盒向量设置加密与填充模式
let decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
    iv: iv,
    // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
    mode: CryptoJS.mode.CBC,

    // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
    padding: CryptoJS.pad.Pkcs7
});

// 将解密结果转换为utf8字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

console.log(value);
console.log(encrypted);
console.log(decrypted);