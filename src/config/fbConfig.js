import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAV2mB1qx9mtC6RNN0ER4wCd_VVZF2Z9Bw",
  authDomain: "react-todo-sheryak.firebaseapp.com",
  databaseURL: "https://react-todo-sheryak.firebaseio.com",
  projectId: "react-todo-sheryak",
  storageBucket: "react-todo-sheryak.appspot.com",
  messagingSenderId: "877856213045",
  appId: "1:877856213045:web:795b53164bbeb34799097c"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database().ref('/todos')