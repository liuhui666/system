import createAction from '../createAction';

const ActionType = {
  CHANGE_INPUT_VALUE: Symbol('CHANGE_INPUT_VALUE'),
  ADD_TODO: Symbol('ADD_TODO'),
  DEL_TODO: Symbol('DEL_TODO'),
};

// 根据actionType生成action
const changeInputValue = createAction(ActionType.CHANGE_INPUT_VALUE);
const addTodo = createAction(ActionType.ADD_TODO);
const delTodo = createAction(ActionType.DEL_TODO);

const changeInput = (dispatch) => {
dispatch(changeInputValue)
};
const add = () => {

};

cosnt del=()=>{

}

export default {
  changeInput,
  add,
  del,
};
