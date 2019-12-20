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
            console.log(this.state.data)
            console.log();
            console.log();
            
            if (this.state.data.Response === "True") {
                return (
                    <div>
                        <div className='button-div'>
                            <Link
                                to={`/id/${this.props.imdbID}/${this.state.data.Season - 1 != 0 ? this.state.data.Season - 1 : '1'}`}
                            >
                                <button id="prev">prev</button>
                            </Link>
                            <Link
                                to={`/id/${this.props.imdbID}/${this.state.data.Season!=this.state.data.totalSeasons?parseInt(this.state.data.Season,10)+1:this.state.data.totalSeasons}`}
                            >
                                <button id="next">next</button>
                            </Link>
                        </div>
                        <h1>{this.state.data.Title} Season {this.state.data.Season}</h1>
                        {this.state.data.Episodes && this.state.data.Episodes.map((episode, key) =>
                            <div key={key}>
                                <Link to={`/id/${episode.imdbID}`}><h2>{episode.Title}</h2></Link>
                            </div>
                        )}
                        <div className='button-div'>
                            <button id="prev" onClick={() => this.changePage(-1)}>prev</button>
                            <span>Page {this.state.page} of {this.state.pages}</span>
                            <button id="next" onClick={() => this.changePage(1)}>next</button>
                        </div>
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
