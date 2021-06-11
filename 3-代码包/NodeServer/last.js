


//1.这个对象存在于js，而不存在于nodejs，比如window,document,screen.
//2.这些对象的属性 是一个值。
var window ={}
// window.btoa=function(aa){
//    return aa
// }
var document={}

document={"location":{"href":"https://bbs.nightteam.cn/member.php?mod=register"}}
var screen ={"width":900,"height":1200}
console.log(screen.width)

