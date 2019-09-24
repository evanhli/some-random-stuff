import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return { todos: state.todos };
}

const TodoList = ({ todos }) => {
  return (
    <ul>
      {
        todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })
      }
    </ul>
  );
};

export default connect(mapStateToProps)(TodoList);
