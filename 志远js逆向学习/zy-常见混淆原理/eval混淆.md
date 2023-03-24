# btoa 和 atob

* btoa 编码
* atob 解码

编写加密程序，这样变量 ayf 和 BCM 就被加密了
    
    // YXlm == ayf， QkNN == BCM
    var xxx = ['YXlm', 'QkNN']
    
    var ayf = 1;
    var BCM = "0";
    
    
    // atob解码
    function x1(id){
        return atob(xxx[id])
    }
    
    // 混淆的变量名称
    console.log(window[x1(1)]);

# eval混淆

我们知道浏览器自带v8引擎，eval的作用其实很简单，就是把一段字符串传递给v8引擎，由v8引擎将这段字符串解释成Javascript代码，并且执行他。

    <script type="text/javascript">
        eval("alert(1+1)");
    <script>
    
这样我们就可以用 btoa 加密 console.log(window[x1(1)]); 方法

    btoa("window[x1(1)]")
    输出：
    "d2luZG93W3gxKDEpXQ=="
    
    执行
    eval(atob("d2luZG93W3gxKDEpXQ==")) 
    也能得到结果
    
也可以将 atob 赋值给自定义的变量，如下

    function x(id){
        window.ayf = atob;
    }
    
全局变量 ayf 就可以变成解密函数 atob

eval 混淆严重的缺陷，调试的时候直接进入 eval 的虚拟空间，就能直接进入运行的代码程序