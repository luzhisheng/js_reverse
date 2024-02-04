import frida, sys

test_hook = """
Java.perform(function(){

    var MAppliction = Java.use('com.xbiao.MAppliction')
    console.log(MAppliction.getInstance().getResources().getString(2131820921))


    console.log('ddddddddddddddddd')
        Java.enumerateClassLoaders({
            onMatch: function(loader){
                Java.classFactory.loader = loader;
                var TestClass;
                try{
                    TestClass = Java.use("com.xbiao.utils.AESedeUtil");
                    TestClass.decrypt.implementation = function(p1,p2){
                        console.log('decrypt p1:'+p1)
                        console.log('decrypt p2:'+p2)
                        return this.decrypt(p1,p2)
                    }
                }catch(error){
                    if(error.message.includes("ClassNotFoundException")){
                        console.log(" You are trying to load encrypted class, trying next loader");
                    }
                    else{
                        console.log(error.message);
                    }
                }
            },
            onComplete: function(){

            }
        })
})


"""

hook_class ="""
Java.perform(function(){
    hookclass('com.xbiao.login.PhoneLoginActivity')
})

function printstack() {
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

function hookclass(className){
    var Myclasa = Java.use(className)
    //得到类下的所有方法
    var methods = Myclasa.class.getDeclaredMethods()
    //遍历所有方法
    methods.forEach(function(method){
        //获得方法名
        var methodName = method.getName()
        //获得该方法得所有重载
        var overloads = Myclasa[methodName].overloads
        //遍历重载
        overloads.forEach(function(overload){
            //hook 重载
            
            var prot = '('
            for (var i=0; i<overload.argumentTypes.length; i++){
                prot += overload.argumentTypes[i].className + ','
            }
            prot += ')'
            var wMethodName = className+'.'+methodName+prot

            overload.implementation = function(){
                printstack()
                console.log(wMethodName)
                for (var i=0; i<arguments.length;i++){
                    console.log('argument:'+JSON.stringify(arguments[i]))
                }
                var ret = this[methodName].apply(this, arguments)
                console.log(wMethodName + 'return:'+JSON.stringify(ret))
                return ret
            }
        })
    })
}
"""














test_hook_class = """
Java.perform(function(){
    travel('com.xbiao.utils.net.NetContent')
})


function printstack() {
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

function travel(className){
    var NetContent = Java.use(className)
    //1.得到这个类下面的所有方法
    var Methods = NetContent.class.getDeclaredMethods()
    //2.遍历所有的方法
    Methods.forEach(function(Method){
        //得到这个方法的所有重载 ovelroads
        var methodName = Method.getName()
        var overloads = NetContent[methodName].overloads
        //遍历重载
        overloads.forEach(function(overload){
            
            var prot = '('
            overload.argumentTypes.forEach(function(argumentType){
                prot += argumentType.className+','
            })
            prot+=')'

            overload.implementation = function(){
                
                console.log('----------------------------------')
                console.log(className+'.'+methodName+prot)

                printstack()
                for(var i = 0; i<arguments.length; i++){
                    console.log('argument:'+JSON.stringify(arguments[i]))
                }
                
                var ret = this[methodName].apply(this, arguments)
                console.log(methodName + 'return:'+JSON.stringify(ret))
                return ret
            }
        })
    })
}
"""


