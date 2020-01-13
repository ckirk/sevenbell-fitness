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
                  description='Access to private facility and classes'
                  price={100}
                  perks={['Private gym access', 'Private classes', 'One fitness assessment']}
            />
            <Tier name='Formula7'
                  description='With this option the training is your membership. There are no additinal fees'
                  // price={125}
                  perks={['Lowest overall cost', 'Lowest training cost', 'Private gym access', 'Private classes']}
                  bottomText='Price varies depending on the frequency of training'
                  center={true}
            />
            <Tier name='Preferred'
                  description="Guidance with no comittment"
                  price={135}
                  perks={['Private gym access', 'Private classes', 'Monthly fitness assessment', 'Access to our training program']}
            />
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
        {props.perks.map((perk, index) => {
          return (
            <p key={index}>
              <i className="fa fa-fw fa-check" aria-hidden="true"></i>
              {perk}
            </p>
          )
        })}
      </div>
    </div>
    <div className="bottom">
      { props.price ? <h2>${props.price}<span>/mo</span></h2> : ''}
      { props.bottomText ? <h4>{props.bottomText}</h4> : ''}
    </div>
  </div>
)

export default Memberships;
