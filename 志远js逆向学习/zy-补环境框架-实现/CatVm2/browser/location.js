const Location =function Location()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Location);

Object.defineProperties(Location.prototype,{
    [Symbol.toStringTag]:{
        value:'Location',
        configurable:true,
    }
})

location = {}
location.__proto__ = Location.prototype
location.href = ''

location = catvm.proxy(location)