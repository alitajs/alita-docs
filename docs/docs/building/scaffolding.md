---
previousText: '开始'
previousUrl: '/docs/building/starting'
nextText: '迁移'
nextUrl: '/docs/building/migration'
contributors:
  - mhartington
  - brandyscarney
---

# 创建应用程序

CLI 构建项目之后，下一步是开始构建功能和组件。 大部分应用程序将在 `src/pages/` 目录中开发。

## 项目结构

<file-tree>
    <file-tree-directory name="config">
        <file-tree-file name="config.ts"></file-tree-file>
    </file-tree-directory>
    <file-tree-directory name="mock">
        <file-tree-file name="app.ts"></file-tree-file>
    </file-tree-directory>
    <file-tree-directory name="src">
        <file-tree-directory name="assets" collapsed></file-tree-directory>
        <file-tree-directory name="models" collapsed></file-tree-directory>
        <file-tree-directory name="pages" collapsed></file-tree-directory>
        <file-tree-directory name="services" collapsed></file-tree-directory>
        <file-tree-file name="app.ts"></file-tree-file>
        <file-tree-file name="global.less"></file-tree-file>
        <file-tree-file name="global.ts"></file-tree-file>
    </file-tree-directory>
</file-tree>

### config/config.ts

我们将项目的主要配置写在 `config/config.ts` 文件中，你可以在这里查看你启用了什么配置，或者在这里开启或者关闭某个配置，所有文档说到的修改配置，指的都是编辑这个文件。

### mock

约定 /mock 文件夹下所有文件为 mock 文件。

如果 `/mock/app.ts` 的内容如下，

```js
export default {
  'POST /api/hello': {
    text: 'Alita',
  },
};
```

然后访问 `/api/hello` 就能得到 `{ text: 'Alita' }` 的响应，其他以此类推。

更多 mock 文件的编写方法，请查看 Umi 的文档，[Mock 数据](https://umijs.org/zh-CN/mock)

### src

`src/` 目录下几乎包含了我们项目的全部业务代码。会有几个约定的文件，如果你对这些文件不太了解，那你可以先了解一下我们的[核心概念](/docs/intro/concepts)。 `services/api.ts` 文件规定用来存放我们封装好的 api 请求方法。只是一种项目规范。无特殊约定，使用时需要在需要的地方手动 `import`。通常我们只编写页面的话，只需要修改 `src/pages` 目录。

<file-tree>
    <file-tree-directory name="src">
        <file-tree-directory name="pages">
          <file-tree-directory name="index">
            <file-tree-file name="index.tsx"></file-tree-file>
            <file-tree-file name="index.less"></file-tree-file>
          </file-tree-directory>
          <file-tree-directory name="list" collapsed></file-tree-directory>
          <file-tree-directory name="setting" collapsed></file-tree-directory>
        </file-tree-directory>
    </file-tree-directory>
</file-tree>

## 构造器生成页面

最开始为了快速创建页面，所以我们提供了 `yarn create alita` 命令用于快速创建页面。但现在你已经对 alita 有所了解了，你应该使用它来为你做更多的事情。所以在这里我们建议你在全局安装 alita，只需要在你的命令行中，执行 `yarn global add alita`。

使用以下命令，创建页面。

<command-line>
    <command-prompt>alita g pages paneName</command-prompt>
    <command-output>
        <br />
        <span class="green">Write:</span> src/pages/paneName/index.tsx
        <br />
        <span class="green">Write:</span> src/pages/paneName/index.less
        <br />
        <span class="green">Write:</span> src/models/paneName.ts
        <br />
    </command-output>
</command-line>

默认生成的是 react hooks 风格的 typescript 文件。

> 后续我们可能会支持创建 javascript 文件，也可能不会。

我们建议使用 Alita Cli 来创建基本页面，以保持最佳实践。Cli 在创建页面之后，还会创建相对应的 dva model 文件，如果你不需要，你可以手动删除它，但是别忘了，在 page 页面上修改绑定哦。不过尽量不要这么做，我们最好保持，一个页面一个 model 的风格，让页面逻辑分离的更加清晰。

有关更多详细信息，请从命令行运行 `alita g --help` 或参阅文档[文档](/cli/commands/generate)。
