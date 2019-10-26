import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import './ToDoContainer.css'

class ToDoContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { todoItem: 'walk dog', completed: false, id: '1' },
                { todoItem: 'collect rocks', completed: true, id: '2' },
                { todoItem: 'eat vegetables', completed: false, id: '3' },
            ],
        }
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleCompletionStatus = this.toggleCompletionStatus.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleCompletionStatus(id) {
        const updateStatus = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        this.setState({ todos: updateStatus })
    }

    editTodo(id, editedTodoItem) {
        const updateItem = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoItem: editedTodoItem }
            }
            return todo;
        })
        this.setState({ todos: updateItem })
    }

    addTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {
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
