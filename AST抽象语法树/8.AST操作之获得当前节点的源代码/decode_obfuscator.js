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
        console.log(path.toString())
        let {code} = generator(path.node);
        console.log(code)
    },
}

traverse(ast, visitor);

