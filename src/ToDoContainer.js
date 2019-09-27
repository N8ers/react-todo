import React, {Component} from 'react';
import ToDo from './ToDo';
import './App.css';

class ToDoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: ['walk dog', 'throw rocks', 'eat garbage']
        }
    }

    removeTodo(){
        alert('yo yo yo')
        this.setState = {
            // we'll filter the todos once, the ToDo take the function
            todos: this.state.todos
        }
    }

    handleClick(){
        this.removeTodo()
    }

    render(){
        return (
        <div className="App">
            <ul>
                {
                    this.state.todos.map((todo) => <ToDo item={todo} />)
                }
            </ul>
        </div>
        );
    }
}

export default ToDoContainer;
