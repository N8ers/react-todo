import React, {Component} from 'react';

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
            <div>
                <span>{this.props.item}</span>
                <button onClick={this.handleRemove}>x</button>
            </div>
        )
    }
}

export default ToDo;
