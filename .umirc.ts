import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'alita',
  favicon: 'https://avatars.githubusercontent.com/u/49136103?s=200&v=4',
  logo: 'https://avatars.githubusercontent.com/u/49136103?s=200&v=4',
  outputPath: 'alita-docs',
  sitemap: {
    hostname: 'https://alitajs.com',
  },
  analytics: {
    ga: 'G-ET6VJN7XQ8',
    baidu: '5a66c03cb0ae986f876184554f2b9e13',
  },
  ghPages: {
    branch: 'gh-pages',
    silent: true,
    repo: `https://${process.env.GH_TOKEN}@github.com/alitajs/alita-docs.git`,
  },
  mode: 'site',
  resolve: {
    previewLangs: ['tsx'],
  },
  exportStatic: {},
  alias: {
    docsroot: '/',
  },
  // more config: https://d.umijs.org/config
  menus: {
    '/docs': [
      {
        title: '简介',
        children: [
          { title: 'Alita 是什么', path: '/docs/intro' },
          { title: '核心概念', path: '/docs/intro/concepts' },
          { title: '创建第一个应用程序', path: '/docs/intro/first-app' },
          { title: '浏览器支持', path: '/docs/intro/browser-support' },
          { title: '帮助与支持', path: '/docs/intro/support' },
        ],
      },
      {
        title: '安装',
        children: [
          { title: '环境配置', path: '/docs/installation/environment' },
          { title: 'CLI 安装', path: '/docs/installation/cli' },
          { title: 'IOS 设置', path: '/docs/installation/ios' },
          { title: 'Android 设置', path: '/docs/installation/android' },
        ],
      },
      {
        title: '构建',
        children: [
          { title: '开始', path: '/docs/building/starting' },
          { title: '脚手架', path: '/docs/building/scaffolding' },
          { title: '运行预览', path: '/docs/building/running' },
          { title: '跨平台', path: '/docs/building/cross-platform' },
          { title: '在 IOS 上运行', path: '/docs/building/ios' },
          { title: '在 Android 上运行', path: '/docs/building/android' },
        ],
      },
      {
        title: '前端基础知识',
        children: [{ title: '印记中文', path: 'https://docschina.org/' }],
      },
      {
        title: '常见问题解答(FAQ)',
        path: '/docs/faq',
      },
    ],
    '/video': [{ title: '什么是 alita', path: '/video/index' }],
    '/learn': [
      {
        title: '创建 alita 应用程序',
        children: [
          { title: '简介', path: '/learn/create-alita-app' },
          {
            title: '环境配置及基础详解',
            path: '/learn/create-alita-app/setup',
          },
          {
            title: '编辑页面',
            path: '/learn/create-alita-app/editing-the-page',
          },
        ],
      },
      {
        title: '页面间导航',
        children: [
          { title: '简介', path: '/learn/navigate-between-pages' },
          {
            title: 'alita 中的页面',
            path: '/learn/navigate-between-pages/pages-in-alita',
          },
          {
            title: '声明式与约定式',
            path: '/learn/navigate-between-pages/link-component',
          },
        ],
      },
      {
        title: '资源、元数据和CSS',
        children: [
          { title: '简介', path: '/learn/assets-metadata-css' },
          { title: '资源', path: '/learn/assets-metadata-css/assets' },
          { title: '元数据', path: '/learn/assets-metadata-css/metadata' },
          { title: 'CSS 样式', path: '/learn/assets-metadata-css/css-styling' },
          {
            title: '布局组件',
            path: '/learn/assets-metadata-css/layout-component',
          },
          {
            title: '全局样式',
            path: '/learn/assets-metadata-css/global-styles',
          },
          {
            title: '样式技巧',
            path: '/learn/assets-metadata-css/styling-tips',
          },
        ],
      },
      {
        title: '数据获取',
        children: [
          { title: '简介', path: '/learn/data-fetching' },
          { title: 'dva', path: '/learn/data-fetching/dva' },
          { title: 'dva 入门', path: '/learn/data-fetching/dva-learn' },
          { title: 'dva 课堂实战', path: '/learn/data-fetching/dva-demo' },
          { title: '纯 hooks 数据流', path: '/learn/data-fetching/hooks' },
        ],
      },
      {
        title: '实战演练',
        children: [
          { title: '简介', path: '/learn/tutorial/introduction' },
          {
            title: '使用CLI初始化项目',
            path: '/learn/tutorial/initialization',
          },
          { title: '项目结构', path: '/learn/tutorial/structure' },
          { title: '全局布局', path: '/learn/tutorial/layout' },
          { title: '添加页面', path: '/learn/tutorial/add-page' },
          { title: '导航到页面', path: '/learn/tutorial/navigation' },
          { title: '监听路由事件', path: '/learn/tutorial/listen-router' },
          { title: 'http 请求', path: '/learn/tutorial/http-request' },
          { title: 'proxy 请求代理', path: '/learn/tutorial/proxy' },
          { title: 'mock 数据', path: '/learn/tutorial/mock' },
          { title: '练习', path: '/learn/tutorial/task' },
          { title: '美化英雄列表', path: '/learn/tutorial/hero-list' },
          { title: '增加过滤条件', path: '/learn/tutorial/filter' },
          { title: '完成英雄页面 banner', path: '/learn/tutorial/banner' },
          { title: '动态路由', path: '/learn/tutorial/dynamic-router' },
        ],
      },
    ],
    '/components': [
      { title: '移动端全局布局', path: '/components/alita-layout' },
      { title: '移动端拖拽实现', path: '/components/d-a-d' },
      { title: '移动端表单方案', path: '/components/d-d' },
      { title: '手势密码', path: '/components/gesture-password' },
      { title: '列表页面(加载更多)', path: '/components/list-view' },
      { title: '业务组件库', path: 'https://ui.alitajs.com' },
      { title: '图表组件库', path: 'https://charts.alitajs.com' },
    ],
  },
  navs: [
    // {
    //   title: '文档',
    //   path: '/docs/docs/intro/index',
    // },
    // {
    //   title: '配置',
    //   path: '/config',
    // },
    // {
    //   title: '学习',
    //   path: '/learn/create-alita-app',
    // },
    // {
    //   title: '组件',
    //   path: '/components/alita-layout',
    // },
    // {
    //   title: '插件',
    //   path: '/plugins',
    // },
    // {
    //   title: '微应用（Beta）',
    //   path: '/micro',
    // },
    // {
    //   title: '插件',
    //   path: '/plugins',
    // },
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/alitajs/alita',
    },
    {
      title: '印记中文',
      path: 'https://docschina.org/',
    },
  ],
});
