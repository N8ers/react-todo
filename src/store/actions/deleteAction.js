import { db } from '../../config/fbConfig';

// Action Creator
export const deleteItem = (id) => {
  return dispatch => db.child(id).remove()
}
