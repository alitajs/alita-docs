# 数据获取

## request 请求数据

前面我们花了大量的篇幅介绍项目中的数据流方案，其实他们是作为数据消费部分存在的。但是我们并没有真正的发起数据请求，在这里我们将详细的介绍在 alita 中如何规范的发起数据请求，即如何将数据传入我们之前介绍的数据流方案中。

在很多其他项目中，我们都会单独维护一个 http 请求的工具类，它一般会在你的 `utils` 文件夹中，但是通过多个项目的代码比对，我们发现这个工具类有至少80%的代码是重复的，且不同人员的维护上也比较随意，代码维护上是比较乱的。因此我们将 request 请求内置到框架中。

```js
import { request } from 'alita';

const data = await request('/api/hello', {
  method: 'get',
});
```

直接使用，对服务端的返回数据模型，会有一些约定

> 如果你的服务端返回数据格式不同，会在后面的配置中提到如何处理这种情况。

```ts
interface ErrorInfoStructure {
  success: boolean; // if request is success
  data?: any; // response data
  ...
}
```

一般我们对服务端发起请求，最常见的会涉及到，统一的请求url、统一的head、默认的请求方式（默认 get或者默认post）等。

这些内容，我们都在运行时配置中提供了修改方式。

> 运行时配置顾名思义就是在项目运行时会根据一些条件或者时机来修改配置，常常用于某些需要动态配置的情况。到目前位置，我们还没提到 alita 中的配置，你可以展示忽略这个内容，只需要记住运行时配置只有一个地方 `src/app.js|ts`。某些功能会用到它。你需要按约定导出对象，不能导出不存在的对象。

```js
export const request = {
  prefix: '',
  method: 'get',
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
};
```

在运行时配置中导出 request 是我们的请求功能要求的。

### request 配置

| 参数                | 说明                                                                  | 类型                           | 可选值                            | 默认值                     |
| :------------------ | :-------------------------------------------------------------------- | :----------------------------- | :-------------------------------- | :------------------------- |
| method              | 请求方式                                                              | string                         | get , post , put ...              | get                        |
| params              | url 请求参数                                                          | object 或 URLSearchParams 对象 | --                                | --                         |
| data                | 提交的数据                                                            | any                            | --                                | --                         |
| headers             | fetch 原有参数                                                        | object                         | --                                | {}                         |
| timeout             | 超时时长, 默认毫秒, 写操作慎用                                        | number                         | --                                | --                         |
| prefix              | 前缀, 一般用于覆盖统一设置的 prefix                                   | string                         | --                                | --                         |
| suffix              | 后缀, 比如某些场景 api 需要统一加 .json                               | string                         | --                                | --                         |
| credentials         | fetch 请求包含 cookies 信息                                           | string                         | --                                | credentials: 'same-origin' |
| useCache            | 是否使用缓存（仅支持浏览器客户端）                                    | boolean                        | --                                | false                      |
| validateCache       | 缓存策略函数                                                          | (url, options) => boolean      | --                                | 默认 get 请求做缓存        |
| ttl                 | 缓存时长, 0 为不过期                                                  | number                         | --                                | 60000                      |
| maxCache            | 最大缓存数                                                            | number                         | --                                | 无限                       |
| requestType         | post 请求时数据类型                                                   | string                         | json , form                       | json                       |
| parseResponse       | 是否对 response 做处理简化                                            | boolean                        | --                                | true                       |
| charset             | 字符集                                                                | string                         | utf8 , gbk                        | utf8                       |
| responseType        | 如何解析返回的数据                                                    | string                         | json , text , blob , formData ... | json , text                |
| throwErrIfParseFail | 当 responseType 为 'json', 对请求结果做 JSON.parse 出错时是否抛出异常 | boolean                        | --                                | false                      |
| getResponse         | 是否获取源 response, 返回结果将包裹一层                               | boolean                        | --                                | fasle                      |
| errorHandler        | 异常处理, 或者覆盖统一的异常处理                                      | function(error)                | --                                |
| cancelToken         | 取消请求的 Token                                                      | CancelToken.token              | --                                | --                         |

fetch 原其他参数有效, 详见[fetch 文档](https://github.github.io/fetch/)

上面列出的是 request 支持的所有配置，看起来有些复杂，但是我们在实际使用中最经常修改的，其实只有 `prefix`，当你需要切换请求前缀时，会比较频繁的修改它。其他的数据应该是在首次接口连调的时候，和服务端约定好的配置。

### 修改请求数据-加密或过滤

一般我们还有有一个常用的需求，对我们发出的数据进行安全性的数据加密。或者仅针对某个接口对数据进行过滤。

这时候就能用到我们的中间件功能了。这个在 express 项目中是很容易理解的概念。

```js
const middleware = async (ctx, next) => {
  // 这里是对请求数据的操作，比如加密或者过滤数据，我们可以在这里操作
  // url 请求不包含 ‘abc’ 时，就做某些操作
  if (!ctx.req.url.includes('abc')) {
  }
  await next();
  // next 执行之后，这部分我们一般是对请求结果做操作，比如统一的错误码处理，或者token失效这些，都可以在这里处理
  // 以下代码只是模拟，正式的写法要根据服务端的约定
  if (ctx.res.errors) {
    const {
      errorCode,
      fieldPath,
      message,
      value } = ctx.res.errors[0];
    if (errorCode === '0000') {
      gotoLogin(message);
    } else {
      Toast.fail(`${message}` || '请求异常请稍后重试', 1);
    }
  }
};

export const request = {
  prefix: '', // 统一的请求头
  middlewares: [middleware],
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};
```

理解了上面的概念，那么在我们之前提到的数据流中，应该在什么时机发起请求呢？
