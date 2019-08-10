/**
 * 创建store并导出去,接受reducer(纯函数)  共用数据存储
 */
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
