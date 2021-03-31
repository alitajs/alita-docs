---
nav:
  title: 攻略
  order: 3
---

# 如何打包 apk

## 新建 alita 项目

```bash
$ yarn create alita app

success Installed "create-alita@2.8.2" with binaries:
      - create-alita
Copy:  .eslintignore
Copy:  .eslintrc.js
Copy:  .gitignore
Copy:  .prettierignore
Copy:  .prettierrc.js
Copy:  .stylelintrc.js
Copy:  config/config.ts
Copy:  mock/app.ts
Write: app/package.json
Copy:  scripts/verifyCommit.js
Copy:  src/app.ts
Copy:  src/pages/index/index.less
Copy:  src/pages/index/index.tsx
Copy:  src/pages/index/service.ts
Copy:  tsconfig.json
Copy:  typings.d.ts
✨  Done in 11.88s.
```

## 安装依赖

```bash
$ cd app
$ yarn

[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 134.13s.
```

## 修改配置

config/config.ts

packageId 为项目打包包名（关键参数），后续需要通过原生 ied 中修改。

```diff
import { defineConfig } from 'alita';

export default defineConfig({
+  appType: 'cordova',
+  packageId: 'com.alitajs.yx',
+  displayName: '演示项目'
});
```

## 添加命令

```diff
{
    "scripts": {
      "start": "alita dev",
      "build": "alita build",
+     "cordova-init": "alita cordova --init",
+     "cordova-add-ios": "alita cordova --ios",
    }
}
```

## 执行命令

初始化项目

```bash
$ yarn cordova-init
cordova init success,please run "alita cordova --ios" or "alita cordova --android"  to add cordova platforms
✨  Done in 1.26s.
```

添加 ios 平台代码

```bash
$ yarn cordova-add-ios
cordova add ios platforms ...
Using cordova-fetch for cordova-ios@~4.5.4
Adding ios project...
Creating Cordova project for the iOS platform:
        Path: platforms/ios
        Package: com.alitajs.yx
        Name: 演示项目
iOS project created with cordova-ios@4.5.5
Discovered plugin "cordova-plugin-whitelist" in config.xml. Adding it to the project
Installing "cordova-plugin-whitelist" for ios
Adding cordova-plugin-whitelist to package.json
Saved plugin info for "cordova-plugin-whitelist" to config.xml
--save flag or autosave detected
Saving ios@~4.5.5 into config.xml file ...


✨  Done in 303.38s.
```

如果网络不好的情况，这个过程可能需要十来分钟，可以通过提前安装包的方式来缩短这个过程。

```bash
$ yarn add cordova-ios cordova-plugin-whitelist
安装完成再执行
$ yarn cordova-add-ios
cordova add ios platforms ...
Using cordova-fetch for cordova-ios@^4.5.5
Adding ios project...
Creating Cordova project for the iOS platform:
        Path: platforms/ios
        Package: com.alitajs.yx
        Name: demo
iOS project created with cordova-ios@4.5.5
Installing "cordova-plugin-whitelist" for ios
--save flag or autosave detected
Saving ios@~4.5.5 into config.xml file ...

✨  Done in 23.48s.
```

## 编译项目

```
 yarn build
yarn run v1.22.10
$ alita build
cordova platform use ios
cordova serve(pid:20174)

✔ Webpack
  Compiled successfully in 11.04s

exec error: Error: Command failed: cordova build ios
Current working directory is not a Cordova-based project.
Current working directory is not a Cordova-based project.

 DONE  Compiled successfully in 11044ms                                       11:26:19 ├F10: AM┤

 File                      Size                    Gzipped

 www/umi.fdfe663a.js       538.2 KB                172.9 KB
 www/umi.2e1facd2.css      26.7 KB                 4.4 KB

  Images and other types of assets omitted.

[alita]: success
[alita]: run build cordova ...
(这里有两个错误，可以不理会，还没修)
✨  Done in 19.75s.
```

## 使用 XCode 打开项目

使用 XCode 打开 platforms/ios/demo.xcworkspace

选择一个模拟器运行，这时候你应该能看到 “Hello”。

## 开发模式

使用 alita dev 开始开发

```bash
$ yarn start
  App running at:
  - Local:   http://localhost:8000 (copied to clipboard)
  - Network: http://172.21.4.143:8000
 WAIT  Compiling...                                                           11:36:49 ├F10: AM┤

✔ Webpack
  Compiled successfully in 233.30ms
```

在 XCode 中重新运行项目。

这时候你可以在模拟器中看到 “Hello Alita”。

因为这时候开发中的代理和 mock 数据都将有效。

## 提示

为了便于开发，开发的时候可以将 appType 改成 h5。
这样可以直接在浏览器中调试开发。
