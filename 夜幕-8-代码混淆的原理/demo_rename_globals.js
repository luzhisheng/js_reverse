const code = `
var $ = function(id) {
    return document.getElementById(id);
};
`

const options = {
  renameGlobals: true
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))