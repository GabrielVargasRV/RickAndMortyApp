import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import CharacterPage from './components/CharacterPage.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/:id" component={CharacterPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
