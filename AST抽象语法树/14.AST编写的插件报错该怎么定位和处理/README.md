插件报错后，一般我会在插件的第一行打印报错的源代码:

```javascript
console.log(path.toString());
```

观察当前源代码的特征，如果不符合所遍历的规则，可以进行return。 也可以进行判断，只处理需要处理的path。