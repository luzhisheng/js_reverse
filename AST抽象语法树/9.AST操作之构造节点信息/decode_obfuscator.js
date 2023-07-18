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
    VariableDeclarator(path) {
        // 使用解构赋值语法 {} 是用来从对象中提取特定属性或方法
        const {init} = path.node
        console.log({init})
        const node = {
            type: "BinaryExpression",
            operator: "+",
            left: {
                type: "NumericLiteral",
                value: 1
            },
            right: {
                type: "NumericLiteral",
                value: 2
            }
        }

        init || path.set("init", node)
    },
}

traverse(ast, visitor);
let {code} = generator(ast);
console.log(code)