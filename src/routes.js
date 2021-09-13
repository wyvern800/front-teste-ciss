import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Add from "./views/Add";
import Edit from "./views/Edit";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/edit/:funcionarioId" component={Edit} />
    </Switch>
  );
}
