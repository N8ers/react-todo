import { combineReducers } from 'redux';
import todos from './TodoListReducer';
import toggleLoginModal from './LoginModalReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  todos: todos,
  loginModal: toggleLoginModal,
  firebase: firebaseReducer
})

export default rootReducer;