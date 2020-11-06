# 数据获取

## 纯 hooks 的数据流

> 虽然我们假定当你阅读本文档的时候，你已经了解过 react hooks 相关的知识了，但是本次的文档希望面临的受众更广一些，所以依旧会很详细的讲解几个常用的 hooks。如果你无法很轻易的掌握本文档的内容，那你可以通过搜索阅读其他的文档来强化这些概念。此处不给出推荐链接，推荐进行内部的初级开发认证。

本文档假定你是按照我们课程设计的顺序进行阅读的，即表示到达这里，你已经熟练掌握了 dva 的相关概念。因此我会直接使用 dva 的概念来类比介绍 react hooks 的概念。但事实上 react hooks 的概念是要比 dva 来的更容易掌握的。这么做的目的也是为了让你再次熟悉 dva。

### useState

我们经常在项目中看到如下的代码：

```js
import { useState } from 'react';

const [state, setstate] = useState(initialState)
```

这里我们以 dva 的概念类比理解：

#### initialState 与 init state

```js
// initialState

state: {
  name: 'learn alita',
},

// 如果我们想像上面这样定义和初始化变量，我们可以使用如下 hooks

const [name, setName] = useState('learn alita');
```

#### name 与 select state

在我们定义好变量之后，在后续的任何时候取值，都能取到最新的数据。

```js
// hooks
const [name, setName] = useState('learn alita');
const newName = name + 1;
// dva 中
const { name } = yield select(_=>_.global);
const newName = name + 1;
```

#### setName 与 reducers save

```js
// hooks
const [name, setName] = useState('learn alita');
setName('alita 入门教程')
// dva 中
yield put({
  type: 'save',
  payload: { name: 'alita 入门教程' },
});
```

> 注意：调用 setName 是要注意深浅拷贝的问题，你可以简单的记忆，当你 set 的数据是一个数组或者对象时，记得使用解构（...）返回一个新的对象。

#### async/await 与 effects

```js
const delay = () => new Promise(resolve => {
  setTimeout(resolve, 1000);
})
// hooks
const [list, setList] = useState(['step1', 'step2', 'step3', 'step4']);

const deleteItem = async item => {
  await delay()
  list.splice(list.findIndex(e => e === item), 1)
  setList([...list])
}

// dva 中
{
  state: {
    name: 'learn alita',
    list: ['step1','step2','step3','step4']
  },
  effects: {
    *deleteItem({ payload }, { call, put,select }) {
        const { list } = yield select(_=>_.global);
        yield call(delay)
        list.splice(list.findIndex(e => e === payload), 1)
        yield put({
          type: 'save',
          payload: { list },
        });
      },
  },
}
```

#### 整理

新建文件 `src/pages/useState/index.js`

```js
import { useState } from 'react';
import { Link } from 'alita';
import { Button } from 'antd-mobile';

export default function List({ history }) {
    const [list, setList] = useState(['step1', 'step2', 'step3', 'step4']);
    const [name, setName] = useState('learn alita');
    const delay = () => new Promise(resolve => {
        setTimeout(resolve, 1000);
    })
    const deleteItem = async item => {
        await delay()
        list.splice(list.findIndex(e => e === item), 1)
        setList([...list])
    }
    return (
        <div>
            <h1 style={{ color: "white" }}>{name}</h1>
            <Button type="primary" onClick={() => {
                setName('alita 入门教程')
            }}>Click Me!</Button>
            <Link to="/">Go to index page</Link>
            <ul>{list.map(i => (<li key={i}><Button onClick={() => {
                deleteItem(i)
            }}>删除{i} </Button></li>))}</ul>
        </div>
    )
}
```

