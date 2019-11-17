import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import '../styles/ToDoHeader.css'

class ToDoHeader extends Component {

	constructor(props) {
		super(props)
		this.handleCogClick = this.handleCogClick.bind(this)
	}

	componentWillMount() {
		// console.log(store.getState())
	}

	handleCogClick() {
		console.log('clicked!')
		this.props.toggleLogin();
		console.log("post toggle")
	}

	render() {
		const date = moment().format('dddd, MMMM Do');

		return (
			<div className="ToDoHeader">
				<FontAwesomeIcon onClick={this.handleCogClick} className="cog-icon" icon={faCog} />
				<h1>todo</h1>
				<h5>{date}</h5>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state.loginModal)
	return {
		loginModal: state.loginModal.login
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleLogin: () => dispatch({ type: 'TOGGLE_LOGIN_MODAL' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoHeader);
