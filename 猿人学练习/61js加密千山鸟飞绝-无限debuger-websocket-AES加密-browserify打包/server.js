const express = require('express');
const app = express();
const encryption = require("./aes-test");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_61', function (req, res) {
    let result = '';
    let pageNum = req.body.pageNum;
    console.log(pageNum);
    result = encryption.sign(pageNum);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
