## Android 端集成

## 1. 获取 SDK Key 和 SDK Secret

使用 SDK 需要申请 SDK Key 和 SDK Secret，只有在 SDK 初始化的时候配置了正确的 SDK Key 和 SDK Secret，才能初始化成功并正常使用。

## 2. 导入 SDK

### 2.1 添加微应用 arr 包到工程

从 demo 工程中把 arr 包加入到工程中

### 2.2 在 gradle 中依赖 SDK

在 gradle 文件的 dependencies 中添加对 AlitaNativeLib 的依赖：

       implementation(name: 'AlitaNativeLib', ext: 'aar')

## 3. SDK 初始化

我们强烈建议在 Application 中对 SDK 进行初始化，初始化 SDK 需要传入的各项参数如下：

### 3.1 初始化 SDK

在 Application 的 onCreate() 下调用初始化接口初始化 SDK：

        MiniAppConfigure.init(this,"appkey","appSecret");

## 4. SDK 使用示例

### 4.1 启动微应用

需要启动微应用，请调用方法：

        MiniAppManager.getInstance(mActivity).startWebApp("versionId", "appName", "appid", "version");

### 4.2 获取微应用列表

        MiniAppManager.getInstance(this).getWebAppList(new MiniAppManager.RequestCallback() {

            @Override
            public void onError(String errorCode, String errorMessage) {
                //错误日志
            }

            @Override
            public void onSuccess(ArrayList<WebAppBean.WebAppData> records) {
                //列表数据
            }
        });
