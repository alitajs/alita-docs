---
previousText: '使用CLI创建初始化项目'
previousUrl: '/learn/tutorial/initialization'
nextText: '全局布局'
nextUrl: '/learn/tutorial/layout'
disableHtmlPreviews: true
---

# 项目结构

这里罗列了 alita 项目中强制要求的目录结构，在项目开发中，请完全遵照这个目录结构组织代码。

```bash
.
├── config
│   └── config.ts
├── mock
│   └── app.ts
├── package.json
├── src
│   ├── app.ts
│   ├── layout
│   │   ├── BasicLayout.tsx
│   │   ├── index.less
│   ├── models
│   │   ├── global.ts
│   │   └── index.ts
│   ├── pages
│   │   └── index
│   │       ├── index.less
│   │       ├── index.tsx
│   │       └── service.ts
│   ├── utils
│   │   └── index.ts
│   └── services
│       └── api.ts
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .stylelintrc.js
├── tsconfig.json
└── typings.d.ts
```

这里是我们当前项目的目录结构，我们可以在约定使用的目录中，添加我们所需要的内容，达到快速实现功能需求的目的。

## ./mock/

约定 `mock` 目录里所有的 `.js` 文件会被解析为 mock 文件。

比如，新建 mock/users.js，内容如下：

```js
export default {
  '/api/users': ['a', 'b'],
};
```

然后在浏览器里访问 http://localhost:8000/api/users 就可以看到 `['a', 'b']` 了。

> 注意请求地址和 mock 里面的文件名无关，只和文件内部的定义相关。你可以取任意的命名，但为了更好的维护项目，你应该取一些语意化更好的名字

## ./src/

我们约定了将项目的所有源码放在 `src` 目录里面，`umi` 项目的大部分的工作都将在这里进行。

当我们运行 umi dev 或者 umi build 时，我们的代码会被转换成浏览器能够运行的正确的 JavaScript 版本，所以我们可以在这里使用 `TypeScript` 或者其他 `JavaScript` 新语法。

## ./src/layouts/index.js

约定式的全局布局，实际上是在路由外面套了一层。比如，你的路由是：

```
[
  { path: '/', component: './pages/index' },
  { path: '/users', component: './pages/users' },
]
```

从组件角度可以简单的理解为如下关系：

```jsx
<layout>
  <page>1</page>
  <page>2</page>
</layout>
```

> 只要存在 `layouts/index.js`就生效,如果你不需要这个，那你只能将它重命名为别的名字。

## ./src/pages/

约定 `pages` 下所有的 `(j|t)sx?` 文件即路由。使用约定式路由，意味着不需要维护，可怕的路由配置文件。最常用的有基础路由和动态路由（用于详情页等，需要从 url 取参数的情况）

### 基础路由

假设 `pages` 目录结构如下：

```
+ pages/
  + users/
    - index.js
  - index.js
```

那么，会自动生成路由配置如下：

```javascript
[
  { path: '/', component: './pages/index.js' },
  { path: '/users/', component: './pages/users/index.js' },
];
```

### 动态路由

约定，带 `[]` 的目录或文件为动态路由。比如以下目录结构：

```
+ pages/
  + post/
    - [index].js
  + users/
  - [index].js
```

会生成路由配置如下：

```javascript
[
  { path: '/', component: './pages/index.js' },
  { path: '/users/:index', component: './pages/users/$index.js' },
  { path: '/post/:index', component: './pages/post/$index.js' },
];
```

## ./src/pages/404.js

当访问的路由地址不存在时，会自动显示 404 页面。只有 build 之后生效。调试的时候可以访问 `/404` 。

> 注意开发模式下有内置 `umi` 提供的 `404` 提示页面。

## ./src/.umi/

这是 umi dev 时生产的临时目录，默认包含 `umi.js` 和 `router.js`，有些插件也会在这里生成一些其他临时文件。可以在这里做一些验证，**但请不要直接在这里修改代码，umi 重启或者 pages 下的文件修改都会重新生成这个文件夹下的文件。**

> 以上说明来自 umi 官网，如果你不理解，或者不想理解太多 umi 的细节，你可以不要理会这些文件。

## ./src/.umi-production/

同 `src/.umi`，但是是在 `umi build` 时生成的，会在 `umi build` 执行完自动删除。

> 以上说明来自 umi 官网，如果你不理解，或者不想理解太多 umi 的细节，你可以不要理会这些文件。

## 文件名后缀.test.js 和 .e2e.js

测试文件，`umi test` 会查找所有的 .(test|e2e).(j|t)s 文件跑测试。

## ./src/global.(j|t)sx?

在入口文件最前面被自动引入，可以考虑在此加入 polyfill。umi 区别于其他前端框架，没有显示的程序主入口，如`src/app.js`或`src/index.js`，所以在引用某些模块的时候，如果模块功能要求在程序主入口添加代码时，你就可以写到这个文件。

## ./src/global.(css|less|sass|scss)

这个文件不走 css modules，自动被引入，可以写一些全局样式，或者做一些样式覆盖。

## ./config/config.js

配置文件。

## .env

环境变量，比如：

```
BROWSER=none
```

[参考文档：umi 官网-目录及约定](https://umijs.org/zh/guide/app-structure.html#%E7%9B%AE%E5%BD%95%E5%8F%8A%E7%BA%A6%E5%AE%9A)
