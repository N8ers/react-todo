import React, {Component} from 'react';

class AddToDo extends Component {

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        alert('clicked')
    }

    render() {
        return(
            <div>
                <p>Add a todo!</p>
                <input type="text" />
                <button onClick={this.handleAdd}>+</button>
            </div>
        )
    }
}

export default AddToDo;
