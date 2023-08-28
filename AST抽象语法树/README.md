# 参考文档

深入学习 JavaScript 转译器 Babel ，AST还原混淆代码

https://blog.csdn.net/weixin_52057903/article/details/129131582

babel文档

https://babeljs.io/docs/babel-types

Babel 插件开发手册（官方）


https://blog.csdn.net/weixin_33826609/article/details/93164633#toc-visitors

# 操作AST语法树babel库中path全部方法和属性

## path 属性

`path`属性相关的源代码在如下js文件中

```javascript
\node_modules\@babel\traverse\lib\path
```

**下面是一些常见的path对象的属性API：**

| api                            | 功能                                                                 |
|--------------------------------|--------------------------------------------------------------------|
| path.node                      | 获取当前路径对应的节点。                                                       |
| path.parent                    | 获取当前路径对应节点的父节点。                                                    |
| path.parentPath                | 获取当前路径对应节点的父路径。                                                    |
| path.scope                     | 表示当前path下的作用域，这个也是写插件经常会用到的。                                       |
| path.container                 | 用于获取当前path下的所有兄弟节点(包括自身)。                                          |
| path.type                      | 获取当前path的节点类型。                                                     |
| path.key                       | 获取当前path的key值，key通常用于path.get函数。                                   |

### path.scope相关的源代码在这个js文件中

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

### binding常用方法及属性总结

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
| binding.


## path 方法

`path`方法相关的源代码在如下js文件中

```javascript
node_modules\@babel\traverse\lib\path\index.js
\node_modules\@babel\traverse\lib\path
```

**下面是一些常见的path对象的方法API：**

| api                                | 功能                                                                 |
|------------------------------------|--------------------------------------------------------------------|
| path.get(key)                      | 获取当前路径下指定属性名（key）对应的子路径。例如，path.get("body") 获取当前路径下名为 "body" 的子路径。 |
| path.getSibling(index)             | 获取当前路径对应节点的兄弟节点的路径。通过指定索引（index）可以获取相应的兄弟路径。                       |
| path.getFunctionParent()           | 获取当前路径对应节点的最近的函数父节点的路径。                                            |
| path.getPrevSibling()              | 获取当前path的前一个兄弟节点，返回的是path类型。                                       |
| path.getAllPrevSiblings()          | 获取当前path的所有前兄弟节点，返回的是Array类型，其元素都是path类型。                          |
| path.getNextSibling()              | 获取当前path的后一个兄弟节点，返回的是path类型。                                       |
| path.getAllNextSiblings()          | 获取当前path的所有后兄弟节点，返回的是Array类型，其元素都是path类型。                          |
| path.evaluate()                    | 用于计算表达式的值，大家可以参考 constantFold 插件的写法。                               |
| path.findParent()                  | 向上查找满足回调函数特征的path，即判断上级路径是否包含有XXX类型的节点。                            |
| path.find()                        | 功能与 path.findParent 方法一样，只不过从当前path开始进行遍历。                         |
| path.getFunctionParent()           | 获取函数类型父节点，如果不存在，返回 null。                                           |
| path.getStatementParent()          | 获取Statement类型父节点，这个基本上都会有返回值，如果当前遍历的是 Program 或者 File 节点，则会报错。     |
| path.getAncestry()                 | 获取所有的祖先节点，没有实参，返回的是一个Array对象。                                      |
| path.isAncestor(maybeDescendant)   | 判断当前遍历的节点是否为实参的祖先节点.                                               |
| path.isDescendant(maybeAncestor)   | 判断当前遍历的节点是否为实参的子孙节点.                                               |
| path.traverse(visitor)             | 遍历当前路径下的所有子节点，并应用指定的 visitor。                                      |
| path.replaceWith(node)             | 用指定的节点替换当前路径对应的节点。                                                 |
| path.remove()                      | 从 AST 中移除当前路径对应的节点。                                                |
| path.insertBefore(nodes)           | 在当前路径对应节点之前插入一个或多个节点。                                              |
| path.insertAfter(nodes)            | 在当前路径对应节点之后插入一个或多个节点。                                              | 
| path.toString()                    | 用于将 AST 节点转换回对应的源代码字符串。                                            |

## node 节点

看语法就可以猜到`node`就是path的一个属性

| api                               | 功能                                   |
|:----------------------------------|--------------------------------------|
| path.node.type                    | 获取当前节点的类型。                           |
| path.node.declarations            | 对于 VariableDeclaration 节点, 获取变量声明列表。 |
| path.node.init.value                   | 获取某个节点的值。                            |
| delete path.node.init;            | 删除节点，使用系统的 delete 方法。                |

## AST 节点类型对照表

| 序号 | 类型原名称                | 中文名称      | 描述                                         |
|----|----------------------|-----------|--------------------------------------------|
| 1  | Program              | 程序主体      | 整段代码的主体                                    |
| 2  | VariableDeclaration  | 变量声明      | 声明一个变量，例如 var let const                    |
| 3  | FunctionDeclaration  | 函数声明      | 声明一个函数，例如 function                         |
| 4  | ExpressionStatement  | 表达式语句     | 通常是调用一个函数，例如 console.log()                 |
| 5  | BlockStatement       | 块语句       | 包裹在 {} 块内的代码，例如 if (condition){var a = 1;} |
| 6  | BreakStatement       | 中断语句      | 通常指 break                                  |
| 7  | ContinueStatement    | 持续语句      | 通常指 continue                               |
| 8  | ReturnStatement      | 返回语句      | 通常指 return                                 |
| 9  | SwitchStatement      | Switch 语句 | 通常指 Switch Case 语句中的 Switch                |
| 10 | IfStatement          | If 控制流语句  | 控制流语句，通常指 if(condition){}else{}            |
| 11 | Identifier           | 标识符       | 标识，例如声明变量时 var identi = 5 中的 identi        |
| 12 | CallExpression       | 调用表达式     | 通常指调用一个函数，例如 console.log()                 |
| 13 | BinaryExpression     | 二进制表达式    | 通常指运算，例如 1+2                               |
| 14 | MemberExpression     | 成员表达式     | 通常指调用对象的成员，例如 console 对象的 log 成员           |
| 15 | ArrayExpression      | 数组表达式     | 通常指一个数组，例如 [1, 3, 5]                       |
| 16 | NewExpression        | New 表达式   | 通常指使用 New 关键词                              |
| 17 | AssignmentExpression | 赋值表达式     | 通常指将函数的返回值赋值给变量                            |
| 18 | UpdateExpression     | 更新表达式     | 通常指更新成员值，例如 i++                            |
| 19 | Literal              | 字面量       | 字面量                                        |
| 20 | BooleanLiteral       | 布尔型字面量    | 布尔值，例如 true false                          |
| 21 | NumericLiteral       | 数字型字面量    | 数字，例如 100                                  |
| 22 | StringLiteral        | 字符型字面量    | 字符串，例如 vansenb                             |
| 23 | SwitchCase           | Case 语句   | 通常指 Switch 语句中的 Case                       |
