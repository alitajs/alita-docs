---
previousText: '元数据'
previousUrl: '/learn/assets-metadata-css/metadata'
nextText: '布局组件'
nextUrl: '/learn/assets-metadata-css/layout-component'
---

# 资源、元数据和 CSS

## CSS 样式

现在让我们谈谈 **CSS 样式**。
打开我们首页的代码，即 `src/pages/index`。

```js
import { Link, Helmet } from 'alita';

export default () => (
  <div>
    <Helmet>
      <title>alita 入门教程</title>
    </Helmet>
    <Link to="/list">Go to list page</Link>
  </div>
);
```

如你所见，我们在首页编写了 html 的 demo。你可以理解为我们搭建了页面的‘骨架’。但是往往我们需要页面按照我们的设计来呈现样式，因此我们还需要加上 CSS 样式，来声明 html 标签的渲染样式。

### 编写和导入 CSS

alita 内置支持 CSS 和 Less 的支持，允许你导入 `.css` 和 `.less` 文件 。

在本课中，我们将讨论如何在 alita 中编写和导入 CSS 文件。我们还将讨论 alita 对 [CSS Modules](https://github.com/css-modules/css-modules) 和 [Less](http://lesscss.org/) 的内置支持。我们开始吧！
