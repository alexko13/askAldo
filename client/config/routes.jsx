import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../containers/App';
import AskAldo from '../components/AskAldo';
import HelloWorld from '../components/HelloWorld';

const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ AskAldo } />
      <Route path='helloworld' component={ HelloWorld } />
    </Route>
  </Router>
);

export default routes;
