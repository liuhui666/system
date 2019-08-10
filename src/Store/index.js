/**
 * 创建store并导出去,接受reducer(纯函数)  共用数据存储
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const store = createStore(reducer,
  applyMiddleware(thunk)
  );

export default store;
