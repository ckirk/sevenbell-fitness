import React, { Component } from 'react';

class TourPopup extends React.Component {
  constructor(props) {
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

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log('onChange!');
    console.log('target: ', target);
    console.log('value: ', value);
    console.log('name: ', name);

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    alert('Name: ' + this.state.name +
      '\nEmail: ' + this.state.email +
      '\nPhone: ' + this.state.phone +
      '\nInterest: ' + this.state.interest +
      '\nWants Tour: ' + this.state.tour +
      '\nWants Evaluation: ' + this.state.eval);
    event.preventDefault();
  }

  componentWillReceiveProps = (nextProps) => {
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
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
            <input className='inline' type="text" name="email" onChange={this.handleInputChange} placeholder="Email" />
            <input className='inline' type="text" name="phone" onChange={this.handleInputChange} placeholder="Phone Number" />

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
                name="eval"
                type="checkbox"
                checked={this.state.eval}
                onChange={this.handleInputChange} />
                I'd Like a Complimentary Fitness Evaluation
            </label>

            <label>
              Primary Interest:
              <select name="interest" value={this.state.interest} onChange={this.handleInputChange}>
                <option disabled value='blank'>Select One</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Classes">Classes</option>
                <option value="Private Boxing">Private Boxing</option>
                <option value="Nutrition Guidance">Nutrition Guidance</option>
              </select>
            </label>

            <input type="submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default TourPopup;
