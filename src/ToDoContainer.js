import React, {Component} from 'react';
import ToDo from './ToDo';
import './App.css';

class ToDoContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos: ['walk dog', 'throw rocks', 'eat garbage'],
        }
        this.removeTodo = this.removeTodo.bind(this)
    }

    removeTodo(todo){
        this.setState(st => ({
            todos: st.todos.filter(t => t !== todo)
        }))
    }


    render(){
        return (
        <div className="App">
            <ul>
                {
                    this.state.todos.map((todo) => 
                        <ToDo item={todo} remove={this.removeTodo}
                    />)
                }
            </ul>
        </div>
        );
    }
}

export default ToDoContainer;
