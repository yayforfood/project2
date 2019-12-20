import React, { Component } from 'react';
import './App.css';
//import components
import Search from './components/Search';
import List from './components/List';
import Movie from './components/Movie';
import Season from './components/Season'
//import services
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
		}
	}
	searchSubmit = async (e) => {
		e.preventDefault();
		this.props.history.push(`/search/${this.state.search}`);
	}
	searchChange = (e) => {
		this.setState({
			search: e.target.value,
		})
	}
	render() {
		return (
			<div className="App">
				<Search value={this.state.search} onSubmit={this.searchSubmit} onChange={this.searchChange} />

				<Switch>
					<Redirect exact from="/" to="/search" />
					{/* <Route path="/search" render={() =>
						<div>
							<Search onSubmit={this.searchSubmit} onChange={this.searchChange} />
							<List items={this.state.results} />
						</div>
					} /> */}
					<Route path="/id/:imdbID/:season" render={(props) =>
						<Season
							imdbID={props.match.params.imdbID}
							season={props.match.params.imdbID}
						/>

					} />
					<Route path="/id/:imdbID" render={(props) =>
						<Movie imdbID={props.match.params.imdbID} />

					} />
					<Route path="/search/:term" render={(props) =>
						<List search={props.match.params.term} />
					} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
