import React from 'react';
import MovieCard from '../movie-card/movie-card.js';

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
            .then((json) => {
                let movies = json.results.map(movie => {
                    return (<MovieCard className="col-12 col-md-4 mb-5" key={movie.id} name={movie.title} overview={movie.overview} imgUrl={movie.backdrop_path}/>);
                });
                this.setState({
                    movies: movies
                });
            })
            .catch((error) =>{
                console.error(error);
        });
    }

    render() {
        return (
            <div className="row">{this.state.movies}</div>
        );
    }

}