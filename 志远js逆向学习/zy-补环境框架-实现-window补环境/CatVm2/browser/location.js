const Location = function Location() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: 'Location',
        configurable: true,
    }
})
////////////////原型-补环境-start////////////////

////////////////原型-补环境-end//////////////////
////////////////实例-补环境-start////////////////
location = {}
location.__proto__ = Location.prototype
location.href = ''
////////////////实例-补环境-end//////////////////
location = catvm.proxy(location)