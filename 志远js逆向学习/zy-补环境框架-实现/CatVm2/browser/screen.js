const Screen =function Screen()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Screen);

Object.defineProperties(Screen.prototype,{
    [Symbol.toStringTag]:{
        value:'Screen',
        configurable:true,
    }
})

screen = {}
screen.__proto__ = Screen.prototype

screen = catvm.proxy(screen)