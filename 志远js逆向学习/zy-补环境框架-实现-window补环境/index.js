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

// fun_text 插入的插件信息
const cat_vm2_code = cat_vm2({proxy: true}, `
    catvm.AddPlugin({description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeTypes:[{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'},{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'}]})
    catvm.AddPlugin({description:'Portable Document Format',filename:'internal-pdf-viewer',name:'PDF Viewer',MimeTypes:[{description: 'Portable Document Format',suffixes:'pdf',type: 'application/pdf'},{description: 'Portable Document Format',suffixes:'pdf1',type: 'application/pdf1'}]})
`);
const code_file = `${__dirname}/code.js`;
const vm = new VM()
const script = new VMScript(cat_vm2_code + fs.readFileSync(code_file), `${__dirname}/调试.js`);
debugger
vm.run(script);
debugger