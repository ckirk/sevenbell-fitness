import React, { Component } from 'react';
import bkgImage from '../images/high_five.png'


class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  render() {
    return (
      <div id='training' className='supportPage'>

        {/* HERO */}
        <div className="hero"
          style={{
            background: `url(${bkgImage}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
          <div className="gradient"></div>
          <div className="content">
            <h1>Personal Training</h1>
            <p>
              Our nationally certified personal trainers are dedicated to getting your mind and body where they need to be to achieve your goals! Start the process and watch the results come!
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Training;
