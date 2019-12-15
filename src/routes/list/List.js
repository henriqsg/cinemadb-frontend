import React, { Component } from "react";
import SearchBar from '../../components/search-bar/search-bar.js';
import MovieList from '../../components/movie-list/movie-list.js';
import './List.css';

function List() {
  return (
    <div className="List">
        <SearchBar />
        <div className="container">
          <div className="row">
            <MovieList/>
            {/* <MovieCard name="teste" detailUrl="/detail" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailUrl="/detail" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailUrl="/detail" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailUrl="/detail" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailUrl="/detail" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/>
            <MovieCard name="teste" detailUrl="/detail" description="Testestestesteste" img="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"/> */}
          </div>
        </div>
    </div>
  );
}

export default List;
