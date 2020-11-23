# 事件扩展

## 初始化事件

当执行 `window.onload` 后，容器会执行初始化操作，产生全局变量 `AlitaBridge`， 然后触发 `JS Bridge` 初始化完毕（`AlitaBridgeReady`）事件。

AlitaBridge 注入是一个异步过程，因此尽可能监听该事件后，再调用 AlitaBridgeReady。

### AlitaBridgeReady 使用方法

在 alita 项目中，无需处理。已在框架中处理。其他框架请在合适的时机添加类似如下的代码:

```
export function render(oldRender: () => void) {
  function onDeviceReady() {
    oldRender();
  }
  if ((window as any).AlitaBridge) {
    onDeviceReady();
  } else {
    // 如果没有注入则监听注入的事件
    document.addEventListener('AlitaBridgeReady', onDeviceReady, false);
  }
}
```

## 页面到后台

当项目界面不可见时，例如被压入后台、锁屏、切换另一个页面，会触发页面压后台（pause）事件 。

### 使用方法

```
document.addEventListener('pause', function(e) {
  alert("pause");
}, false);
```

## 页面到前台

当一个项目界面重新回到栈顶时，例如从后台被唤起、锁屏界面恢复、从下个页面回退，会触发页面恢复运行（resume）事件。

### 使用方法

```
document.addEventListener('resume', function(e) {
  console.log("resumed");
}, false);
```
