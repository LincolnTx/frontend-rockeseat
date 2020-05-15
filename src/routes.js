import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Box from "./pages/Box";
import List from "./pages/List";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      {/* <Route exact path="/box/:id" component={Box} /> */}
      <Route exact path="/list" component={List} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
