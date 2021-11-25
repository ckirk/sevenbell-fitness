import React, { useState, useEffect } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import GoogleMapReact from 'google-map-react';
import { loadHealcode, removeHealcode } from '../healcode.js';

// Image Imports
import training from '../../images/training.jpg'
import curves from '../../images/curves_bw.png'
import logo from '../../images/logo.png'
import glove from '../../images/glove.png'
import member1 from '../../images/members/1.jpg'
import member3 from '../../images/members/3.jpg'
import member5 from '../../images/members/5.jpg'
import member6 from '../../images/members/6.jpg'
import pin from '../../images/pin.svg'
import stadium from '../../images/stadium3.png'

import mapStyle from '../../data/mapStyle.json'
import Popup from '../Popup'
import TourPopup from '../TourPopup'

// Section Imports
import Covid from './Covid'
import VirtualTour from './VirutalTour'

const LandingPage = () => {
  const [ tourOpen, setTourOpen ] = useState(false)
  const [ tourMode, setTourMode ] = useState('tour')
  const [ sevenOpen, setSevenOpen ] = useState(false)
  const [ mailerEmail, setMailerEmail ] = useState(null)

  const toggleTourPopup = (mode) => {
    closePopup();
    setTourOpen(!tourOpen)
    setTourMode(mode === 'eval' ? 'eval' : 'tour')
  };

  const handleInputChange = (event) => {
    const email = event.target.value;
    setMailerEmail(email)
  }

  const handleClickOutside = (event) => {
    if (event.target.classList.contains('popup')) {
      closePopup();
    }
  };

  const closePopup = () => {
    setTourOpen(false)
    setSevenOpen(false)
  };

  useEffect(() => {
    loadHealcode()
    return () => {
      removeHealcode()
    }
  }, [])

  return (
    <div id='landingPage'>

      {/* HERO */}
      <div className="hero landingHero"
        style={{
          background: `url(${training}) no-repeat center center`,
          backgroundSize: 'cover'
        }}>
        <div className="gradient"></div>
        <div className="content">
          <h1>Brooklyn's #1 Private Gym is Back!</h1>
          <button className='bigButton' onClick={toggleTourPopup}>Schedule A Tour</button>
          <p>
            Call Now:
            <a href="tel:718-857-2355"> (718) 857-2355</a>
          </p>
        </div>
      </div>

      <TopFeatures />
      <Covid />
      <VirtualTour toggleTourPopup={toggleTourPopup} />

      <div id="two">
        <Location />
        <Perks />
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
      </div>

      {/* EXPLORE */}
      <div id="explore" className="section">
        <div className='left'>
          <h1>Explore</h1>
          <div className="cta">
            <div className="center">
              <button className='bigButton' onClick={toggleTourPopup}>Schedule A Tour</button>
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
              <button className='bigButton' onClick={toggleTourPopup}>Schedule A Tour</button>
              <p>
                Call Now:
                <a href="tel:718-857-2355"> (718) 857-2355</a>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* SEVENBELL */}
      <div id="sevenBell" className="section">
        <div className="sevenPic">
          {/* <img src='../images/seven_hoodie.png' /> */}
        </div>
        <div className="content">
          <h1>Who is SevenBell?</h1>
          <p>If you’re ready to take your body to the next level and train with the best, make your next workout with Seven Bell himself.</p>
          <div className="buttons">
            <button onClick={() => setSevenOpen(!sevenOpen)}>Learn More</button>
            <Link to='/training#seven' className="button">
              <button>Train with SevenBell</button>
            </Link>
          </div>
        </div>

      </div>

      {/* MAILING LIST SUBSCRIBE */}
      <div id="subscribe" className="section">
        <h1>Don't Miss Out</h1>
        <p>Stay tuned for new arrivals, exclusive offers, and events.</p>

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
                <input type="text" name="b_9eff37978d50bda147c9cb859_df73fef1d5" defaultValue="" />
              </div>
              <input type="submit" value="Sign me up" name="subscribe" id="mc-embedded-subscribe" />

            </div>
          </form>
        </div>

        {/* <!--End mc_embed_signup--> */}
      </div>

      {/* POPUPS ///////////////////// */}

      {/* Tour Popup */}
      <Popup open={tourOpen} closePopup={closePopup} handleClickOutside={handleClickOutside}>
        <TourPopup mode={tourMode} closePopup={closePopup} />
      </Popup>

      {/* Donation Popup */}
      {/* <Popup open={donateOpen} closePopup={closePopup} handleClickOutside={handleClickOutside}>
        <div className="donatePopup">
          <h2>How Much Would You Like <br/>to Donate?</h2>
          <br/>
          <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$25" data-service-id="10606" />
          <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$50" data-service-id="10607" />
          <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$100" data-service-id="10608" />
          <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$150" data-service-id="10609" />
          <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$250" data-service-id="10610" />
          <healcode-widget className="mindBodyLink" data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="38176" data-mb-site-id="283341" data-type="pricing-link" data-inner-html="$300" data-service-id="10611" />
        </div>
      </Popup> */}

      {/* About SevenBell Popup */}
      <Popup open={sevenOpen} closePopup={closePopup} handleClickOutside={handleClickOutside}>
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

const TopFeatures = () => (
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
)

const Location = () => (
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
)

const Perks = () => (
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
)

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

const Map = (props) => {
  const {center, zoom} = props

  return (
     <GoogleMapReact
       bootstrapURLKeys={{
        key: 'AIzaSyAUjolc0x3PiWc0jAr0eG9cR_s1QnYIJbU'
      }}
      defaultCenter={center}
      defaultZoom={zoom}
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

// Set default props
Map.defaultProps = {
  center: {
    lat: 40.683603,
    lng: -73.972470
  },
  zoom: 15
};

export default LandingPage;
