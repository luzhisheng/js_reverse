catvm.memory.MimeTypeArray = {}

const MimeTypeArray = function MimeTypeArray() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(MimeTypeArray);

catvm.memory.MimeTypeArray.iterator = function values() {
    debugger;
}
catvm.safefunction(catvm.memory.MimeTypeArray.iterator);

Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: 'MimeTypeArray',
        configurable: true,
    },
    [Symbol.iterator]: {
        value: catvm.memory.MimeTypeArray.iterator,
        configurable: true,
    }
})

MimeTypeArray.prototype.item = function item(index) {
    debugger;
    return this[index]
}
catvm.safefunction(MimeTypeArray.prototype.item)

MimeTypeArray.prototype.namedItem = function namedItem(key) {
    debugger;
    return this[key]
}
catvm.safefunction(MimeTypeArray.prototype.namedItem)

MimeTypeArray.prototype.length = 0

for (let pr in MimeTypeArray.prototype) {
    if (typeof (MimeTypeArray.prototype[pr]) != 'function') {
        MimeTypeArray.prototype.__defineGetter__(pr, function () {
                throw new TypeError('Illegal constructor')
            }
        )
    }
}


// 依赖注入
navigator.mimeTypes={}
navigator.mimeTypes.temp=0
for (let pindex=0;pindex<navigator.plugins.length;pindex++){
    var plugin_=navigator.plugins.item(pindex);
    for (let mindex=0;mindex<plugin_.length;mindex++){
        var mimeType_=plugin_.item(mindex)
        if(navigator.mimeTypes[mimeType_.type]==undefined)
        {
            navigator.mimeTypes[navigator.mimeTypes.temp]=mimeType_;
            Object.defineProperty(navigator.mimeTypes,mimeType_.type,{
                value:mimeType_,
                configurable: true
            });
            navigator.mimeTypes.temp++;
        }
    }
}
navigator.mimeTypes.length=navigator.mimeTypes.temp
delete navigator.mimeTypes.temp;

navigator.mimeTypes.__proto__=MimeTypeArray.prototype
navigator.mimeTypes=catvm.proxy(navigator.mimeTypes);