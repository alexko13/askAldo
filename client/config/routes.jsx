import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../containers/App';
import AskAldo from '../containers/AskAldo'

const routes = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ AskAldo } />
    </Route>
  </Router>
);

export default routes;
