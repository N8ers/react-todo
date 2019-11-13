import { db } from '../../config/fbConfig';

// Action Creator
export const editItem = (todoKey, editedTodo) => {
  return dispatch => db.child(todoKey).update({ 'todoItem': editedTodo })
}
