const express = require('express');
const app = express();
const encryption = require("./64");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_64', function (req, res) {
    let result = '';
    let data = req.body.data;
    if(data === undefined){
        console.log("数据为空");
        res.send("数据为空".toString());
    }else{
        !(async function () {
            data = String.fromCharCode.apply(this, new Uint8Array(data));
            result = await encryption.sign(data);
            res.send(result.toString());
        })();
    }
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
