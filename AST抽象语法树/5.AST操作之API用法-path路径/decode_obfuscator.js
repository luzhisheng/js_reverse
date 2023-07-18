const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;

let js_code = "var a = 1 + 2;";

let ast = parse(js_code, {
    sourceType: 'module',
});

const visitor = {
    "VariableDeclarator|BinaryExpression|Identifier"(path) {
       console.log(path.key)
    },
}

traverse(ast, visitor);
