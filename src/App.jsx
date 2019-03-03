import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
	state = {
		persons: [{ name: 'Max', age: 28 }, { name: 'Mano', age: 29 }, { name: 'Tester', age: 26 }],
		otherState: 'Some other value'
	};

	switchNameHandler = (newName) => {
		this.setState({
			persons: [{ name: newName, age: 28 }, { name: 'Mano', age: 29 }, { name: 'Tester', age: 37 }]
		});
	};

	nameChangeHandler = (event) => {
		this.setState({
			persons: [{ name: 'Max', age: 28 }, { name: event.target.value, age: 29 }, { name: 'Tester', age: 37 }]
		});
	};
	render() {
		const buttonStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		return (
			<div className="App">
				<h1>Hi, I'am a React App</h1>
				<p>this is really working !!!</p>
				<button style={buttonStyle} onClick={() => this.switchNameHandler('Maximus')}>
					Switch Name
				</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Max!!!')}
					changed={this.nameChangeHandler}
				>
					My Hobbies: Coding
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
	}
}

export default App;
