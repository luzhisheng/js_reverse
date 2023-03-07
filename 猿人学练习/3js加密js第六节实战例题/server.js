const express = require('express');
const app = express();
const encryption = require("./3");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_3', function (req, res) {
    let result = '';
    let timestamp = req.body.timestamp;
    result = encryption.res_m(timestamp);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
