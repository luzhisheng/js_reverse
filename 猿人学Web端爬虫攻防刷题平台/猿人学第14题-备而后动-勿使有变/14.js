window = this;

catvm = {};

// 补环境的自定义方法，通过toString方法被检测
(() => {
    'use strict';
    const $toString = Function.toString
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)))
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toString.call(this)
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            'configurable': true,
            'writable': true,
            'value': value
        })
    }

    delete Function.prototype['toString'];// 删除原型链上的toString
    set_native(Function.prototype, 'toString', myToString);// 自己定义一个getter方法
    // 套娃给 toString 方法设置一个 toString
    set_native(Function.prototype.toString, myFunction_toString_symbol, 'function toString(){ [native code] }')
    catvm.safefunction = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [native code] }`)
    }
}).call(this);

const Navigator = function Navigator() {
    throw new TypeError('Illegal constructor')
};

catvm.safefunction(Navigator);

Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: 'Navigator',
        configurable: true,
    }
});

Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;
Object.getOwnPropertyDescriptor = function (tag, val) {
    // tag[Symbol.toStringtag]
    if (tag.toLocaleString() == '[object Navigator]') {
        return undefined;
    }
    return Object.getOwnPropertyDescriptor_.apply(this, arguments)
};

////////////////原型-补环境-start////////////////
Navigator.prototype.appCodeName = "Mozilla";
Navigator.prototype.appName = "Netscape";
Navigator.prototype.appVersion = "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
Navigator.prototype.connection = {onchange: null, effectiveType: '3g', rtt: 300, downlink: 1.3, saveData: false};
Navigator.prototype.cookieEnabled = true;
Navigator.prototype.doNotTrack = null;
Navigator.prototype.geolocation = {};
Navigator.prototype.hardwareConcurrency = 8;
Navigator.prototype.language = "zh-CN";
Navigator.prototype.languages = ['zh-CN', 'zh', 'en'];
Navigator.prototype.maxTouchPoints = 0;
Navigator.prototype.mediaCapabilities = {};
Navigator.prototype.mediaSession = {metadata: null, playbackState: 'none'};
Navigator.prototype.mimeTypes = {0: 'MimeType', 1: 'MimeType', 'application/pdf': 'MimeType', 'text/pdf': 'MimeType', length: 2};
Navigator.prototype.onLine = true;
Navigator.prototype.permissions = {};
Navigator.prototype.platform = "Win32";
Navigator.prototype.plugins = "";
Navigator.prototype.product = "Gecko";
Navigator.prototype.productSub = "20030107";
Navigator.prototype.userActivation = {hasBeenActive: false, isActive: false};
Navigator.prototype.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
Navigator.prototype.vendor = "Google Inc.";
Navigator.prototype.vendorSub = "";
Navigator.prototype.webkitPersistentStorage = {};
Navigator.prototype.webkitTemporaryStorage = {};
////////////////原型-补环境-end//////////////////

// 解决实例可以调用属性，但是原型对象不能调用属性
navigator = {};
navigator.__proto__ = Navigator.prototype;
// 遍历原型
for (let prototype_ in Navigator.prototype) {
    // 将所有原型属性值赋值给实例属性值
    navigator[prototype_] = Navigator.prototype[prototype_];
    // hook所有的get属性值，返回报错Illegal constructor
    Navigator.prototype.__defineGetter__(prototype_, function () {
        throw new TypeError('Illegal constructor')
    })
}

const Screen = function Screen() {
    throw new TypeError('Illegal constructor')
};
catvm.safefunction(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: 'Screen',
        configurable: true,
    }
});
////////////////补环境-start////////////////
Screen.prototype.availHeight = 824;
Screen.prototype.availLeft = 0;
Screen.prototype.availTop = 0;
Screen.prototype.availWidth = 1536;
Screen.prototype.colorDepth = 24;
Screen.prototype.height = 864;
Screen.prototype.orientation = {angle: 0, type: 'landscape-primary', onchange: null};
Screen.prototype.pixelDepth = 24;
Screen.prototype.width = 1536;
////////////////补环境-end//////////////////
screen = {};
screen.__proto__ = Screen.prototype;
// 遍历原型
for (let prototype_ in Screen.prototype) {
    // 将所有原型属性值赋值给实例属性值
    screen[prototype_] = Screen.prototype[prototype_];
    // hook所有的get属性值，返回报错Illegal constructor
    Screen.prototype.__defineGetter__(prototype_, function () {
        throw new TypeError('Illegal constructor')
    })
}

const Location = function Location() {
    throw new TypeError('Illegal constructor')
};
catvm.safefunction(Location);

Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: 'Location',
        configurable: true,
    }
});

location = {};
location.ancestorOrigins = {length: 0};
location.assign = '';
location.hash = '';
location.host = 'match.yuanrenxue.cn';
location.hostname = 'match.yuanrenxue.cn';
location.href = 'https://match.yuanrenxue.cn/match/14';
location.origin = 'https://match.yuanrenxue.cn';
location.pathname = '/match/14';
location.port = '';
location.protocol = 'https:';
location.reload = '';
location.replace = '';
location.search = '';
location.toString = '';
location.valueOf = '';

document = {
    location: location
};

z = [
    navigator['appCodeName'],
    navigator['appName'],
    navigator['appVersion'],
    navigator['connection'],
    navigator['cookieEnabled'],
    navigator['doNotTrack'],
    navigator['geolocation'],
    navigator['hardwareConcurrency'],
    navigator['language'],
    navigator['languages'],
    navigator['maxTouchPoints'],
    navigator['mediaCapabilities'],
    navigator['mediaSession'],
    navigator['mimeTypes'],
    navigator['onLine'],
    navigator['permissions'],
    navigator['platform'],
    navigator['plugins'],
    navigator['product'],
    navigator['productSub'],
    navigator['userActivation'],
    navigator['userAgent'],
    navigator['vendor'],
    navigator['vendorSub'],
    navigator['webkitPersistentStorage'],
    navigator['webkitTemporaryStorage'],
    screen['availHeight'],
    screen['availLeft'],
    screen['availTop'],
    screen['availWidth'],
    screen['colorDepth'],
    screen['height'],
    screen['orientation'],
    screen['pixelDepth'],
    screen['width'],
    document['location']['ancestorOrigins'],
    document['location']['assign'],
    document['location']['hash'],
    document['location']['host'],
    document['location']['hostname'],
    document['location']['href'],
    document['location']['origin'],
    document['location']['pathname'],
    document['location']['port'],
    document['location']['protocol'],
    document['location']['reload'],
    document['location']['replace'],
    document['location']['search'],
    document['location']['toString'],
    document['location']['valueOf']
];

console.log(z);

b64_zw = btoa(z);
document['cookie'] = 'mz=' + b64_zw + ';path=/';
console.log(document['cookie']);
