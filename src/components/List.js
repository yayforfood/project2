import React from 'react';
import { Link } from 'react-router-dom';
function List(props) {
    return (
        <div>
            {props.items.map((item, key) =>
                <div key={key}>
                    <Link to={`/id/${item.imdbID}`}>
                        <h1>{item.Title}</h1>
                        <img src={item.Poster} />
                    </Link>
                </div>
                /*
            {Title: "Star Wars: Episode IV - A New Hope", Year: "1977", imdbID: "tt0076759", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMj…zA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
        Title: "Star Wars: Episode IV - A New Hope"
        Year: "1977"
        imdbID: "tt0076759"
        Type: "movie"
        Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        __proto__: Object*/
            )
            }
        </div >
    )
}
export default List;