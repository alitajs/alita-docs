import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'alita',
  favicon: 'https://alitajs.com/assets/img/meta/apple-touch-icon-114x114.png',
  logo: 'https://alitajs.com/assets/img/meta/apple-touch-icon-180x180.png',
  outputPath: 'alita-docs',
  mode: 'site',
  resolve: {
    previewLangs: ['ts','tsx'],
  },
  // more config: https://d.umijs.org/config
  menus: {
    '/learn': [
      {
        title: '创建 alita 应用程序',
        children: [
          { title: '简介', path: '/learn/create-alita-app' },
          { title: '环境配置及基础详解', path: '/learn/create-alita-app/setup' },
          { title: '编辑页面', path: '/learn/create-alita-app/editing-the-page' },
        ],
      },
      {
        title: '页面间导航',
        children: [
          { title: '简介', path: '/learn/navigate-between-pages' },
          { title: 'alita 中的页面', path: '/learn/navigate-between-pages/pages-in-alita' },
          { title: '声明式与约定式', path: '/learn/navigate-between-pages/link-component' },
        ],
      },
      {
        title: '资源、元数据和CSS',
        children: [
          { title: '简介', path: '/learn/assets-metadata-css' },
          { title: '资源', path: '/learn/assets-metadata-css/assets' },
          { title: '元数据', path: '/learn/assets-metadata-css/metadata' },
          { title: 'CSS 样式', path: '/learn/assets-metadata-css/css-styling' },
          { title: '布局组件', path: '/learn/assets-metadata-css/layout-component' },
          { title: '全局样式', path: '/learn/assets-metadata-css/global-styles' },
          { title: '样式技巧', path: '/learn/assets-metadata-css/styling-tips' },
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
    ],
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/alitajs/alita',
    },
  ],
});
