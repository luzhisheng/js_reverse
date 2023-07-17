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
        if (path.isNumericLiteral()) {
            path.replaceWith({type:"NumericLiteral",value:3});
        }
    },
}

traverse(ast, visitor);

// 写入文件
let {code} = generator(ast);
console.log(code)
fs.writeFile('decode.js', code, (err) => {
});
