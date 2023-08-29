const express = require('express');
const app = express();
const encryption = require("./9");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_sign', function (req, res) {
    let result = req.body;
    let sign = result.sign;
    let m_num = result.m_num;
    console.log(sign);
    result = encryption.get_m(sign, m_num);
    res.send(result.toString());
});

app.listen(4001, () => {
    console.log("开启服务，端口 4001")
});
