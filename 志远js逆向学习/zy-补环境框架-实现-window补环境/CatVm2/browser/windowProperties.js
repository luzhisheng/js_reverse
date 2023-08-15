const windowProperties = function windowProperties() {

}
catvm.safefunction(windowProperties);

Object.defineProperties(windowProperties.prototype, {
    [Symbol.toStringTag]: {
        value: 'windowProperties',
        configurable: true,
    }
})
windowProperties.prototype.__proto__ = EventTarget.prototype;