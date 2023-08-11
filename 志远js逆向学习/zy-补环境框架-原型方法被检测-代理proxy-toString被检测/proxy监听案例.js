window = this;
var navigator = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
};


window = new Proxy(window, {
    // obj 那个对象， prop哪个属性，value设置的值
    set(obj, prop, value){
        console.log('set', obj, prop, value);
        return Reflect.set(...arguments);
    },
    get(obj, prop, receiver){
        console.log('get', obj, prop, receiver);
        return target[prop];
    }
});

window.ayf1 = 111;
window.ayf2 = 222;
window.ayf3 = 333;
window.ayf4 = window.ayf3
console.log('结果', window)
