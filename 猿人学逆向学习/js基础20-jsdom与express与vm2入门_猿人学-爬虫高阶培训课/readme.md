# 知识点: 变量污染,环境隔离,

举例：

    function 变量污染(参数) {
        if (!global.key) {
            global.key = 5000
        }
        global.key += Number(参数) + 50
    }

    app.get('/%E5%8F%98%E9%87%8F%E6%B1%A1%E6%9F%93', (req, res) => {
        变量污染(req.query.a)
        res.send(global.key.toString());
    })

执行get请求

    http://localhost:3000/变量污染?a=100

每次请求会叠加上一次请求内容，导致返回错误数据

显然这不是我们期望的结果，我们并不希望全局变量被污染，更希望的是不去改变全局的变量

那么我们有以下几种方案

### 1.对污染的全局变量进行一键缓存清理

    function 缓存清理() {
        _env = ['global', 'clearInterval', 'clearTimeout', 'setInterval', 'setTimeout', 'queueMicrotask', 'performance', 'clearImmediate', 'setImmediate',]
        for (i in global) {
            if (_env.indexOf(i) === -1) {
                delete global[i]
            }
        }
    }

    app.get('/%E5%8F%98%E9%87%8F%E6%B1%A1%E6%9F%932', (req, res) => {
        变量污染(req.query.a)
        res.send(global.key.toString());
        缓存清理()
    })

但是这种情况在并发角度有很大的弊端，大家可以思考一下，如果在一个大并发的业务逻辑下，global.key 在没有计算完成的时候，
或者说没有赋值的时候，进行了下一次计算那么很有可能产生的结果就会混乱。导致我们传入的值跟我们输出的值发生不期待的错误。
那么这个时候，缓存清理这种简单的方法就不行了

### 2.所以就需要用更复杂的方案--->沙箱

什么是沙箱：

沙箱，英文是sandbox，敲程序的应该都听过，或许用过类似理念的只是自己不知道，简单说就是让你的程序运行在一个隔离的环境下，不对外界的其他程序造成影响。沙箱主要是一种安全机制，把一些不信任的代码运行在沙箱之内，不能访问沙箱之外的代码。比如在线编辑器、执行第三方js、vue服务端渲染等，只要是运行不信任的程序，沙箱隔离就会使用到。

简言之，沙箱就是一个独立的js环境，在这个环境里，所有的变量都是独立的，没有办法访问到外界的内容常见的eval和new Function可以提供一个运行外部代码的环境，但是没有解决访问全局的问题

沙箱是绝对安全的么？

并不是，沙箱在理论上是绝对安全的，但是由于实现的各种情况不同，代码的逻辑问题等，几乎不可避免的会存在逃逸漏洞，也就是说沙箱内的代码可能会影响
到外部的内容，甚至于实现权限的跨越。有些安全开发会利用一些安全逃逸的漏洞和特性针对性的制造防御代码。但是一般情况下，我们不必理会，因为这种
对抗已经很难靠规范的逻辑和方法论去处理了。

沙箱逃逸的一些相关知识：https://xz.aliyun.com/t/11859

安装：

    npm install vm2

案例：

    const {VM} = require('vm2');

    function 沙箱运算(参数){
        const vm = new VM();
        result = vm.run(
            `
            if (!global.key) {
                    global.key = 5000
                }
                global.key += Number(参数) + 50
            global.key
            `.replace('参数', 参数))
        return result
    }
    app.get('/%E5%8F%98%E9%87%8F%E6%B1%A1%E6%9F%933', (req, res) => {
        res.send(沙箱运算(req.query.a).toString());
    })

### 那么，nodejs，除了自己处理dom节点，是否有些办法能够用库去处理dom节点，让我们舒服一点呢，答案是，有的，这个库就是神奇的jsdom

安装：

    npm install jsdom

案例：

    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
    console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
    debugger;

    dom.window.top === dom.window;
    dom.window.location.href === "about:blank";

    dom.reconfigure({ windowTop: myFakeTopForTesting, url: "https://example.com/" });

    dom.window.top === myFakeTopForTesting;
    dom.window.location.href === "https://example.com/";

jsdom 缺陷

1. 内存占用极高，相当于开了一个无头浏览器一样
2. 特征点非常多，被检测概率非常大，只要专门去检测这个东西，基本十拿九稳，100%拦截
3. 对某些特殊的API接口支持不好

jsdom 优势

1. 一键补环境，非常方便舒适快捷
2. 可以只利用里面的一部分东西，降低被检测风险
3. 可以配合canvas库实现 canvas的大部分功能。

详情看文档以及更新日志

    https://github.com/jsdom/jsdom/blob/master/Changelog.md
