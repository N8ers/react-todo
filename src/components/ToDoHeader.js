import React, { Component } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../styles/ToDoHeader.css'

class ToDoHeader extends Component {

    render() {
        const date = moment().format('dddd, MMMM Do');

        return (
            <div className="ToDoHeader">
                <FontAwesomeIcon className="cog-icon" icon={faCog} />
                <h1>todo</h1>
                <h5>{date}</h5>
            </div>
        );
    }
}

export default ToDoHeader;
