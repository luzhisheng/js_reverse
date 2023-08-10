var fs = require('fs');
const {VM} = require('vm2');
const vm = new VM();
var data = fs.readFileSync('./_ac_signature_vm.js', 'utf8')
debugger
vm.run(data)
debugger