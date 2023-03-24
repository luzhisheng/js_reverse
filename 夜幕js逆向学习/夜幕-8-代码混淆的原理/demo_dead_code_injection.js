const code = `
console.log('abc');
console.log('cde');
console.log('efg');
console.log('hij');    
`

const options = {
  compact: false,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 1
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))