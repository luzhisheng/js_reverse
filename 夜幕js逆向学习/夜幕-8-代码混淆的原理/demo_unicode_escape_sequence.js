const code = `
var a = 'hello world'
`
const options = {
  compact: false,
  unicodeEscapeSequence: true
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))