# @alitajs/main-path

## 安装

```bash
yarn add @alitajs/main-path
or
npm i @alitajs/main-path
```

## 启用方式

配置 `mainPath:''` 开启。

## 介绍

修改项目的主入口路由，默认 `/` 对应 `src/pages/index/index.tsx`。

可通过配置修改，如配置 `mainPath:'/home'`。

那么 `/` 就对应 `src/pages/home/index.tsx`，而原来的 `src/pages/index/index.tsx` 则对应 `/index` 。

## 配置

比如：

```js
export default {
  plugins: ['@alitajs/main-path'],
  mainPath: '/pathname',
};
```
