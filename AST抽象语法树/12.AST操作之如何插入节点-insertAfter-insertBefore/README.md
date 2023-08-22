# AST操作之如何插入节点

需求：var a = 123;后面增加一个兄弟节点b = 111

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
    VariableDeclarator(path) {
        let {id} = path.node;
        // 这里一定要判断准确，否则会无限循环
        if(id.name == 'a'){
            let new_id = t.Identifier("b");
            let new_init = t.NumericLiteral(111);
            let new_node = t.VariableDeclarator(new_id, new_init);
            path.insertAfter(new_node)
        }
    },
};

traverse(ast, visitor);

// 将修改后的AST重新生成为代码
const modifiedCode = generator(ast).code;
console.log(modifiedCode);
```