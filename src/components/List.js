import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_search, API_id } from '../services/api-helper';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }
    async componentDidUpdate() {
        const response = await API_search(this.props.search);
        this.setState({
            items: response.Search,
        })
    }
    render() {
        return (
            <div id="list">
                {this.state.items.map((item, key) =>
                    <div key={key} className="list-movie">
                        <Link to={`/id/${item.imdbID}`}>
                            <h1>{item.Title}</h1>
                            <img src={item.Poster} />
                        </Link>
                    </div>
                )
                }
            </div >
        )
    }
}
export default List;