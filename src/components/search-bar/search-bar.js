import React from "react";

export default class SearchBar extends React.Component {
    render () {
        return(
        <div className="mb-5">
            <input type="text" className="search-bar" placeholder="Search..." />
        </div>)
    }
}
