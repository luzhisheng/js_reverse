const express = require('express')
const app = express()
const crypto = require("./crypto")
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/crypto', function (req, res) {  
    let result = req.body
    console.log(result)
    let user = result.user
    let pwd = result.password
    result = crypto.Encrypt(user, pwd)
    res.send(result);
})

app.listen(3000, () => {
    console.log("开启服务，端口3000")
})



