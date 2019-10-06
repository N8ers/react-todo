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
                {todoItem: 'throw rocks', completed: true, id: '2'}, 
                {todoItem: 'eat garbage', completed: false, id: '3'},
                {todoItem: 'walk dog', completed: false, id: '4'}, 
                {todoItem: 'throw rocks', completed: true, id: '5'}, 
                {todoItem: 'eat garbage', completed: false, id: '6'},
                {todoItem: 'walk dog', completed: false, id: '7'}, 
                {todoItem: 'throw rocks', completed: true, id: '8'}, 
                {todoItem: 'eat garbage', completed: false, id: '9'},
                {todoItem: 'walk dog', completed: false, id: '10'}, 
                {todoItem: 'throw rocks', completed: true, id: '12'}, 
                {todoItem: 'eat garbage', completed: false, id: '13'},
                {todoItem: 'walk dog', completed: false, id: '14'}, 
                {todoItem: 'throw rocks', completed: true, id: '15'}, 
                {todoItem: 'eat garbage', completed: false, id: '17'},
            ],
        }
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleCompletionStatus = this.toggleCompletionStatus.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    removeTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleCompletionStatus(id){
        const updateStatus = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })
        this.setState({todos: updateStatus})
    }

    editTodo(id, editedTodoItem) {
        const updateItem = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, todoItem: editedTodoItem}
            } 
            return todo;
        })
        this.setState({todos: updateItem})
    }

    addTodo(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){
        return (
        <div className="ToDoContainer">
            <ul className="ToDos">
                {
                    this.state.todos.map((todo) => 
                        <ToDo 
                            id={todo.id} 
                            item={todo.todoItem} 
                            remove={this.removeTodo}
                            edit={this.editTodo}
                            toggleStatus={this.toggleCompletionStatus}
                            key={todo.id}
                            status={todo.completed}
                    />)
                }
            </ul>
            <br />
            <AddToDo className="addTodo" addNewTodo={this.addTodo} />
        </div>
        );
    }
}

export default ToDoContainer;
