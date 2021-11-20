import React from 'react';
import { Link } from 'react-router';

const Covid = () => (
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
)

export default Covid;
