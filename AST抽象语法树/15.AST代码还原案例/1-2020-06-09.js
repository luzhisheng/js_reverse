const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const types = require('@babel/types');
let encode_file = "./1-encode-2020-06-09.js";

let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});
let ast = parse(js_code, {
    sourceType: 'module',
});

const visitor = {
    CallExpression: {
        enter(path) {
            let {node} = path
            let arguments = node.arguments
            if (arguments[1].value != 'Hello AST'){
                path.remove()
            }
        }
    }
}

traverse(ast, visitor);
let {code} = generator(ast);
console.log(code)