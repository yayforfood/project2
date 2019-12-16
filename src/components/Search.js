import React from 'react';
function Search(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" placeholder="Search" onChange={props.onChange} />
        </form>
    )
}
export default Search;