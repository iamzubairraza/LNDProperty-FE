import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import calculations from "./pages/calculations";
import Ruslts from "./pages/Results/Ruslts";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/calculations" component={calculations} />
          <Route path="/results" component={Ruslts} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
