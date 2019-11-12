import { db } from '../../config/fbConfig';

// Action Creator
export const addItem = (newTodo) => {
  return dispatch => db.push(newTodo)
}
