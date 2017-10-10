import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Component Imports
import Base from './components/Base'
import LandingPage from './components/LandingPage'
import Memberships from './components/Memberships'
import Schedule from './components/Schedule'
import Training from './components/Training'

// REACT-ROUTER
class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Base}>
          <IndexRoute component={LandingPage} />
          <Route path='memberships' component={Memberships} />
          <Route path='schedule' component={Schedule} />
          <Route path='training' component={Training} />

          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const NotFound = (props) => {
  return (
    <h1>Not Found</h1>
  )
}

export default App;
