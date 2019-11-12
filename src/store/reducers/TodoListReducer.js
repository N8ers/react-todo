// cool playlist https://www.youtube.com/watch?v=tgEpOpaVr0Q

// const firebase = require("firebase");
// require("firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyAV2mB1qx9mtC6RNN0ER4wCd_VVZF2Z9Bw",
//   authDomain: "react-todo-sheryak.firebaseapp.com",
//   databaseURL: "https://react-todo-sheryak.firebaseio.com",
//   projectId: "react-todo-sheryak",
//   storageBucket: "react-todo-sheryak.appspot.com",
//   messagingSenderId: "877856213045",
//   appId: "1:877856213045:web:795b53164bbeb34799097c"
// };

// firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore()
// db.settings({ timestampsInSnapshots: true })

const todoListReducer = (state = {}, action) => {
  switch (action.type) {

    case 'FETCH_TODOS':
      return action.payload

    case 'ADD_TODO':
      console.log("ADD_TODO: ", action.payload)
      return state;

    case 'DELETE_TODO':
      console.log('DELETE_TODO')
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

    case 'EDIT_TODO':
      let editedState = state.todos.map(x => {
        if (x.id === action.todo.id) {
          return { ...x, todoItem: action.todo.editedTodo }
        } else {
          return x
        }
      })
      return { todos: editedState }

    default:
      return state;
  }
}

export default todoListReducer