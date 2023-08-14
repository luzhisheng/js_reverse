const Screen = function Screen() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: 'Screen',
        configurable: true,
    }
})
////////////////补环境-start////////////////


////////////////补环境-end//////////////////
screen = {}
screen.__proto__ = Screen.prototype

screen = catvm.proxy(screen)