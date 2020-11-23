---
nextText: 'CLI 安装'
nextUrl: '/docs/installation/cli'
contributors:
  - rtpHarry
---

# 环境配置

要开始 Alita 开发，只需要电脑环境装有 [Node & npm](#node-npm)

当然你还需要一个开发 IDE，推荐使用 [VS Code](https://code.visualstudio.com/)

## 终端应用程序

> Alita 的许多开发都需要熟悉命令行工具。如果您不熟悉命令行，请参阅[此博客文章](https://ionicframework.com/blog/new-to-the-command-line/)。

通常，我们建议使用内置终端。

- 对于 Windows， 支持 **Command Prompt** 和 **PowerShell**
- 对于 macOS，支持内置的终端应用程序 **Terminal**

## Node & npm

几乎所有用于现代 JavaScript 项目的工具都基于 [Node.js](/faq/glossary#node)。该[下载页面](https://nodejs.org/en/download/)已预构建的安装包适用于所有平台。我们建议选择 LTS 版本以确保最佳兼容性。

Node 捆绑安装了 [npm](/faq/glossary#npm)，这是一个 JavaScript 的包管理器。

要验证安装成功，请打开一个新的终端窗口并运行：

```shell
$ node --version
$ npm --version
```

> 在 macOS 上使用 npm 安装全局模块时，经常会遇到权限问题，如果你遇到了 `EACCES` 错误，请查阅[解决权限错误](/faq/tips#resolving-permission-errors)。

> 注意，我们需要 node 版本在 10+，如果你使用低版本的 node ，可能会遇到一些预料之外的问题。如果你的开发环境，不允许你升级 node 版本，那你可以使用你能找到的任何方式联系我们。我们将会尝试着解决低版本兼容问题。

## Git

Git 在开发运行 Alita 时，不是必须的，但是我们强烈建议你安装和使用它。[Git](/faq/glossary#git) 是一个很高效流行的版本控制软件。

Git 通常伴随有 Git 主机，例如 GitHub，在这种情况下，需要进行其他设置。按照 Git 主机文档中的教程设置 Git：

- GitHub: [Set up Git](https://help.github.com/en/articles/set-up-git)
- GitLab: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

否则，请遵循[官方安装说明](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。可以从[下载页面](https://git-scm.com/downloads)下载命令行实用程序。

要验证安装成功，请打开一个新的终端窗口并运行：

```shell
$ git --version
```

### Git GUI

Git 是一个命令行实用程序，但是有许多 [GUI 客户端](https://git-scm.com/downloads/guis/)可用。使用 GitHub 的时候，推荐使用[GitHub Desktop](https://desktop.github.com/)。其他 Git 主机，建议安装 [Sourcetree](https://www.sourcetreeapp.com/)。
