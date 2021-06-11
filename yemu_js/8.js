// 几乎每天都在逆向的时候看到混淆

// 16进制混淆
let objects = {
    "\x66\x69\x6c\x74\x65\x72": function () {
        // 假装这里一顿操作
        return "\x6c\x74\x65";
    }
};

// unicode 混淆
let objects1 = {
    "\u0073\u0069\u0067\u006e\u0056\u0061\u006c\u0075\u0065": function () {
        // 假装这里一顿操作
        return "ENG987KJS732njH7273NH23";
    }
};

// 数组混淆，将字符串放到数组中，通过下标访问
let values = ["sign", "publicKey", "Base64", "encrypt", "toString", "decode", "atob", "btoa"];
let url = "http://www.sfhfpc.com/";
values[0] = "SI209U+230D86+7NB=";
let full = url + "?" + values[0] + "_";
console.log(values[0]);
console.log(full);

// 变量名硬混淆
let _sh78x6 = ["sign", "publicKey", "Base64", "encrypt", "toString", "decode", "atob", "btoa"];
let _ac87x5 = "http://www.sfhfpc.com/";
_sh78x6[0] = "SI209U+230D86+7NB=";
let _ac87x6 = _ac87x5 + "?" + _sh78x6[0] + "_";
console.log(_sh78x6[0]);
console.log(_ac87x6);

// 数组+ 16进制+ Unicode+ 变量名混淆
let _sh78x61 = ["\x73\x69\x67\x6e", "\x70\x75\x62\x6c\x69\x63\x4b\x65\x79",
"\x42\x61\x73\x65\x36\x34", "\x5f\x61\x63\x38\x37\x78\x35"];
_sh78x61[3] = "\u0073\u0069\u0067\u006e\u0056\u0061\u006c\u0075\u0065";
_sh78x61[0] = "\u0073\u0069\u0067\u006e\u0056\u0061\u006c\u0075\u0065";
let _ac87x61 = _sh78x61[3] + "\x3f" + _sh78x61[0] + "\x5f";
function _$BCD() {
    // 假装这里很多操作
    return _sh78x61[4]
}
console.log(_sh78x61[0]);
console.log(_ac87x61);
console.log(_$BCD);