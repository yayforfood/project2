import React from 'react';
function Search(props) {
    return (
        <form id="search-form" onSubmit={props.onSubmit}>
            <input
                id="search-bar"
                type="text"
                placeholder="Search"
                onChange={props.onChange}
                value={props.value}
            />
            <input id="submit-button" type="submit" />
        </form>
    )
}
export default Search;