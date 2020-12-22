---
previousText: '全局布局'
previousUrl: '/learn/tutorial/layout'
nextText: '导航到页面'
nextUrl: '/learn/tutorial/navigation'
disableHtmlPreviews: true
---

# 添加页面

## 添加教程需要的页面

根据上一节课的布局，我们需要用到三个页面，英雄页面，局内道具页面，召唤师技能页面。

所以我们使用 `alita g pages` 新建我们需要的三个页面。

```bash
$ alita g pages hero
Write: src/pages/hero/index.tsx
Write: src/pages/hero/index.less
Write: src/pages/hero/service.ts

$ alita g pages item
Write: src/pages/item/index.tsx
Write: src/pages/item/index.less
Write: src/pages/item/service.ts

$ alita g pages summoner
Write: src/pages/summoner/index.tsx
Write: src/pages/summoner/index.less
Write: src/pages/summoner/service.ts
```

页面创建成功，启动开发服务器(这是我们最后一次演示，如何启动 umi 开发服务器)。

```bash
$ yarn start
Compiling
✔ success webpack compiled in 3s 754ms
 DONE  Compiled successfully in 3761ms                                                 19:40:39
  App running at:
  - Local:   http://localhost:8000/ (copied to clipboard)
  - Network: http://192.168.199.195:8000/
```

启动完成，我们可以通过直接访问路由的方式，访问页面。 `http://localhost:8000/#/summoner` 、`http://localhost:8000/#/hero`、`http://localhost:8000/#/item`。
