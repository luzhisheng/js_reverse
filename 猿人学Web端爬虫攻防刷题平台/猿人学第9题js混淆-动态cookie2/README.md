# 猿人学第9题js混淆-动态cookie2

## 去除格式化检测代码

第一处
```javascript
var _0x2bf8cc = function() {
    var _0x393c59 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return _0x393c59.test(_0x9a4b8c.removeCookie.toString());
};
```
修改成
```javascript
var _0x2bf8cc = function() {
    var _0x393c59 = new RegExp("");
    return _0x393c59.test(_0x9a4b8c.removeCookie.toString());
};
```
第二处
```javascript
var _0x39e88c = function() {
    var _0x5ea72e = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return !_0x5ea72e.test(_0x3b5e10.toString());
};
```
修改成
```javascript
var _0x39e88c = function() {
    var _0x5ea72e = new RegExp("");
    return !_0x5ea72e.test(_0x3b5e10.toString());
};
```
第三处
```javascript
var _0x569c5b = function(_0x201582) {
    this.rc4Bytes = _0x201582;
    this.states = [1, 0, 0];

    this.newState = function() {
        return "newState";
    }
    ;

    this.firstState = "\\w+ *\\(\\) *{\\w+ *";
    this.secondState = "['|\"].+['|\"];? *}";
};

_0x569c5b.prototype.checkState = function() {
    var _0x225f13 = new RegExp(this.firstState + this.secondState);
    return this.runState(_0x225f13.test(this.newState.toString()) ? --this.states[1] : --this.states[0]);
}
```
修改成
```javascript
var _0x569c5b = function(_0x201582) {
    this.rc4Bytes = _0x201582;
    this.states = [1, 0, 0];

    this.newState = function() {
        return "newState";
    };

    this.firstState = "";
    this.secondState = "";
};

_0x569c5b.prototype.checkState = function() {
    var _0x225f13 = new RegExp(this.firstState + this.secondState);
    return this.runState(_0x225f13.test(this.newState.toString()) ? --this.states[1] : --this.states[0]);
}
```
再次运行报错`Maximum call stack size exceeded`