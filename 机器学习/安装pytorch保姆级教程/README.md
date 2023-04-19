# 知识点：python版本，pytorch版本，显卡驱动支持的CUDA版本，安装Anaconda

安装pytorch最大的难点就是版本兼容问题，python版本，pytorch版本，显卡驱动支持的CUDA版本不管是那个版本对不上都会报错

## 首先解决显卡问题

我的笔记本显卡是1050Ti，显卡驱动版本是397.64，怎么才能知道驱动版本是397.64，`cmd`输入`nvidia-smi`

![请求](./img/1.png)

如果Driver Version小于400先更新显卡驱动

那么这里就需要更新显卡驱动，去nvidia官方网站下载

    https://www.nvidia.cn/Download/driverResults.aspx/148666/cn/

我这里下载的显卡驱动版本是431.36，这里我尝试过500的显卡驱动，但发现电脑承受不了，散热风扇声音很大。

![请求](./img/2.png)

下载下来exe文件，安装双击下一步，下一步就OK了

![请求](./img/3.png)

再次`cmd`输入`nvidia-smi`查看显卡版本和显卡驱动支持的CUDA版本

![请求](./img/4.png)

到这里显卡驱动问题就搞定了

## 安装Anaconda

去官方网站下载exe文件

![请求](./img/5.png)

    https://www.anaconda.com/

这里要注意的是，在安装的时候，勾选`创建系统环境变量`

进入cmd执行以下代码，这里我用的python版本是3.7，如果装了python3.10后期就报错
    
    # 先在e盘下创建一个anaconda3_env文件夹
    # 创建虚拟环境并安装基础工具
    conda create --prefix=e:\anaconda3_env python=3.7
    # 进入虚拟环境
    activate e:\anaconda3_env

    # 其他语法
    # 退出虚拟环境
    deactivate
    # 删除虚拟环境
    conda remove --all --prefix "e:\anaconda3_env"

## 安装pytorch

    https://pytorch.org/get-started/locally/

进入官网复制一条安装命令，由于官方网站首页给出的安装命令不试用老版本，CUDA是11.7，而我现在需要的是CUDA Version: 10.1

![请求](./img/6.png)

进入历史版本页面搜索CUDA 10.1

![请求](./img/7.png)

复制命令执行，等待执行结束

## 注意点

出现报错：找不到指定模块

我这里直接下载Visual Studio Community软件

    https://visualstudio.microsoft.com/zh-hans/vs/community/

![请求](./img/8.png)

勾选默认，安装就OK了