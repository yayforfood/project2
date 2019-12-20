import React, { Component } from 'react';
import { API_season } from '../services/api-helper';
export default class Season extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    loadList = async () => {
        //const response = await API_season(this.props.imdbID, this.props.season);
        this.setState({
            //data: response,
            data: { "Title": "Star Trek: The Next Generation", "Season": "1", "totalSeasons": "7", "Episodes": [{ "Title": "Encounter at Farpoint", "Released": "1987-09-26", "Episode": "1", "imdbRating": "7.0", "imdbID": "tt0094030" }, { "Title": "Code of Honor", "Released": "1987-10-10", "Episode": "3", "imdbRating": "5.2", "imdbID": "tt0708689" }, { "Title": "The Last Outpost", "Released": "1987-10-17", "Episode": "4", "imdbRating": "6.3", "imdbID": "tt0708804" }, { "Title": "Where No One Has Gone Before", "Released": "1987-10-24", "Episode": "5", "imdbRating": "7.6", "imdbID": "tt0708842" }, { "Title": "Lonely Among Us", "Released": "1987-10-31", "Episode": "6", "imdbRating": "6.3", "imdbID": "tt0708743" }, { "Title": "Justice", "Released": "1987-11-07", "Episode": "7", "imdbRating": "6.0", "imdbID": "tt0708739" }, { "Title": "The Battle", "Released": "1987-11-14", "Episode": "8", "imdbRating": "6.8", "imdbID": "tt0708784" }, { "Title": "Hide and Q", "Released": "1987-11-21", "Episode": "9", "imdbRating": "7.0", "imdbID": "tt0708728" }, { "Title": "Haven", "Released": "1987-11-28", "Episode": "10", "imdbRating": "6.3", "imdbID": "tt0708725" }, { "Title": "The Big Goodbye", "Released": "1988-01-09", "Episode": "11", "imdbRating": "7.4", "imdbID": "tt0708787" }, { "Title": "Datalore", "Released": "1988-01-16", "Episode": "12", "imdbRating": "7.7", "imdbID": "tt0708698" }, { "Title": "Angel One", "Released": "1988-01-23", "Episode": "13", "imdbRating": "5.6", "imdbID": "tt0708676" }, { "Title": "11001001", "Released": "1988-01-30", "Episode": "14", "imdbRating": "7.5", "imdbID": "tt0708668" }, { "Title": "Too Short a Season", "Released": "1988-02-06", "Episode": "15", "imdbRating": "6.1", "imdbID": "tt0708832" }, { "Title": "When the Bough Breaks", "Released": "1988-02-13", "Episode": "16", "imdbRating": "6.4", "imdbID": "tt0708841" }, { "Title": "Home Soil", "Released": "1988-02-20", "Episode": "17", "imdbRating": "6.8", "imdbID": "tt0708730" }, { "Title": "Coming of Age", "Released": "1988-03-12", "Episode": "18", "imdbRating": "7.2", "imdbID": "tt0708690" }, { "Title": "Heart of Glory", "Released": "1988-03-19", "Episode": "19", "imdbRating": "7.3", "imdbID": "tt0708726" }, { "Title": "The Arsenal of Freedom", "Released": "1988-04-09", "Episode": "20", "imdbRating": "7.2", "imdbID": "tt0708783" }, { "Title": "Skin of Evil", "Released": "1988-04-23", "Episode": "22", "imdbRating": "6.9", "imdbID": "tt0708776" }, { "Title": "We'll Always Have Paris", "Released": "1988-04-30", "Episode": "23", "imdbRating": "6.6", "imdbID": "tt0708840" }, { "Title": "Conspiracy", "Released": "1988-05-07", "Episode": "24", "imdbRating": "8.1", "imdbID": "tt0708691" }, { "Title": "The Neutral Zone", "Released": "1988-05-14", "Episode": "25", "imdbRating": "7.5", "imdbID": "tt0708811" }], "Response": "True" }
        })
    }
    componentDidMount() {
        this.loadList()
    }
    componentDidUpdate(prevProps) {
        if (this.props.imdbID !== prevProps.imdbID || this.props.season !== prevProps.season) {
            this.loadList()
        }
    }
    render() {
        if (this.state.data) {
            return (
                <div>
                    <h1>{this.state.data.Title} Season {this.state.data.Season}</h1>
                    {this.state.data.Episodes && this.state.data.Episodes.map((episode, key) =>
                        <div key={key}>
                            <h2>{episode.Title}</h2>
                        </div>
                    )}
                </div>
            )
        }
    }
}
