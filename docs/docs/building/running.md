---
previousText: '脚手架'
previousUrl: '/docs/building/scaffolding'
nextText: '跨平台'
nextUrl: '/docs/building/cross-platform'
demoUrl: '/demos/alita-init-demo/index.html'
demoSourceUrl: 'https://github.com/alitajs/next-alita-app'
---

# 运行预览

根据不同的平台和需求，我们有三种项目运行方式。

- 在 Web 浏览器中本地运行
- [在 iOS 上运行](/docs/building/ios)
- [在 Android 上运行](/docs/building/android)

## 在 Web 浏览器中本地运行

Alita 最强大的功能之一是，你大多数应用程序开发都可以在桌面浏览器中进行。拥有对传统 Web 开发工具（Chrome / Safari / Firefox 开发工具）的完全访问权限，您可以编写代码，然后快速对其进行测试/调试，而无需重新编译或部署到模拟器或设备上。

为此，请在项目目录下执行 `alita dev`，Cli 创建的项目，可以使用 `yarn start` 启动项目

<command-line>
    <command-prompt>yarn start</command-prompt>
    <command-output>
        <span class="bold">yarn run v1.9.4</span>
        <br />
        <span >$ alita dev</span>
        <br />
        <span class="blue">Starting the development server...</span>
        <br />
        <span class="green">✔ Webpack</span>
        <br />
        <span > Compiled successfully in 11.65s</span>
        <br />
        <span class="bold"> App running at:</span>
        <br />
        <span class="bold">- Local:   </span>
        <span class="blue">http://localhost:8000 </span>
        <span>(copied to clipboard) </span>
        <br />
        <span class="bold">- Network:   </span>
        <span class="blue">http://172.20.10.6:8000 </span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">Use Ctrl+C to quit this process</span>
    </command-output>
</command-line>

用浏览访问 `http://localhost:8000` 你将看到如右侧的 demo。如果你看不到，请全屏浏览网页。

你可以在项目中更改代码，并且不需要重启服务，就能实时预览。

当您准备在真实设备上进行测试时，请参见此处的 [iOS](/docs/building/ios) 和 [Android](/docs/building/android)。
