window = this;

// 后代理的检测不到先代理
window = new Proxy(window, {
    set(obj, prop, value) {
        // obj 那个对象， prop哪个属性，value设置的值
        console.log(obj, prop, value);
        return Reflect.set(...arguments);
    },
    get: function (target, property, receiver) {
        // obj 那个对象， prop哪个属性，value设置的值
        console.log(target, property, receiver);
        return target[property];
    }
});

window.ayf = 123;
window.aaa = window.ayf;
