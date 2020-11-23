---
nextText: '脚手架'
nextUrl: '/docs/building/scaffolding'
contributors:
  - dwieeb
---

# 构建一个新的应用

构建一个全新的 Alita 应用非常容易。 只需在命令行中运行 `yarn create alita appName` ，CLI 将替你完成剩下的事。
<command-line>
<command-prompt>yarn create alita myApp [--pc]</command-prompt>
<command-output>
<br />
<span class="bold">记得这里需要跟一个项目名字！😍</span><br />
<br />
这里的项目应用名，后续你可以在项目的 `package.json` 中修改。
<br />
</command-output>
</command-line>

其中， `myApp` 是项目名称。 `--pc` 是指定生成的项目是 pc 项目，默认项目类型为 `h5`。

默认生成的 pc 项目是一个空白(blank)项目，默认生成的 h5 项目是一个 `tabs` 项目。

> 后续我们将会提供更多的选择

这些模板为所有应用提供了一个很好的开始，并包含了基础代码的最佳实践。

## FAQ

### 为什么要这么明确的区分项目类型？

其实主要的是在编写 h5 的时候，我们会使用[自适应样式](/docs/intro/concepts)，而在 pc 项目中我们没做其他的操作，一切特性保持 Umi 的默认，你完全可以参照 ant-design-pro 去开发一个中后台应用。

### 如果我新建了一个 h5 项目，怎么改成 pc 项目？

#### step 1

修改 config/config.ts

```diff
- appType:'h5',
- mobileLayout: true,
+ appType:'pc'
```

#### step 2

删除 src/app.ts 中的 mobileLayout 配置

```diff
- export const mobileLayout = {
-   documentTitle: '默认标题',
-   navBar,
-   tabBar,
-   titleList,
- };
```

这是为了将 mobile layout 改成运行时配置，才这么做的。在 pc 项目中用不到它。
并且不删除的话无法启动项目。

#### step 3

这步是可选，如果你在 pc 项目中需要一个全局布局，那你可以新建一个 src/layouts/index.tsx

```tsx
import React from 'react';

// import styles from './index.less';

const BasicLayout: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

export default BasicLayout;
```

### 如果我新建了一个 pc 项目，怎么改成 h5 项目？

#### step 1

修改 config/config.ts

```diff
- appType:'pc',
+ appType:'h5'
```

改完这个应该就可以跑起来了。如果你需要布局或者其他，可以查看更多[组件](/components)
