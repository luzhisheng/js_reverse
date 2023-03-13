在 JS 逆向课程第 14 课《插翅难逃 纵然 CSS 加身，也难逃命运的安排》，我们学习关于 CSS 反爬的原理与反爬措施。

请问：

请运用您所学到的知识，在本题的实战中获取汽车参数列表第二列字符串的总长度。

参考案例 https://blog.csdn.net/weixin_39628186/article/details/111629103

找到

    function _0x5ba2e2(_0x4515b7, _0x49e570) {
        _0x45a615['' + _0x62ded7 + _0x293bc1('er') + _0x2803ba() + _0x139179() + _0x48b25b + _0x5c2751() + _0x294f8e()](_0x45a81a(_0x4515b7) + _0x542f0d() + '\x22' + _0x49e570 + '\x22\x20}', 0x0);
        var _0x1e6df6 = _0x5b083f(_0x45a81a(_0x4515b7));
        for (x in _0x1e6df6) {
            try {
                _0x1e6df6[x]['currentStyle'] = '';
            } catch (_0x485b02) {}
        }
    }


改写成

    function _0x5ba2e2(_0x4515b7, _0x49e570) {
        _0x45a615['' + _0x62ded7 + _0x293bc1('er') + _0x2803ba() + _0x139179() + _0x48b25b + _0x5c2751() + _0x294f8e()](_0x45a81a(_0x4515b7) + _0x542f0d() + '\x22' + _0x49e570 + '\x22\x20}', 0x0);
        var _0x1e6df6 = _0x5b083f(_0x45a81a(_0x4515b7));
        for (x in _0x1e6df6) {
            try {
                _0x1e6df6[x]['currentStyle'] = '';
            } catch (_0x485b02) {}
        }
        console.log(_0x4515b7, _0x49e570)
    }

在浏览器种运行测试

![debugger](../img/127.png)

数字编号对应文字内容对应样式 `class="hs_kw57_configCP"` 中的数字
