# 数据获取

## dva

### 什么是 dva？

dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。

通常在 dva 的项目中，你需要掌握 (6 个 API](https://dvajs.com/guide/concepts.html)，这相比 redux 的概念已经很少了，但是在 alita 项目中，你需要掌握的 API 数是 0。
即一个也不需要掌握。因为在 alita 中通过约定的方式组织代码，框架自动完成了相应 API 的执行。

比如，在 `src/models` 中新建文件，就会被自动使用 `app.model` 绑定到 dva 中。

### [为什么要用 dva](https://github.com/dvajs/dva/issues/1)

经过一段时间的自学或培训，大家应该都能理解 redux 的概念，并认可这种数据流的控制可以让应用更可控，以及让逻辑更清晰。

但随之而来通常会有这样的疑问：概念太多，并且 reducer, saga, action 都是分离的（分文件）。

这带来的问题是：

- 编辑成本高，需要在 reducer, saga, action 之间来回切换
- 不便于组织业务模型 (或者叫 domain model) 。比如我们写了一个 userlist 之后，要写一个 productlist，需要复制很多文件。

还有一些其他的：

- saga 书写太复杂，每监听一个 action 都需要走 fork -> watcher -> worker 的流程
- entry 书写麻烦
- ...

而 dva 正是用于解决这些问题。

### 什么时候需要使用 dva

在 react hooks 上线之后。在 alita 项目中，我们建议轻量的使用 dva。仅仅在以下几种场景下推荐使用 dva：

1. 父子组件之间的数据互通
2. 多页面之间的数据传递（即，公共数据）
3. 非 react 组件的场景
