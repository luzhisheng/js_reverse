const code = `
for (let i = 0; i < 5; i ++) {
  console.log('i', i)
}
`

const options = {
  debugProtection: true
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))