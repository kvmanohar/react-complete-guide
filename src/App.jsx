import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

const app = (props) => {

	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Max', age: 28 }, 
			{ name: 'Mano', age: 29 }, 
			{ name: 'Tester', age: 26 }
		]
	});

	const [otherState, setOtherState] = useState({
		other: 'Some other value'
	});

	const switchNameHandler = () => {
		setPersonsState({
			persons: [
			{ name: 'Maximilan', age: 28 }, 
			{ name: 'Mano', age: 29 }, 
			{ name: 'Tester', age: 37 }
			]
		});
	};

	console.log(personsState, otherState);
	
	return (
		<div className="App">
			<h1>Hi, I'am a React App</h1>
			<p>this is really working !!!</p>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
				{' '}
				My Hobbies: Coding{' '}
			</Person>
			<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
		</div>
	);
};

export default app;


