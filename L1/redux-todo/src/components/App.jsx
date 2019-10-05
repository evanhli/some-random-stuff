import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import TodoList from './TodoList';


function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (todo) => dispatch(addTodo(todo)),
  };
}

const App = ({ onAddTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  // const [noteInput, setNoteInput] = useState('');

  // Suboptimal solution without thunk
  // Problems with multiple clicks and bad state organization
  // Also a lot of logic within the UI should be handlerd in the action creator instead
  // function handleSubmitTodo(e) {
  //   e.preventDefault();
  //   dispatch(requestSubmitTodo(todoInput));
  //   setTimeout(() => {
  //     dispatch(addTodo(todoInput));
  //     setTodoInput('');
  //   }, Math.random() * 1000);
  // }

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

  // function handleSubmitNote(e) {
  //   e.preventDefault();
  //   dispatch(addNote(noteInput));
  //   setNoteInput('');
  // }

  // function handleNoteInputChange(e) {
  //   setNoteInput(e.target.value);
  // }

  return (
    <>
      <form action=''>
        <input type='text' aria-label='todo-input' name='todo' onChange={handleTodoInputChange} value={todoInput} />
        <button type='submit' onClick={handleSubmitTodo}>Add TODO</button>
      </form>
      { /* Probably better to build a generic list component
         here, call mapStateToProps in this component and pass in props normally */}
      <TodoList />
    </>
  );
};

export default connect(null, mapDispatchToProps)(App);
