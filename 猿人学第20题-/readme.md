## 知识点

观察请求地址

    https://match.yuanrenxue.com/api/match/20?page=2&sign=73781942400dd0fd60a21f6edb33505b&t=1654067452000

找到加密位置打上断点

![debugger](../img/82.png)

进入sign函数，发现是 getStringFromWasm0 函数返回数据

    return getStringFromWasm0(r0, r1);

控制台调试 getStringFromWasm0

![debugger](../img/83.png)

放开断点在调试一次

![debugger](../img/84.png)

这里的 r0 和 r1是固定不变的，但是每次加密出来的值是不同的，说明这是一个指针

继续追进入

    function getStringFromWasm0(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
    }

getUint8Memory0().subarray(ptr, ptr + len) 返回 Uint8Array 数组

    Uint8Array 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。

打印
    
    Uint8Array(32) [98, 48, 100, 102, 52, 57, 102, 49, 56, 54, 55, 52, 101, 97, 50, 102, 57, 97, 52, 98, 98, 100, 102, 49, 48, 55, 97, 50, 55, 54, 50, 52, buffer: ArrayBuffer(1179648), byteLength: 32, byteOffset: 1114360, length: 32, Symbol(Symbol.toStringTag): 'Uint8Array']
    
cachedTextDecoder.decode 这是一个解码函数
 

