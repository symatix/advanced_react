import React, { Component } from 'react';
import Input from './input';
import Output from './output';

export default class App extends Component {
	render() {
		return (
			<div>
                <h1>Test Driven</h1>
                <Input />
                <Output />
            </div>
		);
	}
}
