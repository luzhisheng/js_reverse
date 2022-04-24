const express = require('express');
const app = express();
const encryption = require("../timestamp2");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_timeStamp2', function (req, res) {
    let result = req.body;
    let sign = result.sign;
    console.log(sign);
    result = encryption.timeStamp2(sign);
    res.send(result.toString());
});

app.listen(3002, () => {
    console.log("开启服务，端口3002")
});
