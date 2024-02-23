import frida
import sys
import os
import time

hook_code = """
Java.perform(
    function(){
        console.log('ffff')
        var ByteString = Java.use('com.android.okhttp.okio.ByteString')

        var Requester = Java.use('com.shjt.map.view.layout.realtime.LineLayout$Requester')
        Requester.request.implementation = function(p1){
            send('here me?')
            this.request(p1)
        }

        var Req = Java.use('com.shjt.map.data.rline.Request')
        Req.toString.implementation = function(p1){

            //send(this.mBuilder.build().toByteArray())
            var tmp = this.toString()
            send('ggggg:'+tmp)
            return tmp
        }

        var Native = Java.use('com.shjt.map.tool.Native')

        Native.decode2.implementation = function(pp){
            console.log("str :"     + Java.use('java.lang.String').$new(pp));
            console.log("hex :"     + ByteString.of(pp).hex());
            console.log("array :"     + JSON.stringify(pp));
            return this.decode2(pp)
        }

        /*Native.encode2.implementation = function(pp){
            console.log("str :"     + Java.use('java.lang.String').$new(pp));
            console.log()
            console.log("hex :"     + ByteString.of(pp).hex());
            console.log("array :"     + JSON.stringify(pp));
            var ret =  this.encode2(pp)
            console.log("ret hex :"     + ByteString.of(ret).hex());
            return ret
        }*/


        var aes_decrypt_cbc = Module.getExportByName('libnative.so', '_Z15aes_decrypt_cbcPKhjPhPKjiS0_');
        Interceptor.attach(aes_decrypt_cbc, {
            onEnter:function(args){
                console.log('1:')
                console.log('0:',args[0].readByteArray(16))
                console.log('1:',args[1].toInt32())
                console.log('2:',args[2].readByteArray(16))
                console.log('3:',args[3].readByteArray(16))
                console.log('4:',args[4].toInt32())
                console.log('5:',args[5].readByteArray(16))
            },
            onLeave:function(retval){

            }
        })

        var aes_key_setup = Module.getExportByName('libnative.so', '_Z13aes_key_setupPKhPji');
        Interceptor.attach(aes_key_setup, {
            onEnter:function(args){
                console.log('2:')
                console.log('0:',args[0].readByteArray(16))
                console.log('2:',args[1].readByteArray(16))
                console.log('1:',args[2].toInt32())
            },
            onLeave:function(retval){

            }
        })




    }
)

function printstack() {
    send(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
}
"""


def test_hook():
    process = frida.get_usb_device(-1).attach('com.shjt.map')
    script = process.create_script(hook_code)
    script.load()
    sys.stdin.read()


if __name__ == "__main__":
    test_hook()
