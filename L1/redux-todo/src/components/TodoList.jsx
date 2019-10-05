import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return { todos: state.todos.list, status: state.todos.status };
}

const TodoList = ({ todos, status }) => {
  return (
    <ul aria-label='todo-list'>
      { status === 'error' ? <div>ERROR</div> : null}
      { status === 'pending' ? <div>LOADING</div> : null}
      {
        Array.isArray(todos) ? todos.map((todo) => {
          return <li aria-label='todo-item' key={todo.id}>{todo.text}</li>;
        }) : null
      }
    </ul>
  );
};

export default connect(mapStateToProps)(TodoList);
