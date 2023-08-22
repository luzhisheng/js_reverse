# 油猴脚本

## hook cookie
```javascript
// ==UserScript==
// @name        hook cookie
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function () {
    'use strict';
    Object.defineProperty(document, "cookie", {
        set:function(val){
            console.log('hook cookie')
            if(val.indexOf("RM4hZBv0dDon443M=") != -1){
                debugger;
            }
            return val;
        }
    })
})();
```

## hook debugger
```javascript
// ==UserScript==
// @name        hook debugger
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    // 先保留原 constructor
    Function.prototype.constructor_ = Function.prototype.constructor;
    Function.prototype.constructor = function (a) {
        // 如果参数为 debugger，就返回空方法
        if(a == "debugger") {
            return function (){};
        }
        // 如果参数不为 debugger，还是返回原方法
        return Function.prototype.constructor_(a);
    }
})();
```

## hook eval debugger
```javascript
// ==UserScript==
// @name        hook eval debugger
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    var eval_cache = window.eval;
    window.eval = function(obj) {
        console.log(obj)
        if (obj.indexOf('debugger') === -1) {
            eval_cache(obj);
        }
    }
})();
```

## hook match
```javascript
// ==UserScript==
// @name        hook match
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function () {
    // 备份原函数，并添加至原型链
    String.prototype.match_ = String.prototype.match;
    // hook split 方法
    String.prototype.match = function(val){
        var str = this.toString();
        console.log(str);
        console.log(val);
        if(str.indexOf("function") != -1){
            // console.log(str);
            // console.log(val);
            debugger;
        }
        return str.match_(val);
    }
    // 过检测
    String.prototype.match.toString = function (){
        return "function split()  [native code] ";
    }
})();
```

## hook script debugger
```javascript
// ==UserScript==
// @name        hook script debugger
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    var setter = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'text').set;
    Object.defineProperty(HTMLScriptElement.prototype, 'text', {
        set: function (val) {
            // 当调用 script.text = "debugger";该方法将被调用
            val = val.replace(/debugger/g, "");
            return setter.call(this, val);
        }
    })
})();
```

## hook setInterval debugger console
```javascript
// ==UserScript==
// @name        hook setInterval debugger console
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function() {
    var new_setInterval=setInterval;
    window.setInterval=function(a,b){
        if(a.toString().indexOf("debugger")!=-1)
        {
            return null;
        }
        if(a.toString().indexOf("console.log")!=-1)
        {
            return null;
        }
        if(a.toString().indexOf("console.clear")!=-1)
        {
            return null;
        }
        new_setInterval(a,b);
    }
})();
```

## hook window
```javascript
// ==UserScript==
// @name        hook window
// @namespace   http://tampermonkey.net/
// @version     0.1
// @description pass
// @author      ayf
// @run-at      document-start
// @match       *://*/*
// @grant       none
// ==/UserScript==

(function () {
    'use strict';
    Object.defineProperty(window, "_$ss", {
        set:function(val){
            console.log(11111)
            console.warn("hook _$ss", val)
            debugger;
            return val;
        }
    })
})();
```

## Proxy 拦截器
```javascript
// ==UserScript==
// @name         Proxy 拦截器
// @namespace    https://github.com/CC11001100/js-cookie-monitor-debugger-hook
// @version      0.10
// @description  用于监控js对cookie的修改，或者在cookie符合给定条件时进入断点
// @document   https://github.com/CC11001100/js-cookie-monitor-debugger-hook
// @author       CC11001100
// @match       *://*/*
// @run-at      document-start
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```

## 检测Json.parse
```javascript
// ==UserScript==
// @name         检测Json.parse
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       NightTeam
// @include      *://*/*
// @grant        none
// ==/UserScript==
(function () {
    var rparse = JSON.parse;
    JSON.parse = function (a) {
        console.log("检测Json.parse", a);
        return rparse(a);
    }
})();
```

