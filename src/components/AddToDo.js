import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons'

import '../styles/AddToDo.css'

class AddToDo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoItem: '',
            inputVisible: false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.showInput = this.showInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e) {
        e.preventDefault()

        if (this.state.todoItem.length < 1) {
            this.showInput()
        } else {
            let newTodoData = {
                todoItem: this.state.todoItem,
                id: uuid(),
                completed: false
            }
            this.props.addTodo(newTodoData)
            this.setState({ todoItem: '' })
        }
    }

    showInput() {
        this.setState({
            inputVisible: !this.state.inputVisible
        })
    }

    render() {
        return (
            <div className="addTodoForm">
                {
                    this.state.inputVisible &&
                    <form onSubmit={this.handleAdd}>
                        <input
                            type="text"
                            name="todoItem"
                            id="todoItem"
                            value={this.state.todoItem}
                            onChange={this.handleChange}
                            placeholder="Add a to do..."
                        />
                        <br />
                        <button className="pushBtn">
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                    </form>
                }

                {
                    !this.state.inputVisible &&
                    <div>
                        <br />
                        <button className="addBtn" onClick={this.showInput}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default AddToDo;
