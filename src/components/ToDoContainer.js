import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import { connect } from 'react-redux';
import '../styles/ToDoContainer.css';
import _ from 'lodash';
import { deleteItem } from '../store/actions/deleteAction';
import { addItem } from '../store/actions/addTodoAction';
import { toggleItem } from '../store/actions/toggleTodoAction';
import { editItem } from '../store/actions/editTodoAction';
import { fetchItems } from '../store/actions/fetchAction';

class ToDoContainer extends Component {

    constructor(props) {
        super(props)
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleCompletionStatus = this.toggleCompletionStatus.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.renderTodos = this.renderTodos.bind(this)
    }

    componentDidMount() {
        this.props.fetchItems()
    }

    removeTodo(id) {
        this.props.deleteItem(id)
    }

    toggleCompletionStatus(id) {
        this.props.toggleItem(id)
    }

    editTodo(todo) {
        this.props.editItem(todo)
    }

    addTodo(newTodo) {
        this.props.addItem(newTodo)
    }

    renderTodos() {
        const { todos } = this.props

        return _.map(todos, (todo, key) => {
            return (
                <ToDo
                    key={key}
                    id={todo.id}
                    item={todo.todoItem}
                    remove={this.removeTodo}
                    edit={this.editTodo}
                    toggleStatus={this.toggleCompletionStatus}
                    status={todo.completed}
                />
            )
        })
    }

    render() {
        return (
            <div className="ToDoContainer">
                <ul className="ToDos">
                    {this.renderTodos()}
                </ul>
                <br />
                <AddToDo className="addTodo" addTodo={this.addTodo} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps,
    { deleteItem, addItem, toggleItem, editItem, fetchItems })(ToDoContainer);
