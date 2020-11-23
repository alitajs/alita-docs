---
previousText: '环境配置'
previousUrl: '/docs/installation/environment'
nextText: 'iOS 设置'
nextUrl: '/docs/installation/ios'
contributors:
  - rtpHarry
  - dwieeb
---

# 安装 Alita

Alita 应用推荐通过 Alita [CLI](/faq/glossary#cli)创建和开发。Alita CLI 是首选的使用方式，因为它提供了一系列开发工具和默认行为规则。当然，你也可以通过在 Umi 项目中使用 `@alitajs/umi-presets-alita`

## 安装 Alita CLI

在继续之前，请确保您的计算机安装了[Node.js](/faq/glossary#node)。请参阅[这些说明](/docs/installation/environment)以搭建开发环境。

### 使用 npm 安装 Alita CLI

```shell
$ npm install -g alita
```

> `-g`选项表示 `全局安装`。全局安装包时，可能会出现权限错误。
> 有关详细信息，请参见[解决权限错误](/faq/tips#resolving-permission-errors)。

### 使用 yarn 安装 Alita CLI

```shell
$ yarn global add alita
```

> `global`选项表示 `全局安装`。全局安装包时，可能会出现权限错误。
> 有关详细信息，请参见[解决权限错误](/faq/tips#resolving-permission-errors)。

## 新建一个项目

```shell
alita g app myApp
```

构建一个全新的 Alita 应用，更多信息，请参阅[启动指南](/docs/building/starting)。

## 运行 App

大部分开发可以在浏览器使用 `alita dev` 的命令:

```shell
$ cd myApp
$ alita dev
```

有很多其他的方式来运行一个项目，更多信息，请参阅[运行预览](/docs/building/running)。
