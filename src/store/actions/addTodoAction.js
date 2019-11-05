// Action Creator
export const addItem = (newTodo) => {

  // Action (type & payload)
  return {
    type: 'ADD_TODO',
    newTodo: newTodo
  }
}