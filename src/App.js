import React, { Component } from 'react';

import './App.css';
import axios from 'axios';

class App extends Component {
	async componentDidMount() {
		console.log(await (axios.get("http://www.omdbapi.com/?i=tt0092455&apikey=2e6c17f5&season=1")))
	}
	render() {
		return (
			<div className="App">

			</div>
		);
	}
}

export default App;
