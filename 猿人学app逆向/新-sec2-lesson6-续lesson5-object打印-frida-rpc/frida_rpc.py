import frida


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


# 定义Frida脚本
test_rpcx = '''
rpc.exports = {
 geta: function(str){
    var enc = '' 
    Java.perform(function () {
        // hook核心代码
        console.log('str:'+str)
        var e = Java.use('com.picovr.xxxxx.c.a.e')
        enc = e.d(str)
        console.log('enc:'+enc)
    });
    return enc
 }
}
'''


def start_rpc():
    # 连接到应用程序
    process = frida.get_usb_device(-1).attach('com.picovr.xxxxx')
    # 创建脚本
    script = process.create_script(test_rpcx)
    # 消息处理
    script.on('message', on_message)
    # 加载脚本
    script.load()
    # 返回脚本的导出值
    return script.exports


if __name__ == '__main__':
    rpc = start_rpc()
    enc = rpc.geta('传入的参数')
    print(enc)
