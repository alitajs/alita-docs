---
previousText: 'Alita 框架是什么'
previousUrl: '/intro'
nextText: '创建你的第一个应用'
nextUrl: '/docs/intro/first-app'
---

# 核心概念

对于那些对 Alita 开发完全陌生的人来说，深入了解项目的核心概念，会有助于后续对整个项目的使用和维护。
在深入探讨应用开发之前，我们将介绍 Alita 的基本工作原理。

## Umi 约定式路由

> 约定式路由部分文档来源于 Umi 官网。

约定式路由也叫文件路由，就是不需要手写配置，文件系统即路由，通过目录和文件及其命名分析出路由配置。

**在 Alita 项目中，默认使用约定式路由模式，如果你不需要，请显示写明 routes 配置，**约定式路由模式分析 `src/pages` 目录拿到路由配置。

比如以下文件结构：

```bash
.
  └── pages
    ├── index.tsx
    └── users.tsx
```

会得到以下路由配置，

```js
[
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/users', component: '@/pages/users' },
];
```

需要注意的是，满足以下任意规则的文件不会被注册为路由，

- 以 `.` 或 `_` 开头的文件或目录
- 以 `d.ts` 结尾的类型定义文件
- 以 `test.ts`、`spec.ts`、`e2e.ts` 结尾的测试文件（适用于 `.js`、`.jsx` 和 `.tsx` 文件）
- `components` 和 `component` 目录
- `utils` 和 `util` 目录
- 不是 `.js`、`.jsx`、`.ts` 或 `.tsx` 文件
- 文件内容不包含 JSX 元素

### 动态路由

约定 `[]` 包裹的文件或文件夹为动态路由。

比如：

- `src/pages/users/[id].tsx` 会成为 `/users/:id`
- `src/pages/users/[id]/settings.tsx` 会成为 `/users/:id/settings`

举个完整的例子，比如以下文件结构，

```bash
.
  └── pages
    └── [post]
      ├── index.tsx
      └── comments.tsx
    └── users
      └── [id].tsx
    └── index.tsx
```

会生成路由配置，

```js
[
  { exact: true, path: '/', component: '@/pages/index' },
  { exact: true, path: '/users/:id', component: '@/pages/users/[id]' },
  { exact: true, path: '/:post/', component: '@/pages/[post]/index' },
  {
    exact: true,
    path: '/:post/comments',
    component: '@/pages/[post]/comments',
  },
];
```

### 全局 layout

约定 `src/layouts/index.tsx` 为全局路由。返回一个 React 组件，并通过 `props.children` 渲染子组件。

比如以下目录结构，

```bash
.
└── src
    ├── layouts
    │   └── index.tsx
    └── pages
        ├── index.tsx
        └── users.tsx
```

会生成路由，

```js
[
  {
    exact: false,
    path: '/',
    component: '@/layouts/index',
    routes: [
      { exact: true, path: '/', component: '@/pages/index' },
      { exact: true, path: '/users', component: '@/pages/users' },
    ],
  },
];
```

### 不同的全局 layout

你可能需要针对不同路由输出不同的全局 layout，Umi 不支持这样的配置，但你仍可以在 `src/layouts/index.tsx` 中对 `location.path` 做区分，渲染不同的 layout 。

比如想要针对 `/login` 输出简单布局，

```js
export default function(props) {
  if (props.location.pathname === '/login') {
    return <SimpleLayout>{props.children}</SimpleLayout>;
  }

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
```

更多 Umi 核心原理，请查阅 [Umi 如何工作？](https://umijs.org/zh-CN/how-umi-works)

## 业务组件封装

对于业务和功能的封装，alita 都以“能不能只写一行代码就实现”的角度去设计和思考。针对当前业务上遇到的难题，抛弃“以后可能有的需求”的思想，进行针对性封装，在实践中遇难题解决难题，对组件进行扩展升级。
了解更多组件封装，请查阅 [组件](/components)

## 自适应样式

自适应样式是 Alita 的内置功能，当 `appType:pc | cordova` 的时候，默认开启了 Umi 的 hd 方案。当在 less 文件中使用 px 时，会被自动转换成 rem 。设计师以 iphone6 为标准出设计稿的话，1rpx=0.5px=1 物理像素。Photoshop 里面量出来的尺寸为物理像素点。所以可以直接使用标注尺寸数据。

## 导航

内置了 tabs 风格的导航，可以通过 `mobileLayout:true` 开启。
在 `src/app.ts` 里面进行配置，API 和方法详解，请查阅[layout 插件](/plugins/layout)

## 原生能力

通过 `native:['','']` 配置使用，配置完，需要执行 `alita native` 安装 `cordova` 插件和`ionic-native` 对应的组件，`alitanative` 只是对调用做了一层封装，在 React 项目中也可以正常使用。
更多信息，请查阅 [native](/native)

## 主题色

基本组件库，内置了 antd 和 antd-mobile 。可以使用使用 modifyVars 的方式来覆盖 less 变量。

```js
export default {
  appType: 'h5',
  theme: {
    '@primary-color': '#1EA5F6',
  },
};
```

[全部主题样式参考这里](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)

## 页面状态保持

alita 暂时的 keep alive 实现，有点投机。我们有多个项目用于生产环境中。你需要自行评估风险。
采用的方案，是在 layout 自己维护一份组件的显示或者隐藏，通过控制 key 变化，来实现的。等 Umi 官方的 keep alive 推出，我们会在底层采用 Umi 的方案，而保持以下的 api 不变，这意味着，你可以无感优化。

```js
export default {
  keepalive: ['/abc', '/list'],
};
```
