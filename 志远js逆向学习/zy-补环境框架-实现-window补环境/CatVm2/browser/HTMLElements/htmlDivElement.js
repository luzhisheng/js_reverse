const HtmlDivElement =function HtmlDivElement()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(HtmlDivElement);

Object.defineProperties(HtmlDivElement.prototype,{
    [Symbol.toStringTag]:{
        value:'HtmlDivElement',
        configurable:true,
    }
})

catvm.memory.htmlElements['div'] = function(){
    const div = new (function(){})

    div.align = ''

    div.__proto__ = HtmlDivElement.prototype
    return div
}