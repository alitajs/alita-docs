# @alitajs/native

## Usage

Install via yarn or npm.

```bash
$ yarn add @umijs/native
```

Configure it in the `.umirc.js`.

```js
export default {
  plugins: ['@alitajs/native'],
  native: [],
};
```

> 无法单独使用，需要结合 @alitajs/cordova

## supported plugins in native config array

`camera`, `device`, `dialogs`, `file`, `geolocation`, `inappbrowser`, `media`, `media-capture`, `keyboard`, `secure-storage`, `network`, `screen-orientation`, `statusbar`, `vibration`

## camera

[cordova-plugin-camera](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html)

`config.xml` config

```xml
<edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
    <string>need camera access to take pictures</string>
</edit-config>

<edit-config target="NSPhotoLibraryUsageDescription" file="*-Info.plist" mode="merge">
    <string>need photo library access to get pictures from there</string>
</edit-config>

<edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge">
    <string>need location access to find things nearby</string>
</edit-config>

<edit-config target="NSPhotoLibraryAddUsageDescription" file="*-Info.plist" mode="merge">
    <string>need photo library access to save pictures there</string>
</edit-config>
```

## secure-storage

[cordova-plugin-secure-storage](https://github.com/Crypho/cordova-plugin-secure-storage)

`config.xml` config

```xml
<platform name="ios">
    <preference name="KeychainAccessibility" value="WhenUnlocked"/>
</platform>
```

supported values:

```
AfterFirstUnlock
AfterFirstUnlockThisDeviceOnly
WhenUnlocked (default)
WhenUnlockedThisDeviceOnly
WhenPasscodeSetThisDeviceOnly (this option is available only on iOS8 and later)
```
