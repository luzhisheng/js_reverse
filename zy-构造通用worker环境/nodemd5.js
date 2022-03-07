var crypto = require('crypto');
var content = '123456';
var result = crypto.createHash('md5').update(content).digest("hex");
console.log(result);  //e10adc3949ba59abbe56e057f20f883e