## 检测search decode
```javascript
// ==UserScript==
// @name         search decode
// @namespace    https://www.baidu.com/
// @version      0.1
// @description  try to take over the world!
// @author       NightTeam
// @match       *://*/*
// @grant        none
// ==/UserScript==
(function () {
    for (var p in window){
        var s = p.toLocaleLowerCase();
        if(s.indexOf('encode') != -1 || s.indexOf('ency') != -1){
            console.log("警告!检测编码功能\n", window[p])
        }
        if(s.indexOf('decode') != -1 || s.indexOf('decry') != -1){
            console.log("警告!检测编码功能\n", window[p])
        }
    }
})();
```

## 网页版微信助手
```javascript
// ==UserScript==
// @name         网页版微信助手
// @namespace    https://muxueqz.top
// @version      0.2
// @description  Web Wechat helper
// @author       muxueqz
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @match        *://wx.qq.com/*
// @grant        GM_addStyle
// @grant        GM_notification

// ==/UserScript==
/* jshint ignore:start */
// Generated by CoffeeScript 1.12.8
(function() {
  var bind_mention_user, click_user, close_userselect, contact_list, editarea, get_input_user, get_users, html, origOpen, poll, send_msg, webwxgetcontact_url, webwxinit_url, webwxsync_url;

  origOpen = XMLHttpRequest.prototype.open;

  webwxsync_url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxsync?';

  webwxinit_url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxinit?';

  webwxgetcontact_url = 'https://wx.qq.com/cgi-bin/mmwebwx-bin/webwxgetcontact?';

  contact_list = {};

  XMLHttpRequest.prototype.open = function() {
    this.addEventListener('readystatechange', function() {
      var i, j, k, len, len1, modified_response, original_response, ref, ref1, ref2, results, results1, wx_msg;
      bind_mention_user();
      if (this.responseURL.lastIndexOf(webwxgetcontact_url) === 0) {
        original_response = this.responseText;
        modified_response = JSON.parse(original_response);
        console.log('webwxgetcontact_url request');
        ref = modified_response.MemberList;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          i = ref[j];
          results.push(contact_list[i.UserName] = i.NickName);
        }
        return results;
      } else if (this.responseURL.lastIndexOf(webwxinit_url) === 0) {
        original_response = this.responseText;
        modified_response = JSON.parse(original_response);
        console.log('webwxinit_url request');
        return console.log(modified_response);
      } else if (this.responseURL.lastIndexOf(webwxsync_url) === 0 && this.readyState === 4) {
        original_response = this.responseText;
        modified_response = JSON.parse(original_response);
        if (modified_response.AddMsgList.length > 0) {
          ref1 = modified_response.AddMsgList;
          results1 = [];
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            wx_msg = ref1[k];
            console.log(wx_msg);
            console.log(contact_list[wx_msg.FromUserName], wx_msg.FromUserName);
            if (wx_msg.MsgType === 10002) {
              Object.defineProperty(this, "response", {
                writable: true
              });
              wx_msg.Content = 'test防撤回';
              GM_notification("有人想撤回消息噢");
              modified_response = JSON.stringify(modified_response);
              results1.push(this.response = modified_response);
            } else if (((ref2 = wx_msg.MsgType) === 10000 || ref2 === 10001) && (wx_msg.Content.indexOf("发出红包")) > -1) {
              results1.push(console.log("据说发出了红包"));
            } else if (wx_msg.MsgType === 10000) {
              results1.push(GM_notification("据说收到红包"));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        }
      }
    });
    return origOpen.apply(this, arguments);
  };

  get_users = function(source_text) {
    var select;
    select = document.getElementById("userSelectionBox");
    return select.onclick = function() {
      var text, val;
      text = select.value;
      if (text.length > 1) {
        val = text;
        return console.log(val);
      }
    };
  };

  click_user = function() {
    return console.log('click');
  };

  close_userselect = function() {
    return $('#userSelectionBox').css('display', 'none');
  };

  console.log('console log');

  GM_notification("wx_helper enable");

  GM_addStyle('.main_inner{max-width:70%}');

  GM_addStyle('.main{height:88%; padding-top:50px}');

  GM_addStyle('.bubble{font-size:16px}');

  GM_addStyle('.chat .box_ft .content .flex{font-size:16px}');

  send_msg = angular.element(document.querySelector(".btn.btn_send")).scope();

  editarea = document.getElementById("editArea");

  html = "<ul class=\"dropdown_menu\" id=\"userSelectionBox\" style=\"\n    position: absolute;\n    display: none;\n    width: auto;\n    left: 0;\n    right: auto;\n    top: 50%;\n    max-height: 25%;\n    /* z-index: 900; */\n    right: auto;\n    float: left;\n    min-height: auto;\n    min-width: auto;\n    background: transparent;\n\">\n</ul>";

  $("#chatArea").append(html);

  document.getElementById('userSelectionBox').onclick = function(a) {
    var text;
    text = a.target.name;
    console.log(text);
    return click_user();
  };

  get_input_user = function() {
    var clean_index, editarea_ng, editarea_scope, html_item, input, input_user, input_user_lower, item, j, len, member, member_list, newMessage, new_msg, ref, scope, source_text;
    source_text = editarea.innerHTML;
    input = editarea.innerHTML.replace('<br>', '').replace('</br>', '').split(' ').slice(-1)[0];
    if ('@' === input[0] && input.length > 1) {
      console.log('@input:' + input);
      html = "<select id=\"userSelectionBox\">\n    <option value='" + item + "'>" + item + "</option>\n</select>";
      newMessage = html;
      scope = angular.element('#chatArea').scope();
      member_list = [];
      input_user = input.slice(1, -1);
      input_user_lower = input.slice(1, -1).toLowerCase();
      $('#userSelectionBox').empty();
      ref = scope.currentContact.MemberList;
      for (j = 0, len = ref.length; j < len; j++) {
        member = ref[j];
        item = member.NickName;
        if (item.toLowerCase().lastIndexOf(input_user_lower) !== -1 && input_user_lower.length > 0) {
          html_item = "<li>\n    <a href=\"javascript:;\" title=\"" + item + "\" name=\"" + item + "\">\n        " + item + " </a>\n</li>";
          $('#userSelectionBox').append(html_item);
          console.log(html_item);
          member_list.push(item);
        }
      }
      console.log(member_list);
      clean_index = input.lastIndexOf(input_user) - (2 + input_user.length + 1);
      console.log('clean_index:' + clean_index);
      console.log('input_user:' + input_user);
      console.log('source:' + source_text.slice(0, +clean_index + 1 || 9e9));
      console.log('member_list length:' + member_list.length);
      if (member_list.length > 0) {
        new_msg = source_text.slice(0, +clean_index + 1 || 9e9) + member_list.pop() + ' ';
        editarea_ng = angular.element('#editArea');
        editarea_ng.focus();
        editarea_ng.html('');
        editarea_scope = editarea_ng.scope();
        editarea_scope.insertToEditArea(new_msg);
        console.log('new_msg:' + new_msg);
        $('#userSelectionBox').css('display', 'block');
        return setTimeout(close_userselect, 3000);
      }
    }
  };

  editarea.onkeypress = function(key) {
    console.log('keypress:' + key.key);
    if (key.key === '@') {
      return setTimeout(get_input_user, 10);
    }
  };

  bind_mention_user = function() {
    editarea = document.getElementById("editArea");
    return editarea.onkeypress = function(key) {
      console.log('keypress:' + key.key);
      if (key.key === '@') {
        return setTimeout(get_input_user, 10);
      }
    };
  };

  (poll = function() {
    bind_mention_user();
    return setTimeout(poll, 1000);
  })();

}).call(this);
```