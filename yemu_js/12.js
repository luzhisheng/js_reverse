const CryptoJS = require("crypto-js");

// 编码
let value = "https://www.sfhfpc.com/";
let trans = CryptoJS.enc.Utf8.parse(value);
let encrypted = CryptoJS.enc.Base64.stringify(trans);

// 解码
let trans_encypted = CryptoJS.enc.Base64.parse(encrypted);
let decrypted = trans_encypted.toString(CryptoJS.enc.Utf8);

console.log(value);
console.log(encrypted);
console.log(decrypted);

console.log("-----------1111111111111111-----------");
// md5
let value1 = "messa]ge";
let encrypyted2 = CryptoJS.MD5(value1);
console.log(encrypyted2.toString());

console.log("-----------22222222222222222-----------");
// 加密可以切换
let hash = CryptoJS.SHA256(value1);
console.log(value1);
console.log(hash.toString());
console.log(hash.toString(CryptoJS.enc.Hex));
console.log(hash.toString(CryptoJS.enc.Base64));