访问 [http://localhost:8000/#/useState](http://localhost:8000/#/useState)，你会看到一个和首页一样逻辑的页面。但是从代码中你可以看到，我们的写法都是不一样的。

到这里，我们就将 setState 的概念讲解完毕了，你很容易发现，在 react hooks 中就一行代码的逻辑，在 dva 中却需要跨越两个文件写比较多的模版代码。这也是我们现在不推荐在项目中重度使用 dva 的主要原因。

由于 react hooks 无法在 组件之外使用，因此我们依旧需要保留 dva 用作一些全局的数据管理和在一些组件之外操作数据的场景。

### useEffect

在 dva 中也有一个同名的概念 effects，之所以没有拿它和 useEffect 类比，是因为他们不太像是一个东西，放在一起反而容易混乱。比起 effects，useEffect 更像 dva 中的 [subscription](https://dvajs.com/guide/concepts.html#subscription)。你会发现在前面的概念和实战中，我们都没有提到这个概念。因为在实际的项目中，我们发现使用 useEffect 会比 subscription 逻辑更加清晰。如果你对 subscription 感兴趣，你可以查看 [dva 的文档](https://dvajs.com/guide/concepts.html#subscription)了解更多。

useEffect 接收一个包含命令式、且可能有副作用代码的函数。

```js
useEffect(didUpdate);
```

当 useEffect 只接收一个函数时，表示函数在每一次页面渲染完成之后调用。

在项目中我们常用的方法是当达成某一个条件之后，再执行某个函数这样的逻辑。因此我们在第二参数传入一个数组，数组里面是我们期望这些值变化的时候，触发函数调用。

比如，当 name 值发生变化时调用：

```js
import { useState, useEffect } from 'react';

const [name, setName] = useState('learn alita');
useEffect(() => {
  console.log('name value change!');
}, [name])
```

> 注意：name 值发生变化的时机包括 name 的初始化数据。即此时的 useEffect 的函数至少会被调用一次。

当你希望页面初始化的时候，调用 effect 时，你可以在第二参数传入一个空数组（[]）。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。

```js
import { useState, useEffect } from 'react';

useEffect(() => {
  console.log('page init');
}, [])
```

当你需要在组件中绑定监听或者定时器时，你也可以在此时机中执行。但是请一定要记得在组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，只需要在 effect 函数中，返回清除函数即可。

比如，清除计时器 ID：

```js
import { useState, useEffect } from 'react';

useEffect(() => {
  console.log('page init');
  const timekey = setInterval(() => {
    console.log('每秒调用一次');
  }, 1000);
  return () => {
    // 清除
    clearInterval(timekey);
  };
}, [])
```

比如，清除订阅：

```js
import { useState, useEffect } from 'react';

useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```

### 开发技巧

一般情况下 name 都是能取到最新的值的，但如果你是在一个比较复杂的环境中使用它，并且你无法保证它一定是最新值的时候，在使用 setName 的时候，可以使用函数式的设置方式，如 setName(name=>name+1) 该用法会先接收最新的值，可以让他脱离外层的引用，这在 useEffect 回调中频繁修改数值的时候，会非常好用。
比如，我们每秒修改一次数值：

```js
import { useState, useEffect } from 'react';

const [count, setCount] = useState(0);
useEffect(() => {
  console.log('page init');
  const timekey = setInterval(() => {
    console.log('每秒调用一次');
    setCount(count=>count+1);
  }, 1000);
  return () => {
    // 清除
    clearInterval(timekey);
  };
}, [])
```

#### 整理

新建文件 `src/pages/useState/index.js`

```js
import { useState, useEffect } from 'react';
import { Button } from 'antd-mobile';

export default function List({ history }) {
    const [name, setName] = useState('learn alita');
    const [effect, setEffect] = useState('no');
    const [count, setCount] = useState(0);

    useEffect(() => {
        setEffect(name === 'alita 入门教程' ? 'yes' : 'no')
    }, [name])
    useEffect(() => {
        console.log('page init');
        const timekey = setInterval(() => {
            console.log('每秒调用一次');
            setCount(count => count + 1);
        }, 1000);
        return () => {
            // 清除
            clearInterval(timekey);
        };
    }, [])
    return (
        <div>
            <h1 style={{ color: "white" }}>count:{count}</h1>
            <h1 style={{ color: "white" }}>{name}</h1>
            <h1 style={{ color: "white" }}>name change:{effect}</h1>
            <Button type="primary" onClick={() => {
                setName('alita 入门教程')
            }}>Click Me!</Button>
        </div>
    )
}
```

### 总结

在开发中我们最常用的 react 官方 hooks 就是 useState 和 useEffect。对于官方的其他 hooks，对我们的开发也有很大的帮助，当你熟练掌握 useState 和 useEffect 之后，你应该去官网全面的学习全部的 [react hooks](https://zh-hans.reactjs.org/docs/hooks-reference.html)。

到目前位置，我们详细的讲解了我们在项目中会使用到的 dva 数据流和页面级的 hooks 数据流。熟练的掌握这些概念，会够大幅度的提升你的开发体验。因为不管再复杂的页面，都可以拆成这样一传一传的数据流。可以说掌握这些概念，就已经可以让你很好的编写前端逻辑了。但是在真实的项目中，我们仅编写前端逻辑，显然是不够的。我们还会涉及到和服务端做数据交互的过程。我们将会在接下来的几节课中介绍在 alita 中如何发起请求，以及开发过程中常遇到的问题和内置的解决方案。
