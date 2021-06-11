// 函数自动执行
(function auto() {
    console.log("自动执行")
})();

// 函数自动执行2
// $(function auto() {
//     console.log("自动执行");
// });

function second() {
    console.log(first())
}
second();
function first() {
    return "hi ai"
}

function say() {
    return "定义函数"
}

var say1= function(){
    return "定义函数"
};

var obj = {
    "say": function () {
        return "对象内的成员"
    }
};

console.log(say());
console.log(obj['say']());