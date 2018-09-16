import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import './base.scss';

const link = createHttpLink({
  uri: 'https://kronosphere.herokuapp.com/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  link,
  cache: new InMemoryCache(),
});

const render = (Component) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <AppContainer>
          <Component />
        </AppContainer>
      </Router>
    </ApolloProvider>,
    document.getElementById('content'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
