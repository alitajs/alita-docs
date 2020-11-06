import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-config': {
    'menu-config-config': '/config/config',
    'menu-config-runtime': '/config/runtime',
  },
};
