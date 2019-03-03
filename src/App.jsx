import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
	state = {
		person:[
			{name: 'Max', age: 28},
			{name: 'Mano', age:29},
			{name: 'Tester', age: 26}
		]
	}
	render() {
		return (
			<div className="App">
				<h1>Hi, I'am a React App</h1>
				<p>this is really working !!!</p>
				<Person name={this.state.person[0].name} age={this.state.person[0].age}/>
				<Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbies: Coding </Person>
				<Person name={this.state.person[2].name} age={this.state.person[2].age} />
			</div>
		);
	}
}

export default App;
