import createAction from '../createAction';

const ActionType = {
  CHANGE_INPUT_VALUE: 'CHANGE_INPUT_VALUE',
  ADD_TODO: 'ADD_TODO',
  DEL_TODO: 'DEL_TODO',
};

// 根据actionType生成action
const changeInputValue = createAction(ActionType.CHANGE_INPUT_VALUE);
const addTodo = createAction(ActionType.ADD_TODO);
const delTodo = createAction(ActionType.DEL_TODO);

const inputChange = value => (dispatch) => {
  dispatch(changeInputValue(value));
};

const add = () => (dispatch) => {
  dispatch(addTodo());
};

const del = () => (dispatch) => {
  dispatch(delTodo(delTodo));
};

export default {
  ActionType,
  inputChange,
  add,
  del,
};
