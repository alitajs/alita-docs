# @alitajs/dva

需配合 `@umijs/plugin-dva`， `umi dva` 插件的类型补充。

## 启用方式

配置开启。

## 定义方式

### model

```ts
import { Effect, Reducer } from 'umi';

export interface IndexModelState {
  name: string;
}

export interface IndexModelType {
  namespace: 'index';
  state: IndexModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'index',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default IndexModel;
```

### page

```ts
import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';

interface PageProps extends ConnectProps {
  index: IndexModelState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;
  return <div>Hello {name}</div>;
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
```
