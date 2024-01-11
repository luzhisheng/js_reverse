const express = require('express');
const app = express();
const encryption = require("./ast处理混淆");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/v14_v142', function (req, res) {
    let result = req.body;
    let js_code = result.js_code;
    result = encryption.v14_v142(js_code);
    res.send(result.toString());
});

app.listen(4002, () => {
    console.log("开启服务，端口 4002")
});
