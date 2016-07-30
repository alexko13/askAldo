import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import { Router, browserHistory } from 'react-router'
import routes from './config/routes'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={ browserHistory } routes={ routes }/>
</Provider>, document.getElementById('root'))
