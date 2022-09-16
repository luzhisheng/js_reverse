const CryptoJS = require("crypto-js");

encrypted = 'jdGUW9raTa4ekejTjLxrcu3q9Ir30gz8VJeCwifzyc5JP8m2vtBqW0HzNzJ9lCLd';
secret = {
    "words": [
        895574833,
        878916963,
        875573601,
        943076149
    ],
    "sigBytes": 16
};

// 解密，传入密文，密钥盒向量设置加密与填充模式
let decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
    // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
    mode: CryptoJS.mode.ECB,

    // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
    padding: CryptoJS.pad.Pkcs7
});

// 将解密结果转换为utf8字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

console.log(encrypted);
console.log(decrypted);