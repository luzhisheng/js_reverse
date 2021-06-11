const express = require('express');
const app = express();
const sum = require("./sum");
var bodyParser = require('body-parser');
app.use(bodyParser());

app.post('/get_num', function (req, res) {
   let result = req.body;
    console.log("result", result);
    let a = parseInt(result.a);
    let b = parseInt(result.b);
    result = sum.add(a, b);
    res.send(result.toString());
});

app.location(3000, () => {
    console.log("开启服务，端口3000")
});


function start_debug() {
    "debugger";
}

console.log("--------1");
console.log("--------2");
console.log("--------3");

while (i < 10){
    start_debug();
    i ++;
    console.log("i:", i);
}

console.log("--------4");
console.log("--------5");
console.log("--------6");

eval + "";

window.__cr_eval = window.eval;
var myeval = function (src) {
    console.log("======== eval begin: length" + src.length + ",caller=" + (myeval.caller && myeval.caller.name) + "===========");
    console.log(">>>>>>>> eval injected: " + document.location + " <<<<<<<<<<<<<");
    console.log(src);
    console.log("============== eval end ==================");
    return window.__cr_eval(src)
};
myeval.toString = function(){return "function eval() { [native code] }"};
Object.defineProperty(window, 'eval', {value: myeval});

//stringify()用于从一个对象解析出字符串
var my_stringify = JSON.stringify;
JSON.stringify = function (params) {
    console.log("yemu", params);
    return my_stringify(params);
};
//parse用于从一个字符串中解析出json对象
var my_parse = JSON.parse;
JSON.parse = function (params) {
    console.log("yemu", params);
    return my_parse(params);
};
