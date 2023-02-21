const express = require('express');
const app = express();
const encryption = require("./qqcs");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign', function (req, res) {
    let result = '';
    let data = req.body.data;
    let types = req.body.types;
    result = encryption.sign(data, types);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
