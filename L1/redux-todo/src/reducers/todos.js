const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS': {
      const oldTodos = state.list || [];
      return {
        ...state,
        list: [...oldTodos,
          action.text
        ],
        status: 'added',
      };
    }
    case 'ADD_TODO_STARTED': {
      return {
        ...state,
        status: 'pending',
      };
    }
    case 'ADD_TODO_FAILURE': {
      return {
        ...state,
        status: 'error',
      };
    }
    default:
      return state;
  }
};

export default todos;
