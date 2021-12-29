import React, { useEffect } from 'react';
import bkgImage from '../images/pushup.jpg';

const Schedule = () => {

  useEffect(() => {
    const schedule = '<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="7f1507647cf6" data-widget-version="1" ></healcode-widget>'
    document.getElementById("injectSchedule").innerHTML = schedule
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
          <h1>Schedule</h1>
          <p>
            Use our class schedule to supplement your weight training! With everything from Boxing to Pilates you are sure to find something for you!
          </p>
        </div>
      </div>

      <div className="contentBkg">
        <div id="injectSchedule">
        </div>
      </div>

    </div>
  );
}

export default Schedule;
