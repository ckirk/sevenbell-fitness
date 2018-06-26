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

  // Scroll to hash link
  hashLinkScroll = () => {
    const { hash } = window.location;
    // console.log('hashLinkScroll');
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const string = hash.replace('#', '');
        var regex = /\#(.*)/g;
        var match = regex.exec(string);
        if (match) {
          var id = match[1];
          const element = document.getElementById(id);
          if (element) element.scrollIntoView();
        }
        // console.log('stripped id: ' + id);
      }, 0);
    }
  }

  render () {
    return (
      <Router onUpdate={this.hashLinkScroll} history={hashHistory}>
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
