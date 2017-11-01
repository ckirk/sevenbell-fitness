import React, { Component } from 'react';
import bkgImage from '../images/high_five.png'

// Trainer Images
import alison from '../images/trainers/1.jpg'
import mike from '../images/trainers/2.jpg'
import robert from '../images/trainers/3.jpg'

const trainers = [{
  name: 'Mike D.',
  image: mike,
  skills: ['Weight Loss', 'Strenghthening', 'Martial Arts', 'Body Building', 'Yoga'],
  bio: 'The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures and societies throughout history.'
},{
  name: 'Alison Z.',
  image: alison,
  skills: ['Weight Loss', 'Strenghthening', 'Martial Arts', 'Body Building', 'Yoga'],
  bio: 'The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures and societies throughout history.'
},{
  name: 'Robert F.',
  image: robert,
  skills: ['Weight Loss', 'Strenghthening', 'Martial Arts', 'Body Building', 'Yoga'],
  bio: 'The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures and societies throughout history.'
},{
  name: 'Robert F.',
  image: robert,
  skills: ['Weight Loss', 'Strenghthening', 'Martial Arts', 'Body Building', 'Yoga'],
  bio: 'The preservation of human life is the ultimate value, a pillar of ethics and the foundation of all morality. This held true in most cultures and societies throughout history.'
}]

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
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
          </div>
        </div>

        <div className="contentBkg">
          {trainers.map((trainer, index) => {
            return (
              <Trainer name={trainer.name} bio={trainer.bio} image={trainer.image} skills={trainer.skills} key={index} />
            )
          })}
        </div>

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
        <h5>Specialties:</h5>
        <div className="skills">
          {props.skills.map((skill, index) =>
            <div className='skill' key={index}>{skill}</div>
          )}

        </div>
      </div>
    </div>
    <div className="bio">
      <p>{props.bio}</p>
    </div>

  </div>
)

export default Training;
