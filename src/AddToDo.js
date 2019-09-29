import React, {Component} from 'react';

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
        this.props.add(newItem)
        document.getElementById('newItem').value = ''
    }

    showInput(){
        this.setState({
            inputVisible: true
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
                        <button onClick={this.handleAdd}>/\</button>
                    </div>
                }
                
                {
                    !this.state.inputVisible &&
                    <button onClick={this.showInput}>+</button>
                }
            </div>
        )
    }
}

export default AddToDo;
