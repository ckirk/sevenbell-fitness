import React, { Component } from 'react';
import bkgImage from '../images/pushup.jpg';
import { loadHealcode, removeHealcode } from './healcode.js';

class BookGymTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  componentDidMount () {
    loadHealcode()
  }

  componentWillUnmount () {
    removeHealcode()
  }

  render() {

    return (
      <div id='schedule' className='supportPage'>

        {/* HERO */}
        <div className="hero"
          style={{
            background: `url(${bkgImage}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
          <div className="gradient"></div>
          <div className="content">
            <h1>Book Gym Time</h1>
          </div>
        </div>

        <div className="contentBkg">
          <div className="healthcodeWidget">
            <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="7f1507667cf6" data-widget-version="1" ></healcode-widget>
          </div>

        </div>

      </div>
    );
  }
}

export default BookGymTime;
