import React from 'react';
function Search(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input id="search-bar" type="text" placeholder="Search" onChange={props.onChange} />
        </form>
    )
}
export default Search;