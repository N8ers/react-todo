import { combineReducers } from 'redux';
import todos from './TodoListReducer';

const rootReducer = combineReducers({
  todos: todos
})

export default rootReducer;