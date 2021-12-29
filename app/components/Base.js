import React, { PropTypes, useEffect, useState } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { loadHealcode, removeHealcode } from './healcode.js';

import logo from '../images/logo.png'

const Base = (props) =>  {

  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)

  useEffect(() => {
    // load healcode js once here - should be available for all other pages
    loadHealcode()
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  };

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
            <i className="fa fa-fw fa-bars" aria-hidden="true" onClick={toggleMobileMenu}></i>
          </div>

          <div className={"MobileNavMenu" + (mobileMenuOpen? ' show ' : '')}>
            <Link to='/' activeClassName='active' onClick={toggleMobileMenu}>Home</Link>
            <a href='http://mndbdy.ly/e/283341'>Get The App</a>
            <Link to='/memberships' activeClassName='active' onClick={toggleMobileMenu}>Memberships</Link>
            <Link to='/schedule' activeClassName='active' onClick={toggleMobileMenu}>Streaming Live Classes</Link>
            <Link to='/book-gym-time' activeClassName='active' onClick={toggleMobileMenu}>Book Gym Time</Link>
            <Link to='/training' activeClassName='active' onClick={toggleMobileMenu}>Personal Training</Link>
          </div>
        </div>

        {props.children}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
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
          <p>Monday-Thursday: 7am-9pm</p>
          <p>Friday: 7am-8pm</p>
          <p>Saturday: 8:30am-4pm</p>
          <p>Sunday: 8am-1pm</p>
      </div>
    </div>
    <div className="trainer">
      <p>Working with a trainer? Enjoy our facility when others can’t!</p>
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
