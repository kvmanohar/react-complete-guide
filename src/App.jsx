import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
	state = {
		persons: [{ name: 'Max', age: 28 }, { name: 'Mano', age: 29 }, { name: 'Tester', age: 26 }],
		otherState: 'Some other value',
		showPersons: false
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

	tooglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};
	render() {
		const buttonStyle = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
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
		return (
			<div className="App">
				<h1>Hi, I'am a React App</h1>
				<p>this is really working !!!</p>
				<button style={buttonStyle} onClick={this.tooglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
