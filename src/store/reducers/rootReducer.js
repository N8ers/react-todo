import { combineReducers } from 'redux';
import fetchToDoListReducer from './fetchToDoListReducer';

const rootReducer = combineReducers({
  StoreToDos: fetchToDoListReducer
})

export default rootReducer;