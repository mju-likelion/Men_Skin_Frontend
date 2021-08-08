import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Router/Home";
import Find from "../Router/Find";
import Login from "../Router/Login";
import Singup from "../Router/Singup";
import FindDetail from "../Router/FindDetail";
import Total from "../Router/Total";
import TotalDetail from "../Router/TotalDetail";


export default () => (
  <Router>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Find" exact component={Find} />
      <Route path="/Login" exact component={Login} />
      <Route path="/Singup" exact component={Singup} />
      <Route path="/FindDetail" exact component={FindDetail} />
      <Route path="/Total" exact component={Total} />
      <Route path="/TotalDetail" exact component={TotalDetail} />
    </Switch>
  </Router>
);