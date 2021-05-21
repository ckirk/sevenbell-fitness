import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import logo from '../images/logo.png'

// import SlideShow from 'SlideShow'

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInModal: false,
      mobileMenuOpen: false
    }
  };

  toggleMobileMenu = () => {
    // console.log('menu toggle!');
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    });
  };

  render() {
    return (
      <div id='base'>
        <div className="contentWrapper">

          {/* HEADER */}
          <div id="header">
            <div className="logo">
              <Link to='/' >
                <img src={logo} />
              </Link>
            </div>
            <div className="navMenu">
              <a href='http://mndbdy.ly/e/283341'>Get The App</a>
              <Link to='/memberships' activeClassName='active'>Memberships</Link>
              <Link to='/schedule' activeClassName='active'>Streaming Live Classes</Link>
              <Link to='/book-gym-time' activeClassName='active'>Book Gym Time</Link>
              <Link to='/training' activeClassName='active'>Personal Training</Link>
            </div>
            <div className="MobileMenuBtn">
              <i className="fa fa-fw fa-bars" aria-hidden="true" onClick={this.toggleMobileMenu}></i>
            </div>
            <div className={"MobileNavMenu" + (this.state.mobileMenuOpen? ' show ' : '')}>
              <Link to='/' activeClassName='active' onClick={this.toggleMobileMenu}>Home</Link>
              <a href='http://mndbdy.ly/e/283341'>Get The App</a>
              <Link to='/memberships' activeClassName='active' onClick={this.toggleMobileMenu}>Memberships</Link>
              <Link to='/schedule' activeClassName='active' onClick={this.toggleMobileMenu}>Streaming Live Classes</Link>
              <Link to='/book-gym-time' activeClassName='active' onClick={this.toggleMobileMenu}>Book Gym Time</Link>
              <Link to='/training' activeClassName='active' onClick={this.toggleMobileMenu}>Personal Training</Link>
            </div>
          </div>

          {this.props.children}
        </div>

        {/* FOOTER */}
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
          <p>Monday-Thursday: 7:30am-8:30pm</p>
          <p>Friday: 7:30am-8pm</p>
          <p>Saturday: 8:30am-4pm</p>
          <p>Sun: closed for deep cleaning to keep our members safe</p>
      </div>
    </div>
    <div className="right">
      <div className="socials">
        <a href='https://www.instagram.com/7bellfitness/'>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href='https://www.facebook.com/sevenbellfitness'>
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        {/* <a href='#'>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a> */}
      </div>
      <div className="copyright">
        Copyright All Rights Reserved © {new Date().getFullYear()} | SEVENBELLFITNESS
      </div>
    </div>
  </div>
)

export default Base;
