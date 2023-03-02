const express = require('express');
const app = express();
const encryption = require("./aes-test");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_57', function (req, res) {
    let result = '';
    let key = req.body.key;
    let data = req.body.data;
    result = encryption.sign(key, data);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
