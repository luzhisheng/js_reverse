const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
let encode_file = "./encode2.js";

let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});
let ast = parse(js_code, {
    sourceType: 'module',
});

const visitor = {
    BlockStatement(path) {
        // path.node.body 是直接访问当前节点的 body 属性的值，返回一个数组（通常是一组语句节点）。
        // path.get('body') 是通过路径对象的方法获取当前节点的 body 属性的子路径，你可以在这个子路径上进行更多的操作。
        let body = path.node.body;
        console.log(body);
        body.pop()
    },
};

traverse(ast, visitor);

// 将修改后的AST重新生成为代码
const modifiedCode = generator(ast).code;
console.log(modifiedCode);