import React, { Component } from 'react';
import cssStyles from './App.module.css';
import Person from './Person/Person.jsx';

class App extends Component {
	state = {
		persons: [
			{ id: 'asf1', name: 'Max', age: 28 },
			{ id: 'asf2', name: 'Mano', age: 29 },
			{ id: 'asf3', name: 'Tester', age: 26 }
		],
		otherState: 'Some other value',
		showPersons: false
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons });
	};

	tooglePersonsHandler = () => {
		this.setState({ showPersons: !this.state.showPersons });
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};
	render() {
		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								key={person.id}
								click={() => this.deletePersonHandler(index)}
								changed={(event) => this.nameChangeHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);

			btnClass = cssStyles.Red;
		}

		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push(cssStyles.red); //push 'red' styling class to classes
		}

		if (this.state.persons.length <= 1) {
			classes.push(cssStyles.bold);
		}

		return (
			<div className={cssStyles.App}>
				<h1>Hi, I'am a React App</h1>
				<p className={classes.join(' ')}>this is really working !!!</p>
				<button className={btnClass} onClick={this.tooglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
