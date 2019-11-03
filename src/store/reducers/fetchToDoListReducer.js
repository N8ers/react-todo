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
    default:
      return state;
  }
}

export default fetchToDoListReducer