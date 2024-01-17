const express = require('express');
const app = express();
const encryption = require("./v");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/v', function (req, res) {
    let result = req.body;
    let aes_value = result.aes_value;
    let secret_iv = result.secret_iv;
    console.log(aes_value);
    result = encryption.get_v(aes_value, secret_iv);
    res.send(result.toString());
});

app.listen(4001, () => {
    console.log("开启服务，端口 4001")
});
