## 删除检测代码

格式化检测1
```javascript
var _0x5b597e = function() {
    var _0x1ca6f6 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");

    return _0x1ca6f6.test(_0x338243.removeCookie.toString());
};
```
还原后
```javascript
var _0x5b597e = function() {
    var _0x1ca6f6 = new RegExp("");

    return _0x1ca6f6.test(_0x338243.removeCookie.toString());
};
```
格式化检测2
```javascript
this.YPtKGA = "\\w+ *\\(\\) *{\\w+ *";
this.FFSDOr = "['|\"].+['|\"];? *}";
```
还原后
```javascript
this.YPtKGA = "";
this.FFSDOr = "";
```
