// Action Creator
export const deleteItem = (id) => {

  // Action (type & payload)
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

