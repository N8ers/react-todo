import React, {Component} from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import './ToDoContainer.css'

class ToDoContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos: [
                {todoItem: 'walk dog', completed: false, id: '1'}, 
                {todoItem: 'throw rocks', completed: false, id: '2'}, 
                {todoItem: 'eat garbage', completed: false, id: '3'}
            ],
        }
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
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
                        <ToDo id={todo.id} item={todo.todoItem} remove={this.removeTodo}
                    />)
                }
            </ul>
            <AddToDo add={this.addTodo} value={this.emptyValue} />
        </div>
        );
    }
}

export default ToDoContainer;
