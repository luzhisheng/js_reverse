const fs = require('fs');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
let encode_file = './encode.js';

let js_code = fs.readFileSync(encode_file, { encoding: 'utf-8' });
let ast = parse(js_code, {
    sourceType: 'module',
});

traverse(ast, {
    NumericLiteral(path) {
        path.replaceWith(
            parse(3).program.body[0].expression
        );
    },
});

const output = generator(ast).code;
console.log(output);
