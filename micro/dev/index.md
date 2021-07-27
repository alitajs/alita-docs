# 微应用开发

## 配置

```
export default {
  appType:'micro',
  packageId:'com.alita.micro', // 写项目真实的 Bundle Identifier
  displayName:'demo', // 写项目真实的包名
  displayIcon:path.join(process.cwd(), 'src/assets/logo.png'),// logo 路径
};
```

在编译时会生成项目需要的基本数据。（上述配置在 appType 为 cordova 的时候，也有效，所以可以在打原生安装包和微应用之间无缝切换）

## 开发能力兜底

AlitaNative 会自动识别场景，如果是在原生环境会调用 AlitaSDK ，如果是开发环境，会模拟每个能力返回一个测试数据。比如 AlitaNative.getUserData() 在真实环境返回的是原生端传递过来的数据，如果是开发环境，会从平台返回测试数据。

## 组件库

设计规范，禁止设计右上角按钮。因为这里为微应用关闭按钮。

使用 antd-mobile 开发。

## 微应用发布

联系官方，提供微应用管理后台上传发包。
