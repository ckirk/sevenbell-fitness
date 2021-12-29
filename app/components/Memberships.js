import React, { Component } from 'react';
import bkgImage from '../images/ropes.png'
import Popup from './Popup'
import TourPopup from './TourPopup'

class Memberships extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tourOpen: false }
  };

  toggleTourPopup = () => {
    this.closePopup();
    this.setState({
      tourOpen: !this.state.tourOpen
    });
  };

  handleClickOutside = (event) => {
    if (event.target.classList.contains('popup')) {
      this.closePopup();
    }
  };

  closePopup = () => {
    this.setState({
      tourOpen: false
    });
  };

  render() {
    return (
      <div id='memberships' className='supportPage'>

        <Popup open={this.state.tourOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <TourPopup />
        </Popup>

        {/* HERO */}
        <div className="hero"
          style={{
            background: `url(${bkgImage}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
          <div className="gradient"></div>
          <div className="content">
            <h1>Memberships</h1>
            <p>
              At SevenBell Fitness, we work for you! Our memberships and training programs are customizable to best fit your goals, your time, and your budget. While we reward hard work with more affordable training rates, we have something for everyone at every level of fitness!
            </p>

            <button className='bigButton' onClick={this.toggleTourPopup}>Schedule A Tour</button>
          </div>
        </div>

        <div className="contentBkg">
          <div className="memberships">
            <Tier name='Basic'
                  description="I'm Just Here For The Privacy"
                  price={120}
                  perks={[
                    'Private Gym Access',
                    '2 Small Group Training Sessions Each Month',
                    'Requires 3 month commitment to start'
                  ]}
            />
            <Tier name='Formula7'
                  description='Training Is Your Membership With No Additional Fees'
                  // price={125}
                  perks={[
                    'Lowest Overall Cost /Highest Overall Savings',
                    'A Personal Training Experience At Least 2X Per Week',
                    'Access To Private Gym',
                    '10% Off Small Group Training Sessions (No Small Group Training Classes Are Included In This Membership)'
                  ]}
                  bottomText='Price Varies Based On Frequency'
                  center={true}
            />
            <Tier name='Preferred'
                  description="Perfect For Someone Looking For A Little Guidance"
                  price={145}
                  perks={[
                    'Private Gym Access',
                    'Access To Our Training Programs',
                    '1 Fitness Assessment Each Month',
                    '4 Small Group Training Sessions Each Month'
                  ]}
            />
          </div>
          <div className='bottom'>
            <div>
              All memberships are subject to a $149 Enrollment and Processing Fee
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const Tier = (props) => (
  <div className={"tier " + (props.center? 'center' : '')}>
    <div className="top">
      <h1>{props.name}</h1>
      <div className="line"></div>
      <h3>{props.description}</h3>
    </div>
    <div className="perksContainer">
      <div className="perks">
        <ul>
          {props.perks.map((perk, index) => {
            return (
              <li key={index}>
                {perk}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <div className="bottom">
      { props.price ? <h2>${props.price}<span>/mo</span></h2> : ''}
      { props.bottomText ? <h4>{props.bottomText}</h4> : ''}
    </div>
  </div>
)

export default Memberships;
