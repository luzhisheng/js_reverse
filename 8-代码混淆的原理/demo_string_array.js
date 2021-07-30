const code = `
var a = 'hello world'   
`
const options = {
  stringArray: true,
  rotateStringArray: true,
  stringArrayEncoding: true, // 'base64' or 'rc4' or false
  stringArrayThreshold: 1,
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))