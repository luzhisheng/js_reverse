const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const fs = require("fs");
window = global;


let token = null;

const getTokenFromServer = async function (data) {
    let a = data;
    return new Promise((resolve,reject)=>{
        fs.readFile('./jsdom.html', 'utf8', function (err, data) {
            const dom = new JSDOM(data,
                {
                    url: "https://www.python-spider.com/challenge/64",
                    referrer: "https://www.python-spider.com/challenge/64",
                    contentType: "text/html",
                    includeNodeLocations: true,
                    storageQuota: 10000000,
                    runScripts: "dangerously"
                }
            );
            res = dom.window.lop(a);
            dom.window.close();
            resolve(res);
        });
    })
};


// data = 'CÈ»\x93÷Kë\fKÊs\x82\x90\x1A\vË:uùÝr@²\x19\x91\x8Co\x84\x1FÌÃ:0\x12À\x94hS=Ìß\x15­½vòio\x057P.\x98`H÷\x8D<ÜAcK®p\x91>Óg_DhÞy\x1EX_E\x98$â¡PÖîüEE÷®<\n>uél\x02\x9DêÄ[2\x14¶$~ú\x98q¦}N,áçÅK\x82\x7F®\x8B¿±kÎ\x84¥¢\x9F\r(\x96Ü;Q\x9D>\x18\x98\x8F§vóYmFïz ã#º\x90\x03µ¡\x9F\x0E0\'?Ý\x8F"F\vmÚþ\x9C\x9E\x9CðBÔ\x88Õ\x10\x8Cc\x9E¾\x92à¥\x88¿ºú\x0F\x13\x90vpq\x90ö1)Bß~3dÝ?êÇ\x1Fî|\x00Çù&¹\x82¸ÓÇB¹K\x8E|Á¯õ\x03òCµ\x1E\x89Ú¢'
// getTokenFromServer(data);


const sign = async function (data) {
    return new Promise(async(resolve,reject)=>{
        let myToken =  await getTokenFromServer(data);
        token = myToken;
        resolve(token);
    })
};



module.exports =
    {
        sign
    };
