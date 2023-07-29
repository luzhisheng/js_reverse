# 抖音app抓包记录

魔改抖音各版本下载地址下载地址：

    https://pan.lanzoub.com/b0f199a5a

豌豆荚各版本：

    https://www.wandoujia.com/apps/7461948/history

`libsscronet.so`文件下载

    链接: https://pan.baidu.com/s/1zr4QVF--sSBEYTHf4lxabg 提取码: bjam

**原理：修改检测so文件`libsscronet.so`**

将修改好的`libsscronet.so`文件放入手机data目录下
```bash
adb push /home/ayf/project/app/douyin24.6.0/libsscronet.so /data/
```
找到目标文件路径
![在这里插入图片描述](https://img-blog.csdnimg.cn/adf83d5cebe7494eb60b249e27d23b3f.png#pic_center)
将`libsscronet.so`文件复制到`/lib/arm`目录下
```bash
cp libsscronet.so /data/app/com.ss.android.ugc.aweme-NNnYlc7oxZid_j-uRGkrhA==/lib/arm
```
进入`/lib/arm`目录修改so文件权限
```bash
cd /data/app/com.ss.android.ugc.aweme-NNnYlc7oxZid_j-uRGkrhA==/lib/arm
chgrp system libsscronet.so
chown system libsscronet.so
chmod 777 libsscronet.so
```
抓包效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/9050464f8a1342eeb61437bba235998d.png#pic_center)
**来源**

具体的`libsscronet.so`文件和对应的安卓安装包可以搜索微信公众号：阿蛇 爬虫spider获取，原作者会经常更新。