import React, { Component } from "react";
import SearchBar from './components/search-bar/search-bar.js';
import './Detail.css';

function Detail() {
  return (
    <div className="Detail">
      <div className="detailContainer title col-12 mb-5">
        <h1>
          Nome do Filme
        </h1>
      </div>
      <div className="detailContainer movieImg col-12 mb-5">
        <img className="mw-100 mb-3"
          src="https://s2.glbimg.com/kuRU5wNsNZhTsYAYwdsGwt96Q9o=/0x0:976x549/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Z/k/V0YjN0QDCq4BQiLqSj1w/bbcvialactea.jpg"
          alt="Teste"
        ></img>
      </div>
      <div className="description col-12">
        AAAAAAAAAAAAAAAAAAAAAAAA
      </div>
    </div>
  );
}

export default Detail;
