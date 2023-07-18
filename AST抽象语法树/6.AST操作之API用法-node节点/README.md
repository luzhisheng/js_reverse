# AST操作之API用法-node节点

在抽象语法树（Abstract Syntax Tree，AST）中，`path.node` 是指表示当前节点的 AST 节点对象。它提供了关于该节点的信息，包括节点的类型和其他属性。

看语法就可以猜到`node`就是path的一个属性

| api                                 | 功能                                   |
|:------------------------------------|--------------------------------------|
| path.node.type                      | 获取当前节点的类型。                           |
| path.node.declarations              | 对于 VariableDeclaration 节点, 获取变量声明列表。 |
| path.node.init.value                | 获取某个节点的值。                            |
| delete path.node.init;              | 删除节点，使用系统的 delete 方法。                |

**遍历打印出节点类型**

```javascript
const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
let encode_file = "./encode.js";

let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});
let ast = parse(js_code, {
sourceType: 'module',
});

const visitor = {
    enter(path) {
        console.log(path.node.type)
    },
}

traverse(ast, visitor);
```

输出
```javascript
Program
VariableDeclaration
VariableDeclarator
Identifier
NumericLiteral
var a = 123;
```

**遍历节点打印出 VariableDeclaration 节点的变量声明列表**

```javascript
const visitor = {
    enter(path) {
        console.log(path.node.declarations)
    },
}
```

输出

```javascript
undefined
[
  Node {
    type: 'VariableDeclarator',
    start: 4,
    end: 11,
    loc: SourceLocation {
      start: [Position],
      end: [Position],
      filename: undefined,
      identifierName: undefined
    },
    id: Node {
      type: 'Identifier',
      start: 4,
      end: 5,
      loc: [SourceLocation],
      name: 'a'
    },
    init: Node {
      type: 'NumericLiteral',
      start: 8,
      end: 11,
      loc: [SourceLocation],
      extra: [Object],
      value: 123
    }
  }
]
undefined
undefined
undefined
var a = 123;
```

**获取某个节点的值**
```javascript
const visitor = {
    VariableDeclarator(path) {
        console.log(path.node.init.value)
    },
}
```

输出
```javascript
123
```

**删除某个节点的值**

```javascript
const visitor = {
    VariableDeclarator(path) {
        delete path.node.init.value
    },
}
```

输出
```javascript
var a = undefined;
```