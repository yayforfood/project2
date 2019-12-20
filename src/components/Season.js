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
        const response = await API_season(this.props.imdbID, this.props.season);
        this.setState({
            data: response,
        })
    }
    componentDidMount() {
        this.loadList()
    }
    componentDidUpdate(prevProps) {
        if (this.props.imdbID !== prevProps.imdbID || this.props.season !== this.prevProps.season) {
            this.loadList()
        }
    }
    render() {
        return (
            <div>
                <h1>season, bruh</h1>
            </div>
        )
    }
}
