const initState = {
  todos: [
    { todoItem: 'REDUX walk dog', completed: false, id: '1' },
    { todoItem: 'REDUX collect rocks', completed: true, id: '2' },
    { todoItem: 'REDUX eat vegetables', completed: false, id: '3' },
  ]
}

const fetchToDoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      console.log('fetch todos', action.todo)
      return state;
    case 'DELETE_ITEM':
      console.log('delete id!:', action.id, action.type)
      console.log("Action: ", action)
      return { todos: state.todos.filter(todo => todo.id !== action.id) }
    // return { todos: [...state.todos, { todoItem: 'REDUX', completed: false, id: '4' }] }
    default:
      return state;
  }
}

export default fetchToDoListReducer