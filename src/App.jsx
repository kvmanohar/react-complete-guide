import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.jsx';

class App extends Component {
	state = {
		persons:[
			{name: 'Max', age: 28},
			{name: 'Mano', age:29},
			{name: 'Tester', age: 26}
		],
		otherState: 'Some other value'
	}

	switchNameHandler = ()=>{
		this.setState({
			persons: [
				{ name: 'Maximilan', age: 28 },
				{ name: 'Mano', age: 29 },
				{ name: 'Tester', age: 37 }
			]
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Hi, I'am a React App</h1>
				<p>this is really working !!!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person 
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age}/>
				<Person 
					name={this.state.persons[1].name} 
					age={this.state.persons[1].age}
					click={this.switchNameHandler}> My Hobbies: Coding </Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
	}
}

export default App;
