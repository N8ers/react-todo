import { combineReducers } from 'redux';
import todos from './TodoListReducer';

const rootReducer = combineReducers({
  todoList: todos
})

export default rootReducer;