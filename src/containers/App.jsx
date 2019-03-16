import React, { Component } from 'react';
import cssStyles from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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
		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler} />
				</div>
			);
		}
		return (
			<div className={cssStyles.App}>
				<Cockpit
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.tooglePersonsHandler}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
