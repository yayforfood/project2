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
        return (
            <div>
                <h1>{this.state.data && this.state.data.Title}</h1>
            </div>
        )
    }
}