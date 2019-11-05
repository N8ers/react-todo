// Action Creator
export const toggleItem = (id) => {

  // Action (type & payload)
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}