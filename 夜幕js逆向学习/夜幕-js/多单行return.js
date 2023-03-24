// 单行return，这很正常
function _tokeVale(v) {
    let _token = v.join("-");
    return _token
}

console.log(_tokeVale([56, 78, 33]));

// 多行 return，return 处给了多个值，但真正的返回的只有最后一个
function first() {
    console.log("diao xi wo,wo hen sao qi");
    return "first"
}

let second = function first() {
    console.log("diao xi wo,wo hen sao qi");
    return "second"
};

function _tokenValue(v) {
    // 假装这里对着v值一顿转换he操作
    let _token = v.join("-");
    return first(), second(), _token;
}
console.log(_tokenValue([56, 78, 33]));

console.log("----------------");

// 多行 return
// 跟上面是一样，只不过换了一个案例对比，依旧只返回最后一个
function first() {
    console.log("diao xi wo,wo hen sao qi")
    return "first";
}

let second1 = function () {
    console.log("diao xi wo,wo hen sao qi");
    return "second1";
};

function _tokenValue(v) {
    // 假装这里对着v值一顿转换he操作
    let _token = v.join("-");
    return first(), _token, second1();
}

console.log(_tokenValue([56, 78, 33]));