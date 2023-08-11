window = this;
var location = {};
location.assign = function assign(){
    return 'https://www.baidu.com/'
};
console.log('修改前返回：' + '\n' + location.assign + '')

// 改变自定义的方法检测toString方法
;(() => {
    'use strict';
    const $toString = Function.toString
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)))
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    }

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            'configurable': true,
            'writable': true,
            'value': value
        })
    }

    delete Function.prototype['toString'];// 删除原型链上的toString
    set_native(Function.prototype, 'toString', myToString);// 自己定义一个getter方法
    // 套娃给 toString 方法设置一个 toString
    set_native(Function.prototype.toString, myFunction_toString_symbol, 'function toString(){ [native code] }')
    this.func_set_natvie = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`)
    }
}).call(this);

window.func_set_natvie(location.assign)

console.log('修改后返回：' + '\n' + location.assign + '')