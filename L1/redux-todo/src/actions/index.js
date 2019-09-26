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
    type: 'ADD_TODO',
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
    setTimeout(() => {
      try {
        if (Math.random() * 10 < 5) throw new Error('something broke');
        dispatch(addTodoSuccess(text));
      } catch (error) {
        dispatch(addTodoFailure(error));
      }
    }, Math.random() * 1000);
  };
};
