import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Component Imports
import Base from './components/Base'
import LandingPage from './components/LandingPage'

// REACT-ROUTER
class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Base}>
          <IndexRoute component={LandingPage} />
          {/* <Route path='details' component={Details} /> */}

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
