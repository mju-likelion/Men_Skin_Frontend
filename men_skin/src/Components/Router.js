import React from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";

import Home from "../Router/Home";
import Find from "../Router/Find";


export default () => (
  <Router>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Find" exact component={Find} />
      </Switch>
  </Router>
);