import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import { connect } from 'react-redux';
import '../styles/ToDoContainer.css'
import { deleteItem } from '../store/actions/deleteAction';
import { bindActionCreators } from 'redux';

class ToDoContainer extends Component {

    constructor(props) {
        super(props)
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleCompletionStatus = this.toggleCompletionStatus.bind(this)
        this.editTodo = this.editTodo.bind(this)
    }

    removeTodo(id) {
        // this.setState({
        //     todos: this.state.todos.filter(todo => todo.id !== id)
        // })

        this.props.deleteItem(id)

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

        const { storeTodoList } = this.props;

        return (
            <div className="ToDoContainer">

                <ul className="ToDos">
                    {
                        storeTodoList.todos.map((todo) =>
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

const mapStateToProps = (state) => {
    return {
        storeTodoList: state.StoreToDos
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteItem: deleteItem
    }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(ToDoContainer);
