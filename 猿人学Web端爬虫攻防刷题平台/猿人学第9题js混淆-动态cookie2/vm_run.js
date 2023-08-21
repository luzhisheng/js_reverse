var fs = require('fs');
const {VM, VMScript} = require('vm2');
const vm = new VM();
const code_file = `${__dirname}/9.js`;
const script = new VMScript(fs.readFileSync(code_file), `${__dirname}/调试.js`);
debugger
vm.run(script);
debugger