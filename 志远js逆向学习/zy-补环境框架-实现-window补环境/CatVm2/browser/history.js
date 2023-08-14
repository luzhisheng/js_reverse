const History = function History() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(History);

Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: 'History',
        configurable: true,
    }
})

////////////////原型-补环境-start////////////////
History.prototype.back = function back() {
}
catvm.safefunction(History.prototype.back);
////////////////原型-补环境-end//////////////////
////////////////实例-补环境-start////////////////
history = {}
history.__proto__ = History.prototype
////////////////实例-补环境-end//////////////////
history = catvm.proxy(history)