import React from 'react';
import cssStyles from './Person.module.css';

const person = (props) => {
	return (
		<div className={cssStyles.Person}>
			<p onClick={props.click}>
				I'm a {props.name} and I am {props.age} year old !!
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
