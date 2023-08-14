window = this

const Window = function Window() {
    // Window 是不能被new的，但是这样处理容易被检测，通过堆栈就可以检测到
    throw new TypeError('Illegal constructor')
};
catvm.safefunction(Window);

window, setTimeout = function setTimeout(callback, delay) {
    // x 有可能是方法，也有可能是文本
    // 如果是个方法，执行这个方法
    typeof (callback) === 'function' ? callback() : undefined;
    // 如果是个字符串，用eval执行
    typeof (callback) === 'string' ? eval(callback) : undefined;
    // 正确的是生成uuid，并且保存到内存
    return 0
};
catvm.safefunction(window.setTimeout);

Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
window.open = function open() {
};
window.chrome = catvm.proxy(class chrome {
});
window.DeviceOrientationEvent = function DeviceOrientationEvent() {
};
window.DeviceMotionEvent = function DeviceMotionEvent() {
};
catvm.safefunction(window.open);
catvm.safefunction(window.DeviceOrientationEvent);
catvm.safefunction(window.DeviceMotionEvent);

window.localStorage = class localStorage {
};
window.localStorage.getItem = function getItem() {
};
window.localStorage.setItem = function getItem() {
};
catvm.safefunction(window.localStorage.getItem);
catvm.safefunction(window.localStorage.setItem);
catvm.proxy(window.localStorage);
Window.prototype.__proto__ = windowProperties.prototype;
window.__proto__ = Window.prototype;

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: 'Window',
        configurable: true,
    }
});

window = catvm.proxy(window);
