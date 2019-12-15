import React from 'react';
import MovieCard from './components/movie-card/movie-card.js';
import SearchBar from './components/search-bar/search-bar.js';
import MovieList from './components/movie-list/movie-list.js';
import './App.css';

export default class App extends React.Component {
  
  constructor() {
    super();
  }

  render () {
    return (
    <div className="App">
      <header className="App-header">
        <h1 className="mb-5">
          Filmes.React - Diversão Garantida
        </h1>
        <SearchBar />
        <div className="container">
          <div className="row">
            <MovieCard name="teste" detailsUrl="https://google.com" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailsUrl="https://google.com" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailsUrl="https://google.com" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailsUrl="https://google.com" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailsUrl="https://google.com" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailsUrl="https://google.com"  description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
          </div>
        </div>
    </header>
  </div>);
  }  

}
