import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// import SlideShow from 'SlideShow'

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInModal: false
    }
  };

  render() {
    return (
      <div id='base'>
        <div id="header">
          <div className="logo">
            <Link to='/'>
              <img src='../images/logo.png' />
            </Link>
          </div>
          <div className="navMenu">
            <Link to='/memberships'>Memberships</Link>
            <Link to='/schedule'>Class Schedule</Link>
            <Link to='/training'>Personal Training</Link>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Base;