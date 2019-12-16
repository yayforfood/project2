import React, { Component } from 'react';
import './App.css';
//import components
import Search from './components/Search';
import List from './components/List';
//import services
import { API_search } from './services/api-helper';
import { API_id } from './services/api-helper';
import { Route, Switch, Link, Redirect } from 'react-router-dom';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			data: {},
			search: "",
		}
	}
	searchSubmit = async (e) => {
		e.preventDefault();
		const result = await API_search(this.state.search);
		console.log(result.Search);
		this.setState({
			results: result.Search
		});


	}
	searchChange = (e) => {
		this.setState({
			search: e.target.value,
		})
	}
	render() {
		return (
			<div className="App">
				<Switch>
					<Redirect exact from="/" to="/search" />
					<Route render={() =>
						<div>
							<Search onSubmit={this.searchSubmit} onChange={this.searchChange} />
						</div>
					} />
				</Switch>
			</div>
		);
	}
}

export default App;
