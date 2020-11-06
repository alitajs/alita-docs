# 资源、元数据和 CSS

## 样式技巧

这里有一些样式技巧，可能会对你有帮助。

> 你可以**浏览**下面的部分，不需要修改我们的应用程序！

### 使用 `classnames` 库切换类

[`classnames`](https://github.com/JedWatson/classnames) 是一个让你轻松切换类名的库。你可以使用 `npm install classnames` 或者 `yarn add classnames` 来安装它。

请查看其 [文档](https://github.com/JedWatson/classnames) 了解详情，但以下是基本用法：

- 假设你想创建一个 `Alert` 组件，该组件接受 `type`，它可以是`'success'` 或者 `'error'`。
- 如果是 `'success'`，你希望文本颜色是绿色。如果它是 `'error'`，你希望文本的颜色是红色。

你可以先写一个 CSS module (例如 `alert.module.css`) ，如下所示:

```css
.success {
  color: green;
}
.error {
  color: red;
}
```

并像这样使用 `classnames`:

```jsx
import styles from './alert.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
```

### 使用 Less

在开箱即用的情况下，alita 允许你导入 [Less] 文件。你可以直接使用 Less 文件，并像演示中的一样使用 CSS Modules。

### 这节课就到这里!

到这里你应该能完成，静态页面的编写了。但是我们的项目交互中，往往还涉及到数据获取和绑定的工作。我们将在下一节课中介绍。
