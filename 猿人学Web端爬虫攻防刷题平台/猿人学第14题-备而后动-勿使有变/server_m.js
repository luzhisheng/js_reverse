const express = require('express');
const app = express();
const encryption = require("./gee");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/m', function (req, res) {
    let result = req.body;
    let c = result.c;
    let e = result.e;
    let page = result.page;
    let timestamp = result.timestamp;
    console.log(c, e);
    result = encryption.res_m(c, e, page, timestamp);
    res.send(result.toString());
});

app.listen(4001, () => {
    console.log("开启服务，端口 4001")
});
