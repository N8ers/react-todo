import React, {Component} from 'react';

class AddToDo extends Component {

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(e){
        let newItem = document.getElementById('newItem').value
        this.props.add(newItem)
        document.getElementById('newItem').value = ''
    }

    render() {
        return(
            <div>
                <input id="newItem" type="text" name="newToDo" />
                <button onClick={this.handleAdd}>+</button>
            </div>
        )
    }
}

export default AddToDo;
