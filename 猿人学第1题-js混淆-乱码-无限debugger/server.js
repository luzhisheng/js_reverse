const express = require('express');
const app = express();
const encryption = require("./js代码");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_sign', function (req, res) {
    let result = req.body;
    let sign = result.sign;
    console.log(sign);
    result = encryption.hex_md5(sign);
    res.send(result.toString());
});

app.listen(3001, () => {
    console.log("开启服务，端口3001")
});
