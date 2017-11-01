import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import logo from '../images/logo.png'

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
        <div className="contentWrapper">
          <div id="header">
            <div className="logo">
              <Link to='/' >
                <img src={logo} />
              </Link>
            </div>
            <div className="navMenu">
              <Link to='/memberships' activeClassName='active'>Memberships</Link>
              <Link to='/schedule' activeClassName='active'>Class Schedule</Link>
              <Link to='/training' activeClassName='active'>Personal Training</Link>
            </div>
          </div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

const Footer = (props) => (
  <div id="footer">
    <div className="logo">
      <Link to='/' >
        <img src={logo} />
      </Link>
    </div>
    <div className="info">
      <div className="address">

          <p>640 Dean St.</p>
          <p>Brooklyn, NY 11238</p>
          <a href="tel:718-857-2355"> (718) 857-2355</a>

      </div>
      <div className="hours">

          <p>Monday-Thursday: 5:30am-10pm</p>
          <p>Friday: 5:30am-8pm</p>
          <p>Saturday & Sunday: 9am-8pm</p>

      </div>
    </div>
    <div className="right">
      <div className="socials">
        <a href='#'>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href='#'>
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a href='#'>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
      </div>
      <div className="copyright">
        Copyright All Rights Reserved © 2017 | SEVENBELLFITNESS
      </div>
    </div>
  </div>
)

export default Base;
