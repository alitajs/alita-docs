import { h } from '@stencil/core';

const items = {
  'menu-plugins': {
    'menu-plugins-cordova': '/plugins/cordova',
    'menu-plugins-dva': '/plugins/dva',
    'menu-plugins-keepalive': '/plugins/keepalive',
    'menu-plugins-main-path': '/plugins/main-path',
    'menu-plugins-native': '/plugins/native',
    'menu-plugins-routes': '/plugins/routes',
    'menu-access-layout': '/plugins/access-layout',
  },
};

export default () => <docs-nav items={items}/>;
