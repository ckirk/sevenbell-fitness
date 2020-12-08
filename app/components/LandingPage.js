import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import GoogleMapReact from 'google-map-react';
import { loadHealcode, removeHealcode } from './healcode.js';

// import Marzipano from 'marzipano';
// import Pannellum from '360-react-pannellum';
import Pannellum from 'pannellum';

// Image Imports
import training from '../images/training.jpg'
import curves from '../images/curves_bw.png'
import logo from '../images/logo.png'
import glove from '../images/glove.png'

import member1 from '../images/members/1.jpg'
import member3 from '../images/members/3.jpg'
import member5 from '../images/members/5.jpg'
import member6 from '../images/members/6.jpg'
import pin from '../images/pin.svg'
import stadium from '../images/stadium3.png'
import pano1 from '../images/360_Pano.jpg'

import mapStyle from '../data/mapStyle.json'
import Popup from './Popup'
import TourPopup from './TourPopup'

// import curves from '../images/curves_bw.png'

// import SlideShow from 'SlideShow'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourOpen: false,
      tourMode: 'tour',
      sevenOpen: false,
      donateOpen: false,
      pano: null,
      panoCompatable: true,
      mailerEmail: null
    }
  };

  toggleTourPopup = (mode) => {
    // console.log("mode: " + mode)
    this.closePopup();
    this.setState({
      tourOpen: !this.state.tourOpen,
      tourMode: mode == 'eval' ? 'eval' : 'tour'
    });
  };

  toggleSevenPopup = () => {
    this.setState({
      sevenOpen: !this.state.sevenOpen
    });
  };

  toggleDonatePopup = () => {
    this.setState({
      donateOpen: !this.state.donateOpen
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const email = target.value;

    // console.log('email: ', event.target.value);

    this.setState({
      mailerEmail: email
    });
  }

  handleEmailSubmit = (event) => {
    alert('Email: ' + this.state.mailerEmail);
    event.preventDefault();
  }

  // handleScroll = (event) => {
  //   let currentYaw = this.state.pano.getYaw()
  //   console.log('yaw: ' + currentYaw)
  //
  //   let scrollTop = event.srcElement.body.scrollTop
  //   console.log('scrollTop: ' + scrollTop)
  //   console.log('------------')
  //   // let itemTranslate = Math.min(0, scrollTop/3 - 60)
  //
  //   // How to set Yaw
  //   this.state.pano.setYaw((scrollTop)/50, false)
  //
  //   this.setState({
  //     state: null
  //   });
  // };

  handleClickOutside = (event) => {
    if (event.target.classList.contains('popup')) {
      this.closePopup();
    }
  };

  // test for WebGL support
  webgl_support = () => {
    try {
      var canvas = document.createElement('canvas');
      return !!window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch(e) {
      return false;
    }
  };

  closePopup = () => {
    this.setState({
      tourOpen: false,
      sevenOpen: false,
      donateOpen: false
    });
  };

  componentDidMount() {
    // console.log('mounted!');
    // window.addEventListener('scroll', this.handleScroll);
    loadHealcode()
    let pano = pannellum.viewer('pano', {
      "type": "equirectangular",
      "panorama": pano1,
      "autoLoad": true,
      "autoRotate": -1,
      "compass": false,
      "showZoomCtrl": false,
      "showFullscreenCtrl": false,
      "showControls": false,
      "autoRotateInactivityDelay": 3000,
      "mouseZoom": false,
      "yaw": 20,
      "pitch": -12,
    });

    // test for WebGL support
    let panoCompatable;
    if (this.webgl_support()) {
      panoCompatable = true;
    } else {
      panoCompatable = false;
    }

    this.setState({
      pano: pano,
      panoCompatable: panoCompatable
    });
  }

  componentWillUnmount () {
    removeHealcode()
  }

  render() {
    return (
      <div id='landingPage'>

        {/* <Modal open={true} /> */}

        {/* HERO */}
        <div className="hero landingHero"
          style={{
            background: `url(${training}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
          <div className="gradient"></div>
          <div className="content">
            <h1>Brooklyn's #1 Private Gym is Back!</h1>
            <button className='bigButton' onClick={this.toggleTourPopup}>Schedule A Tour Here</button>
            <p>
              Call Now:
              <a href="tel:718-857-2355"> (718) 857-2355</a>
            </p>
          </div>
          {/* <div className="bottom">
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
          </div> */}

        </div>

        {/* CORONA */}
        <div id="corona" className="section">
          <div className="bkgImg"></div>
          <div className="colorOverlay"></div>
          <div className="content">
            <h1>What's New?</h1>
            <p>
              There is no better option than SevenBell Fitness to experience a private workout, perfectly paired with a friendly, clean, and safe environment.
            </p>

            <a href="http://mndbdy.ly/e/283341" target="_blank">
              <button className='bigButton btnWhite'>
                Get the App Here
              </button>
            </a>

            <p>
              Our facility has always been a private gym. Now with reservations required, we go from private to exclusive! Be a part of the movement! Reserve your spot on our app today!
            </p>
            <p>
              We understand that returning to the gym may not feel right for everyone at this time. It is with this in mind that we have reinvented our Virtual Membership options! We have a full schedule of live streaming virtual classes, an archive of all our recorded classes, and the option to work wit  h a trainer virtually!
            </p>
            <p>Check our Class Schedule below and drop in to one of our premiere classes:</p>

            <Link to='/schedule'>
              <button className='bigButton btnWhite'>
                Live Online Classes
              </button>
            </Link>


            {/* <h1>What's New?</h1>
            <p>
              We haven’t stopped and neither should you!
            </p>
            <p>
              SevenBell Fitness might be temporarily closed, but that doesn’t mean we are inactive. That’s not our style. We have been busy growing our digital arm (we’ve always been about gains!)
            </p>
            <h2>We're now offering online donation based classes!</h2>
            <p>
              Classes include Yoga, The Body, Bootynomics, Fat Burning Pilates and Guns n’ Poses. Don’t worry about equipment. These classes are especially designed for quarantine time!
            </p> */}

            {/* <Link to='/schedule'>
              <button className='bigButton btnWhite'>
                Live Online Classes
              </button>
            </Link> */}

            {/* <p>
              You can also reserve your spot on our app for easier access and to see what other virtual services we're offering.
            </p> */}

            {/* <a href="http://mndbdy.ly/e/283341" target="_blank">
              <button className='bigButton btnWhite'>
                Get the App
              </button>
            </a> */}

            {/* <p>
              If you have any questions about our online classes, 1 on 1 virtual training program, or small group training services feel free to <a href="mailto:info@sevenbellfitness.com">email us</a> and we'll be quick to reply!
            </p>

            <br/>
            <healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="Get 5 Sessions for $325" data-service-id="10604" />
            <br/> <br/>

            <p>
              We also want to acknowledge that these are difficult times, and as a community center we are now turning to the community for their support. Please help us get to the other end of this so we can continue our time as a mainstay in this community that we love so much on the other side of this pandemic
            </p>
            <button className='bigButton btnWhite' onClick={this.toggleDonatePopup}>
              Support SevenBell Fitness
            </button>

            <p>
              Stay safe, stay home, and see you online!
            </p> */}

          </div>
        </div>

        {/* TOP FEATURES */}
        <div id="topFeatures" className="section">
          <div className="bkgImage cover"></div>
          <div className="gradient cover"></div>
          <div className="content">
            <div className="center">
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
                  <i className="fa fa-fw fa-lock" aria-hidden="true"></i>
                </div>
                <div className="featureText">
                  Unmatched Privacy
                </div>
              </div>

              <div className="featureContainer">
                <div className="featureIcon">
                  {/* <i className="fa fa-fw fa-building" aria-hidden="true"></i> */}
                  <img src={glove} alt="" />
                </div>
                <div className="featureText">
                  State of the Art Boxing & Training Facility
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

        {/* true && expression always evaluates to expression, and false && expression always evaluates to false. */}
        {/* 360 TOUR */}

        { this.state.panoCompatable &&
          <div id="tour" className="section">
            <div className="bkgImage cover">
              <div id="pano"></div>
            </div>
            <div className="title">
              <h2>360&deg; Tour</h2>
            </div>
            <button className="bigButton" onClick={this.toggleTourPopup}>
              Schedule A Tour
            </button>
            <div className="arrows">
              <i className="fa fa-fw fa-chevron-left" aria-hidden="true"></i>
              <i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
            </div>
          </div>
        }

        <div id="two">

          {/* LOCATION */}
          <div id="location" className='half section'>
            <div className="map cover">
              <Map />
            </div>
            <div className="textBox">
              <h1>Location</h1>
              <p>640 Dean St.<br/>Brooklyn, NY 11238</p>
            </div>
            <div className="bottom">
              <div className="subways">
                <div className="subway blue">A</div>
                <div className="subway blue">C</div>
                <div className="subway red">2</div>
                <div className="subway red">3</div>
                <div className="subway green">4</div>
                <div className="subway orange">B</div>
                <div className="subway yellow">Q</div>
              </div>
              <a href='https://www.google.com/maps/place/SevenBell+Fitness/@40.6802876,-73.971325,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba5b814cd3d:0x257bc11a2006f8e2!8m2!3d40.6802836!4d-73.9691363'>Open in Google Maps</a>
            </div>
          </div>

          {/* PERKS */}
          <div id="perks" className='half section'>
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
        <div id="quote" className="section">
          <div className="content">
            <h2>The Best Private Gym Experience In Brooklyn <br/> Is SevenBell Fitness</h2>
          </div>
        </div>

        {/* YELP */}
        <div id="yelp" className="section">
          <h2>Our Members Love Us on Yelp!</h2>
          <div className="mobileLogo">
            <i className="fa fa-yelp" aria-hidden="true"></i>
          </div>
          <div className="reviews">
            <Review image={member6} name='Cody B.' quote="This has been my first time consistently going to a gym and working with a trainer and it's been a great experience." />
            <Review image={member3} name='Christina R.' quote="My body has improved and [so has] my struggles with motivation and regularity… [I’m] excited to see what happens next!" />
            <Review image={member5} name='Schuyler H.' quote="Can't recommend this gym enough to anyone who feels intimidated by gyms. You feel welcomed immediately." />
            <Review image={member1} name='Jade B.' quote='Unlike other fitness chains, SevenBell staff puts in the effort to say hello and know you by name.' />
          </div>
          {/* <div className="arrows">
            <i className="fa fa-fw fa-chevron-left" aria-hidden="true"></i>
            <i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
          </div> */}
        </div>

        {/* EXPLORE */}
        <div id="explore" className="section">
          <div className='left'>
            <h1>Explore</h1>
            <div className="cta">
              <div className="center">
                <button className='bigButton' onClick={this.toggleTourPopup}>Schedule A Tour</button>
                <p>
                  Call Now:
                  <a href="tel:718-857-2355"> (718) 857-2355</a>
                </p>
              </div>
            </div>
          </div>

          <div className="options">
            <div className="center">
              <Link to='/memberships' className="option">
                <i className="fa fa-fw fa-tags" aria-hidden="true"></i>
                <h3>Membership Options</h3>
              </Link>
              <Link to='/schedule' className="option">
                <i className="fa fa-fw fa-bullhorn" aria-hidden="true"></i>
                <h3>Private Classes</h3>
              </Link>
              <Link to='/training#top' className="option">
                <i className="fa fa-fw fa-rocket" aria-hidden="true"></i>
                <h3>Personal Training</h3>
              </Link>
            </div>
          </div>

          <div className="mobileCta">
            <div className="cta">
              <div className="center">
                <button className='bigButton' onClick={this.toggleTourPopup}>Schedule A Tour</button>
                <p>
                  Call Now:
                  <a href="tel:718-857-2355"> (718) 857-2355</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* PHILOSOPHY */}
        {/* <div id="philosophy">
          <h1>Our Philosophy</h1>
          <div className="steps">
            <div className="center">
              <div className="step">
                <i className="fa fa-fw fa-balance-scale" aria-hidden="true"></i>
                <h2>Assess</h2>
                <p>Our assessment acts as a snapshot of your current state of fitness</p>
                <div className="buttonContainer">
                  <button onClick={this.toggleAssessPopup}>
                    Learn More
                  </button>
                </div>
              </div>

              <div className="step">
                <i className="fa fa-fw fa-calendar-check-o" aria-hidden="true"></i>
                <h2>Plan</h2>
                <p>The results of the assessment allow our trainers to create the best plan to get you to your goals based on your body type</p>
                <div className="buttonContainer">
                  <button onClick={this.togglePlanPopup}>
                    Learn More
                  </button>
                </div>
              </div>

              <div className="step">
                <i className="fa fa-fw fa-line-chart" aria-hidden="true"></i>
                <h2>Progress</h2>
                <p>Results are earned, and if you follow our program, you will have earned them</p>
                <div className="buttonContainer">
                  <button onClick={this.toggleProgressPopup}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* SEVENBELL */}
        <div id="sevenBell" className="section">
          <div className="sevenPic">
            {/* <img src='../images/seven_hoodie.png' /> */}
          </div>
          <div className="content">
            <h1>Who is SevenBell?</h1>
            <p>If you’re ready to take your body to the next level and train with the best, make your next workout with Seven Bell himself.</p>
            <div className="buttons">
              <button onClick={this.toggleSevenPopup}>Learn More</button>
              <Link to='/training#seven' className="button">
                <button>Train with SevenBell</button>
              </Link>
            </div>
          </div>

        </div>

        {/* SUBSCRIBE */}
        <div id="subscribe" className="section">
          <h1>Don't Miss Out</h1>
          <p>Stay tuned for new arrivals, exclusive offers, and events.</p>

          {/* OLD FORM (with react handler function) */}
          {/* <form>
            <input className='inline' type="text" name="email" placeholder="Enter your email for exclusive offers" onChange={this.handleInputChange} />
            <input type="submit" value="Sign me up" onClick={this.handleEmailSubmit} />
          </form> */}

          {/* <!-- Begin MailChimp Signup Form --> */}

          <div id="mc_embed_signup">
            <form action="https://sevenbellfitness.us18.list-manage.com/subscribe/post?u=9eff37978d50bda147c9cb859&amp;id=df73fef1d5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <input type="email" name="EMAIL" placeholder="Enter your email for exclusive offers" id="mce-EMAIL" className='inline' />

                <div id="mce-responses" style={{display: 'inline-block'}} className="clear">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>

                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_9eff37978d50bda147c9cb859_df73fef1d5" value="" />
                </div>
                <input type="submit" value="Sign me up" name="subscribe" id="mc-embedded-subscribe" />

              </div>
            </form>
          </div>

          {/* <!--End mc_embed_signup--> */}

        </div>

        {/* POPUPS ///////////////////// */}

        <Popup open={this.state.tourOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <TourPopup mode={this.state.tourMode} />
        </Popup>

        <Popup open={this.state.donateOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="donatePopup">
            <h2>How Much Would You Like <br/>to Donate?</h2>
            <br/>
            {/* <script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript"></script> */}
            <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$25" data-service-id="10606" />
            <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$50" data-service-id="10607" />
            <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$100" data-service-id="10608" />
            <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$150" data-service-id="10609" />
            <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$250" data-service-id="10610" />
            <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$300" data-service-id="10611" />
          </div>
        </Popup>

        {/* <Popup open={this.state.assessOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="content philosophy">
            <div className="header">
              <h1><i className="fa fa-fw fa-balance-scale" aria-hidden="true"></i>Assess</h1>
            </div>
            <div className="body">
              <p>
                Once you sign up with us one of our trainers will take you through one of our popular assessments! This assessment will be kept as a record of your measurements and performance when you first signed up. Essentially, this acts as a snapshot of your current state of fitness. We take your body measurements, body fat percentage, and put you through a performance test so that we can design the best personal training program to get you to your goals.
              </p>
              <div className="buttonContainer">
                <button className="bigButton" onClick={() => this.toggleTourPopup('eval')}>
                  Book Your Free Assessment
                </button>
              </div>
            </div>
          </div>
        </Popup>

        <Popup open={this.state.planOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="content philosophy">
            <div className="header">
              <h1><i className="fa fa-fw fa-calendar-check-o" aria-hidden="true"></i>Plan</h1>
            </div>
            <div className="body">
              <p>
                The assessment allows our personal trainers to determine your body type and develop a program that will safely and correctly guide you to your goals. We keep it fun too! Don’t get stuck with the same boring workouts! We will set you up with a fun and diverse program that appropriately incorporates everything from boxing to weight training. If functional training or rehabilitation is required, we can address those needs too!
              </p>
              <div className="buttonContainer">
                <button className="bigButton" onClick={() => this.toggleTourPopup('eval')}>
                  Book Your Free Assessment
                </button>
              </div>
            </div>
          </div>
        </Popup>

        <Popup open={this.state.progressOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="content philosophy">
            <div className="header">
              <h1><i className="fa fa-fw fa-line-chart" aria-hidden="true"></i>Progress</h1>
            </div>
            <div className="body">
              <p>
                Track the progress you make with us here at Brooklyn’s best private gym experience! With a proper assessment of your current state of fitness and proper planning based on your body type, results are all but guaranteed, just trust the process. So what are you waiting for? Come get the steps of your fitness journey started here with us at SevenBell Fitness.
              </p>
              <div className="buttonContainer">
                <button className="bigButton" onClick={() => this.toggleTourPopup('eval')}>
                  Book Your Free Assessment
                </button>
              </div>
            </div>
          </div>
        </Popup> */}

        <Popup open={this.state.sevenOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="content seven">
            <div className="header">
              <h1>Who is SevenBell?</h1>
            </div>
            <div className="body">
              <p>
                Seven Bell is a hard-nose personal trainer/motivator and most importantly a leader. When it comes to getting the best out of you, this is your guy. Seven has created a very serious reputation in NY/LA for his mental toughness and his pursuit to being the best. A perfectionist at his craft and very result driven, Seven has been in the fitness business for 20 years. His passion for helping people reach their goals in fitness is unparalleled. Seven’s philosophy in life is very simple, and describes him to the tee, “Raise the bar.” This gym is built from the eye of Seven Bell himself, and he subscribes to the ideology that the quality of your training and level of fitness determines the quality of your mindset, and therefore has an important impact on your life. Seven and his staff have helped exercise this philosophy in his members’ fitness experiences. Now people all over Brooklyn are experiencing and achieving the bodies of their dreams.
              </p>
            </div>
          </div>
        </Popup>

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

const Marker = ({ text }) => (
  <div id='pin'>
    <img src={pin} />
  </div>
);

const Barclays = ({ text }) => (
  <div id='stadium'>
    <img src={stadium} />
  </div>
);

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 40.683603, lng: -73.972470},
    zoom: 15
  };

  render() {
    return (
       <GoogleMapReact
         bootstrapURLKeys={{
          key: 'AIzaSyAUjolc0x3PiWc0jAr0eG9cR_s1QnYIJbU'
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        options={{
          styles: mapStyle,
          scrollwheel: false,
        }}>
        <Marker
          lat={40.680319}
          lng={-73.969135}
        />
        <Barclays
          lat={40.682828}
          lng={-73.975840}
        />
      </GoogleMapReact>
    );
  }
}

export default LandingPage;
