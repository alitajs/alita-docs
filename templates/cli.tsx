import { h } from '@stencil/core';

// import commands from '../data/cli-commands.json';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-cli': {
    'menu-cli-overview': '/cli',
    'menu-cli-configuration': '/cli/configuration',
    'menu-cli-livereload': '/cli/livereload',
    'menu-cli-using-a-proxy': '/cli/using-a-proxy',
    'menu-cli-changelog': 'https://github.com/alitajs/alita/blob/develop/packages/@ionic/cli/CHANGELOG.md'
  },
  // 'menu-cli-commands': Object.entries(commands).sort()
};
