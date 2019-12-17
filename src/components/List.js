import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="list">
                {props.items.map((item, key) =>
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