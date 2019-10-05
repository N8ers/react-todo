import React, {Component} from 'react';
import uuid from 'uuid/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons'

import './AddToDo.css'

class AddToDo extends Component {

    constructor(props){
        super(props)
        this.state = {
            todoItem: '',
            inputVisible: false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.showInput = this.showInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleAdd(e){
        e.preventDefault()
        
        if(this.state.todoItem.length < 1){
            this.showInput()
        } else {
            this.props.addNewTodo({...this.state, id: uuid(), completed: false})
            this.setState({ todoItem: '' })
        }
    }

    showInput(){
        this.setState({
            inputVisible: !this.state.inputVisible
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.inputVisible && 
                    <form onSubmit={this.handleAdd}>
                        <input 
                            type="text" 
                            name="todoItem"
                            id="todoItem" 
                            value={this.state.todoItem}
                            onChange={this.handleChange}
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
