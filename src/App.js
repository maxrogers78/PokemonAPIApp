import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import PokemonInfo from "./components/PokemonInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/:name" component={PokemonInfo} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
