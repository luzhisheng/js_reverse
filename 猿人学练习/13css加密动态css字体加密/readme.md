# 知识点：字体反爬

## 解题思路

查看请求链接，`Response`返回地址中也是乱码

![请求](./img/2.png)

在审查元素会看到，采集的数字都是`둧 윹 왲  `

![请求](./img/1.png)

观察`css`部分会发现`font-family: "fonteditor" !important;`

![请求](./img/3.png)

尝试全局搜索关键词`fonteditor`，发现字体生成代码

![请求](./img/4.png)

这里通过`$('.font').text('')`方法给`style class=font`设置`css`字体

![请求](./img/5.png)

字体加载格式

    src: url(data:font/truetype;charset=utf-8;base64,+字符串)

接下来可以将字符串部分写入`woff/ttf`格式文件

    import base64
    with open('1.woff','wb') as f:
        f.write( base64.b64decode(jsobject["woff"]) )

先将字体用在线编辑器打开`https://font.qqe2.com/`

![请求](./img/6.png)

再将字体转成`xml`格式

    font = TTFont('./docs/aiding.woff')
    font.saveXML('./docs/movie.xml')

![请求](./img/7.png)

这里发现`post`节点中的`extraNames.psName`排序和显示的数字一一对应

      <psName name="unic381"/>  排序  1
      <psName name="unic467"/>  排序  2
      <psName name="unib516"/>  排序  3
      <psName name="unib895"/>  排序  4
      <psName name="unic132"/>  排序  5
      <psName name="unic213"/>  排序  6
      <psName name="unif579"/>  排序  7
      <psName name="unie148"/>  排序  8
      <psName name="unie197"/>  排序  9
      <psName name="unic156"/>  排序  10 就是 0

接下来就是编写代码问题了

## 参考学习

字体编辑器

    http://font.qqe2.com/

`Python | fontTools`的使用

    https://zhuanlan.zhihu.com/p/350807659
    
`Python`爬虫---刷新你的认知，字体反爬并没有那么简单

    https://zhuanlan.zhihu.com/p/99497149
