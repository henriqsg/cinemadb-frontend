import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import List from "./routes/list/List";
import Detail from "./routes/detail/Detail";
import './Main.css';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <header className="mainHeader my-5 text-center">
                <h1>Filmes.React - Diversão Garantida</h1>
            </header>
            <div className="content">
              <Route exact path="/" component={List}/>
              <Route path="/detail/:id" component={Detail}/>
            </div>
        </HashRouter>
    );
  }
}

export default Main;