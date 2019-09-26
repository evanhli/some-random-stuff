const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const oldTodos = state.list || [];
      return {
        ...state,
        list: [...oldTodos, {
          id: action.id,
          type: action.type,
          text: action.text,
        }],
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
