const express = require("express");
const app = express(); // express实例化
// 监听端口，设置回调
app.listen(3000,()=>{
    console.log("server start");
});

const {gettt} = require('./tt');// 导入自己的js文件

const bodyParser = require("body-parser");// 插件 解析post请求过来的数据
//app.use 使用中间件(插件)
app.use(bodyParser.urlencoded({extend:false}));
//设置一个post接口
app.post('/tt',(req,res)=>{
    let {ps} = req.body;
    res.send({err:0,msg:gettt(ps)});
});