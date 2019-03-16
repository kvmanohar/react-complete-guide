import React from 'react';
import cssStyles from './Cockpit.module.css';

const cockpit = (props) => {
	const classes = [];
	if (props.persons.length <= 2) {
		classes.push(cssStyles.red); //push 'red' styling class to classes
	}
	if (props.persons.length <= 1) {
		classes.push(cssStyles.bold);
	}

	let btnStyle = '';
	if (props.showPersons) btnStyle = cssStyles.Red;

	return (
		<div className={cssStyles.Cockpit}>
			<h1>Hi, I'am a React App</h1>
			<p className={classes.join(' ')}>this is really working !!!</p>
			<button className={btnStyle} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;
