import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Catalog} path="/:category/search/:keyword" />
      <Route component={Detail} path="/:category/:id" />
      <Route component={Catalog} path="/:category" />
    </Switch>
  );
};

export default Routes;
