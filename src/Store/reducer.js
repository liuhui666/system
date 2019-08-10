/**
 * 纯函数   state的修改计划
 */

 // 默认数据
 const defaultState = {
   inputValue: '',
   list: [],
 };

 export default (state = defaultState, action) => {
   switch (action.type) {
     case 'add':
       return Object.assign({}, state, action.payload);
     default:
       return state;
   }
 };
