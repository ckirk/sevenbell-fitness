import React, { Component } from 'react';
import bkgImage from '../images/pushup.jpg'

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  componentWillMount () {
    // load mindbody scedule embed script
    console.log('boom!')
    let script = document.createElement("script");

    script.src = "https://widgets.healcode.com/javascripts/healcode.js";
    script.type = 'text/javascript'
    script.async = true;

    document.body.appendChild(script);
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
            <h1>Schedule</h1>
            <p>
              Use our class schedule to supplement your weight training! With everything from Boxing to Pilates you are sure to find something for you!
            </p>
          </div>
        </div>

        <div className="contentBkg">
          <div className="healthcodeWidget">
            <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="cb506490148" data-widget-version="1"></healcode-widget>
          </div>
        </div>

      </div>
    );
  }
}

export default Schedule;
