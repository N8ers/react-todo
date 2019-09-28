import React, {Component} from 'react';
import ToDoContainer from './ToDoContainer';
import AddToDo from './AddToDo';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>todo</h1>
        <ToDoContainer />
        <AddToDo />
      </div>
    );
  }
}

export default App;
