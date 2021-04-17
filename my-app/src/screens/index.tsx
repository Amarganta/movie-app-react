import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
const Screens: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export { Screens };
