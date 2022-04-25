const express = require('express');
const app = express();
const encryption = require("./taobao_h5_sign");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_sign', function (req, res) {
    let result = req.body;
    let substance = result.isubstanced;
    console.log(substance);
    result = encryption.sign(substance);
    res.send(result.toString());
});

app.listen(3005, () => {
    console.log("开启服务，端口3005")
});
