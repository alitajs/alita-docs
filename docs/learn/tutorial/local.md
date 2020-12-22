---
previousText: '部署在现有容器'
previousUrl: '/tutorial/container'
nextText: '部署到GitHub'
nextUrl: '/tutorial/github'
disableHtmlPreviews: true
---

# 本地部署调试

在开发完成之后，或者当我们需要线上环境时，我们就可以尝试着在本地部署。

先执行编译脚本

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

然后，安装 serve 服务

```bash
$ npm i serve -g
or
$ yarn global add serve
```

使用 serve 启动本地服务

```bash
$ cd dist
注意要到dist的目录下执行
$ serve
UPDATE AVAILABLE The latest version of `serve` is 10.1.1
   ┌─────────────────────────────────────────────────────┐
   │                                                     │
   │   Serving!                                          │
   │                                                     │
   │   - Local:            http://localhost:5000         │
   │   - On Your Network:  http://192.168.199.195:5000   │
   │                                                     │
   │   Copied local address to clipboard!                │
   │                                                     │
   └─────────────────────────────────────────────────────┘
```

打开http://localhost:5000

切换到 hero 页面，发现由一堆错误。

仔细看是因为访问的接口 404 了，因为我们的服务数据都是来自与本地的 mock 服务。

这里再强调一次，编译之后 mock 服务无效，proxy 服务也无效。

所以你需要在部署之前，讲服务端请求地址修改为可以外网访问的允许跨域访问的地址。

使用 serve 部署，支持本地访问和同一个局域网的设备访问。

同局域网的设备需要访问 On Your Network:  [http://192.168.199.195:5000](http://192.168.199.195:5000)

你可能需要，将页面发给外网用户使用，那你就可以选择安装 now

```bash
$ npm i now -g
or
$ yarn global add now
```

一样的执行完 umi build 之后，cd 到 dist，执行 now

```bash
$ now
> UPDATE AVAILABLE The latest version of Now CLI is 12.1.14
> Read more about how to update here: https://zeit.co/update-cli
> Deploying ~/Documents/GitHub/umi-course/hero/dist under 448627663@qq.com
> Synced 3 files (1.29MB) [4s]
> https://dist-titatdengk.now.sh [in clipboard] [2s]
> Deployment complete!
```
