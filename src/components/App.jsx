import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'components/Landing/Landing';
import Dashboard from 'components/Dashboard/Dashboard';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route path="/" component={Landing} />
      <Route name="Dashboard" path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default App;
