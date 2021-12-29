import React, { useEffect } from 'react';
import bkgImage from '../images/pushup.jpg';

const BookGymTime = () => {

  useEffect(() => {
    // inject mindBody prospect form on load
    const schedule = '<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="7f1507667cf6" data-widget-version="1" ></healcode-widget>'
    setTimeout(() => {
      document.getElementById("injectSchedule").innerHTML = schedule
    }, 500)
  }, [])

  return (
    <div id='schedule' className='supportPage'>

      {/* HERO */}
      <div className="hero"
        style={{
          background: `url(${bkgImage}) no-repeat center center`,
          backgroundSize: 'cover'
        }}>
        <div className="gradient"></div>
        <div className="content">
          <h1>Book Gym Time</h1>
        </div>
      </div>

      <div className="contentBkg">
        <div id="injectSchedule">
        </div>
      </div>

    </div>
  );
}

export default BookGymTime;
