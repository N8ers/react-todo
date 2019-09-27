import React, {Component} from 'react';
import ToDoContainer from './ToDoContainer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>todo</h1>
        <ToDoContainer />
      </div>
    );
  }
}

export default App;
