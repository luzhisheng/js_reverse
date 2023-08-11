window = this;

// 更改window名字,因为node环境中默认是global
Object.defineProperties(window, {
    [Symbol.toStringTag]:{
        value: "window",
        configurable: true
    }
});

function vmProxy(o){
    return new Proxy(o, {
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
}

navigator = vmProxy(class navigator{})
document = vmProxy(class document{})
location = vmProxy(class location{})
window = vmProxy(window)
