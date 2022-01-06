const express = require('express')
const app = express()
const sum = require("./sum")
var bodyParser = require('body-parser');
app.use(bodyParser());


app.post('/get_num', function (req, res) { 
    let result = req.body
    console.log("result",result)
    let a = parseInt(result.a)
    let b = parseInt(result.b)
    result = sum.add(a, b)
    res.send(result.toString());
})

app.listen(3000, () => {
    console.log("开启服务，端口3000")
})



