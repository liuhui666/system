/**
 * 纯函数   state的修改计划
 */

 // 默认数据
 const defaultState = {
   inputValue: '',
   list: [1, 2, 3],
 };

 export default (state = defaultState, action) => {
   const newState = JSON.parse(JSON.stringify(state));
   switch (action.type) {
     case 'change_input_value':
       newState.inputValue = action.payload;
       return newState;

     case 'add_todo':
       newState.list.push(state.inputValue);
       newState.inputValue = '';
       return newState;
     case 'del_todo':
       newState.list.splice(action.payload, 1);
       return newState;
     default:
       return state;
   }
 };
