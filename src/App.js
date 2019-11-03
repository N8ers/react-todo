import React, { Component } from 'react';
import ToDoContainer from './components/ToDoContainer';
import ToDoHeader from './components/ToDoHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoHeader />
        <ToDoContainer />
      </div>
    );
  }
}

export default App;
