import React from "react";
import { HashRouter as Router,Route,Switch } from "react-router-dom";

import Home from "../Router/Home";


export default () => (
  <Router>

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
  </Router>
);