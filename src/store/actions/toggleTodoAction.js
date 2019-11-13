import { db } from '../../config/fbConfig';

// Action Creator
export const toggleItem = (todoKey, status) => {
  return dispatch => db.child(todoKey).update({ 'completed': !status })
}
