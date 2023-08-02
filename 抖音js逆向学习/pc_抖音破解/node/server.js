const express = require('express');
const app = express();
const encryption = require("./_ac_signature");
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/_ac_signature', function (req, res) {
    let result = '';
    let _ac_nonce = req.body._ac_nonce;
    result = encryption.get_ac_signature(_ac_nonce);
    res.send(result.toString());
});


app.listen(3005, () => {
    console.log("开启服务，端口 3005")
});
