window = this

const Window =function Window()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Window);

window,setTimeout = function setTimeout(callback,delay){
    typeof(callback) === 'function' ? callback() : undefined
    typeof(callback) === 'string' ? eval(callback) : undefined
    return 0
}
catvm.safefunction(window.setTimeout );
Window.prototype.PERSISTENT = 1
Window.prototype.TEMPORARY = 0
window.open =function open(){}
window.chrome = catvm.proxy(class chrome{})
window.DeviceOrientationEvent = function DeviceOrientationEvent(){}
window.DeviceMotionEvent = function DeviceMotionEvent(){}
catvm.safefunction(window.open);
catvm.safefunction(window.DeviceOrientationEvent);
catvm.safefunction(window.DeviceMotionEvent);

window.localStorage = class localStorage{}
window.localStorage.getItem = function getItem(){}
window.localStorage.setItem = function getItem(){}
catvm.safefunction(window.localStorage.getItem );
catvm.safefunction(window.localStorage.setItem );
catvm.proxy(window.localStorage)
Window.prototype.__proto__ = windowProperties.prototype;
window.__proto__ = Window.prototype

Object.defineProperties(Window.prototype,{
    [Symbol.toStringTag]:{
        value:'Window',
        configurable:true,
    }
})

window = catvm.proxy(window)
