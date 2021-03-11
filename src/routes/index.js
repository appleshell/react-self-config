import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "src/pages/App";
import List from "src/pages/list";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" exact component={List} />
      </Switch>
    </Router>
  );
};

export default Routes;
