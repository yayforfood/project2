import React, { Component } from 'react';
import { API_id } from '../services/api-helper';
import { Link } from 'react-router-dom';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imdbID: props.imdbID
        }
    }
    async componentDidMount() {
        const response = await API_id(this.state.imdbID);
        this.setState({
            data: response
        })
    }
    renderSeasons = () => {
        let seasons = [];
        for (let i = 1; i <= this.state.data.totalSeasons; i++) {
            seasons.push(<Link key={i} to={`/id/${this.state.imdbID}/${i}`}>{i}</Link>);
        }
        console.log(seasons);
        return seasons;
    }
    render() {
        console.log(this.state.data);
        if (this.state.data) {
            if (this.state.data.Response === "True") {
                return (
                    <div>
                        <h1>{this.state.data.Title} ({this.state.data.Year})</h1>
                        < div className="movie">
                            {this.state.data.Poster !== "N/A" && <img
                                className="movie-poster"
                                src={this.state.data.Poster}
                                alt={this.state.data.Title}
                            />}
                            <div className="movie-data">

                                <h2>Plot</h2>
                                <p>{this.state.data.Plot}</p>
                                <h2>People</h2>
                                <p>Director(s): {this.state.data.Director}</p>
                                <p>Writer(s): {this.state.data.Writer}</p>
                                <p>Actors: {this.state.data.Actors}</p>
                                <h2>Ratings</h2>
                                <ul>
                                    {this.state.data.Ratings && this.state.data.Ratings.map((rating, key) =>
                                        <li key={key}>{rating.Source}: {rating.Value}</li>
                                    )}
                                </ul>
                                <h2>Other Info</h2>
                                <p>Released: {this.state.data.Released}</p>
                                <p>Runtime: {this.state.data.Runtime}</p>
                            </div>

                        </div >
                        {this.state.data.Type === "series" ?
                            <div>
                                <h2>Seasons</h2>
                                <div className="season-list">
                                    {
                                        this.renderSeasons()
                                    }
                                </div>
                            </div> : null

                        }
                    </div>
                )
            } else {
                return <p>{this.state.data.Error}</p>
            }
        } else {
            return <p>Loading...</p>
        }
    }
}