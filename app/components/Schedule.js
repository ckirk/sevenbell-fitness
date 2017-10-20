import React, { Component } from 'react';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  render() {
    return (
      <div id='schedule' className='supportPage'>

        {/* HERO */}
        <div className="hero"
          style={{
            background: 'url(../images/pushup.jpg) no-repeat center center',
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

      </div>
    );
  }
}

export default Schedule;
