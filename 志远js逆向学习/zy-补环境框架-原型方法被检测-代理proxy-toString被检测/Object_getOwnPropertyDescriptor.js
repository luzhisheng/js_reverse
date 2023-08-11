var navigator = {
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36"
};

Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;

Object.getOwnPropertyDescriptor = function (o,p) {
    // 判断检测的对象是navigator就返回空
    if(navigator.toString() == '[object Navigator]'){
        return undefined;
    }
    // 不是就正常返回
    Object.getOwnPropertyDescriptor_.apply(this, arguments)
};

const descriptor1 = Object.getOwnPropertyDescriptor(navigator, 'userAgent');
console.log(descriptor1);


var location = {
    host: "blog.csdn.net"
};

const descriptor2 = Object.getOwnPropertyDescriptor(location, 'host');
console.log(descriptor2);