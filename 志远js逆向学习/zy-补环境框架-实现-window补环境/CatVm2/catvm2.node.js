import fs from 'fs'

// 框架的工具模块
import vm2_tools from './tools/node.js'
import htmlElements from './browser/HTMLElements/htmlElements.node.js'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function run(config, fun_text) {
    let code = ''
    // 引入框架的工具代码
    code += vm2_tools() + '\r\n'

    // 引入用户框架配置
    for (let item in config) {
        code += 'catvm.memory.config.' + item + '=' + config[item] + '\r\n'
    }
    code += fun_text + '\r\n'

    // 引入浏览器相关，引入尽量按浏览器顺序执行
    code += fs.readFileSync(`${__dirname}/browser/eventTarget.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/windowProperties.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/window.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/location.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/navigator.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/history.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/screen.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/storage.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/mimeType.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/plugin.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/pluginArray.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/browser/mimeTypeArray.js`) + '\r\n'

    // 加载dom前先加载dom的原型
    code += htmlElements() + '\r\n'

    // dom环境是最后加载的
    code += fs.readFileSync(`${__dirname}/browser/document.js`) + '\r\n'

    // 引入用户自定义环境
    code += 'debugger;\r\n'
    return code
}