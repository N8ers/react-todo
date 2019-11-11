import { db } from '../../config/fbConfig';

// Action Creator
export function fetchItems() {

  // Action (type & payload)
  return dispatch => {
    db.on('value', snapshot => {
      dispatch({
        type: 'FETCH_TODOS',
        payload: snapshot.val()
      })
    })
  }
}

