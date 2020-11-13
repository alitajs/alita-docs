
# 运行时配置

运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、jsx、import 浏览器端依赖等等，注意不要引入 node 依赖。


约定 `src/app.tsx`  为运行时配置。


## request

配置请求前置和一些常用参数

```ts
export const request = {
  prefix: '',
  method: 'post',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};
```

其他地方用 `import { request } from 'alita'` 的方式使用。

所有配置项请查阅[umi-request](https://github.com/umijs/umi-request)

## mobileLayout

配置 mobile 项目的整体布局，只有配置配置项 `mobileLayout:true` 时有效。

```ts
export const mobileLayout = {
  documentTitle: '默认标题',
  navBar,
  tabBar,
  titleList,
};
```

所有配置项请查阅[alita-layout](https://github.com/alitajs/alita-layout)
