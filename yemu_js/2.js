let value = 'hello';
// console.log(btoa(value));
console.log(Buffer.from(value).toString('base64'));

// 借用第三方库实现，例如 CryptoJS,output，
const CryptoJS = require("crypto-js");
let value1 = "hello";
let trans = CryptoJS.enc.Utf8.parse(value1);
let encrypted = CryptoJS.enc.Base64.stringify(trans);
console.log(encrypted);

// 自己编写一套base64编码算法和解码算法

function Base64() {
    this.encode = function (val) {
        // 编码逻辑
        return val
    };
    this.decode = function (val) {
        // 解码裸机
        return val
    }

}

encrypt = new Base64();
console.log(encrypt.encode('encode'));