import React, { Component } from 'react';
import './App.css';
//import components

//import services
import { Search } from './services/api-helper';

class App extends Component {
	async componentDidMount() {
		console.log(process.env.REACT_APP_API_KEY);
		console.log(await Search("Star Trek next Generation"))
		//process.env.REACT_APP_API_KEY
	}
	render() {
		return (
			<div className="App">

			</div>
		);
	}
}

export default App;
