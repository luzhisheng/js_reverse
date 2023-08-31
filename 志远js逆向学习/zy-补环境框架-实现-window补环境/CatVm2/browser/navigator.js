const Navigator = function Navigator() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Navigator);

Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: 'Navigator',
        configurable: true,
    }
})

Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;
Object.getOwnPropertyDescriptor = function (tag, val) {
    // tag[Symbol.toStringtag]
    if (tag.toLocaleString() == '[object Navigator]') {
        return undefined;
    }
    return Object.getOwnPropertyDescriptor_.apply(this, arguments)
}

////////////////原型-补环境-start////////////////
Navigator.prototype.plugins = []
Navigator.prototype.language = ['zh-CN']
Navigator.prototype.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
////////////////原型-补环境-end//////////////////

// 解决实例可以调用属性，但是原型对象不能调用属性
navigator = {}
navigator.__proto__ = Navigator.prototype
// 遍历原型
for (let prototype_ in Navigator.prototype) {
    // 将所有原型属性值赋值给实例属性值
    navigator[prototype_] = Navigator.prototype[prototype_]
    // hook所有的get属性值，返回报错Illegal constructor
    Navigator.prototype.__defineGetter__(prototype_, function () {
        throw new TypeError('Illegal constructor')
    })

}

navigator = catvm.proxy(navigator);