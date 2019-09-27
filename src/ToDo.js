import React, {Component} from 'react';
import './App.css';

function ToDo(props) {
    return(
        <div>
            <span>{props.item}</span>
            <button onClick={props.handleClick}>x</button>
        </div>
    )
}

export default ToDo;
