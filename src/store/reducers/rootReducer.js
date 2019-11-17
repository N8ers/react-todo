import { combineReducers } from 'redux';
import todos from './TodoListReducer';
import toggleLoginModal from './LoginModalReducer';

const rootReducer = combineReducers({
  todos: todos,
  loginModal: toggleLoginModal
})

export default rootReducer;