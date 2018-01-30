import React, { Component } from 'react';
import bkgImage from '../images/ropes.png'
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

        <TourPopup open={this.state.tourOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside} />

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
              Which one of our 3 memberships are right for you?
            </p>
            <button className='bigButton' onClick={this.toggleTourPopup}>Schedule A Tour</button>
          </div>
        </div>

        <div className="contentBkg">
          <div className="memberships">
            <Tier name='Basic'
                  description='Access to private facility and classes'
                  price={90}
                  perks={['Private gym access', 'Private classes', 'One fitness assessment']}
            />
            <Tier name='VIP'
                  description="I’m comitted to my body"
                  price={140}
                  perks={['Private gym access', 'Private classes', 'Monthly fitness assessment', 'Supplement starter kit', 'Lowest training cost']}
                  center={true}
            />
            <Tier name='Preferred'
                  description='Guidance with no comittment'
                  price={130}
                  perks={['Private gym access', 'Private classes', 'Monthly fitness assessment', 'Discount training price', 'Discount enrollment']}
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
      <h2>${props.price}<span>/mo</span></h2>
    </div>
  </div>
)

export default Memberships;
