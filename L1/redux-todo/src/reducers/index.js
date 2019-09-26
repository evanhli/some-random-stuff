import { combineReducers } from 'redux';
import todos from './todos';
import notes from './notes';

export default combineReducers({
  notes,
  // Obvious but i missed it the first time, name of key in state is just name of key i set here
  todos,
});
