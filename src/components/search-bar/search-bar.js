import React from "react";

export default class SearchBar extends React.Component {
    render () {
        return(
        <div className="mb-5 col-12 text-center">
            <input type="text" className="search-bar" placeholder="Search..." />
        </div>)
    }
}
