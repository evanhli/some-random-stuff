let id = 0;
let noteid = 0;

export const addTodo = (text) => {
  return {
    id: id++,
    type: 'ADD_TODO',
    text,
  };
};

export const addNote = (text) => {
  return {
    id: noteid++,
    type: 'ADD_NOTE',
    text,
  };
};

export const toggleTodo = (text) => {
  return {
    type: 'TOGGLE_TODO',
    text,
  };
};
