# AST操作之API用法-path.scope属性和方法

**scope相关的源代码在这个js文件中**

```javascript
node_modules\@babel\traverse\lib\scope\index.js
```
| api                                   | 说明                                                                            |
|:--------------------------------------|-------------------------------------------------------------------------------|
| scope.block                           | 表示当前作用域下的所有node，参考上面的 this.block = node;                                      |
| scope.dump()                          | 输出当前每个变量的作用域信息。调用后直接打印，不需要加打印函数                                               |
| scope.crawl()                         | 重构scope，在某种情况下会报错，不过还是建议在每一个插件的最后一行加上。                                        |
| scope.rename(oldName, newName, block) | 修改当前作用域下的的指定的变量名，oldname、newname表示替换前后的变量名，为字符串。注意，oldName需要有binding，否则无法重命名。 |
| scope.traverse(node, opts, state)     | 遍历当前作用域下的某些(个)插件。和全局的traverse用法一样。                                            |
| scope.getBinding(name)                | 获取某个变量的binding，可以理解为其生命周期。包含引用，修改之类的信息                                        |

**binding常用方法及属性总结**

```javascript
node_modules\@babel\traverse\lib\scope\binding.js
```

目前我看到的只有 变量定义 和 函数定义 拥有binding，其他的获取binding都是undefined。

```javascript
let binding = scope.getBinding(name);
```

例如:

var a = 123; 这里的 a 就拥有 binding。 而 function test(a,b,c) {}; 函数名test以及形参a，b，c均拥有 binding。

| api                        | 说明                                                               |
|:---------------------------|------------------------------------------------------------------|
| binding.path               | 用于定位初始拥有binding的path;                                            |
| binding.constant           | 用于判断当前变量是否被更改，true表示未改变，false表示有更改变量值。                           |
| binding.referenced         | 用于判断当前变量是否被引用，true表示代码下面有引用该变量的地方，false表示没有地方引用该变量。注意，引用和改变是分开的。 |
| binding.referencePaths     | 它是一个Array类型，包含所有引用的path，多用于替换。                                   |
| binding.constantViolations | 它是一个Array类型，包含所有改变的path，多用于判断。                                   |