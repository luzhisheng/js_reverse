const PluginArray = function PluginArray() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(PluginArray);

catvm.memory.PluginArray.iterator = function values() {
    debugger;
}
catvm.safefunction(catvm.memory.PluginArray.iterator);

Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: 'PluginArray',
        configurable: true,
    },
    [Symbol.iterator]: {
        value: catvm.memory.PluginArray.iterator,
        configurable: true,
    }
})

PluginArray.prototype.item = function item(index) {
    debugger;
    return this[index]
}
catvm.safefunction(PluginArray.prototype.item)

PluginArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key]
}
catvm.safefunction(PluginArray.prototype.namedItem)

PluginArray.prototype.refresh = function refresh() {
    debugger;
}
catvm.safefunction(PluginArray.prototype.refresh)

PluginArray.prototype.length = 0

for (let pr in PluginArray.prototype) {
    if (typeof (PluginArray.prototype[pr]) != 'function') {
        PluginArray.prototype.__defineGetter__(pr, function () {
                throw new TypeError('Illegal constructor')
            }
        )
    }
}

catvm.memory.PluginArray._={}

if(catvm.memory.PluginArray.temp!=undefined){
    for (let index=0;index<catvm.memory.PluginArray.temp.length;index++){
        var plugintemp=catvm.memory.Plugin.new(catvm.memory.PluginArray.temp[index]);
        catvm.memory.PluginArray._[index]=plugintemp;
        Object.defineProperty(catvm.memory.PluginArray._,plugintemp.name,{
            value:plugintemp,
            configurable: true
        });
        catvm.memory.PluginArray._.length=catvm.memory.PluginArray.temp.length;
    }
}
catvm.memory.PluginArray._.__proto__=PluginArray.prototype
navigator.plugins=catvm.memory.PluginArray._
//依赖注入
catvm.memory.PluginArray._=catvm.proxy(catvm.memory.PluginArray._)
