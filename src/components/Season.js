import React, { Component } from 'react';
import { API_season } from '../services/api-helper';
import { Link } from 'react-router-dom';
export default class Season extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        this.loadList()
    }
    componentDidUpdate(prevProps) {
        if (this.props.imdbID !== prevProps.imdbID || this.props.season !== prevProps.season) {
            this.loadList()
        }
    }
    loadList = async () => {
        const response = await API_season(this.props.imdbID, this.props.season);
        this.setState({
            data: response,

        })
    }
    render() {
        if (this.state.data) {
            if (this.state.data.Response === "True") {
                return (
                    <div>
                        <h1>{this.state.data.Title} Season {this.state.data.Season}</h1>
                        {this.state.data.Episodes && this.state.data.Episodes.map((episode, key) =>
                            <div key={key}>
                                <Link to={`/id/${episode.imdbID}`}><h2>{episode.Title}</h2></Link>
                            </div>
                        )}
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
