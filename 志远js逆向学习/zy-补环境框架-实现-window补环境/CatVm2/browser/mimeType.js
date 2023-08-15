catvm.memory.MimeType = {}

const MimeType = function MimeType() {
    throw new TypeError('Illegal constructor')
}
catvm.safefunction(MimeType);

Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: 'MimeType',
        configurable: true,
    }
})

MimeType.prototype.description = ''
MimeType.prototype.enabledPlugin = null
MimeType.prototype.suffixes = ''
MimeType.prototype.type = 0

for (let pr in MimeType.prototype) {
    if (typeof (MimeType.prototype[pr]) != 'function') {
        MimeType.prototype.__defineGetter__(pr, function () {
                return this[pr]
            }
        )
    }
}

// 保存到内存 因为navigator.plugins存在多个，后期添加直接new一个就可以了
catvm.memory.MimeType.new = function (data, initPlugin) {
    let mimeType = {}

    if (data != undefined) {
        mimeType.description = data.description
        mimeType.enabledPlugin = initPlugin
        mimeType.suffixes = data.suffixes
        mimeType.type = data.type
    }
    mimeType.__proto__ = MimeType.prototype
    return mimeType
}