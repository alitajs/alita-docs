---
previousText: '动态路由'
previousUrl: '/tutorial/dynamicRouter'
nextText: '本地部署调试'
nextUrl: '/tutorial/local'
disableHtmlPreviews: true
---

# 部署在现有容器

这是比较常见的一种部署方式，比如开发时是前后端分离的，部署的时候，由服务端提供一个容器，存放我们编译之后的静态页面。

执行编译脚本

```bash
$ yarn build
yarn run v1.17.3
$ alita build

✔ Webpack
  Compiled successfully in 20.05s

 DONE  Compiled successfully in 20055ms                                          10:58:21

 File              Size                        Gzipped

 dist/umi.js       875.6 Kb                    262.8 Kb
 dist/umi.css      173.3 Kb                    22.2 Kb

  Images and other types of assets omitted.

✨  Done in 22.48s.
```

将生成 `dist` 目录下面的文件拷贝到服务端提供的容器即可。

注意部署的时候，要将所有的请求指向正确的服务。mock 服务不可用。

这里常常会遇到一个问题。

部署完之后，页面没有报错，但是确是空白页。

这时候就可以考虑可能是遇到了[非根目录部署](https://umijs.org/zh/guide/deploy.html#%E9%83%A8%E7%BD%B2-html-%E5%88%B0%E9%9D%9E%E6%A0%B9%E7%9B%AE%E5%BD%95)的问题了

可通过配置 [base](https://umijs.org/zh/config/#base) 解决。

```javascript
export default {
  base: '/path/to/your/app/root',
};
```

比如服务端给你的访问链接是https://www.xxx.com/web

那这里你就可以尝试配置

```javascript
export default {
  base: '/web',
};
```
