import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// import SlideShow from 'SlideShow'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  };

  render() {
    return (
      <div id='landingPage'>

        <div className="hero"
          style={{
            background: 'url(../images/training.jpg) no-repeat center center',
            backgroundSize: 'cover'
          }}
        >
          <div className="gradient"></div>
          <div className="content">
            <h1>Brooklyn's #1 Private Gym</h1>
            <button className='bigButton'>Schedule A Tour</button>
            <p>
              Call Now:
              <a href="tel:718-857-2355"> (718) 857-2355</a>
            </p>
          </div>
          <div className="bottom">
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
          </div>

        </div>

        <div id="topFeatures">
          <div className="bkgImage cover"
            style={{
              background: 'url(../images/curves_bw.png) no-repeat center center',
              backgroundSize: 'cover'
            }}></div>
          <div className="gradient cover"></div>
          <div className="content">
            <div className="featureContainer">
              <div className="featureIcon">
                <i className="fa fa-fw fa-trophy" aria-hidden="true"></i>
              </div>
              <div className="featureText">
                Nationally Certified Personal Trainers
              </div>
            </div>

            <div className="featureContainer">
              <div className="featureIcon">
                <i className="fa fa-fw fa-building" aria-hidden="true"></i>
              </div>
              <div className="featureText">
                State of the Art Facility
              </div>
            </div>

            <div className="featureContainer">
              <div className="featureIcon">
                <i className="fa fa-fw fa-lock" aria-hidden="true"></i>
              </div>
              <div className="featureText">
                Unmatched <br/> Privacy
              </div>
            </div>

            <div className="featureContainer">
              <div className="featureIcon">
                <i className="fa fa-fw fa-heartbeat" aria-hidden="true"></i>
              </div>
              <div className="featureText">
                Small Group Fitness Classes
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
