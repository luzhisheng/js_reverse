const code = `
let string = 'hello'
const count = 5
for (let i = 0; i < 5; i ++) {
  console.log('i', string[i])
}
`

const options = {
  // compact: false,
  // controlFlowFlattening: true,
  unicodeEscapeSequence: true

}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))
