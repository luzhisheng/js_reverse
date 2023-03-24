// 将js对象转换为字符串， output

var params = {
    "username": "sfhfpc",
    "password": "123456"
};

console.log(JSON.stringify(params));

// 将字符串转换为对象，output
var params = '{"username":"sfhfpc","password":"123456"}';
console.log(JSON.parse(params), typeof(JSON.parse(params)));
