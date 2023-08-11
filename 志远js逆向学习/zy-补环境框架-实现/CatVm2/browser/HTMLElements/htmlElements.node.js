import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function GetCode(){
    let code = ''
    code += fs.readFileSync(`${__dirname}/htmlDivElement.js`) + '\r\n'



    return code
}