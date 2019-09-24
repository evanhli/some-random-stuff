import { combineReducers } from 'redux';
import todos from './todos';
import notes from './notes';

export default combineReducers({
  notes,
  todos,
});
