项目参考：js逆向之模拟浏览器环境

    https://hexo-fanchangrui.vercel.app/2022/08/05/js%E9%80%86%E5%90%91%E4%B9%8B%E6%A8%A1%E6%8B%9F%E6%B5%8F%E8%A7%88%E5%99%A8%E7%8E%AF%E5%A2%83/

# 补环境框架实现
```
.
├── CatVm2                        文件目录
│   ├── browser                   浏览器环境
│   │    ├── HTMLElements
│   │    ├── document.js
│   │    ├── eventTarget.js
│   │    ├── history.js
│   │    ├── htmlDocument.js
│   │    ├── location.js
│   │    ├── mimeType.js
│   │    ├── mimeTypeArray.js
│   │    ├── navigator.js
│   │    ├── plugin.js
│   │    ├── pluginArray.js
│   │    ├── screen.js
│   │    ├── storage.js
│   │    ├── window.js           window环境
│   │    ├── windowProperties.js
│   │── tools
│   │    ├── memory.js           框架运行内存
│   │    ├── node.js             将工具代码组合
│   │    ├── print.js            框架日志功能
│   │    ├── proxy.js            框架代理功能
│   │    ├── safefunction.js     补环境的自定义方法
│   │    ├── tools.js            更改浏览器某些参数
│   │─── catvm2.node.js          补环境的拼接代码
├── code.js                      原代码
├── index.js                     启动代码
├── README.md                    文档
```

## 补window环境
