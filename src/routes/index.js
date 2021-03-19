import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "src/pages/App";
import List from "src/pages/list";
import TextCom from 'src/pages/classComtest'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" exact component={List} />
        <Route path="/testCom" exact component={TextCom} />
      </Switch>
    </Router>
  );
};

export default Routes;
