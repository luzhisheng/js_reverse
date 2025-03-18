import sys
import frida

rdev = frida.get_usb_device()
session = rdev.attach(18802)
scr = """
Java.perform(function () {
   var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig');
     SwitchConfig.isGlobalSpdySwitchOpen.overload().implementation = function(){
       var ret = this.isGlobalSpdySwitchOpen.apply(this, arguments);
       console.log("isGlobalSpdySwitchOpenl "+ret)
      
       return false
     }
   })
"""
script = session.create_script(scr)


def on_message(message, data):
    print('msg: ' + message)
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


script.on("message", on_message)
script.load()
sys.stdin.read()
