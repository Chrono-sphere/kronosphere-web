import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import './base.scss';

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <AppContainer>
        <Component />
      </AppContainer>
    </Router>,
    document.getElementById('content'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
