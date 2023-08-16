catvm.memory.Plugin = {}

const Plugin = function Plugin() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(Plugin);

//
catvm.memory.Plugin.iterator = function values() {
    debugger;
    return {
        next: function () {
            if (this.index_ == undefined) {
                this.index_ = 0
            }
            let temp = this.self_[this.index_]
            this.index_++
            if (temp != undefined) {
                return {done: false, value: temp}
            } else {
                return {done: true, value: undefined}
            }
        },
        self_: this,
    }
}
catvm.safefunction(catvm.memory.Plugin.iterator);

Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: 'Plugin',
        configurable: true,
    },
    [Symbol.iterator]: {
        value: catvm.memory.Plugin.iterator,
        configurable: true,
    }
})

////////////////原型-补环境-start////////////////
// 如果实例上的属性和原型上的属性名相同，值按照实例上的属性值
Plugin.prototype.description = ''
Plugin.prototype.filename = ''
Plugin.prototype.name = ''
Plugin.prototype.length = 0

Plugin.prototype.item = function item(index) {
    debugger;
    return this[index]
}
catvm.safefunction(Plugin.prototype.item);
Plugin.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key]
}
catvm.safefunction(Plugin.prototype.namedItem);

for (let pr in Plugin.prototype) {
    if (typeof (Plugin.prototype[pr]) != 'function') {
        Plugin.prototype.__defineGetter__(pr, function () {
                throw new TypeError('Illegal constructor')
            }
        )
    }

}
////////////////原型-补环境-end//////////////////

// 保存到内存 因为navigator.plugins存在多个，后期添加直接new一个就可以了
// {description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeType:[]}
catvm.memory.Plugin.new = function(data){
    let plugin = {}

    if(data != undefined){
        plugin.description = data.description
        plugin.filename = data.filename
        plugin.name = data.name

        if(data.MimeTypes != undefined){
            for (let mtindex = 0; mtindex < data.MimeTypes.length; mtindex++) {
                var mimeTypedata = data.MimeTypes[mtindex];
                var mimeType = catvm.memory.MimeType.new(mimeTypedata,plugin)
                plugin[mtindex] = mimeType
                //   plugin[mimeType.type] = mimeType
                Object.defineProperty(plugin,mimeType.type,{
                    value:mimeType,
                    configurable: true
                });

            }}
        plugin.length = data.MimeTypes.length
    }
    plugin.__proto__ = Plugin.prototype

    return plugin
}