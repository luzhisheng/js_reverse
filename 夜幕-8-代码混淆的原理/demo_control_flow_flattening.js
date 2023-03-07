const code = `
(function(){
    function foo () {
        return function () {
            var sum = 1 + 2;
            console.log(1);
            console.log(2);
            console.log(3);
            console.log(4);
            console.log(5);
            console.log(6);
        }
    }
    
    foo()();
})();
`

const options = {
  compact: false,
  controlFlowFlattening: true
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))