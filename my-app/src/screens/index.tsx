import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import Popular from "./Popular";
import Latest from "./Upcoming";
import { Search } from "./Search";
const Screens: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/search/" component={Search} />
        <Route path="/popular/:pag" component={Popular} />
        <Route path="/upcoming/:pag" component={Latest} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export { Screens };
