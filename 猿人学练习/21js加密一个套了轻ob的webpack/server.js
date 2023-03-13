const express = require('express');
const app = express();
const code_21 = require("./21");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_21', function (req, res) {
    let result = '';
    let timestamp = req.body.timestamp;
    result = code_21.sign_21(timestamp);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
