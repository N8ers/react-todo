// Action Creator
export const editItem = (todo) => {

  // Action (type & payload)
  return {
    type: 'EDIT_TODO',
    todo: todo
  }
}
