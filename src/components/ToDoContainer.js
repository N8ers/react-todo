import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import { connect } from 'react-redux';
import '../styles/ToDoContainer.css'
import { deleteItem } from '../store/actions/deleteAction';
import { addItem } from '../store/actions/addTodoAction';
import { toggleItem } from '../store/actions/toggleTodoAction';
import { editItem } from '../store/actions/editTodoAction';
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

    render() {

        const { todoList } = this.props;

        return (
            <div className="ToDoContainer">

                <ul className="ToDos">
                    {
                        todoList.todos.map((todo) =>
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
        todoList: state.todoList
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteItem: deleteItem,
        addItem: addItem,
        toggleItem: toggleItem,
        editItem: editItem
    }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(ToDoContainer);
