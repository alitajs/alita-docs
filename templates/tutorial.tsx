import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-tutorial-ready': {
    'menu-tutorial-ready-environment': '/tutorial/buildEnvironment',
    'menu-tutorial-ready-quick-start': '/tutorial/quickStart',
  },
  "menu-tutorial-course": {
    'menu-tutorial-course-introduction': '/tutorial/introduction',
    'menu-tutorial-course-initialization': '/tutorial/initialization',
    'menu-tutorial-course-structure': '/tutorial/structure',
    'menu-tutorial-course-layout': '/tutorial/layout',
    'menu-tutorial-course-add-page': '/tutorial/addPage',
    'menu-tutorial-course-navigation': '/tutorial/navigation',
    'menu-tutorial-course-listen-router': '/tutorial/listenRouter',
    'menu-tutorial-course-http-request': '/tutorial/httpRequest',
    'menu-tutorial-course-proxy': '/tutorial/proxy',
    'menu-tutorial-course-mock': '/tutorial/mock',
    'menu-tutorial-course-recode': '/tutorial/recode',
    'menu-tutorial-course-task': '/tutorial/task',
    'menu-tutorial-course-hero-list': '/tutorial/heroList',
    'menu-tutorial-course-filter': '/tutorial/filter',
    'menu-tutorial-course-banner': '/tutorial/banner',
    'menu-tutorial-course-dynamic-router': '/tutorial/dynamicRouter',
  },
  "menu-tutorial-deploy": {
    "menu-tutorial-deploy-container": '/tutorial/container',
    "menu-tutorial-deploy-local": '/tutorial/local',
    "menu-tutorial-deploy-github": '/tutorial/github',
  }
};
