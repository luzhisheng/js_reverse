const CryptoJS = require("crypto-js");
let secret_value = 'gRBuPrLd';

let secret = CryptoJS.enc.Utf8.parse(secret_value);

// 将加密结果转换为字符串
encrypted = "dQhIGlAcTdnWU456K3rsppWw0VNONWNuZC3Vm5+lvF8MGUUiQvGHMX6cRwlIgWM9K1Y+RU/AE9ZSin7zATIVEJK8A7spmboKSEA3833MZUOC/H+XmhrTVdwHDKpFhRlcUgaOTOqPql1X0im5TApZNgZDV0ZK3wT/FUxT9GGMT1545vFA0VmqQENhq94DtNiTivJP755tmpEjGCNMOCsPlC9LK51s4lEDBWVppHoUq1VolAhMmJH8+TKXTHbFXYbb1SVBIx2KNyPREP2/oeBv4KWXNiUUjseJK1Y+RU/AE9aoSPRsedoeBJK8A7spmboKOddnNI53/c5r+lQbS7KxsQ==";

// 解密，传入密文，密钥盒向量设置加密与填充模式
let decrypted = CryptoJS.AES.decrypt(encrypted, secret, {
    // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
    mode: CryptoJS.mode.ECB,
    // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
    padding: CryptoJS.pad.Pkcs7
});

console.log(secret);
console.log(decrypted);

// 将解密结果转换为utf8字符串
d = CryptoJS.enc.Utf8.stringify(decrypted);

console.log(d);
