import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import history from "../utils/history";

const Pages: React.FC = props => {
  return (
    <Router history={history}>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        
      </Switch>
    </Router>
  );
};

export default Pages;
