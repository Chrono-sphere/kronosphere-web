import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'components/Landing/Landing';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route path="/" component={Landing} />
    </Switch>
  </div>
);

export default App;
