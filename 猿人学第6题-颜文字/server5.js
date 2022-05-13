const express = require('express');
const app = express();
const encryption = require("./案例");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_sign', function (req, res) {
    let result = req.body;
    let sign = result.sign;
    let page = result.page;
    console.log(sign, page);
    result = encryption.r(sign, page);
    res.send(result.toString());
});

app.listen(6001, () => {
    console.log("开启服务，端口 4001")
});
