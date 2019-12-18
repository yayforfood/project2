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
                        <img className="movie-poster" src={this.state.data.Poster} />
                        <div className="movie-data">

                            <h2>Plot</h2>
                            <p>{this.state.data.Plot}</p>
                            <h2>Actors</h2>
                            <p>{this.state.data.Actors}</p>
                            <h2>Ratings</h2>
                            <ul>
                                {this.state.data.Ratings.map((rating, key) =>
                                    <li key={key}>{rating.Source}: {rating.Value}</li>
                                )}
                            </ul>
                        </div>

                    </div >
                </div>
            )
        } else {
            return <p>Loading...</p>
        }
    }
}