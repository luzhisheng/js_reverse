const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

// 元代码
process.argv.length > 2 ? encodeFile = process.argv[2] : encodeFile = "./encode.js";
// 被重新编译后的代码
process.argv.length > 3 ? decodeFile = process.argv[3] : decodeFile = "./decodeResult.js";

let sourceCode = fs.readFileSync(encodeFile, {encoding: "utf-8"});
let ast = parser.parse(sourceCode);

const callToLiteral =
    {
        Call2Expression(path) {
            console.log(path)
        }
    };

traverse(ast, callToLiteral);

let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});

fs.writeFile(decodeFile, code, (err) => {
});