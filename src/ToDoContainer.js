import React, {Component} from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import './ToDoContainer.css'

class ToDoContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos: ['walk dog', 'throw rocks', 'eat garbage'],
        }
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    removeTodo(todo){
        this.setState(st => ({
            todos: st.todos.filter(t => t !== todo)
        }))
    }

    addTodo(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){
        return (
        <div className="ToDoContainer">
            <ul>
                {
                    this.state.todos.map((todo) => 
                        <ToDo item={todo} remove={this.removeTodo}
                    />)
                }
            </ul>
            <AddToDo add={this.addTodo} value={this.emptyValue} />
        </div>
        );
    }
}

export default ToDoContainer;
