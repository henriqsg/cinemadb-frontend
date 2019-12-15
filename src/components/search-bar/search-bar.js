import React from "react";
import './search-bar.css';

export default class SearchBar extends React.Component {
    render () {
        return(
        <div className="searchBar row">
            <div className="mb-5 col-12">
                <input type="text" placeholder="Search..." />
            </div>
        </div>)
    }
}
