---
previousText: '运行预览'
previousUrl: '/docs/building/running'
nextText: '在 IOS 上运行'
nextUrl: '/docs/building/ios'
disableHtmlPreviews: true
contributors:
  - rtpHarry
---

# 跨平台

Alita 项目不止能在 web 环境中运行，我们还通过引入 Cordova，来使它成为一个 Android 或者 iOS 应用，后续我们可能还会通过一定的技术，让它能够在小程序上运行。

在原生应用程序中，通常会进行 API 调用以与设备进行通信，例如打开相机或访问地理位置。在 Web 环境中调用这些 API 调用是不起作用，因为没有原生桥接。你可以通过 Alita Native 来实现。

## Alita Native

<a href="/native">Alita Native</a>通过 `native:[]` 配置使用，会自动根据配置安装相应的 Cordova 插件和 Ionic Native 插件。

选用 Ionic Native 是因为它具有自己的内部逻辑来检测当前应用是否在原生环境中。如果不是原生环境，并且没有可用的 Cordova 插件，它将发出警告，而不是引发运行时错误。该应用程序将不会中断，并且将继续运行，尽管没有原生功能。而且它的编写更接近与原生 js，就是说，它也可以很好的跑在 react 的项目中。
