import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function run(){
    let code = ''
    code += fs.readFileSync(`${__dirname}/memory.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/safefunction.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/print.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/proxy.js`) + '\r\n'
    code += fs.readFileSync(`${__dirname}/tools.js`)+"\r\n";
    return code
}