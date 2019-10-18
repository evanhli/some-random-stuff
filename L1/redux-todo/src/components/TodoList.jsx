import React from 'react';
import { uniqueId } from 'lodash';

const TodoList = ({ todos, status }) => {
  return (
    <ul aria-label='todo-list'>
      { status === 'error' ? <div aria-label='error-add'>ERROR</div> : null}
      { status === 'pending' ? <div aria-label='pending-add'>LOADING</div> : null}
      {
        Array.isArray(todos) ? todos.map((todo) => {
          return <li aria-label='todo-item' key={uniqueId()}>{todo}</li>;
        }) : null
      }
    </ul>
  );
};

export default TodoList;
