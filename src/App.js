import React from 'react';
import Task from './task/Task.jsx';
import Form from './form/Form.jsx';

class App extends React.Component {
	state = {
		todos: [
			{id: 1, content: 'Learn something new'}
		]
	};

	render() {
		return (
			<div>
				<Task todos={this.state.todos} deleteTodo={this.deleteTodo}/>
				<Form addTodo={this.addTodo}/>
			</div>
		);
	}

	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id
		});
		this.setState({
			todos
		})
	};
	addTodo = (todo) => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
			this.setState({
				todos
			})

	}
}

export default App;
