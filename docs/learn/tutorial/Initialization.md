---
previousText: '简介'
previousUrl: '/learn/tutorial/introduction'
nextText: '项目结构'
nextUrl: '/learn/tutorial/structure'
disableHtmlPreviews: true
---

# 使用 CLI 创建初始化项目

## 第一步 使用 yarn create alita 新建项目

```bash
$ cd 你的常用项目目录

$ yarn create alita hero
 Copy:  .eslintignore
 Copy:  .eslintrc.js
 Copy:  .gitignore
 Copy:  .prettierignore
 Copy:  .prettierrc.js
 Copy:  .stylelintrc.js
 Copy:  config/config.ts
 Copy:  mock/app.ts
 Write: hero/package.json
 Copy:  scripts/verifyCommit.js
 Copy:  src/pages/index/index.less
 Copy:  src/pages/index/index.tsx
 Copy:  src/pages/index/service.ts
 Copy:  tsconfig.json
 Copy:  typings.d.ts
✔  success
```

> 这里的 `hero` 指的是项目名，你可以输入任意的名字。
> 如果你的命令行打印的日志如上，那就说明你新建项目完成了，如果有其他的错误，可以确认一下，当前目录下是否存在 hero 文件夹。

## 第三步 切换到项目目录，安装依赖

```bash
$ cd hero
$ yarn
...这个过程需要一点时间
success Saved lockfile.
✨  Done in 170.43s.

```

看到命令行打印 success，一般就是安装成功了，但是有时候因为一些网络问题，会出现丢包的情况。所以我们继续验证。

## 第四步 启动开发服务器

```bash
$ yarn start

✔ success webpack compiled in 2s 743ms
 DONE  Compiled successfully in 2750ms     10:24:03
  App running at:
  - Local:   http://localhost:8000/ (copied to clipboard)
  - Network: http://192.168.199.195:8000/
```

## 错误说明

- 可能是 node 版本问题引起的，确认一下你的开发环境。
- 网络问题引起的，知道的，科学上网。或者使用国内源，全局安装 tyarn。
