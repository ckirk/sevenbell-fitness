import React, { Component } from 'react';
import bkgImage from '../images/pushup.jpg';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  componentDidMount () {
    // Healthcode dumps all these bs scripts into the document the first time you load it
    // always fails the second time the components mounts with the scripts already loaded
    // the below tests for the presence of one of these bs scripts and simply refreshes the page if it finds one so that all the scripts get reinjected like the first time
    if (document.querySelector('script[src="https://assets.healcode.com/assets/healcode.yepnope-23af02e66170f2455f54b54cf8bbb19d15a2446cd81dfcbb9c4390c5a0ef4a4a.js"]')) {
      location.reload();
    } else {
      // load mindbody scedule embed script
      let script = document.createElement("script");

      script.src = "https://widgets.healcode.com/javascripts/healcode.js";
      script.type = 'text/javascript'
      script.async = true;

      document.body.appendChild(script);
    }
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
