import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import List from "./List";
import Detail from "./Detail";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <header className="Main-header">
                <h1 className="mb-5">
                    Filmes.React - Diversão Garantida
                </h1>
            </header>
            <div className="content">
              <Route exact path="/" component={List}/>
              <Route path="/detail" component={Detail}/>
            </div>
        </HashRouter>
    );
  }
}

export default Main;