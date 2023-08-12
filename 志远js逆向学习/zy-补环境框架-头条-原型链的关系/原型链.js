var a = {} // a是实例
var b = class b{}//原型
var c = new (function (){})//实例
var d = Object()//实例
var e = Object.create({})//实例

function AYF(){

}

var ayf = new AYF;

AYF.prototype.__proto__ = ({}).__proto__
