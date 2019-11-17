const todoListReducer = (state = { login: false }, action) => {
  switch (action.type) {

    case 'FETCH_TODOS':
      console.log('yo!')
      return action.payload

    // case 'ADD_TODO':
    //   console.log("ADD_TODO: ", action.payload)
    //   return state;

    // case 'DELETE_TODO':
    //   console.log('DELETE_TODO')
    //   return { todos: state.todos.filter(todo => todo.id !== action.id) }

    // case 'TOGGLE_TODO':
    //   let newState = state.todos.map(x => {
    //     if (x.id === action.id) {
    //       console.log(x.todoItem)
    //       return { ...x, completed: !x.completed }
    //     }
    //     else {
    //       return x
    //     }
    //   })
    //   return { todos: newState }

    // case 'EDIT_TODO':
    //   let editedState = state.todos.map(x => {
    //     if (x.id === action.todo.id) {
    //       return { ...x, todoItem: action.todo.editedTodo }
    //     } else {
    //       return x
    //     }
    //   })
    //   return { todos: editedState }

    default:
      return state;
  }
}

export default todoListReducer