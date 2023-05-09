const express = require('express');
const app = express();
const encryption = require("./15");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_15', function (req, res) {
    let result = '';
    let timestamp = req.body.timestamp;
    let num_sign = req.body.num_sign;
    result = encryption.safe(timestamp, num_sign);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