jsCode = """
function printstack() {
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
}

Java.perform(function () {
    console.log('enter')
    var Base64 = Java.use('android.util.Base64')
    var ByteString = Java.use("com.android.okhttp.okio.ByteString");
    var secretKeySpec = Java.use('javax.crypto.spec.SecretKeySpec');
    secretKeySpec.$init.overload('[B', 'java.lang.String').implementation = function (a, b) {
        console.log("======================================");
        printstack();
        var result = this.$init(a, b);
        console.log("算法名：" + b + "|str密钥:" + Java.use('java.lang.String').$new(a));
        console.log("算法名：" + b + "|Hex密钥:" + ByteString.of(a).hex());
        return result;
    }

    var DESKeySpec = Java.use('javax.crypto.spec.DESKeySpec');
    DESKeySpec.$init.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.$init(a);
        var bytes_key_des = this.getKey();
        console.log("des密钥  |str " + Java.use('java.lang.String').$new(bytes_key_des));
        console.log("des密钥  |hex " + ByteString.of(bytes_key_des).hex());
        return result;
    }

    DESKeySpec.$init.overload('[B', 'int').implementation = function (a, b) {
        console.log("======================================");
        printstack();
        var result = this.$init(a, b);
        
        var bytes_key_des = this.getKey();
        console.log("des密钥  |str " + Java.use('java.lang.String').$new(bytes_key_des));
        console.log("des密钥  |hex " + ByteString.of(bytes_key_des).hex());
        return result;
    }

    var mac = Java.use('javax.crypto.Mac');
    mac.getInstance.overload('java.lang.String').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.getInstance(a);
        
        console.log("算法名：" + a);
        return result;
    }
    mac.update.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        this.update(a);
        
        console.log("update:" + Java.use('java.lang.String').$new(a))
    }
    mac.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        console.log("======================================");
        printstack();
        this.update(a, b, c)
        
        console.log("update:" + Java.use('java.lang.String').$new(a) + "|" + b + "|" + c);
    }
    mac.doFinal.overload().implementation = function () {
        console.log("======================================");
        printstack();
        var result = this.doFinal();
        
        console.log("mac doFinal结果: |str  :"     + Java.use('java.lang.String').$new(result));
        console.log("mac doFinal结果: |hex  :"     + ByteString.of(result).hex());
        console.log("mac doFinal结果: |base64  :"  + Base64.encodeToString(result,0));
        return result;
    }
    mac.doFinal.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.doFinal(a);
        
        console.log("doFinal参数: |str  :"     + Java.use('java.lang.String').$new(a));
        console.log("doFinal结果: |str  :"     + Java.use('java.lang.String').$new(result));
        console.log("doFinal结果: |hex  :"     + ByteString.of(result).hex());
        console.log("doFinal结果: |base64  :"  + Base64.encodeToString(result,0));
        return result;
    }

    var md = Java.use('java.security.MessageDigest');
    md.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (a, b) {
        console.log("======================================");
        printstack();
        
        console.log("算法名：" + a);
        return this.getInstance(a, b);
    }
    md.getInstance.overload('java.lang.String').implementation = function (a) {
        console.log("======================================");
        printstack();
        
        console.log("算法名：" + a);
        return this.getInstance(a);
    }
    md.update.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        
        console.log("update:" + Java.use('java.lang.String').$new(a))
        return this.update(a);
    }
    md.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        console.log("======================================");
        printstack();
        console.log("update:" + Java.use('java.lang.String').$new(a) + "|" + b + "|" + c);
        return this.update(a, b, c);
    }
    md.digest.overload().implementation = function () {
        console.log("======================================");
        printstack();
        var result = this.digest();
        console.log("digest11结果:" + ByteString.of(result).hex());
        console.log("digest结果:" + Base64.encodeToString(result,0));
        return result;
    }
    md.digest.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        console.log("digest参数:" + Java.use('java.lang.String').$new(a));
        var result = this.digest(a);
        console.log("digest结果:" + ByteString.of(result).hex());
        console.log("digest结果:" + Base64.encodeToString(result,0));
        return result;
    }

    var ivParameterSpec = Java.use('javax.crypto.spec.IvParameterSpec');
    ivParameterSpec.$init.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.$init(a);
        console.log("iv向量: |str:" + Java.use('java.lang.String').$new(a));
        console.log("iv向量: |hex:" + ByteString.of(a).hex());
        return result;
    }

    var cipher = Java.use('javax.crypto.Cipher');
    cipher.getInstance.overload('java.lang.String').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.getInstance(a);
        
        console.log("模式填充:" + a);
        return result;
    }
    cipher.init.overload('int', 'java.security.Key').implementation = function (a, b) {
        console.log("======================================");
        printstack();
        var result = this.init(a, b);
        
        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        var bytes_key = b.getEncoded();
        console.log("init key:" + "|str密钥:" + Java.use('java.lang.String').$new(bytes_key));
        console.log("init key: |base64  :"  + Base64.encodeToString(bytes_key,0));
        console.log("init key:" + "|Hex密钥:" + ByteString.of(bytes_key).hex());
        return result;
    }
    cipher.init.overload('int', 'java.security.cert.Certificate').implementation = function (a, b) {
        console.log("======================================");
        printstack();
        var result = this.init(a, b);
        

        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        return result;
    }
    cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec').implementation = function (a, b, c) {
        console.log("======================================");
        printstack();
        var result = this.init(a, b, c);
        

        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        var bytes_key = b.getEncoded();
        console.log("init key:" + "|str密钥:" + Java.use('java.lang.String').$new(bytes_key));
        console.log("init key: |base64  :"  + Base64.encodeToString(bytes_key,0));
        console.log("init key:" + "|Hex密钥:" + ByteString.of(bytes_key).hex());

        return result;
    }
    cipher.init.overload('int', 'java.security.cert.Certificate', 'java.security.SecureRandom').implementation = function (a, b, c) {
        console.log("======================================");
        printstack();
        var result = this.init(a, b, c);
        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }
        return result;
    }
    cipher.init.overload('int', 'java.security.Key', 'java.security.SecureRandom').implementation = function (a, b, c) {
         console.log("======================================");
        printstack();
        var result = this.init(a, b, c);
        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        var bytes_key = b.getEncoded();
        console.log("init key:" + "|str密钥:" + Java.use('java.lang.String').$new(bytes_key));
        console.log("init key: |base64  :"  + Base64.encodeToString(bytes_key,0));
        console.log("init key:" + "|Hex密钥:" + ByteString.of(bytes_key).hex());
        return result;
    }
    cipher.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters').implementation = function (a, b, c) {
        console.log("======================================");
        printstack();
        var result = this.init(a, b, c);
        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        var bytes_key = b.getEncoded();
        console.log("init key:" + "|str密钥:" + Java.use('java.lang.String').$new(bytes_key));
        console.log("init key: |base64  :"  + Base64.encodeToString(bytes_key,0));
        console.log("init key:" + "|Hex密钥:" + ByteString.of(bytes_key).hex());
        return result;
    }
    cipher.init.overload('int', 'java.security.Key', 'java.security.AlgorithmParameters', 'java.security.SecureRandom').implementation = function (a, b, c, d) {
        console.log("======================================");
        printstack();
        var result = this.init(a, b, c, d);
        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        var bytes_key = b.getEncoded();
        console.log("init key:" + "|str密钥:" + Java.use('java.lang.String').$new(bytes_key));
        console.log("init key: |base64  :"  + Base64.encodeToString(bytes_key,0));
        console.log("init key:" + "|Hex密钥:" + ByteString.of(bytes_key).hex());
        return result;
    }
    cipher.init.overload('int', 'java.security.Key', 'java.security.spec.AlgorithmParameterSpec', 'java.security.SecureRandom').implementation = function (a, b, c, d) {
        console.log("======================================");
        printstack();
        var result = this.update(a, b, c, d);
        if (N_ENCRYPT_MODE == a)
        {
            console.log("init  | 加密模式");    
        }
        else if(N_DECRYPT_MODE == a)
        {
            console.log("init  | 解密模式");    
        }

        var bytes_key = b.getEncoded();
        console.log("init key:" + "|str密钥:" + Java.use('java.lang.String').$new(bytes_key));
        console.log("init key: |base64  :"  + Base64.encodeToString(bytes_key,0));
        console.log("init key:" + "|Hex密钥:" + ByteString.of(bytes_key).hex());
        return result;
    }

    cipher.update.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.update(a);
        console.log("======================================");
        console.log("update:" + Java.use('java.lang.String').$new(a));
        return result;
    }
    cipher.update.overload('[B', 'int', 'int').implementation = function (a, b, c) {
        console.log("======================================");
        printstack();
        var result = this.update(a, b, c);
        
        console.log("update:" + Java.use('java.lang.String').$new(a) + "|" + b + "|" + c);
        return result;
    }
    cipher.doFinal.overload().implementation = function () {
        console.log("======================================");
        printstack();
        var result = this.doFinal();
        
        console.log("doFinal结果: |str  :"     + Java.use('java.lang.String').$new(result));
        console.log("doFinal结果: |hex  :"     + ByteString.of(result).hex());
        console.log("doFinal结果: |base64  :"  + Base64.encodeToString(result,0));
        return result;
    }
    cipher.doFinal.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.doFinal(a);
        
        console.log("doFinal参数: |str  :"     + Java.use('java.lang.String').$new(a));
        console.log("doFinal参数: |base64  :"  + Base64.encodeToString(a,0));
        console.log("doFinal结果: |str  :"     + Java.use('java.lang.String').$new(result));
        console.log("doFinal结果: |hex  :"     + ByteString.of(result).hex());
        console.log("doFinal结果: |base64  :"  + Base64.encodeToString(result,0));
        return result;
    }

    var x509EncodedKeySpec = Java.use('java.security.spec.X509EncodedKeySpec');
    x509EncodedKeySpec.$init.overload('[B').implementation = function (a) {
        console.log("======================================");
        printstack();
        var result = this.$init(a);
        
        console.log("RSA密钥:" + Base64.encodeToString(a,0));
        return result;
    }

    var rSAPublicKeySpec = Java.use('java.security.spec.RSAPublicKeySpec');
    rSAPublicKeySpec.$init.overload('java.math.BigInteger', 'java.math.BigInteger').implementation = function (a, b) {
        console.log("======================================");
        printstack();
        var result = this.$init(a, b);
        
        console.log("RSA密钥N:" + a.toString(16));
        console.log("RSA密钥E:" + b.toString(16));
        return result;
    }
})
"""
 
