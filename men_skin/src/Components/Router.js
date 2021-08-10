import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Router/Home";
import Find from "../Router/Find";
import Login from "../Router/Login";
import Singup from "../Router/Singup";
import FindDetail from "../Router/FindDetail";
import TotalCosmetic from "../Router/TotalCosmetic";
import TotalSkin from "../Router/TotalSkin";
import TotalSun from "../Router/TotalSun";
import TotalPerfume from "../Router/TotalPerfume";



export default () => (
  <Router>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Find" exact component={Find} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Singup" exact component={Singup} />
      <Route path="/FindDetail" exact component={FindDetail} />
      <Route path="/TotalCosmetic" exact component={TotalCosmetic} />
      <Route path="/TotalSkin" exact component={TotalSkin} />
      <Route path="/TotalSun" exact component={TotalSun} />
      <Route path="/TotalPerfume" exact component={TotalPerfume} />
    </Switch>
  </Router>
);