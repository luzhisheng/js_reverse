const Storage = function Storage() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Storage);

Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: 'Storage',
        configurable: true,
    }
})

////////////////原型-补环境-start////////////////
Storage.prototype.length = 0;

// 接口的 clear() 方法清除给定 Storage 对象中存储的所有键。
Storage.prototype.clear = function clear() {
    debugger
    let temp = Object.keys(this)
    for (let key = 0; key < temp.length; key++) {
        delete this[key]
    }
};
catvm.safefunction(Storage.prototype.clear);

// 接口的 getItem() 方法，当传递一个键名时，将返回该键的值；而如果在给定的 Storage 对象中不存在该键，则返回 null。
Storage.prototype.getItem = function getItem(k) {
    debugger
    return this[k]
};
catvm.safefunction(Storage.prototype.getItem);

// 接口的 key() 方法，当传递一个数字 n 时，返回给定存储对象中第 n 个键的名称。键的顺序取决于用户代理，所以你不应该依赖它。
Storage.prototype.key = function key(index) {
    debugger
    return Object.keys(this)[index]
};
catvm.safefunction(Storage.prototype.key);

// 接口的 removeItem() 方法，当传递一个键名时，将从给定的 Storage 对象中删除该键（如果它存在）。
Storage.prototype.removeItem = function removeItem(k) {
    debugger
    delete this[k]
};
catvm.safefunction(Storage.prototype.removeItem);

// 接口的 setItem() 方法，当传递了一个键名和值时，将会把键名添加到给定的 Storage 对象中，如果键名已存在，则更新其对应的值。
Storage.prototype.setItem = function setItem(k, v) {
    debugger
    this[k] = v
};
catvm.safefunction(Storage.prototype.setItem);

// 方法将一个对象的属性绑定到一个函数上，由于length不起作用
Storage.prototype.__defineGetter__('length', function length() {
    return Object.keys(this).length
})
////////////////原型-补环境-end//////////////////

////////////////实例-补环境-start////////////////
localStorage = {}
localStorage.__proto__ = Storage.prototype
localStorage = catvm.proxy(localStorage)

sessionStorage = {}
sessionStorage.__proto__ = Storage.prototype
sessionStorage = catvm.proxy(sessionStorage)
////////////////实例-补环境-end//////////////////
