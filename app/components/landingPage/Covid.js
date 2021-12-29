import React from 'react';
import { Link } from 'react-router';

const Covid = (props) => (
  <div id="corona" className="section">
    <div className="bkgImg"></div>
    <div className="colorOverlay"></div>
    <div className="content">
      <h1>What's New?</h1>

      <p>
        There is no better option than SevenBell Fitness to have a fun, safe, and private fitness experience!
      </p>

      <a href="http://mndbdy.ly/e/283341" target="_blank">
        <button className='bigButton btnWhite'>
          Get the App
        </button>
      </a>

      <p>
        Ever wonder why SevenBell Fitness is Brooklyn’s top rated private gym? More than just a training studio, our memberships are designed to be personally tailored to your success in your fitness journey.  Our services include Personal Training, Private Boxing, 1 on 1 Pilates Reformer training, and small group training sessions, so you can take advantage of our a variety of options to create a fully customizable experience.
      </p>

      <p>
        Our hourly cap on people allowed into the gym each hour guarantees peace of mind to all of our members, knowing you’ll never be in a crowded or messy gym. We are also staffed by accommodating, friendly, and nationally accredited fitness professionals whose goals are your goals.
      </p>

      <button className='bigButton btnWhite' onClick={props.toggleTourPopup}>
        Apply Now
      </button>
    </div>
  </div>
)

export default Covid;
