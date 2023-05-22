const express = require('express');
const app = express();
const code = require("./1");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/match2023_21', function (req, res) {
    let result = '';
    let page = req.body.page;
    result = code.sign(page);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
