var babel = require("@babel/core");

var code = "var a = 1;";

const result = babel.transform(code, {ast: true});
console.log(result.code);
console.log("分割----");
console.log(result);
console.log("分割----");
console.log(result.ast.program.body);