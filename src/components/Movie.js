import React, { Component } from 'react';
import { API_id } from '../services/api-helper';
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
    render() {
        console.log(this.state.data);
        if (this.state.data) {
            return (
                <div>
                    <h1>{this.state.data.Title}</h1>
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
                        </div>

                    </div >
                </div>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}