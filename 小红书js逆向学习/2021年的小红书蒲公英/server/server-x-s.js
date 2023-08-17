const express = require('express');
const app = express();
const encryption = require("../xhs-x-s");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_x_s', function (req, res) {
    let result = req.body;
    let sign = result.sign;
    console.log(sign);
    result = encryption.encryption(sign);
    res.send(result.toString());
});

app.listen(3000, () => {
    console.log("开启服务，端口3000")
});
