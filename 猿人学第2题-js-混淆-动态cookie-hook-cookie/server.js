const express = require('express');
const app = express();
const encryption = require("./案例");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_sign', function (req, res) {
    let result = req.body;
    let sign = result.sign;
    console.log(sign);
    result = encryption.get_m(sign);
    console.log(result);
    res.send(result.toString());
});

app.listen(3009, () => {
    console.log("开启服务，端口3009")
});
