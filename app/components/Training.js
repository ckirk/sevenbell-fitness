import React, { Component } from 'react';
import bkgImage from '../images/high_five.png'

import Popup from './Popup'
import TourPopup from './TourPopup'

// import Trainers from '../data/Trainers'

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourOpen: false,
      whySevenBellOpen: false,
      sevenOpen: false,
      planOpen: false,
      progressOpen: false
    }
  };

  toggleTourPopup = () => {
    this.closePopup();
    this.setState({
      tourOpen: !this.state.tourOpen
    });
  };

  toggleWhySevenBellPopup = () => {
    this.closePopup();
    this.setState({
      whySevenBellOpen: !this.state.whySevenBellOpen
    });
  };

  toggleSevenPopup = () => {
    this.setState({
      sevenOpen: !this.state.sevenOpen
    });
  };

  handleClickOutside = (event) => {
    if (event.target.classList.contains('popup')) {
      this.closePopup();
    }
  };

  toggleAssessPopup = () => {
    this.setState({
      assessOpen: !this.state.assessOpen
    });
  };

  togglePlanPopup = () => {
    this.setState({
      planOpen: !this.state.planOpen
    });
  };

  toggleProgressPopup = () => {
    this.setState({
      progressOpen: !this.state.progressOpen
    });
  };

  closePopup = () => {
    this.setState({
      tourOpen: false,
      assessOpen: false,
      planOpen: false,
      progressOpen: false,
      sevenOpen: false,
      whySevenBellOpen: false
    });
  };

  render() {

    return (
      <div id='training' className='supportPage'>

        {/* HERO */}
        <div className="hero"
          style={{
            background: `url(${bkgImage}) no-repeat center center`,
            backgroundSize: 'cover'
          }}>
          <div className="gradient"></div>
          <div className="content">
            <h1>Personal Training</h1>
            <p>
              Our nationally certified personal trainers are dedicated to getting your mind and body where they need to be to achieve your goals! Start the process and watch the results come!
            </p>
            <button className='bigButton' onClick={this.toggleTourPopup}>I'm Ready!</button>
            <button className='bigButton' onClick={this.toggleWhySevenBellPopup}>Why Train at SevenBell Fitness?</button>
          </div>
        </div>

        {/* <div className="contentBkg">
          {Trainers.map((trainer, index) => {
            return (
              <Trainer name={trainer.name} bio={trainer.bio} image={trainer.image} skills={trainer.skills} certifications={trainer.certifications} key={index} />
            )
          })}
        </div> */}

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
        </div>

        {/* SEVEN */}
        <div id="seven">
          <div className="sevenPic">
            {/* <img src='../images/seven_hoodie.png' /> */}
          </div>
          <div className="content">
            <h1>Train With SevenBell</h1>
            <p>
              If you're ready, I mean REALLY ready, to change your mindset and your body, Seven Bell is ready to get you in the best shape of your life. Stick to the program and stay consistent and you will experience what hundreds of people have; TRANSFORMATION!
            </p>
            <div className="pricing_container">
              <div className="pricing">
                <p className="header">TIMES PER WEEK NUMBER OF WEEKS PRICE PER SESSION TOTAL</p>
                <p>Train 1X/Week for 1 Month - 4 sessions - $145/session - $580</p>
                <p>Train 2X/Week for 1 Month - 8 sessions - $140/session - $1,120</p>
                <p>Train 3X/Week for 1 Month - 12 sessions - $135/session - $1,620</p>
                <p>Train 4X/Week for 1 Month - 16 sessions - $130/session - $2,080</p>
              </div>
            </div>
            <div className="buttons">
              <button onClick={this.toggleTourPopup}>Train with SevenBell</button>
              <button onClick={this.toggleSevenPopup}>Learn More</button>
            </div>
          </div>
        </div>


        {/* I'm Ready Popup */}
        <Popup open={this.state.tourOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <TourPopup />
        </Popup>

        {/* Why SevenBell Popup */}
        <Popup open={this.state.whySevenBellOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
          <div className="content philosophy">
            <div className="header">
              <h1>Why Train at SevenBell Fitness?</h1>
            </div>
            <div className="body">
              <p>
                Most gyms offer personal training. They all say they do it best. That sounds good when you see advertised, but at SevenBell Fitness we don’t just do training, we live it. True professionals at heart are not just doing training sessions, not just telling you what you want to hear, but holding you accountable to what you started. We are a results driven, private gym that gives you 100% of ourselves because your goal is our goal. Training done correctly, truly correctly, will always result in body transformation in a reasonable time frame.
              </p>
            </div>
          </div>
        </Popup>

        {/* PHILOSOPHY POPUPS */}
        <Popup open={this.state.assessOpen} closePopup={this.closePopup} handleClickOutside={this.handleClickOutside}>
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
        </Popup>

        {/* SEVEN LEARN MORE */}
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

const Trainer = (props) => (
  <div className='trainerContainer'>
    <div className="top">
      <div className="image">
        <img src={props.image} />
      </div>
      <div className="right">
        <h1>{props.name}</h1>

        {props.certifications.length > 0 ?
          <div>
            <h5>Certifications:</h5>
            <div className="skills">
              {props.certifications.map((skill, index) =>
                <div className='skill' key={index}>{skill}</div>
              )}
            </div>
          </div>
        :
        null
        }

        <h5>Specialties:</h5>
        <div className="skills">
          {props.skills.map((skill, index) =>
            <div className='skill' key={index}>{skill}</div>
          )}
        </div>
      </div>
    </div>
    {/* <div className="bio">
      <p>{props.bio}</p>
    </div> */}

  </div>
)

export default Training;
