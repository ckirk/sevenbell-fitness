import React, { Component } from 'react';
import bkgImage from '../images/high_five.png'

import Popup from './Popup'
import TourPopup from './TourPopup'

import Trainers from '../data/Trainers'

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourOpen: false,
      whySevenBellOpen: false
    }
  };

  toggleTourPopup = () => {
    this.closePopup();
    this.setState({
      tourOpen: !this.state.tourOpen
    });
  };

  toggleWhySevenBellPopup = () => {
    this.closePopup();
    this.setState({
      whySevenBellOpen: !this.state.whySevenBellOpen
    });
  };

  handleClickOutside = (event) => {
    if (event.target.classList.contains('popup')) {
      this.closePopup();
    }
  };

  closePopup = () => {
    this.setState({
      tourOpen: false,
      whySevenBellOpen: false
    });
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
            <button className='bigButton' onClick={this.toggleTourPopup}>I'm Ready!</button>
            <button className='bigButton' onClick={this.toggleWhySevenBellPopup}>Why Train at SevenBell Fitness?</button>
          </div>
        </div>

        <div className="contentBkg">
          {Trainers.map((trainer, index) => {
            return (
              <Trainer name={trainer.name} bio={trainer.bio} image={trainer.image} skills={trainer.skills} certifications={trainer.certifications} key={index} />
            )
          })}
        </div>

        {/* I'm Ready Popup */}
        <Popup open={this.state.tourOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <TourPopup />
        </Popup>


        {/* Why SevenBell Popup */}
        <Popup open={this.state.whySevenBellOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="content philosophy">
            <div className="header">
              <h1>Why Train at SevenBell Fitness?</h1>
            </div>
            <div className="body">
              <p>
                Most gyms offer personal training. They all say they do it best. That sounds good when you see advertised, but at SevenBell Fitness we don’t just do training, we live it. True professionals at heart are not just doing training sessions, not just telling you what you want to hear, but holding you accountable to what you started. We are a results driven, private gym that gives you 100% of ourselves because your goal is our goal. Training done correctly, truly correctly, will always result in body transformation in a reasonable time frame.
              </p>
            </div>
          </div>
        </Popup>

      </div>
    );
  }
}

const Trainer = (props) => (
  <div className='trainerContainer'>
    <div className="top">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="right">
        <h1>{props.name}</h1>

        {props.certifications.length > 0 ?
          <div>
            <h5>Certifications:</h5>
            <div className="skills">
              {props.certifications.map((skill, index) =>
                <div className='skill' key={index}>{skill}</div>
              )}
            </div>
          </div>
        :
        null
        }

        <h5>Specialties:</h5>
        <div className="skills">
          {props.skills.map((skill, index) =>
            <div className='skill' key={index}>{skill}</div>
          )}
        </div>
      </div>
    </div>
    {/* <div className="bio">
      <p>{props.bio}</p>
    </div> */}

  </div>
)

export default Training;
