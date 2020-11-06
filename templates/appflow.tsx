import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  'menu-appflow': '/appflow',
  'menu-appflow-quickstart': {
    'menu-appflow-quickstart-overview': '/appflow/quickstart',
    'menu-appflow-quickstart-connect': '/appflow/quickstart/connect',
    '': {
      'menu-appflow-quickstart-github': '/appflow/quickstart/github',
      'menu-appflow-quickstart-bitbucket': '/appflow/quickstart/bitbucket',
      'menu-appflow-quickstart-bitbucket-server': '/appflow/quickstart/bitbucket-server',
      'menu-appflow-quickstart-ionic-remote': '/appflow/quickstart/ionic-remote',
    },
    'menu-appflow-quickstart-installation': '/appflow/quickstart/installation',
    'menu-appflow-quickstart-push': '/appflow/quickstart/push',
    'menu-appflow-quickstart-deploy': '/appflow/quickstart/deploy',
    'menu-appflow-quickstart-package': '/appflow/quickstart/package',
    'menu-appflow-quickstart-automation': '/appflow/quickstart/automation',
    'menu-appflow-quickstart-environment': '/appflow/quickstart/environment',
    'menu-appflow-quickstart-native-config': '/appflow/quickstart/native-config'
  },
  'menu-appflow-deploy': {
    'menu-appflow-deploy-intro': '/appflow/deploy/intro',
    'menu-appflow-deploy-setup': '/appflow/deploy/setup',
    'menu-appflow-deploy-builds': '/appflow/deploy/builds',
    'menu-appflow-deploy-channels': '/appflow/deploy/channels',
    'menu-appflow-deploy-api': '/appflow/deploy/api',
    'menu-appflow-deploy-tutorials': '/appflow/deploy/tutorials',
    'menu-appflow-deploy-cli': '/appflow/deploy/cli'
  },
  'menu-appflow-package': {
    'menu-appflow-package-intro': '/appflow/package/intro',
    'menu-appflow-package-builds': '/appflow/package/builds',
    'menu-appflow-package-build-types': '/appflow/package/build-types',
    'menu-appflow-package-credentials': '/appflow/package/credentials',
    'menu-appflow-package-adding-credentials': '/appflow/package/adding-credentials',
    'menu-appflow-package-native-configs': '/appflow/package/native-configs',
    'menu-appflow-package-cli': '/appflow/package/cli'
  },
  'menu-appflow-automation': {
    'menu-appflow-automation-intro': '/appflow/automation/intro',
    'menu-appflow-automation-create': '/appflow/automation/create',
    'menu-appflow-automation-environments': '/appflow/automation/environments',
    'menu-appflow-automation-webhooks': '/appflow/automation/webhooks',
  },
  'menu-appflow-cookbook': {
    'menu-appflow-cookbook-intro': '/appflow/cookbook/intro',
    'menu-appflow-cookbook-private_git': '/appflow/cookbook/private_git',
    'menu-appflow-cookbook-private_npm_modules': '/appflow/cookbook/private_npm_modules',
    'menu-appflow-cookbook-switch_node_version': '/appflow/cookbook/switch_node_version'
  },
  'menu-appflow-devapp': '/appflow/devapp'
};
