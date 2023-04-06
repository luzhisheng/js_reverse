const express = require('express');
const app = express();
const code = require("./w-test");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_68', function (req, res) {
    let result = '';
    let data = req.body;
    result = code.hex_1_str(data);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
