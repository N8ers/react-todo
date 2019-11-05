// Action Creator
export const deleteItem = (id) => {

  // Action (type & payload)
  return {
    type: 'DELETE_ITEM',
    id: id
  }
}

