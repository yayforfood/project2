import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_search } from '../services/api-helper';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            page: 1,
            pages: 0,
        };
    }
    componentDidMount() {
        this.loadList()
    }
    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {

            this.setState((state) => ({
                page: 1
            }))
            this.loadList()
        }
    }
    loadList = async () => {
        const response = await API_search(this.props.search, this.state.page);
        this.setState({
            items: response.Search,
        })
    }
    changePage = async (change) => {
        console.log(this.state.page + " before");
        await this.setState((state) => ({
            page: state.page + change
        }))
        console.log(this.state.page + " after");

        this.loadList();
    }
    render() {
        console.log(this.state.items);

        return (
            <div id="list">
                <div className='button-div'>
                    <button id="prev" onClick={() => this.changePage(-1)}>prev</button>
                    <button id="next" onClick={() => this.changePage(1)}>next</button>
                </div>
                {this.state.items ? this.state.items.map((item, key) =>
                    <div key={key} className="list-movie">
                        <Link to={`/id/${item.imdbID}`}>
                            <h1>{item.Title} ({item.Year})</h1>
                            {item.Poster !== "N/A" &&
                                <img
                                    className="list-poster"
                                    src={item.Poster}
                                    alt={item.Title}
                                />}
                        </Link>
                    </div>
                ) :
                    <h1>No results found</h1>
                }
                <div className='button-div'>
                    <button id="prev" onClick={() => this.changePage(-1)}>prev</button>
                    <button id="next" onClick={() => this.changePage(1)}>next</button>
                </div>
            </div >
        )
    }
}
export default List;