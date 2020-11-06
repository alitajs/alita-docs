# 页面间导航

## alita 中的页面

在 alita 中，页面是一个从 `pages` 目录中的文件导出的 React 组件。

alita 默认使用约定式路由来匹配文件。（约定式路由也叫文件路由，就是不需要手写配置，文件系统即路由，通过目录和文件及其命名分析出路由配置。）

需要注意的是，只有以 index 命名的文件才会被注册为路由。

页面与基于**文件名**的路由对应，例如，在开发中:

- `pages/index.js` 对应路由 `/`。
- `pages/list/index.js` 对应路由 `/list` 。

我们已经有了 `pages/index.js` 文件，那么让我们创建 `pages/list/index.js`，看看它是如何运行的。

### 创建一个新的页面

在 `pages` 目录下新建 `list` 目录。

在 `list` 目录下新建一个以 `index.js` 命名的文件，内容如下:

```jsx
export default function List() {
  return <h1>list</h1>
}
```

组件可以有任何名称，但必须将其导出为 `default` 。

现在，确保开发服务器正在运行并访问 [http://localhost:8000/#/list](http://localhost:8000/#/list)。你应该看到这个页面:

![pages list](../../../assets/learn/create-alita-app/pages-list.png)

这就是在 alita 中创建不同页面的方法。

只需在 'pages' 目录下的任意目录下创建一个 `index.js` 文件，该文件的路径就成为 URL 路径。

让我们添加一个链接到新添加的页面，以便可以从主页导航到它。

[完整源码](https://github.com/alitajs/learn-alita-demo/tree/step3-navigate-between-pages-pages-in-alita)
