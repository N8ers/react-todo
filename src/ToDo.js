import React, {Component} from 'react';
import './ToDo.css'

class ToDo extends Component {
    
    constructor(props){
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleRemove(e) {
        this.props.remove(this.props.item)
    }

    render() {
        return(
            <div className="ToDoItem">
                <span className="ToDoContent">{this.props.item}</span>
                <button className="ToDoX" onClick={this.handleRemove}>x</button>
            </div>
        )
    }
}

export default ToDo;
