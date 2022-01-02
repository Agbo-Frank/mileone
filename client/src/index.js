import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider} from '@apollo/client'
import client from './Apollo/cache/index'
import App from './App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
