---
previousText: '本地部署调试'
previousUrl: '/tutorial/local'
disableHtmlPreviews: true
---

# 部署到 GitHub

要部署到 github 也很简单。

安装 umi-plugin-gh-pages

```bash
$ yarn add umi-plugin-gh-pages
or
$ npm i umi-plugin-gh-pages --save
```

config/config.ts

```javascript
plugins: [
    'umi-plugin-gh-pages',
],
base: '/alita-course/',
publicPath: '/alita-course/',
```

这里的 base 和 publicPath 配置的是你的 github 项目名字。

如这里我希望通过[http://alitajs.github.io/alita-course/](http://alitajs.github.io/alita-course/)访问（github page 网络不是很好，最好由科学上网）

![](../../../assets/img/tutorial/github1.png)

因为本地部署调试，不需要修改任何的代码和配置，所以一般可以先保证使用 serve 或 now 部署可访问之后，再尝试其他部署方式。
