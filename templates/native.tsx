import { Component, Prop, h } from '@stencil/core';
// import communityPlugins from '../data/native-plugins.json';
import { l10n } from '../../../l10n';

@Component({
  tag: 'docs-menu-native',
  styleUrl: 'native.css'
})
export class DocsMenuNative {

@Prop() category: 'community' | 'premier' = 'premier';

toggle(e: CustomEvent) {
  this.category = e.detail.value;
}

render() { return [
  <docs-nav items={ this.intro } />,

  <docs-menu-collapsible heading={l10n.getString('menu-native-solutions')}>
    <docs-nav items={ this.nativeSolutions } />
  </docs-menu-collapsible>,

  <docs-menu-collapsible heading={l10n.getString('menu-native-core-device')}>

    <ion-segment mode="ios"
                 value={this.category}
                 onIonChange={e => this.toggle(e) }
                 color="medium">
      <ion-segment-button value="community">
        <ion-label>{l10n.getString('menu-native-community')}</ion-label>
      </ion-segment-button>
      <ion-segment-button value="premier">
        <ion-label>{l10n.getString('menu-native-premier')}</ion-label>
      </ion-segment-button>
    </ion-segment>

    {/* {this.category === 'community' ?
      <docs-nav items={this.communityPlugins} /> :
      <docs-nav items={this.premierPlugins} />
    } */}
  </docs-menu-collapsible>
]; }

intro = {
  'menu-native-paid': {
    'menu-native-home': '/native',
    'menu-native-community-v-premier': '/enterprise'
  }
};

nativeSolutions = {
  '': {
    'Overview': '/enterprise/solutions',
    'Identity Vault': '/enterprise/identity-vault',
    'Auth Connect': '/enterprise/auth-connect',
    '': {
      'Auth0': '/enterprise/auth-connect/auth0',
      'Azure AD B2C': '/enterprise/auth-connect/azure-ad-b2c',
      'AWS Cognito': '/enterprise/auth-connect/aws-cognito'
    },
    'Offline Storage': '/enterprise/offline-storage'
  }
};

communityPlugins = {
  'menu-native-getting-started': {
    'menu-native-quickstart': '/native/community',
    'menu-native-faq': '/native/faq'
  },
  // 'menu-native-plugins': Object.entries(communityPlugins).sort()
};

premierPlugins = {
  'menu-enterprise-getting-started': {
    'menu-native-quickstart': '/enterprise/quickstart',
    'menu-native-setup': '/enterprise/setup'
  },
  'menu-enterprise-integrated-services': {
    'Apple Payment Pass': '/enterprise/apple-payment-pass',
    'Auth0': '/enterprise/auth-connect/auth0',
    'AWS Amplify': '/enterprise/aws-amplify',
    'AWS Cognito': '/enterprise/auth-connect/aws-cognito',
    'Azure AD B2C': '/enterprise/auth-connect/azure-ad-b2c',
    'Couchbase Lite': '/enterprise/couchbase-lite',
    'mParticle': '/enterprise/mparticle'
  },
  'menu-enterprise-common-device-features': {
    'Android Permissions': '/enterprise/android-permissions',
    'App Rate': '/enterprise/app-rate',
    'App Version': '/enterprise/app-version',
    'Badge': '/enterprise/badge',
    'Calendar': '/enterprise/calendar',
    'Camera': '/enterprise/camera',
    'Clipboard': '/enterprise/clipboard',
    'Contacts': '/enterprise/contacts',
    'Deep Links': '/enterprise/deeplinks',
    'Device': '/enterprise/device',
    'Dialogs': '/enterprise/dialogs',
    'Email Composer': '/enterprise/email-composer',
    'Filesystem': '/enterprise/filesystem',
    'Geolocation': '/enterprise/geolocation',
    'Globalization': '/enterprise/globalization',
    'InAppBrowser': '/enterprise/inappbrowser',
    'Keyboard': '/enterprise/keyboard',
    'Media': '/enterprise/media',
    'Media Capture': '/enterprise/media-capture',
    'Native Storage': '/enterprise/nativestorage',
    'Network Information': '/enterprise/network-information',
    'Screen Orientation': '/enterprise/screen-orientation',
    'Social Sharing': '/enterprise/social-sharing',
    'Splash Screen': '/enterprise/splashscreen',
    'Status Bar': '/enterprise/statusbar',
    'Vibration': '/enterprise/vibration'
  },
};
}
