---
previousText: '简介'
previousUrl: '/learn/create-alita-app'
nextText: '编辑页面'
nextUrl: '/learn/create-alita-app/editing-the-page'
---

# 创建 Next.js 应用程序

## 环境配置及基础详解

首先，让我们确保你的开发环境已经准备就绪。

- 如果你尚未安装 **Node.js** , [从此处安装](https://nodejs.org/en/)。 要求 Node.js **10.13** 或更高版本。
- 正确安装 yarn。（请注意 yarn 的环境变量已正确设置，不然将可能导致全局命令无法找到的问题。）
- 在本教程中，你将使用自己的文本编辑器(推荐使用VS Code)和终端应用程序。

### 创建 alita 应用程序

在任意的空的文件夹下新建 `/src/pages/index.js` 文件，并输入以下内容如：

```js
export default () => <div>Index Page</div>;
```

你也可以命令来完成，请打开你的终端，`cd` 进入你要在其中创建应用的目录，然后运行以下命令：

```bash
mkdir -p mylearn/src/pages
echo 'export default () => <div>Index Page</div>;' > mylearn/src/pages/index.js
```

### 使用 npm init 命令 初始化项目

```bash
cd mylearn
npm init -y
```

如果你的以上操作都正确的话，那你应该可以在控制台上看到如下输出：

```bash
Wrote to /.../mylearn/package.json:

{
  "name": "mylearn",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 安装需要的模块

在项目中安装 alita，请在刚刚的命令行窗口中，输入以下命令安装 alita。

> 如果你已经关闭了刚刚的命令行窗口，那请你重新打开一个命令行窗口，并保证执行目录已经正确 `cd` 到了项目目录。

```bash
yarn add alita
```

这将花费数分钟的时间，如果你的安装时间过长，或者无法链接到 npm 的网络中，我们同时为 alita 提供了淘宝源。你可以选择将你的 npm 源配置成淘宝源，具体操作请查看[官方文档](https://cnpmjs.org/)。

### 修改项目的启动命令

在很多的前端框架中，你都会涉及到使用命令启动项目服务的情况，一般文档中会让你执行，如 `yarn start` 、 `npm start` 或 `npm run dev` 这样的命令。

但可能你很少关注它是什么意思。其实它执行的是项目在 `package.json` 中定义好的 scripts 命令，你可以将它理解为一种别名，为了让你更加便利的执行命令。

比如，如下所示，当你执行 `yarn start` 时，真正执行的是 `alita dev`。

```
{
  "scripts": {
    "start": "alita dev",
  },
}
```

你也可以直接执行 `alita dev` 来完成同样的效果，但是这需要你保证你的全局变量中已经正确安装了 `alita` 命令，你也可以使用诸如 `npx alita dev` 这样的命令，来执行使用当前项目中的 `alita` 命令来启动项目。


> 当你的命令拥有多个版本是，比如说全局版本是 2.x，项目中版本是 1.x 时， `npx` 就会非常好用。

当你需要指定大量的环境变量或者同时执行多个命令时，`scripts` 这里的定义将会变得更高效。如下配置，项目会先执行编译，然后在产物目录中启动部署服务 `serve`，这样你就可以直接在 5000 端口的服务上预览你的项目。（这里只是举例说明，命令随手写的，无真实意义）

```
{
  "scripts": {
    "review": "PATH=3000 DEV_UTILS=somekey alita build && cd dist && serve",
  },
}
```

现在你的 alita 应该安装完成了，你可以开始编辑你的 `package.json`。

```diff
{
  "name": "mylearn",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "start": "alita dev",
+    "build": "alita build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "alita": "^2.5.7"
  }
}

```

### 增加 alita 配置文件

新建 config/config.js ，写入如下内容(你可以暂时先忽略这个配置，我们会在后续的课程中详细的介绍它)：

```js
export default {
  appType: 'h5',
};
```

### 运行开发服务器

现在，运行以下命令启动开发服务器:

```shell
yarn start
```

这将在 **8000** 端口上启动 alita 应用程序的“开发服务器”(稍后将对此进行详细介绍)。

```bash
Starting the development server...

✔ Webpack
  Compiled successfully in 1.65s

 DONE  Compiled successfully in 1656ms


  App running at:
  - Local:   http://localhost:8000 (copied to clipboard)
  - Network: http://192.168.50.236:8000
```

让我们检查一下是否正常运行。在你的浏览器中打开 [http://localhost:8000](http://localhost:8000)。

> `Network: http://192.168.50.236:8000` 指的是你同局域网内可以访问到的地址链接，这在多设备调试预览的时候，会很有用。

现在，你应该可以在屏幕上看到大大的 “Index Page”。

[完整源码](https://github.com/alitajs/learn-alita-demo/tree/step1-create-alita-app-setup)
