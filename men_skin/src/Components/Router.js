import React from "react";
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";

import Home from "../Router/Home";

import Login from "../Router/Login";
import Singup from "../Router/Singup";
import FindDetail from "../Router/FindDetail";
import TotalCosmetic from "../Router/TotalCosmetic";
import TotalPerfume from "../Router/TotalPerfume";
import TotalSkin from "../Router/TotalSkin";
import TotalSun from "../Router/TotalSun";
import Recommend from "../Router/recommend";
import Find from "../Router/Find";
import Content from "../Router/Content"
import Board from "../Router/Board";
import Write from "../Router/Write";


export default () => (
  <Router>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Find" exact component={Find} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Singup" exact component={Singup} />
      <Route path="/FindDetail/:num" exact component={FindDetail} />
      <Route path="/TotalPerfume" exact component={TotalPerfume} />
      <Route path="/TotalCosmetic" exact component={TotalCosmetic} />
      <Route path="/TotalSkin" exact component={TotalSkin} />
      <Route path="/TotalSun" exact component={TotalSun} />
      <Route path="/Recommend" exact component={Recommend} />
      <Route path="/Content" exact component={Content} />
      <Route path="/Board" exact component={Board} />
      <Route path="/Write" exact component={Write} />
      <Redirect from="*" to="/" />

    </Switch>
  </Router>
);