function BrowserType() {
    // 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
    const ua = navigator.userAgent.toLowerCase();
    const testUa = regexp => regexp.test(ua);
    const testVs = regexp => ua.match(regexp)
        .toString()
        .replace(/[^0-9|_.]/g, "")
        .replace(/_/g, ".");
    // 系统
    let system = "unknow";
    if (testUa(/windows|win32|win64|wow32|wow64/g)) {
        system = "windows"; // windows系统
    } else if (testUa(/macintosh|macintel/g)) {
        system = "macos"; // macos系统
    } else if (testUa(/x11/g)) {
        system = "linux"; // linux系统
    } else if (testUa(/android|adr/g)) {
        system = "android"; // android系统
    } else if (testUa(/ios|iphone|ipad|ipod|iwatch/g)) {
        system = "ios"; // ios系统
    }
    // 系统版本
    let systemVs = "unknow";
    if (system === "windows") {
        if (testUa(/windows nt 5.0|windows 2000/g)) {
            systemVs = "2000";
        } else if (testUa(/windows nt 5.1|windows xp/g)) {
            systemVs = "xp";
        } else if (testUa(/windows nt 5.2|windows 2003/g)) {
            systemVs = "2003";
        } else if (testUa(/windows nt 6.0|windows vista/g)) {
            systemVs = "vista";
        } else if (testUa(/windows nt 6.1|windows 7/g)) {
            systemVs = "7";
        } else if (testUa(/windows nt 6.2|windows 8/g)) {
            systemVs = "8";
        } else if (testUa(/windows nt 6.3|windows 8.1/g)) {
            systemVs = "8.1";
        } else if (testUa(/windows nt 10.0|windows 10/g)) {
            systemVs = "10";
        }
    } else if (system === "macos") {
        systemVs = testVs(/os x [\d._]+/g);
    } else if (system === "android") {
        systemVs = testVs(/android [\d._]+/g);
    } else if (system === "ios") {
        systemVs = testVs(/os [\d._]+/g);
    }
    // 平台
    let platform = "unknow";
    if (system === "windows" || system === "macos" || system === "linux") {
        platform = "desktop"; // 桌面端
    } else if (system === "android" || system === "ios" || testUa(/mobile/g)) {
        platform = "mobile"; // 移动端
    }
    // 内核和载体
    let engine = "unknow";
    let supporter = "unknow";
    if (testUa(/applewebkit/g)) {
        engine = "webkit"; // webkit内核
        if (testUa(/edge/g)) {
            supporter = "edge"; // edge浏览器
        } else if (testUa(/opr/g)) {
            supporter = "opera"; // opera浏览器
        } else if (testUa(/chrome/g)) {
            supporter = "chrome"; // chrome浏览器
        } else if (testUa(/safari/g)) {
            supporter = "safari"; // safari浏览器
        }
    } else if (testUa(/gecko/g) && testUa(/firefox/g)) {
        engine = "gecko"; // gecko内核
        supporter = "firefox"; // firefox浏览器
    } else if (testUa(/presto/g)) {
        engine = "presto"; // presto内核
        supporter = "opera"; // opera浏览器
    } else if (testUa(/trident|compatible|msie/g)) {
        engine = "trident"; // trident内核
        supporter = "iexplore"; // iexplore浏览器
    }
    // 内核版本
    let engineVs = "unknow";
    if (engine === "webkit") {
        engineVs = testVs(/applewebkit\/[\d._]+/g);
    } else if (engine === "gecko") {
        engineVs = testVs(/gecko\/[\d._]+/g);
    } else if (engine === "presto") {
        engineVs = testVs(/presto\/[\d._]+/g);
    } else if (engine === "trident") {
        engineVs = testVs(/trident\/[\d._]+/g);
    }
    // 载体版本
    let supporterVs = "unknow";
    if (supporter === "chrome") {
        supporterVs = testVs(/chrome\/[\d._]+/g);
    } else if (supporter === "safari") {
        supporterVs = testVs(/version\/[\d._]+/g);
    } else if (supporter === "firefox") {
        supporterVs = testVs(/firefox\/[\d._]+/g);
    } else if (supporter === "opera") {
        supporterVs = testVs(/opr\/[\d._]+/g);
    } else if (supporter === "iexplore") {
        supporterVs = testVs(/(msie [\d._]+)|(rv:[\d._]+)/g);
    } else if (supporter === "edge") {
        supporterVs = testVs(/edge\/[\d._]+/g);
    }
    // 外壳和外壳版本
    let shell = "none";
    let shellVs = "unknow";
    if (testUa(/micromessenger/g)) {
        shell = "wechat"; // 微信浏览器
        shellVs = testVs(/micromessenger\/[\d._]+/g);
    } else if (testUa(/qqbrowser/g)) {
        shell = "qq"; // QQ浏览器
        shellVs = testVs(/qqbrowser\/[\d._]+/g);
    } else if (testUa(/ucbrowser/g)) {
        shell = "uc"; // UC浏览器
        shellVs = testVs(/ucbrowser\/[\d._]+/g);
    } else if (testUa(/qihu 360se/g)) {
        shell = "360"; // 360浏览器(无版本)
    } else if (testUa(/2345explorer/g)) {
        shell = "2345"; // 2345浏览器
        shellVs = testVs(/2345explorer\/[\d._]+/g);
    } else if (testUa(/metasr/g)) {
        shell = "sougou"; // 搜狗浏览器(无版本)
    } else if (testUa(/lbbrowser/g)) {
        shell = "liebao"; // 猎豹浏览器(无版本)
    } else if (testUa(/maxthon/g)) {
        shell = "maxthon"; // 遨游浏览器
        shellVs = testVs(/maxthon\/[\d._]+/g);
    }
    return Object.assign({
        engine, // webkit gecko presto trident
        engineVs,
        platform, // desktop mobile
        supporter, // chrome safari firefox opera iexplore edge
        supporterVs,
        system, // windows macos linux android ios
        systemVs
    }, shell === "none" ? {} : {
        shell, // wechat qq uc 360 2345 sougou liebao maxthon
        shellVs
    });
}
var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

    // public method for encoding
    , encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        } // Whend

        return output;
    } // End Function encode


    // public method for decoding
    , decode: function (input,supporter) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << supporter.length) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        } // Whend

        output = Base64._utf8_decode(output);

        return output;
    } // End Function decode


    // private method for UTF-8 encoding
    , _utf8_encode: function (string) {
        var utftext = "";
        string = string.replace(/\r\n/g, "\n");

        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        } // Next n

        return utftext;
    } // End Function _utf8_encode

    // private method for UTF-8 decoding
    , _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c, c1, c2, c3;
        c = c1 = c2 = 0;

        while (i < utftext.length) {
            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        } // Whend

        return string;
    }, // End Function _utf8_decode
    run: function (id, attr,supporter) {
        let all_str = $(id).getAttribute(attr)
        let end_index=supporter.length+58
        Base64._keyStr = all_str.substring(0, end_index)
        let charset = all_str.substring(64, all_str.length)
        let encoded = Base64.decode(charset,supporter);
        $(id).value = encoded;
    }

}
$ = function (id) {
    return document.getElementById(id)
};

function doit() {
    let browser_type=BrowserType();
    console.log(browser_type)
    let supporter =browser_type.supporter
    if(supporter==="chrome"){
        Base64.run('base64', 'data',supporter)
    }

}
window.onload =doit