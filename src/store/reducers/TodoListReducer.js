const initState = {
  todos: [
    { todoItem: 'REDUX walk dog', completed: false, id: '1' },
    { todoItem: 'REDUX collect rocks', completed: true, id: '2' },
    { todoItem: 'REDUX eat vegetables', completed: false, id: '3' },
  ]
}

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.newTodo] };
    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.id) }
    case 'TOGGLE_TODO':
      let newState = state.todos.map(x => {
        if (x.id === action.id) {
          console.log(x.todoItem)
          return { ...x, completed: !x.completed }
        }
        else {
          return x
        }
      })
      return { todos: newState }

    default:
      return state;
  }
}

export default todoListReducer