import fs from 'fs';
// 从 vm2 模块中导入了 VM 和 VMScript 两个类
import {VM, VMScript} from 'vm2';

// 引入需要执行的js文件
import cat_vm2 from './CatVm2/catvm2.node.js';
import path from 'path';

// 获取当前文件的目录
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const cat_vm2_code = cat_vm2({proxy: true});
const code_file = `${__dirname}/code.js`;
const vm = new VM()
const script = new VMScript(cat_vm2_code + fs.readFileSync(code_file), `${__dirname}/调试.js`);
debugger
vm.run(script);
debugger