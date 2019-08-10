/**
 * 纯函数   state的修改计划
 */
import TodoList from 'BizAction/TodoList';

const { ActionType } = TodoList;
 // 默认数据
const defaultState = {
  inputValue: '',
  list: [1, 2, 3],
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {

    case ActionType.CHANGE_INPUT_VALUE:

      newState.inputValue = action.payload;
      return newState;

    case ActionType.ADD_TODO:
      newState.list.push(state.inputValue);
      newState.inputValue = '';
      return newState;
    case ActionType.DEL_TODO:
      newState.list.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
};
