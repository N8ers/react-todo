import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import '../styles/ToDo.css'

class ToDo extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            editMode: false,
            todo: this.props.item,
        })
        this.handleRemove = this.handleRemove.bind(this)
        this.handleToggleEdit = this.handleToggleEdit.bind(this)
        this.handleSaveEdit = this.handleSaveEdit.bind(this)
        this.handleCompletion = this.handleCompletion.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleRemove() {
        this.props.remove(this.props.id)
    }

    handleToggleEdit() {
        this.setState({ editMode: !this.state.editMode })
    }

    handleCompletion() {
        this.props.toggleStatus(this.props.id)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log('handleChange: ', this.state.todo)
    }

    handleSaveEdit(e) {
        e.preventDefault()

        if (this.state.todo.length < 1) {
            alert("Hey! That was empty!")
        } else {
            this.props.edit(this.props.id, this.state.todo)
        }

        this.handleToggleEdit()
    }

    render() {
        if (this.state.editMode === false) {
            return (
                <div className="ToDoItem">
                    <span>
                        <input type="checkbox" onClick={this.handleCompletion} checked={this.props.status} />
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
                        value={this.state.todo}
                        name='todo'
                        onChange={this.handleChange}
                    />
                    <span className="todoBtns">
                        <button className="ToDoEditSave">save</button>
                        <button
                            className="ToDoX"
                            onClick={this.handleRemove}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                    </span>
                </form>
            )
        }

    }
}

export default ToDo;
