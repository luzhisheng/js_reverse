const recast = require("recast");
const check = recast.types.namedTypes;
const {
    expressionStatement,
    memberExpression,
    identifier: id,
    callExpression,
    stringLiteral
} = recast.types.builders;

recast.run(function (ast, printSource) {
    recast.visit(ast, {
        visitSwitchCase(node) {
            var codes = "";
            for (var  i = 0; i < node.value.consequent.length; i++){
                if (check.ContinueStatement.check(node.value.consequent[i])){
                    continue
                }
                codes += recast.print(node.value.consequent[i]).code + '\n';
                console.log(codes);
                console.log("-----------------------")
            }

            exp = expressionStatement(callExpression(memberExpression(id('console'), id("log")), [stringLiteral(codes)]));
            node.value.consequent.unshift(exp);
            return false
        }
    });
    console.log(recast.print(ast).code)
});