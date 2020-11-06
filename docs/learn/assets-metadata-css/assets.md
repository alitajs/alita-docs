# 资源、元数据和CSS

## 资源

首先，让我们讨论一下 alita 如何处理 **静态资产** （如图像）。

新建文件夹 `src/assets` ，这是一个建议目录，我们希望能有一个目录统一管理我们的静态资源。
将简介中提到的，提前下载的 alita logo 图片，放到这个文件夹下，即 `src/assets/logo.png`。

在组件中使用图片，我们可以将它当作一个模块直接引入，比如我们在 `list` 页面中使用它：

```js
import LogoImg from '@/assets/logo.png';

export default function List({ history }) {
    return (
        <div>
            <img src={LogoImg} width={150} />
            <h1>list</h1>
            <button onClick={() => history.goBack()}>go back!</button>
            <button onClick={() => history.push('/')} >go to index!</button>
        </div>
    )
}
```

alita 默认将 `@` 映射到项目的 `src` 目录中，所以你可以在项目的任意位置使用 `@/component` 或 `@/utils` 之类的路径来引入模块和资源。你将不再需要使用到如 `../../../componet` 之类的相对路径。

在 css 中同样支持别名，只是别忘了在 css 中使用别名需要增加 `~` 前缀。

```css
.logo {
  background: url(~@/foo.png);
}
```

通过路径引入图片的时候，如果图片小于 10K，会被编译为 Base64，否则会被构建为独立的图片文件输出到构建目录的 `static` 目录中。

10K 这个阈值可以通过 inlineLimit 配置修改。如：

```js
{
  inlineLimit:10000 // 10K
}
```

如果你有一些希望原样被拷贝到构建目录的文件，如 `robots.txt`、Google 站点验证和其他任何静态资产希望被拷贝到构建目录中，则可以将他们放置在顶层的 `public` 目录中。

> 注意：不能存在 `public/index.html` 和其他任何与构建产物同名的文件，不然构建产物将会被覆盖，导致不可预知的错误。

[完整源码](https://github.com/alitajs/learn-alita-demo/tree/step5-assets-metadata-css-assets)
