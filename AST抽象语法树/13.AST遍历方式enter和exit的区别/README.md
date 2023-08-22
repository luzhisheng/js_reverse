# AST遍历方式enter和exit的区别

测试代码

```javascript
var a = 'a' + 'b' + 'c' + d + 'e' + 'f';
```

**默认的遍历方式enter**

从代码结构的角度看，enter 钩子通常与深度优先遍历的进入节点的过程相对应，符合从上到下、从外到内的思维逻辑。

```javascript
const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const t = require('@babel/types');
let encode_file = "./encode.js";

let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});
let ast = parse(js_code, {
    sourceType: 'module',
});


const visitor = {
    BinaryExpression(path){
            console.log(path.toString())
            const {confident, value} = path.evaluate();
            confident && path.replaceWith(t.valueToNode(value));
    },
}

traverse(ast, visitor);

// 将修改后的AST重新生成为代码
const modifiedCode = generator(ast).code;
console.log(modifiedCode);
```

打印内容：

    'a' + 'b' + 'c' + d + 'e' + 'f'
    'a' + 'b' + 'c' + d + 'e'
    'a' + 'b' + 'c' + d
    'a' + 'b' + 'c'
    var a = "abc" + d + 'e' + 'f';

**exit遍历方式**

从代码结构的角度看，exit 钩子通常与深度优先遍历的离开节点的过程相对应，符合从下到上、从内到外的思维逻辑。

```javascript
const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const t = require('@babel/types');
let encode_file = "./encode.js";

let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});
let ast = parse(js_code, {
    sourceType: 'module',
});


const visitor = {
    BinaryExpression: {
        exit: function(path) {
            console.log(path.toString())
            const {confident, value} = path.evaluate();
            confident && path.replaceWith(t.valueToNode(value));
        }
    },
}

traverse(ast, visitor);

// 将修改后的AST重新生成为代码
const modifiedCode = generator(ast).code;
console.log(modifiedCode);
```

打印内容：

    'a' + 'b'
    "ab" + 'c'
    "abc" + d
    "abc" + d + 'e'
    "abc" + d + 'e' + 'f'
    var a = "abc" + d + 'e' + 'f';
