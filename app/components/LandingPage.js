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

        {/* HERO */}
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

        {/* TOP FEATURES */}
        <div id="topFeatures">
          <div className="bkgImage cover"
            style={{
              background: 'url(../images/curves_bw.png) no-repeat center center',
              backgroundSize: 'cover'
            }}></div>
          <div className="gradient cover"></div>
          <div className="content">
            <div className="maxWidth">
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

        {/* 360 TOUR */}
        <div id="tour">
          <div className="bkgImage cover"
            style={{
              background: 'url(../images/360_placeholder.jpg) no-repeat center center',
              backgroundSize: 'cover'
            }}></div>
            <div className="title">
              <h2>360&deg; Tour</h2>
            </div>
            <button className="bigButton">
              Schedule A Tour
            </button>
            <div className="arrows">
              <i className="fa fa-fw fa-chevron-left" aria-hidden="true"></i>
              <i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>

        <div id="two">

          {/* LOCATION */}
          <div id="location" className='half'
            style={{
              background: 'url(../images/map.png) no-repeat center center',
              backgroundSize: 'cover'
            }}>
            <div className="map cover"></div>
            <div className="textBox">
              <h1>Location</h1>
              <p>640 Dean St.<br/>Brooklyn, NY 11238</p>
            </div>
            <div className="bottom">
              <div className="subways">
                <div className="subway">A</div>
                <div className="subway">C</div>
                <div className="subway">2</div>
                <div className="subway">3</div>
                <div className="subway">4</div>
                <div className="subway">B</div>
                <div className="subway">Q</div>
              </div>
              <a href='#'>Google Maps</a>
            </div>
          </div>

          {/* PERKS */}
          <div id="perks" className='half'
            style={{
              background: 'url(../images/kettle_bells2x.png) no-repeat center center',
              backgroundSize: 'cover'
            }}>
            <div className="top">
              <h1>Private<br/>Gym Perks</h1>
              <div className="box">
                It's not just a gym, it's a community
              </div>
            </div>
            <div className="bottom">
              <div className="perk">Cap On Memberships</div><br/>
              <div className="perk">Unmatched Customer Service</div><br/>
              <div className="perk">Never Wait For Equipment</div><br/>
              <div className="perk">Small Class Sizes</div>
            </div>
          </div>
        </div>

        {/* QUOTE */}
        <div id="quote"
          style={{
            background: 'url(../images/blue_gym.png) no-repeat center center',
            backgroundSize: 'cover'
          }}>
          <div className="content">
            <h1>The Best Private Gym Experience In Brooklyn <br/> Is SevenBell Fitness</h1>
          </div>
        </div>

        {/* YELP */}
        <div id="yelp">
          <h1>Our Members Love Us on Yelp!</h1>
          <div className="reviews">
            <Review image='6' name='Cody B.' quote="This has been my first time consistently going to a gym and working with a trainer and it's been a great experience." />
            <Review image='3' name='Christina R.' quote="My body has improved and [so has] my struggles with motivation and regularity… [I’m] excited to see what happens next!" />
            <Review image='5' name='Schuyler H.' quote="Can't recommend this gym enough to anyone who feels intimidated by gyms. You feel welcomed immediately." />
            <Review image='1' name='Jade B.' quote='Unlike other fitness chains, SevenBell staff puts in the effort to say hello and know you by name.' />
          </div>
          <div className="arrows">
            <i className="fa fa-fw fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>

        {/* EXPLORE */}
        <div id="explore"
          style={{
            background: 'url(../images/weights.png) no-repeat center center',
            backgroundSize: 'cover'
        }}>
          <div className='left'>
            <h1>Explore</h1>
            <div className="cta">
              <div className="center">
                <button className='bigButton'>Schedule A Tour</button>
                <p>
                  Call Now:
                  <a href="tel:718-857-2355"> (718) 857-2355</a>
                </p>
              </div>
            </div>
          </div>

          <div className="options">
            <div className="center">
              <Link to='memberships' className="option">
                <i className="fa fa-fw fa-tags" aria-hidden="true"></i>
                <h3>Membership Options</h3>
              </Link>
              <Link to='schedule' className="option">
                <i className="fa fa-fw fa-bullhorn" aria-hidden="true"></i>
                <h3>Private Classes</h3>
              </Link>
              <Link to='training' className="option">
                <i className="fa fa-fw fa-rocket" aria-hidden="true"></i>
                <h3>Personal Training</h3>
              </Link>
            </div>
          </div>

        </div>

        {/* PHILOSOPHY */}
        <div id="philosophy">

        </div>

        {/* SEVENBELL */}
        <div id="sevenBell">

        </div>

        {/* FOOTER */}
        <div id="footer">

        </div>
      </div>
    );
  }
}

const Review = (props) => (
  <div className="review">
    <div className="avatar">
      <img src={`../images/users/${props.image}.jpg`} />
    </div>
    <div className="stars">
      <i className="fa fa-fw fa-star" aria-hidden="true"></i>
      <i className="fa fa-fw fa-star" aria-hidden="true"></i>
      <i className="fa fa-fw fa-star" aria-hidden="true"></i>
      <i className="fa fa-fw fa-star" aria-hidden="true"></i>
      <i className="fa fa-fw fa-star" aria-hidden="true"></i>
    </div>
    <div className="quote">"{props.quote}"</div>
    <div className="name">- {props.name}</div>
  </div>
)

export default LandingPage;