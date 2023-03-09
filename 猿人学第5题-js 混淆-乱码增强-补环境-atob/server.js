const express = require('express');
const app = express();
const pr = require("./pr");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_5', function (req, res) {
    let result = '';
    result = pr.getCookie();
    res.send(result);
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
