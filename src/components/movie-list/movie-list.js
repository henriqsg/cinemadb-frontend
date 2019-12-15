import React from 'react';
import MovieCard from './components/movie-card/movie-card.js';

export default class MovieList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/popular/?api_key=19dd866ef4c517ef4d726559bd269cb0')
            .then((response) => response.json())
            .then((responseJson) => {
                let parseMovies = responseJson.results.map(movie => {
                    <MovieCard />
                });
            })
            .catch((error) =>{
                console.error(error);
        });
    }

    render() {
        return (
            <div className="container">{this.state.movies}</div>
        );
    }

}