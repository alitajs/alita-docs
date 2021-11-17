---
nav:
  title: 组件
  order: 4
title: '移动端全局布局'
---

# alita-layout

The generic h5 layout in umi uses antd-mobile.

> umi@2 和 alita@1 请使用 1.x 版本
> 2.x 版本只支持 umi@3 和 alita@2

## 使用

```bash
npm i @alitajs/alita-layout --save
// or
yarn add @alitajs/alita-layout
```

```jsx
import BasicLayout from '@alitajs/alita-layout';

render(<BasicLayout />, document.getElementById('root'));
```

## Demo

```ts
import {
  NavBarProps,
  TitleListItem,
  NavBarListItem,
  TabBarProps,
  TabBarListItem,
  history,
} from 'alita';

const titleList: TitleListItem[] = [
  {
    pagePath: '/aa',
    title: 'a页面',
  },
];

const navList: NavBarListItem[] = [
  {
    pagePath: '/aa',
    navBar: {},
  },
];

const navBar: NavBarProps = {
  mode: 'light',
  navList,
  fixed: true,
  hideNavBar: false,
  onLeftClick: () => {
    history.goBack();
  },
};

const tabList: TabBarListItem[] = [
  {
    pagePath: '/aa',
    text: 'aa',
    iconPath: img,
    selectedIconPath: img,
    title: 'aa',
    iconSize: '',
    badge: '',
  },
  {
    pagePath: '/bb',
    text: 'bb',
    iconPath: img,
    selectedIconPath: img,
    title: 'bb',
    iconSize: '',
    badge: '',
  },
];

const tabBar: TabBarProps = {
  color: '#696D6C',
  selectedColor: '#3562AD',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
```

## 动态配置 navBar、tabBar

```js
import React, { useEffect } from 'react';
import { setPageNavBar, setTabBarList } from 'alita';

const Page = () => {
  useEffect(() => {
    setPageNavBar({
      pagePath: '/',
      navBar: {
        pageTitle: '自定义标题',
        // 剩余参数请参考 API NavBarProps
      },
    });

    setTabBarList([
      {
        pagePath: '/bb',
        remove: true, // 删除操作
      },
      {
        pagePath: '/ee',
        text: 'ee',
        iconPath: img,
        selectedIconPath: img,
        title: 'ee',
      },
      {
        pagePath: '/aa',
        replace: '/dd', // 替换操作
        text: 'dd',
        iconPath: img,
        selectedIconPath: img,
        title: 'dd',
      },
    ]);
  }, []);
  return <></>;
};
```

### setTabBarList 使用介绍(仅支持 `v2.8.25+` 的 alita 版本)

这里可以传递数组进行多个 `tabItem` 的配置，也可以传递单个 `tabItem` 对象进行配置。

**当对象里存在 `remove` 则代表删除该项 `tabItem`。**

**当对象里存在 `replace` 则代表替换该项 `tabItem`。**

当对象里的 `pagePath` 不存在初始的 `tabList` 时，则会新增该项 `tabItem`。

当对象里的 `pagePath` 存在初始的 `tabList` 时，则会修改该项 `tabItem`。

## API

### 所有参数说明

| 属性          | 类型            | 必填 | 默认值 | 描述                                   |
| ------------- | --------------- | ---- | ------ | -------------------------------------- |
| tabBar        | TabBarProps     | 否   | 无     | 定义页面切换页信息，api 参考微信小程序 |
| documentTitle | string          | 否   | 无     | 定义项目的默认 title                   |
| titleList     | TitleListItem[] | 否   | 无     | 定义所有页面的 title                   |
| navBar        | NavBarProps     | 否   | 无     | 定义头部导航信息                       |

### tabBar 参数说明

| 属性            | 类型       | 必填 | 默认值 | 描述                                                     |
| --------------- | ---------- | ---- | ------ | -------------------------------------------------------- |
| color           | HexColor   | 是   |        | tab 上的文字默认颜色，仅支持十六进制颜色                 |
| selectedColor   | HexColor   | 是   |        | tab 上的文字选中时的颜色，仅支持十六进制颜色             |
| backgroundColor | HexColor   | 是   |        | tab 的背景色，仅支持十六进制颜色                         |
| list            | Array      | 是   |        | tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab |
| position        | string     | 否   | bottom | tabBar 的位置，仅支持 bottom / top                       |
| tabsGroup       | string[][] | 否   |        | 当一个项目需要多个 TabBar 时配置                         |

> tabsGroup 仅仅标记 tab 分组，是否是 tab 页面，和其他参数依旧在 list 中配置

比如有四个页面是 tab 页面，你先不管他们如何分组，全部按照 list 的配置，写到 list 里

```ts
const tabList: TabBarListItem[] = [
  {
    pagePath: '/',
    title: '首页',
    ...
  },
  {
    pagePath: '/list',
    title: '列表',
    ...
  },
  {
    pagePath: '/settings',
    title: '设置',
    ...
  },
  {
    pagePath: '/show',
    title: '展示',
    ...
  },
];
```

然后再将他们进行分组，比如将首页和列表分为一组，当访问首页的时候，底部 TabBar 会有首页和列表两个切换项。

```ts
const tabBar: TarBarProp
  list: tabList,
  tabsGroup: [['/','/list'],['/setting','/show']]
};
```

### list 参数说明

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
| remove           | boolean  | 否   | 是否删除当前的 tabItem                                 |
| replace          | string   | 否   | 需要替换的 tabItem 路由                                |

> 关于页面标题，声明权重如下：
> titleList > list.title > list.text > documentTitle > ''

### navBar 参数说明

| 属性           | 说明                       | 类型              | 默认值                                    |
| -------------- | -------------------------- | ----------------- | ----------------------------------------- |
| mode           | 模式                       | string            | 'dark' enum{'dark', 'light'}              |
| icon           | 出现在最左边的图标占位符   | ReactNode         | 不在 tabsBar 的页面，会有默认左侧回退图标 |
| leftContent    | 导航左边内容               | any               | 无                                        |
| rightContent   | 导航右边内容               | any               | 无                                        |
| onLeftClick    | 导航左边点击回调           | (e: Object): void | 有左侧回退图标的默认事件是返回上一页      |
| navList        | 单独设置某些页面的 navbar  | NarBarListItem    | 无                                        |
| hideNavBar     | 隐藏 NavBar，默认有 NarBar | boolean           | false                                     |
| fixed          | NavBar 固定在页面头部      | boolean           | false                                     |
| pageBackground | 页面的背景颜色             | string            | '#FFF'                                    |
| pageTitle      | 页面标题                   | string            | 无，优先级最高                            |

### navList 参数说明

| 属性     | 说明              | 类型        | 默认值 |
| -------- | ----------------- | ----------- | ------ |
| pathName | 路由名称          | string      | 无     |
| navBar   | 当前路由的 navBar | NavBarProps | 无     |
