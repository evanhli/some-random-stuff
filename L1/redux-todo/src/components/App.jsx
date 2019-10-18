import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import TodoList from './TodoList';


function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (todo) => dispatch(addTodo(todo)),
  };
}

function mapStateToProps(state) {
  return { todos: state.todos.list, status: state.todos.status };
}

const App = ({ onAddTodo, todos, status }) => {
  const [todoInput, setTodoInput] = useState('');

  function handleSubmitTodo(e) {
    e.preventDefault();
    if (todoInput) {
      onAddTodo(todoInput);
      setTodoInput('');
    }
  }

  function handleTodoInputChange(e) {
    setTodoInput(e.target.value);
  }

  return (
    <>
      <form action=''>
        <input type='text' aria-label='todo-input' name='todo' onChange={handleTodoInputChange} value={todoInput} />
        <button type='submit' onClick={handleSubmitTodo}>Add TODO</button>
      </form>
      <TodoList todos={todos} status={status} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
