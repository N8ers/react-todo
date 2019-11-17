import React, { Component } from 'react';
import ToDo from './ToDo';
import AddToDo from './AddToDo';
import { connect } from 'react-redux';
import '../styles/ToDoContainer.css';
import _ from 'lodash';
import { deleteItem } from '../store/actions/deleteAction';
import { addItem } from '../store/actions/addTodoAction';
import { toggleItem } from '../store/actions/toggleTodoAction';
import { editItem } from '../store/actions/editTodoAction';
import { fetchItems } from '../store/actions/fetchAction';
import LoginPage from './LoginPage';

class ToDoContainer extends Component {

	constructor(props) {
		super(props)
		this.removeTodo = this.removeTodo.bind(this)
		this.addTodo = this.addTodo.bind(this)
		this.toggleCompletionStatus = this.toggleCompletionStatus.bind(this)
		this.editTodo = this.editTodo.bind(this)
		this.renderTodos = this.renderTodos.bind(this)
		this.renderLoginModal = this.renderLoginModal.bind(this)
	}

	componentDidMount() {
		this.props.fetchItems()
	}

	removeTodo(id) {
		this.props.deleteItem(id)
	}

	toggleCompletionStatus(todoKey, status) {
		this.props.toggleItem(todoKey, status)
	}

	editTodo(todoKey, editedTodo) {
		this.props.editItem(todoKey, editedTodo)
	}

	addTodo(newTodo) {
		this.props.addItem(newTodo)
	}

	renderTodos() {
		const { todos } = this.props

		return _.map(todos, (todo, key) => {
			return (
				<ToDo
					todoKey={key}
					id={todo.id}
					item={todo.todoItem}
					remove={this.removeTodo}
					edit={this.editTodo}
					toggleStatus={this.toggleCompletionStatus}
					status={todo.completed}
				/>
			)
		})
	}

	renderLoginModal() {
		return (
			<div className="loginModal">
				<h1>suuup</h1>
			</div>
		)
	}

	render() {
		return (

			<div className="ToDoContainer">

				{this.props.loginModal && <LoginPage />}

				<ul className="ToDos">
					{this.renderTodos()}
				</ul>
				<br />
				<AddToDo className="addTodo" addTodo={this.addTodo} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		loginModal: state.loginModal.login
	}
}

export default connect(mapStateToProps,
	{ deleteItem, addItem, toggleItem, editItem, fetchItems })(ToDoContainer);
