import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-studio-introduction': {
    'menu-studio-introduction-welcome': '/studio',
    'menu-studio-introduction-support': '/studio/support',
  },
  'menu-studio-setup': {
    'menu-studio-setup-installation': '/studio/setup/installation',
    'menu-studio-setup-native': '/studio/setup/native',
  },
  'menu-studio-documentation': {
    'menu-studio-documentation-start': '/studio/start',
    'menu-studio-documentation-designer': '/studio/designer',
    'menu-studio-documentation-code': '/studio/code',
    'menu-studio-documentation-assets': '/studio/assets',
    'menu-studio-documentation-theming': '/studio/theming',
    'menu-studio-documentation-settings': '/studio/settings',
    'menu-studio-documentation-running': '/studio/running',
    'menu-studio-documentation-terminal': '/studio/terminal',
  },
  'menu-studio-guides': {
    // 'menu-studio-guides-quickstart': '/studio/guides/quickstart',
    'menu-studio-guides-routing': '/studio/guides/routing-and-navigation',
    'menu-studio-guides-functionality': '/studio/guides/using-native-functionality',
  },
  'menu-studio-faq': '/studio/faq',
};
