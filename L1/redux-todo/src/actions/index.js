import request from '../util/request';

let id = 0;
let noteid = 0;

const addTodoStarted = () => {
  return {
    type: 'ADD_TODO_STARTED',
  };
};

const addTodoSuccess = (text) => {
  return {
    id: id++,
    type: 'ADD_TODO_SUCCESS',
    text,
  };
};

const addTodoFailure = (error) => {
  return {
    type: 'ADD_TODO_FAILURE',
    payload: {
      error,
    },
  };
};

export const addNote = (text) => {
  return {
    id: noteid++,
    type: 'ADD_NOTE',
    text,
  };
};

export const addTodo = (text) => {
  return (dispatch) => {
    dispatch(addTodoStarted());
    return request.postTodos(text)
      .then((res) => {
        dispatch(addTodoSuccess(res));
      })
      .catch((error) => {
        dispatch(addTodoFailure(error));
      });
  };
};
