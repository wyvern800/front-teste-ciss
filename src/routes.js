import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Add from "./views/Add";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" exact component={Add} />
    </Switch>
  );
}
