import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

// Image Imports
import training from '../images/training.jpg'
import curves from '../images/curves_bw.png'
import logo from '../images/logo.png'

import member1 from '../images/members/1.jpg'
import member3 from '../images/members/3.jpg'
import member5 from '../images/members/5.jpg'
import member6 from '../images/members/6.jpg'

// import curves from '../images/curves_bw.png'

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
            background: `url(${training}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
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
          <div className="bkgImage cover"></div>
          <div className="gradient cover"></div>
          <div className="content">
            <div className="center">
              <div className="featureContainer">
                <div className="featureIcon">
                  <i className="fa fa-fw fa-trophy" aria-hidden="true"></i>
                </div>
                <div className="featureText">
                  Nationally Certified Trainers
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
          <div className="bkgImage cover"></div>
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
          <div id="location" className='half'>
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
          <div id="perks" className='half'>
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
        <div id="quote">
          <div className="content">
            <h2>The Best Private Gym Experience In Brooklyn <br/> Is SevenBell Fitness</h2>
          </div>
        </div>

        {/* YELP */}
        <div id="yelp">
          <h2>Our Members Love Us on Yelp!</h2>
          <div className="reviews">
            <Review image={member6} name='Cody B.' quote="This has been my first time consistently going to a gym and working with a trainer and it's been a great experience." />
            <Review image={member3} name='Christina R.' quote="My body has improved and [so has] my struggles with motivation and regularity… [I’m] excited to see what happens next!" />
            <Review image={member5} name='Schuyler H.' quote="Can't recommend this gym enough to anyone who feels intimidated by gyms. You feel welcomed immediately." />
            <Review image={member1} name='Jade B.' quote='Unlike other fitness chains, SevenBell staff puts in the effort to say hello and know you by name.' />
          </div>
          <div className="arrows">
            <i className="fa fa-fw fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>

        {/* EXPLORE */}
        <div id="explore">
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
          <h1>Our Philosophy</h1>
          <div className="steps">
            <div className="center">
              <div className="step">
                <i className="fa fa-fw fa-balance-scale" aria-hidden="true"></i>
                <h2>Assess</h2>
                <p>Our assessment acts as a snapshot of your current state of fitness</p>
                <div className="buttonContainer">
                  <button>
                    Learn More
                  </button>
                </div>
              </div>

              <div className="step">
                <i className="fa fa-fw fa-calendar-check-o" aria-hidden="true"></i>
                <h2>Plan</h2>
                <p>The results of the assessment allow our trainers to create the best plan to get you to your goals based on your body type</p>
                <div className="buttonContainer">
                  <button>
                    Learn More
                  </button>
                </div>
              </div>

              <div className="step">
                <i className="fa fa-fw fa-line-chart" aria-hidden="true"></i>
                <h2>Progress</h2>
                <p>Results are earned, and if you follow our program, you will have earned them</p>
                <div className="buttonContainer">
                  <button>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEVENBELL */}
        <div id="sevenBell">
          <div className="sevenPic">
            {/* <img src='../images/seven_hoodie.png' /> */}
          </div>
          <div className="content">
            <h1>Who is SevenBell?</h1>
            <p>If you’re ready to take your body to the next level and train with the best, make your next workout with Seven Bell himself.</p>
            <div className="buttons">
              <button>Learn More</button>
              <button>Train with SevenBell</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const Review = (props) => (
  <div className="review">
    <div className="avatar">
      <img src={props.image} />
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
    <div className="logo">
      <i className="fa fa-yelp" aria-hidden="true"></i>
    </div>
  </div>
)

export default LandingPage;
