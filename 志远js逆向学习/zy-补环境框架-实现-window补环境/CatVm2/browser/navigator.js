const Navigator =function Navigator()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Navigator);

Object.defineProperties(Navigator.prototype,{
    [Symbol.toStringTag]:{
        value:'Navigator',
        configurable:true,
    }
})
Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;
Object.getOwnPropertyDescriptor = function(tag, val){
    // tag[Symbol.toStringtag]
    if(tag.toLocaleString() == '[object Navigator]'){
        return undefined;
    }
    return Object.getOwnPropertyDescriptor_.apply(this,arguments)
}

Navigator.prototype.plugins = []
Navigator.prototype.language = ['zh-CN','zh']
Navigator.prototype.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
navigator = {}
navigator.__proto__ = Navigator.prototype
for (let prototype_ in Navigator.prototype) {
    navigator[prototype_] = Navigator.prototype[prototype_]
    Navigator.prototype.__defineGetter__(prototype_,function(){
        throw new TypeError('Illegal constructor')
    })
    
}

navigator = catvm.proxy(navigator)