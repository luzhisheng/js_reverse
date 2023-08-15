// 更改浏览器某些参数
// 在此文件下的代码必须要框架run方法执行后执行
catvm.AddPlugin = function(data){
    if (catvm.memory.PluginArray.temp == undefined){
        catvm.memory.PluginArray.temp = []
    }
    catvm.memory.PluginArray.temp.push(data);
};
