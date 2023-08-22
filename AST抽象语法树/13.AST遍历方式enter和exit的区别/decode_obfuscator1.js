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