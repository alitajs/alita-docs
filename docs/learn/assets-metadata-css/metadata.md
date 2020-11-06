# 资源、元数据和CSS

## 元数据

如果我们想修改页面的元数据，比如 `<title>` HTML 标签？

`<title>` 是 `<head>` 标签的一部分内容。让我们深入了解如何在 alita 中修改页面的 `<head>` 标签。

在 alita 项目中，我们使用 `Helmet` 来修改页面的 `<head>` 标签:

```jsx
<Helmet>
  <meta charSet="utf-8" />
  <title>My Title</title>
  <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
```

`<Helmet>` 是内置于 alita 中的 React 组件。它允许你修改页面的 `<head>`。

你可以从 `alita` 模块导入 `Helmet` 组件。

> 注意，无特殊说明，基本上可以做到 `all import from alita`。

### 添加 `<Helmet>` 到 `index.js`

让我们为我们的首页 `/` 上增加一个 `<title>`。

打开 `pages/index.js` 文件。

首先，从 `alita` 导入 `Helmet`:

```js
import { Link, Helmet } from 'alita';
```

然后，将其添加到组件中。现在，我们只添加 `title` 标签:

```jsx
import { Link, Helmet } from 'alita';

export default () => (
    <div>
        <Helmet>
            <title>alita 入门教程</title>
        </Helmet>
        <Link to="/list">Go to list page</Link>
    </div>);
```

尝试访问 [http://localhost:8000](http://localhost:8000)。

浏览器标题现在应该是 “alita 入门教程”。通过使用浏览器的开发工具，你应该会看到 `title` 标签被添加到 `<head>` 中。

> 如果内容被编码，可配置 Helmet 组件属性 encodeSpecialCharacters，来关闭。

## 自定义 html

如果你想完全的自定义 html，你可以创建一个 `src/pages/document.ejs` 文件来实现。alita 约定如果这个文件存在，会作为默认模板，比如：

```html
<!doctype html>
<html>
<head>
  <meta charSet="utf-8" />
  <title>Your App</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### 配置模板

模板里可通过 context 来获取到 alita 提供的变量，比如：

```js
<link rel="icon" type="image/x-icon" href="<%= context.config.publicPath % />favicon.png" />
```

对于元数据的知识，你应该了解的差不多了。下一节课中，我们将讲解如何在 alita 中使用 CSS。
