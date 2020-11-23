# 原生能力

## 扫码解析

```js
const res = await alita.device.scanCode(params);
```

### 参数

**Object params**

| 属性           | 类型           | 默认值     | 必填 | 说明                                     |
| :------------- | :------------- | :--------- | :--- | :--------------------------------------- |
| onlyFromCamera | boolean        | false      | 否   | 是否只能从相机扫码，不允许从相册选择图片 |
| scanType       | Array<string\> | ['qrCode'] | 否   | 扫码类型，目前只支持二维码               |

### 响应

**Object res**

| 属性   | 类型   | 说明         |
| :----- | :----- | :----------- |
| result | string | 所扫码的内容 |

## 获取相册

```js
const res = await alita.media.chooseImage(params);
```

### 参数

**Object params**

| 属性       | 类型           | 默认值              | 必填 | 说明                                                                                 |
| :--------- | :------------- | :------------------ | :--- | :----------------------------------------------------------------------------------- |
| count      | number         | 9                   | 否   | 最多可以选择的图片张数                                                               |
| sizeType   | Array<string\> | ['compressed']      | 否   | 所选的图片的尺寸，可选值`original`，`compressed`。建议使用`compressed`，图片会小很多 |
| sourceType | Array<string\> | ['album', 'camera'] | 否   | 选择图片的来源                                                                       |
| base64     | bool           | true                | 否   | 是否需要 `base64` 数据                                                               |

### 响应

**Object res**

| 属性  | 类型           | 说明         |
| :---- | :------------- | :----------- |
| files | Array<Object\> | 图片对象数组 |

**res.files**

| 属性      | 类型   | 说明                                                   |
| :-------- | :----- | :----------------------------------------------------- |
| path      | string | 原图本地文件路径，当`sizeType`包含`original`时返回     |
| thumbnail | string | 压缩图本地文件路径，当`sizeType`包含`compressed`时返回 |
| base64    | string | base64 数据，当入参`base64`为 true 时，返回            |

## 获取系统信息

```js
const res = await alita.device.systemInfo();
```

### 参数

### 响应

**Object res**

| 属性            | 类型   | 说明                         |
| :-------------- | :----- | :--------------------------- |
| platform        | string | `ios` or `android`           |
| version         | string | 主 app 版本，如 1.0.0        |
| uuid            | string | 设备唯一标识                 |
| statusBarHeight | number | 导航栏高度                   |
| SDKVersion      | string | 微应用基础库版本号，如 1.0.0 |

## 打开 web 页面

```js
alita.device.openWeb((url: string));
```

### 参数

**String url**

| 属性 | 类型   | 说明         |
| :--- | :----- | :----------- |
| url  | string | 要打开的 URL |

### 响应

## 打开文件

```js
alita.file.openDocument((params: { url: string }));
```

支持 doc、xls、ppt、pdf 等格式

### 参数

**Object params**

| 属性 | 类型   | 说明             |
| :--- | :----- | :--------------- |
| url  | string | 要打开文件的 URL |

### 响应
