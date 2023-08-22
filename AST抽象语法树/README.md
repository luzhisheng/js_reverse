# 参考文档

深入学习 JavaScript 转译器 Babel ，AST还原混淆代码

https://blog.csdn.net/weixin_52057903/article/details/129131582

babel文档

https://babeljs.io/docs/babel-types

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
