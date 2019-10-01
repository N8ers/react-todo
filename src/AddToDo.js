import React, {Component} from 'react';
import './AddToDo.css'

class AddToDo extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputVisible: false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.showInput = this.showInput.bind(this)
    }

    handleAdd(e){
        let newItem = document.getElementById('newItem').value
        
        if(newItem.length < 1){
            this.showInput()
        } else {
            this.props.add(newItem)
            document.getElementById('newItem').value = ''
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
                    <div>
                        <input id="newItem" type="text" name="newToDo" />
                        <br />
                        <button className="pushBtn" onClick={this.handleAdd}>/\</button>
                    </div>
                }
                
                {
                    !this.state.inputVisible &&
                    <button className="addBtn" onClick={this.showInput}>+</button>
                }
            </div>
        )
    }
}

export default AddToDo;
