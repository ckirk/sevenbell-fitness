import React, { Component } from 'react';

class TourPopup extends React.Component {
  constructor(props) {
    console.log('constructor props: ' + props)
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      tour: props.mode == 'eval' ? false : true,
      eval: props.mode == 'eval' ? true : false,
      interest: ''
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log('cwrp props: ' + nextProps)
    this.setState({
      tour: nextProps.mode == 'eval' ? false : true,
      eval: nextProps.mode == 'eval' ? true : false,
    });
  }

  render() {
    return (
      <div className="content tour">
        <div className="header">
          <h1>Schedule A Visit</h1>
          <p>
            Complete the fields below and a membership advisor will reach out to you in the next 24 hours to schedule your visit.
          </p>
        </div>
        <div className="body">
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input className='inline' type="text" name="email" placeholder="Email" />
            <input className='inline' type="text" name="phone" placeholder="Phone Number" />

            <label>
              <input
                name="tour"
                type="checkbox"
                checked={this.state.tour}
                onChange={this.handleInputChange} />
              I'd like a Tour
            </label>

            <label>
              <input
                name="evaluation"
                type="checkbox"
                checked={this.state.eval}
                onChange={this.handleInputChange} />
                I'd Like a Complimentary Fitness Evaluation
            </label>

            <label>
              Primary Interest:
              <select>
                <option value="Personal Training">Personal Training</option>
                <option value="Classes">Classes</option>
                <option value="Private Boxing">Private Boxing</option>
                <option value="Nutrition Guidance">Nutrition Guidance</option>
              </select>
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default TourPopup;
