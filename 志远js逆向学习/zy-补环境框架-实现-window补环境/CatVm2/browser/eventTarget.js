const EventTarget = function EventTarget() {

};
catvm.safefunction(EventTarget);

Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: 'EventTarget',
        configurable: true,
    }
});

// 添加事件
EventTarget.prototype.addEventListener = function addEventListener(type, callback) {
    if (!(type in catvm.memory.listeners)) {
        catvm.memory.listeners[type] = []
    }
    catvm.memory.listeners[type].push(callback)
};
catvm.safefunction(EventTarget.prototype.addEventListener);

// 触发事件
EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    debugger
};
catvm.safefunction(EventTarget.prototype.dispatchEvent);

// 删除事件
EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger
}
catvm.safefunction(EventTarget.prototype.removeEventListener);