import frida
import sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


test_sig = '''
Java.perform(
    function(){
        # hook 内置类android.content.pm.Signature
        var Signature = Java.use('android.content.pm.Signature')
        # hook 内置类的hashCode方法
        Signature.hashCode.implementation = function() {
            console.log('hashCode')
            return this.hashCode()
        }
        # hook 内置类的toByteArray方法
        Signature.toByteArray.implementation = function() {
            console.log('toByteArray')
            printstack()
            return this.toByteArray()
        }
        # 打印调用堆栈
        function printstack() {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        }
        # 过掉检测
        var AA = Java.use('com.chaozhuo.texteditor.widget.a')
        AA.a.overload('android.content.Context').implementation = function() {
            return true
            //this.a()
        }
    }
)
'''

# 启动方式2 spawn 重启APP 可以hook APP启动阶段
device = frida.get_usb_device(-1)
pid = device.spawn(['com.chaozhuo.texteditor'])
process = device.attach(pid)

script = process.create_script(test_sig)
script.on('message', on_message)
print('[*] Running')
script.load()
device.resume(pid)
sys.stdin.read()
