import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Results } from "./Results";

const Routes = () => (
  <div className="p-4">
    <Switch>
      <Route exact path="/">
        <Redirect to="/products" />
      </Route>
      <Route path="/products">
        <Results />
      </Route>
      <Route path="/articles">
        <Results />
      </Route>
      <Route path="/cryptos">
        <Results />
      </Route>
      <Route path="/videos">
        <Results />
      </Route>
    </Switch>
  </div>
);

export default Routes;
