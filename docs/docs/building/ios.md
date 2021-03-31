---
previousText: '运行预览'
previousUrl: '/docs/building/running'
nextText: '在 Android 上运行'
nextUrl: '/docs/building/android'
skipIntros: true
---

# 在 iOS 上运行

修改配置

```ts
export default {
- appType: 'h5',
+ appType: 'cordova',
+ packageId: '',
+ displayName: '',
  mobileLayout: true
};
```

## 初始化 Cordova 项目

```bash
alita cordova --init
```

> Cli 创建的项目，可以执行 `yarn cordova-init` ("cordova-init": "alita cordova --init")

## 添加 iOS 原生代码

```bash
alita cordova --ios
```

> Cli 创建的项目，可以执行 `cordova-add-ios` ("cordova-add-ios": "alita cordova --ios")

## 将代码编译到原生项目中

```bash
alita build
```

> 直接编译即可，Cli 创建的项目，可以执行 `build-ios` ("build-ios": "alita build",)

## 在 Xcode 上运行代码

打开 Xcode，选择 项目目录下的 ios 项目 `platforms/ios`。

在 Xcode 中，在编译器左上角，选择目标模拟器或设备，然后单击“播放”按钮。

![Xcode Play Button Area](../../../assets/img/running/ios-xcode-play-button-area.png)

### 查看原生日志

可以在 Xcode 的 **Console** 中，查看到项目运行日志。

> 如果你的 Xcode **Console** 是隐藏的，可以设置 **View** &raquo; **Debug Area** &raquo; **Activate Console** 显示。

![Xcode Console](../../../assets/img/running/ios-xcode-console.png)

## 实时开发调试

```bash
alita build
```

> 直接启动开发服务器，Cli 创建的项目，可以执行 `start-ios` ("start-ios": "alita dev")

会开启一个 web 页面，会等待 cordova 加载完毕才会运行项目。你可以重新在 Xcode 里面编译一下你的项目，就可以在设备上实时预览你的页面变更了。

## FAQ

待补充

# 使用微应用平台的主应用方案(beta)

## 项目配置

修改配置

```js
import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'native',
  mobileLayout: true,
  packageId: 'com.alitajs.micro', // 更改为真实的包名
  displayName: 'micro', // 更改为真实的项目名称
});
```

> displayName，建议用英文，中文名称可在项目配置中修改，此处会被用做文件名。

## 添加平台

```bash
alita platforms --ios
```

## 开发调试

使用环境变量 NATIVE 来区分构建平台,不指定默认为 ios 平台。

```bash
alita dev
```

可在手机中下载 alita 开发者 app，进行扫码预览。

## 编译 build

使用环境变量 NATIVE 来区分构建平台,不指定默认为 ios 平台。

```bash
alita build
```
