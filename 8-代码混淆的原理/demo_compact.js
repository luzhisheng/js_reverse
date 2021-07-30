const code = `
let x = '1' + 1
console.log('x', x)
`

const options = {
  compact: false,
}

const obfuscator = require('javascript-obfuscator')

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options))
// var _0x151c=['log'];(function(_0x1ce384,_0x20a7c7){var _0x25fc92=function(_0x188aec){while(--_0x188aec){_0x1ce384['push'](_0x1ce384['shift']());}};_0x25fc92(++_0x20a7c7);}(_0x151c,0x1b7));var _0x553e=function(_0x259219,_0x241445){_0x259219=_0x259219-0x0;var _0x56d72d=_0x151c[_0x259219];return _0x56d72d;};let x='1'+0x1;console[_0x553e('0x0')]('x',x);