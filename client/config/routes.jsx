import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import AskAldo from '../components/AskAldo'

const routes = (
  <Route path='/' component={ App }>
    <IndexRoute component={ AskAldo } />
  </Route>
)

export default routes
