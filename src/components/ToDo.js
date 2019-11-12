import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import '../styles/ToDo.css'

class ToDo extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            editMode: false,
        })

        this.handleRemove = this.handleRemove.bind(this)
        this.handleToggleEdit = this.handleToggleEdit.bind(this)
        this.handleSaveEdit = this.handleSaveEdit.bind(this)
        this.handleCompletion = this.handleCompletion.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.newTodo = ''
    }

    handleRemove() {
        this.props.remove(this.props.todoKey)
    }

    handleToggleEdit() {
        this.setState({ editMode: !this.state.editMode })
    }

    handleCompletion() {
        this.props.toggleStatus(this.props.id)
    }

    handleChange(e) {
        this.newTodo = ({
            [e.target.name]: e.target.value
        })
    }

    handleSaveEdit(e) {
        e.preventDefault()

        if (this.props.item < 1) {
            alert("Hey! That was empty!")
        } else {
            let eTodo = this.newTodo.todo;
            let editedTodo = { editedTodo: eTodo, id: this.props.id }
            this.props.edit(editedTodo)
        }

        this.handleToggleEdit()
    }

    render() {
        if (this.state.editMode === false) {
            return (
                <div className="ToDoItem">
                    <span>
                        <input type="checkbox" onChange={this.handleCompletion} checked={this.props.status} />
                        <span className="ToDoContent">{this.props.item}</span>
                    </span>
                    <span className="todoBtns">
                        <button className="ToDoEdit" onClick={this.handleToggleEdit}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="ToDoX" onClick={this.handleRemove}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </span>
                </div>
            )
        } else {
            return (
                <form className="ToDoItem" onSubmit={this.handleSaveEdit}>
                    <input
                        className="ToDoContent"
                        placeholder={this.props.item}
                        name='todo'
                        onChange={this.handleChange}
                    />
                    <span className="todoBtns">
                        <button className="ToDoEditSave">save</button>
                        <button
                            className="ToDoX"
                            onClick={this.props.remove}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </span>
                </form>
            )
        }

    }
}

export default ToDo;
