#补环境框架

调试框架要有封装的思想，功能单一，可扩展性强，js调试框架，监控所有的环境代理，在自己伪造的环境代理，任意代理，包座代理不会被检测，某些对象不能完美被伪造利用谷歌开源浏览器，进行修改内核代码.
    
## 环境被检测
    
检测tostring方法，检测node环境，基于原型连的检测，基于dom环境的检测
    
**检测举例 Object.getOwnPropertyDescriptor**

静态方法返回一个对象，该对象描述给定对象上特定属性（即直接存在于对象上而不在对象的原型链中的属性）的配置。返回的对象是可变的，但对其进行更改不会影响原始属性的配置。

在node中运行Object.getOwnPropertyDescriptor
```javascript
navigator = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
};

const descriptor1 = Object.getOwnPropertyDescriptor(navigator, 'userAgent');
console.log(descriptor1);
```
会出现

    {
      value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
      writable: true,
      enumerable: true,
      configurable: true
    }
    
浏览器中运行，这里打印的 undefined，说明再浏览器中是拿不到这个值。

![debugger](../../img/63.png)

由于node环境中会被检测到，这样就需要hook`getOwnPropertyDescriptor`方法
```javascript
navigator = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
};

Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;

// hook
Object.getOwnPropertyDescriptor = function (o,p) {
    // 判断检测的对象是navigator就返回空
    if(navigator.toString() == '[object Navigator]'){
        return undefined;
    }
    // 不是就正常返回
    Object.getOwnPropertyDescriptor_.apply(this, arguments)
};

const descriptor1 = Object.getOwnPropertyDescriptor(navigator, 'userAgent');
console.log(descriptor1);
```
## Proxy 代理是什么

    js代码中读了 window.ayf 现在我需要拦截代码
    
Proxy 也就是代理，可以帮助我们完成很多事情，例如对数据的处理，对构造函数的处理，对数据的验证，说白了，
就是在我们访问对象前添加了一层拦截，可以过滤很多操作，而这些过滤，由你来定义。

    https://www.jianshu.com/p/77eaaf34e732
    
官方文档

    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    
我们监听window对象 set

    window = this;
    
    window = new Proxy(window, {
        // obj 那个对象， prop哪个属性，value设置的值
        set(obj, prop, value){
                console.log(obj, prop, value);
                return Reflect.set(...arguments);
            }
    });
    
    window.ayf = 123;

打印输出

    {} ayf 123
    
我们监听window对象 get

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
    
打印输出

    {} ayf 123
    { ayf: 123 } ayf { ayf: 123 }
    { ayf: 123 } aaa 123
    
关于检测后代理的检测不到先代理，简单理解事先开启外挂在开启游戏，游戏就检测不到外挂，先开游戏在开启外挂，游戏已经
加载了外挂，就会拦截你的外挂

以此类推设置其他的对象

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
    
    navigator = {};
    navigator = vmProxy(navigator);
    
    document = {};
    document = vmProxy(document);
    
    location = {};
    location = vmProxy(location);
    
    navigator.ayf = 123;
    navigator.aaa = navigator.ayf;

打印

    Object [window] {} ayf 123
    Object [window] {} ayf 123
    Object [window] { ayf: 123 } Symbol(nodejs.util.inspect.custom) Object [window] { ayf: 123 }
    Object [window] { ayf: 123 } Symbol(Symbol.toStringTag) Object [window] { ayf: 123 }
    Object [window] { ayf: 123 } Symbol(Symbol.iterator) Object [window] { ayf: 123 }
    Object [window] { ayf: 123 } ayf Object [window] { ayf: 123 }
    Object [window] { ayf: 123 } ayf Object [window] { ayf: 123 }
    Object [window] { ayf: 123 } aaa 123
    Object [window] { ayf: 123 } aaa 123

