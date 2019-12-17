import React from 'react';
import { Link } from 'react-router-dom';
function List(props) {
    return (
        <div id="list">
            {props.items.map((item, key) =>
                <div key={key} class="list-movie">
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
export default List;