## hook 基础

连接服务器--》拿回资源--》渲染解析资源--》js运行流程 初始化--》页面逻辑--》等待用户输入--》加密数据--》提交数据

hook就是在上面流程插入任意的代码，然后在执行原本的网站代码

js 作用域： 变量所生效的位置

js 山下文： 一个环境（js v8虚拟机）浏览器不同的页面在不同的上下文

## 作用域

    var ayf = 1;
    function zz() {
        var ayf = 2;
        console.log(1, ayf);
    };
    
    zz();
    console.log(1, ayf);
    
    输出
    
    1 2
    1 1
    
解释器

    //声明一个全局作用域变量数组,全局方法
    var glArr = {ayf:1} 
    var glArr = {zz:function...}
    执行方法(glArr.zz);
    
    //进入方法作用域
    声明一个“glArr.zz”方法作用域变量数组
    Arr.zz.Arr = {}
    Arr.zz.Arr.ayf = 2;
    取当前作用域的ayf值，如果当前没有去上一个作用域找
    
    //退出方法
    设置当前作用域 “Arr”
    取当前作用域的ayf的值1，如果当前没有去上一个作用域找
    
简单的说就是变量生效的范围

在不是全局作用域下，写了一个变量，没有用var定义，直接赋值，解释器会先看当前作用域和上级有没有这个变量，
有的会直接赋值，没有的话给全局作用域定义这个变量。

代码案例

    var ayf = 1;
    function zz() {
        var ayf = 2;
        ayf1 = 3;
        console.log(1, ayf);
    };
    
    zz();
    console.log(1, ayf, ayf1);
    
    输出
    1 2
    1 1 3
    
## 学习hook必须知道this指向

在一个全局作用域下 this = window