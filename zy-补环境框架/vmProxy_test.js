window = this;

// 定义名字
Object.defineProperties(window, {
    [Symbol.toStringTag]:{
        value: "window",
        configurable: true
    }
});


function vmProxy(o){
    return  new Proxy(window, {
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
}

// 创建对象的方法
// object.create({});
// class window{};
// function window(){};new window;

window = vmProxy(window);

// navigator = {};
// navigator = vmProxy(navigator);
//
// document = {};
// document = vmProxy(document);

location = {};
location.reload = function reload(){

};

location = vmProxy(location);
console.log(location.reload+'');

