import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Dashboard from './pages/Dashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;
