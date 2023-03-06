const express = require('express');
const app = express();
const code_1 = require("./1");
const code_2 = require("./2");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/sign_34', function (req, res) {
    // rnns, rind, sct
    let result = '';
    let rnns = req.body.rnns;
    let rind = req.body.rind;
    let sct = req.body.sct;
    let result_hex_1 = code_1.hex_1_str(rnns, rind, sct);
    result = code_2.hex_2_str(result_hex_1);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
