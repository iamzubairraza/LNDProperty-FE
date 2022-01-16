import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import LandingPage from "./LandingPage";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/" component={Header} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
