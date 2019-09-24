import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoList from './TodoList';

const App = ({ dispatch }) => {
  const [todoInput, setTodoInput] = useState('');
  // const [noteInput, setNoteInput] = useState('');

  function handleSubmitTodo(e) {
    e.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput('');
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
        <input type='text' name='todo' onChange={handleTodoInputChange} value={todoInput} />
        <button type='submit' onClick={handleSubmitTodo}>Add TODO</button>
      </form>
      { /* Probably better to build a generic list component
         here, call mapStateToProps in this component and pass in props normally */}
      <TodoList />
    </>
  );
};

export default connect()(App);
