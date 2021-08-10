import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Router/Home";

import Login from "../Router/Login";
import Singup from "../Router/Singup";
import FindDetail from "../Router/FindDetail";
import TotalCosmetic from "../Router/TotalCosmetic";
import TotalPerfume from "../Router/TotalPerfume";
import TotalSkin from "../Router/TotalSkin";
import TotalSun from "../Router/TotalSun";
import recommend from "../Router/recommend";
import Find from "../Router/Test";


export default () => (
  <Router>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Find" exact component={Find} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Singup" exact component={Singup} />
      <Route path="/FindDetail" exact component={FindDetail} />
      <Route path="/TotalPerfume" exact component={TotalPerfume} />
      <Route path="/TotalCosmetic" exact component={TotalCosmetic} />
      <Route path="/TotalSkin" exact component={TotalSkin} />
      <Route path="/TotalSun" exact component={TotalSun} />
      <Route path="/recommend" exact component={recommend} />
      <Route path="/Test" exact component={Find} />
    </Switch>
  </Router>
);