import React from 'react';
import MovieCard from '../movie-card/movie-card.js';

export default class MovieDetail extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            details: [],
            movieId: props.movieId
        };
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/' + this.state.movieId + '?api_key=19dd866ef4c517ef4d726559bd269cb0')
            .then((response) => response.json())
            .then((movie) => {
                let details = 
                <div className="row">
                    <div className="detailContainer title col-12 mb-5">
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="detailContainer movieImg col-12 mb-5">
                        <img className="mw-100 mb-3"
                        src={'http://image.tmdb.org/t/p/w780' + movie.backdrop_path}
                        alt={movie.title}/>
                    </div>
                    <div className="description col-12">
                        {movie.overview}
                    </div>
                </div>;

                this.setState(
                    {details: details}
                )
            })
            .catch((error) =>{
                console.error(error);
        });

    }

    render() {
        return (
            this.state.details
        );
    }
}