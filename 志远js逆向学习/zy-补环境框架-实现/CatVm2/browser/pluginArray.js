

const PluginArray =function PluginArray()
{
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(PluginArray);

catvm.memory.PluginArray.iterator = function values(){
    debugger
  
}
catvm.safefunction(catvm.memory.PluginArray.iterator);

Object.defineProperties(PluginArray.prototype,{
    [Symbol.toStringTag]:{
        value:'PluginArray',
        configurable:true,
    },
    [Symbol.iterator]:{
        value:catvm.memory.PluginArray.iterator,
        configurable:true,
    }
})

PluginArray.prototype.item = function item(index){
    debugger
    return this[index]

}
catvm.safefunction(PluginArray.prototype.item)
PluginArray.prototype.namedItem = function namedItem(key){
    debugger
    return this[key]
}
catvm.safefunction(PluginArray.prototype.namedItem)
PluginArray.prototype.refresh = function refresh(){
    debugger
}
catvm.safefunction(PluginArray.prototype.refresh)
PluginArray.prototype.length = 0

for (let pr in PluginArray.prototype) {
    if(typeof (PluginArray.prototype[pr]) != 'function'){
        PluginArray.prototype.__defineGetter__(pr,function(){
            throw new TypeError('Illegal constructor')
        }
        )
    }
    
}

catvm.memory.PluginArray._ = {}
catvm.memory.PluginArray._.__proto__ = PluginArray.prototype
catvm.memory.PluginArray._= catvm.proxy(catvm.memory.PluginArray._)

navigator.plugins = catvm.memory.PluginArray._
