---
toc: menu
---

# 配置

Alita 的设计初衷就是面向场景化的方案，所以我们的配置方案，有点偏向于指明是哪个场景下使用。

其实极端一点的做法是提供一个 `appType` 配置，就能够满足所有的需求。

但是考虑到用法上的简便和合理性。

我们提供了几个配置项可供选择。

约定 `config/config.j|ts` 为项目配置文件。

## appType

- Type: `pc`,`h5`,`cordova`,`micro`,`native`

配置项目类型，只支持 `pc`,`h5`,`cordova`,`micro`,`native` 五者之一。
一般开发移动端页面，先配置 `appType:'h5'` 进行开发调试，当需要使用 Cordova 打包，或者需要调试一些原生能力时，将配置改成 `appType:'cordova'`。
详细的如何运行，请查阅[运行预览](/docs/building/running)

## ssr [2.4.18]

- Type: `object`
- Default: `false`

配置是否开启服务端渲染，配置如下：

```js
{
  // 一键开启
  ssr: {
    // 更多配置
    // forceInitial: false,
    // removeWindowInitialProps: false
    // devServerRender: true,
    // mode: 'string',
    // staticMarkup: false,
  }
}
```

配置说明：

- `forceInitial`：客户端渲染时强制执行 `getInitialProps` 方法，常见的场景：静态站点希望每次访问时保持数据最新，以客户端渲染为主。
- `removeWindowInitialProps`: HTML 中移除 `window.getInitialProps` 变量，避免 HTML 中有大量数据影响 SEO 效果，场景：静态站点
- `devServerRender`：在 `umi dev` 开发模式下，执行渲染，用于 umi SSR 项目的快速开发、调试，服务端渲染效果所见即所得，同时我们考虑到可能会与服务端框架（如 [Egg.js](https://eggjs.org/)、[Express](https://expressjs.com/)、[Koa](https://koajs.com/)）结合做本地开发、调试，关闭后，在 `umi dev` 下不执行服务端渲染，但会生成 `umi.server.js`（Umi SSR 服务端渲染入口文件），渲染开发流程交由开发者处理。
- `mode`：渲染模式，默认使用 `string` 字符串渲染，同时支持流式渲染 `mode: 'stream'`，减少 TTFB（浏览器开始收到服务器响应数据的时间） 时长。
- `staticMarkup`：html 上的渲染属性（例如 React 渲染的 `data-reactroot`），常用于静态站点生成的场景上。

注意：

- 开启后，执行 `umi dev` 时，访问 http://localhost:8000 ，默认将单页应用（SPA）渲染成 html 片段，片段可以通过开发者工具『显示网页源代码』进行查看。
- 执行 `umi build`，产物会额外生成 `umi.server.js` 文件，此文件运行在 Node.js 服务端，用于做服务端渲染，渲染 html 片段。
- 如果应用没有 Node.js 服务端，又希望生成 html 片段做 SEO（搜索引擎优化），可以开启 [exportStatic](#exportstatic) 配置，会在执行 `umi build` 构建时进行**预渲染**。
- `removeWindowInitialProps` 与 `forceInitial` 不可同时使用

演示 demo： https://github.com/alitajs/next-alita-app

### 项目中需要改造的

- [ ] 更新"@alitajs/list-view": "1.0.7" "alita": "2.8.18"
- [ ] 安装 react-document-title
- [ ] 如果提示找不到 typescript 就安装 yarn add typescript --dev
- [ ] 修改配置 ssr: {} 另外要根据部署环境修改 publicPath
- [ ] 项目中使用到 document 和 window 的地方，都需要使用 isBrowser 判断处理

`import { isBrowser } from 'alita';`

或者

```
export const isBrowser = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';

```

- [ ] 编写服务端，koa demo 可以参考 https://github.com/alitajs/next-alita-app/blob/master/server.js

## aconsole [2.8.2+]

一些 alita 项目的移动端调试工具的集合。

```ts
{
  aconsole:{
    inspx:{},
    console:{}
  }
}
```

### inspx

inspx 可以通过摇一摇唤醒，用于查看页面渲染的 px 值，显示值为真实的 px 值，可能是设置的 px 值 @2x 或者 @3x。

配置项。

- 可写
- 类型：object

```ts
export default {
  aconsole: {
    inspx: {
      production: false, // 希望在生产上也能够保留 inspx 功能，一般用在特殊的灰度环境
      disabled: false, // 是否关闭 inspx 功能，推荐用法是不使用，这里可以不配置 inspx 。
      margin: true,
      size: true,
      padding: true,
    },
  },
};
```

### console

控制台通过配置唤起。

配置项。

- 可写
- 类型：object

| 键名                | 类型     | 可选 | 默认值                                      | 描述                                                     |
| ------------------- | -------- | ---- | ------------------------------------------- | -------------------------------------------------------- |
| defaultPlugins      | Array    | true | ['system', 'network', 'element', 'storage'] | 需要自动初始化并加载的内置插件。                         |
| onReady             | Function | true |                                             | 回调方法，当 vConsole 完成初始化并加载完内置插件后触发。 |
| onClearLog          | Function | true |                                             | 回调方法，点击 Log 或 System 面板的 "Clear" 按钮后出发。 |
| maxLogNumber        | Number   | true | 1000                                        | 超出上限的日志会被自动清除。                             |
| disableLogScrolling | Boolean  | true |                                             | 若为 `false`，有新日志时面板将不会自动滚动到底部。       |
| theme               | String   | true | 'light'                                     | 主题颜色，可选值为 'light'                               | 'dark'。 |

## mobileLayout

- Type: boolean

开启 mobile layout 的运行时模式，可以在 `src/app.ts` 中，设置[运行时配置](/config/runtime) `mobileLayout`。
还可以在页面中使用 `setPageNavBar` 修改当前页面的 layout，使用 `setTabBarList` 在页面级修改底部 Tabs 的信息，常用与动态修改 `badge` 。

```ts
import React, { FC, useEffect } from 'react';
import { setPageNavBar } from 'alita';
const SettingsPage: FC<> = ({ settings, dispatch, location }) => {
  const onLeftClick = () => {
    console.log('click left');
  };
  useEffect(() => {
    setPageNavBar({
      pagePath: location.pathname,
      navBar: {
        onLeftClick,
        rightContent: [
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ],
      },
    });
    setTabBarList({
      pagePath: location.pathname,
      text: 'home',
      badge: '1',
    });
  }, []);
  const { name } = settings;

  return <div className={styles.center}>Hello Alita</div>;
};
```

`setPageNavBar` 接收一个[对象参数](/components/alita-layout#navlist-)，有两个值，一个是需要修改的 `pagePath`。第二个参数是 `navBar` 配置的是 `antd-mobile` 的 `NavBar`,支持的参数有

| 属性         |           说明           |       类型        |            默认值            |
| :----------- | :----------------------: | :---------------: | :--------------------------: |
| mode         |           模式           |      string       | 'dark' enum{'dark', 'light'} |
| icon         | 出现在最左边的图标占位符 |     ReactNode     |              -               |
| leftContent  |       导航左边内容       |        any        |              无              |
| rightContent |       导航右边内容       |        any        |              无              |
| onLeftClick  |     导航左边点击回调     | (e: Object): void |              无              |

`setTabBarList` 接收一个[对象参数](/components/alita-layout#list-)

| 属性             | 类型     | 必填 | 说明                                                   |
| ---------------- | -------- | ---- | ------------------------------------------------------ |
| pagePath         | string   | 是   | 页面路径，必须在 pages 中先定义                        |
| text             | string   | 是   | tab 上按钮文字                                         |
| iconPath         | string   | 是   | 图片路径，当 position 为 top 时，不显示 icon。         |
| selectedIconPath | string   | 是   | 选中时的图片路径，当 position 为 top 时，不显示 icon。 |
| iconSize         | string   | 否   | 0.44rem                                                |
| badge            | string   | 否   | badge                                                  |
| onPress          | function | 否   | 点击事件                                               |
| title            | string   | 否   | 定义页面标题                                           |

> 注意：在使用 `setPageNavBar` 设置响应函数时，不要使用 `hooks` 方法。（可能会有闭包问题。）尽量使用 `dispatch` 抛出事件。

> 注意：如果是从 `props.location.pathname` 中取到，可能快速切换的时候，会出现错误。尽量显示写明，如：`pagePath:'/home'`。

## keepalive [beta]

- Type: string[]

配置需要状态保持的路由，需要通过 `dropByCacheKey` 方法解除。

```ts
export default {
  keepalive: ['route path', 'route path'],
};
```

解除当前缓存

```ts
import { dropByCacheKey } from 'alita';

dropByCacheKey('/list');
```

> 注意，keepalive 的配置项，支持正则表达式。但是所有的路由正则匹配应该是全小写的，比如不管你的路由是 `home`、`Home` 还是 `hoMe` ，只有设置 `keepalive:[/home/]` 才有效。而字符串的配置方式就刚好相反，如果你的路由是`home`，你配置 `home`、`Home` 还是 `hoMe` 都有效。

以上使用方法是配合 `mobileLayout:true` 使用的。
如果你没有使用 `mobileLayout`，而是自定义的 `layout` ，即项目中存在 `src/layouts/index.tsx`。
需要使用 `KeepAliveLayout` 包裹 `children`。

```ts
import { KeepAliveLayout } from 'alita';
const BasicLayout: React.FC<BasicLayoutProps> = props => {
  return (
    <OtherLayout>
      <KeepAliveLayout {...props}>{children}</KeepAliveLayout>
    </AlitaLayout>
  );
};

export default BasicLayout;
```

## displayName 和 packageId

- Type: string

配置打包时候的包名和 Bundle Identifier，指的注意的是，它们需要再执行 cordova 项目初始化之前配置。

如果旧的项目，没有编写过原生代码，请删掉脚本生成的原生代码，重新初始化。

如果久的项目，编写过原生代码，那可以通过在 IDE 中修改，这两个值，如果发现不好改。
可以在 VS Code 中全局搜索替换。

这两个配置在微应用和 alita 项目作为主应用时都需要配置。

> 当为微应用项目时，packageId 即后台管理系统提供的 appKey

## mainPath

- Type: string

修改项目的路由主入口。

默认主入口是 `src/pages/index/index.tsx`

```ts
export default {
  mainPath: '/home',
};
```

经过上面配置修改之后，主入口变成 `src/pages/home/index.tsx`

## analyze

- Type: `object`
- Default: `{}`

包模块结构分析工具，可以看到项目各模块的大小，按需优化。通过 `ANALYZE=1 umi build` 或 `ANALYZE=1 umi dev` 开启，默认 server 端口号为 `8888`，更多配置如下：

```js
{
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  }
}
```

## base

- Type: `string`
- Default: `/`

设置路由前缀，通常用于部署到非根目录。

比如，你有路由 `/` 和 `/users`，然后设置了 base 为 `/foo/`，那么就可以通过 `/foo/` 和 `/foo/users` 访问到之前的路由。

## chainWebpack

- Type: `Function`

通过 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 的 API 修改 webpack 配置。

比如：

```js
export default {
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // 删除 umi 内置插件
    memo.plugins.delete('progress');
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('copy');
  },
};
```

支持异步，

```js
export default {
  async chainWebpack(memo) {
    await delay(100);
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');
  },
};
```

参数有：

- memo，当前 webpack-chain 对象
- env，当前环境，`development`、`production` 或 `test` 等
- webpack，webpack 实例，用于获取其内部插件
- createCSSRule，用于扩展其他 CSS 实现，比如 sass, stylus
- type，当前 webpack 实例类型，默认走 csr，如果开启 ssr，会有 ssr 的 webpack 实例

## copy

- Type: `Array(string)`
- Default: `[]`

设置要复制到输出目录的文件或文件夹。

比如你的目录结构如下，

```js
+src - index.ts + bar - bar.js - foo.js;
```

然后设置，

```js
export default {
  copy: ['foo.js', 'bar'],
};
```

编译完成后，会额外输出以下文件，

```js
+dist + bar - bar.js - foo.js;
```

支持配置 from-to， 需要注意的是 from 是相对于 cwd 的路径，to 是相对于输出路径的路径。

比如你的目录结构如下，

```js
+src - index.ts + bar - bar.js;
```

然后设置，

```js
export default {
  copy: [
    {
      from: 'bar/bar.js',
      to: 'some/bar.js',
    },
  ],
};
```

编译完成后，会额外输出以下文件，

```js
+dist + some - bar.js;
```

## dynamicImport

- Type: `object`
- Default: `false`

是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。

默认关闭时，只生成一个 js 和一个 css，即 `umi.js` 和 `umi.css`。优点是省心，部署方便；缺点是对用户来说初次打开网站会比较慢。

打包后通常是这样的，

```bash
+ dist
  - umi.js
  - umi.css
  - index.html
```

启用之后，需要考虑 publicPath 的配置，可能还需要考虑 runtimePublicPath，因为需要知道从哪里异步加载 JS、CSS 和图片等资源。

打包后通常是这样，

```bash
+ dist
  - umi.js
  - umi.css
  - index.html
  - p__index.js
  - p__users__index.js
```

这里的 `p__users_index.js` 是路由组件所在路径 `src/pages/users/index`，其中 `src` 会被忽略，`pages` 被替换为 `p`。

包含以下子配置项，

- loading, 类型为字符串，指向 loading 组件文件

比如：

```js
export default {
  dynamicImport: {
    loading: '@/Loading',
  },
};
```

然后在 src 目录下新建 `Loading.tsx`，

```jsx
import React from 'react';

export default () => {
  return <div>加载中...</div>;
};
```

构建之后使用低网络模拟就能看到效果。

## externals

- Type: `object`
- Default: `{}`

设置哪些模块可以不被打包，通过 `<script>` 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用。

比如，

```js
export default {
  externals: {
    react: 'window.React',
  },
  scripts: [
    'https://unpkg.com/browse/react@16.12.0/umd/react.production.min.js',
  ],
};
```

简单理解的话，可以理解为 `import react from 'react'` 会被替换为 `const react = window.React`。

## extraBabelPlugins

- Type: `Array`
- Default: `[]`

配置额外的 babel 插件。

比如：

```js
export default {
  extraBabelPlugins: ['babel-plugin-react-require'],
};
```

## favicon

- Type: `string`

配置 favicon 地址（href 属性）。

比如，

```js
export default {
  favicon: '/assets/favicon.ico',
};
```

> 如果要使用本地的图片，图片请放到 `public` 目录

HTML 中会生成，

```html
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />
```

## headScripts

- Type: `Array`
- Default: `[]`

配置 `<head>` 里的额外脚本，数组项为字符串或对象。

大部分场景下用字符串格式就够了，比如：

```js
export default {
  headScripts: [`alert(1);`, `https://a.com/b.js`],
};
```

会生成 HTML，

```html
<head>
  <script>
    alert(1);
  </script>
  <script src="https://a.com/b.js"></script>
</head>
```

如果要使用额外属性，可以用对象的格式，

```js
export default {
  headScripts: [
    { src: '/foo.js', defer: true },
    { content: `alert('你好');`, charset: 'utf-8' },
  ],
};
```

会生成 HTML，

```html
<head>
  <script src="/foo.js" defer></script>
  <script charset="utf-8">
    alert('你好');
  </script>
</head>
```

> 注意：一般只是用它来引入外链，如果有前置的 js 逻辑，请写到 `global.j|tsx`

## history

- Type: `object`
- Default: `{ type: 'browser' }`

配置 [history 类型和配置项](https://github.com/ReactTraining/history/blob/master/docs/GettingStarted.md)。

包含以下子配置项：

- type，可选 `browser`、`hash`
- options，传给 create{{{ type }}}History 的配置项，每个类型器的配置项不同

注意，

- options 中，`getUserConfirmation` 由于是函数的格式，暂不支持配置
- options 中，`basename` 无需配置，通过 `base` 配置指定

## inlineLimit

- Type: `number`
- Default: `10000` (10k)

配置图片文件是否走 base64 编译的阈值。默认是 10000 字节，少于他会被编译为 base64 编码，否则会生成单独的文件。

## links

- Type: `Array`
- Default: `[]`

配置额外的 link 标签。

## metas

- Type: `Array`
- Default: `[]`

配置额外的 meta 标签。数组中可以配置`key:value`形式的对象。

最终生成的 meta 标签格式为: `<meta key1="value1" key2="value2"/>`。

如以下配置:

```js
export default {
  metas: [
    {
      name: 'keywords',
      content: 'umi, umijs',
    },
    {
      name: 'description',
      content: '🍙 插件化的企业级前端应用框架。',
    },
    {
      bar: 'foo',
    },
  ],
};
```

最终生成的 html 标签是:

```html
<meta name="keywords" content="umi, umijs" />
<meta name="description" content="🍙 插件化的企业级前端应用框架。" />
<meta bar="foo" />
```

## outputPath

- Type: `string`
- Default: `dist`

指定输出路径。

注意：

- 不允许设定为 `src`、`public`、`pages`、`mock`、`config` 等约定目录

## proxy

- Type: `object`
- Default: `{}`

配置代理能力。

```
export default {
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
}
```

然后访问 `/api/users` 就能访问到 [http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users) 的数据。

> 注意：proxy 配置仅在 dev 时生效。

> 代理只是服务请求代理，这个地址是不会变的。原理可以简单的理解为，在本地启了一个服务，你先请求了本地的服务，本地的服务转发了你的请求到实际服务器。所以你在浏览器上看到的请求地址还是 `http://localhost:8000/xxx` 。以服务端是否收到请求为准。

## publicPath

- Type: `publicPath`
- Default: `/`

配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 `publicPath` 的值，当你需要修改静态文件地址时，比如使用 CDN 部署，把 `publicPath` 的值设为 CDN 的值就可以。如果使用一些特殊的文件系统，比如混合开发或者 cordova 等技术，可以尝试将 `publicPath` 设置成 `./`。

## retainLog

默认在编译的时候，会去除日志打印，需要编译之后查看日志，需要手动配置保留。

```ts
export default {
  retainLog: true,
};
```

## scripts

- Type: `Array`
- Default: `[]`

同 [headScripts](#headscripts)，配置 `<body>` 里的额外脚本。

## styles

- Type: `Array(string)`
- Default: `[]`

配置额外 CSS。

比如：

```js
export default {
  styles: [`body { color: red; }`, `https://a.com/b.css`],
};
```

会生成 HTML，

```html
<head>
  <style>
    body {
      color: red;
    }
  </style>
  <link rel="stylesheet" href="https://a.com/b.css" />
</head>
```

## theme

- Type: `object`
- Default: `{}`

配置主题，实际上是修改 less 变量，可选的参数是，[antd-mobile](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less) 的所有变量，和 [dform](https://github.com/alitajs/DynamicForm/blob/master/src/styles/index.less) 导出的所有变量。

常用的是配置主题色，比如：

```ts
export default {
  theme: {
    'brand-primary': '#1DA57A',
  },
};
```
