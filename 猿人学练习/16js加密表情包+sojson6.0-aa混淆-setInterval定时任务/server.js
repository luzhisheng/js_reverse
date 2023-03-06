const express = require('express');
const app = express();
const encryption = require("./test");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_16', function (req, res) {
    let result = '';
    let timestamp = req.body.timestamp;
    result = encryption.safe(timestamp);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
