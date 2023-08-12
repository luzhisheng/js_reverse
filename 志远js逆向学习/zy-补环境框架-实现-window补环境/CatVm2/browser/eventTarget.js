const EventTarget = function EventTarget() {

}
//方法toString保护
catvm.safefunction(EventTarget);

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: 'EventTarget',
        configurable: true,
    }
});

EventTarget.prototype.addEventListener = function addEventListener(type, callback) {
    if (!(type in catvm.memory.listeners)) {
        catvm.memory.listeners[type] = []
    }
    catvm.memory.listeners[type].push(callback)
}
//方法toString保护
catvm.safefunction(EventTarget.prototype.addEventListener);

EventTarget.prototype.dispatchEvent = function dispatchEvent() {

}
//方法toString保护
catvm.safefunction(EventTarget.prototype.dispatchEvent);

EventTarget.prototype.removeEventListener = function removeEventListener() {

}
//方法toString保护
catvm.safefunction(EventTarget.prototype.removeEventListener);