test1='''
Java.perform(
    function(){
        console.log('enter')
        var NetContent = Java.use('com.xbiao.utils.net.NetContent')
        NetContent.httpsGet.implementation = function(p1,p2,p3){
            console.log('p1:'+p1)
            return this.httpsGet(p1,p2,p3)
        }

        /*var AESedeUti = Java.use('com.xbiao.utils.AESedeUti')
        AESedeUti.decrypt.implementation = function(p1,p2){
            console.log('decrypt p1:'+p1)
            console.log('decrypt p2:'+p2)
            printstack()
            return this.decrypt(p1,p2)
        }
        AESedeUti.encrypt.implementation = function(p1,p2){
            console.log('encrypt p2:'+p2)
            console.log('encrypt p2:'+p2)
            printstack()
            return this.encrypt(p1,p2)
        }*/
        
        var Cipher = Java.use('javax.crypto.Cipher')
        Cipher.doFinal.overload('[B').implementation = function(p1){
            printstack()
            return this.doFinal(p1)
        }

        Java.enumerateClassLoaders({
            onMatch: function(loader){
                Java.classFactory.loader = loader;
                var TestClass;

                // Hook the class if found, else try next classloader.
                try{
                    TestClass = Java.use("com.xbiao.utils.AESedeUtil");
                    TestClass.decrypt.implementation = function(p1,p2){
                        console.log('decrypt p1:'+p1)
                        console.log('decrypt p2:'+p2)
                        printstack()
                        return this.decrypt(p1,p2)
                    }
                    TestClass.encrypt.implementation = function(p1,p2){
                        console.log('encrypt p2:'+p2)
                        console.log('encrypt p2:'+p2)
                        printstack()
                        return this.encrypt(p1,p2)
                    }
                }catch(error){
                    if(error.message.includes("ClassNotFoundException")){
                        console.log(" You are trying to load encrypted class, trying next loader");
                    }
                    else{
                        console.log(error.message);
                    }
                }
            },
            onComplete: function(){

            }
        })

        function printstack() {
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()))
        }
})
'''


 
process = frida.get_usb_device(-1).attach("com.xbiao")
script= process.create_script(hook_class)
script.load()
sys.stdin.read()