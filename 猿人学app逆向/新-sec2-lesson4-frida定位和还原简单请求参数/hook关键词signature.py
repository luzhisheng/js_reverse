import frida
import sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


js_code = '''
Java.perform(
    function(){
        console.log('hook住了')
        var A = Java.use('com.hualong.framework.b.a')
        A.a.implementation = function(str){
            console.log('输入' + str)
            var res = this.a(str)
            console.log('输出' + res)
        }
        function printstack() {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        }
    }
)
'''
# app已经启动了
process = frida.get_usb_device(-1).attach('引力播')
script = process.create_script(js_code)
script.on('message', on_message)
print('[*] Hook Start Running')
script.load()
# 守护进程
sys.stdin.read()
