1打开浏览器开发者工具全局搜索 get_data，在console中打印 get_data() 返回

    1c28252a6a52a30aedcd18a75d127d13

2将代码复制，node.js运行代码发现

    if (screen['width'] || screen['height']) {
        result = _0x49dc93['ObbQh'](___get_data);
    }
    return result;
    
3替换为

    if (1600 || 900) {
        result = _0x49dc93['ObbQh'](___get_data);
    }
    return result;
    
运行打印

    1c28252a6a52a30aedcd18a75d127d13
    
1c28252a6a52a30a