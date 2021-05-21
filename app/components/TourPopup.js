import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
import validator from 'validator';

class TourPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      virtual: '',
      inPerson: '',
      both: '',
      tour: props.mode == 'eval' ? false : true,
      eval: props.mode == 'eval' ? true : false,
      interest: '',
      inputValid: true,
      emailValid: true
    }
  };

  handleFormValidation = () => {
    let inputValid = true
    let emailValid = true
    if (this.state.firstName === '') {
      inputValid = false
    }
    if (this.state.lastName === '') {
      inputValid = false
    }
    if (this.state.email === '') {
      inputValid = false
    }
    if (this.state.phone === '') {
      inputValid = false
    }
    if (!validator.isEmail(this.state.email)) {
      inputValid = false
      emailValid = false
    }

    if (inputValid) {
      this.setState({
        inputValid: true
      });
      this.sendFormData()
      this.props.closePopup()
    } else {
      this.setState({
        inputValid: false,
        emailValid: emailValid
      });
    }
  }

  handleFormSubmit = () => {
    console.log('BOOM!')
    this.handleFormValidation()
  }

  sendFormData = () => {
    console.log('Sending!')
    axios({
      url: 'https://formspree.io/f/mgepnvqg',
      method: 'post',
      headers: {
        'Accept': 'application/json'
      },
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        virtual: this.state.virtual,
        inPerson: this.state.inPerson,
        both: this.state.both,
        interest: this.state.interest,
        _subject: "New Membership Inquiry: " + this.state.firstName + " " + this.state.lastName,
        _cc: "solutions@sevenbellfitness.com"
      }
    }).then((response) => {
      console.log(response);
    })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // console.log('value: ', value);
    // console.log('name: ', name);

    if (target.name === 'both') {
      this.setState({
        virtual: value,
        inPerson: value,
        both: value
      });
    } else if (target.name === 'virtual' && this.state.inPerson === value) {
      this.setState({
        virtual: value,
        both: value
      });
    } else if (target.name === 'inPerson' && this.state.virtual === value) {
      this.setState({
        inPerson: value,
        both: value
      });
    } else if (target.name === 'virtual' && this.state.inPerson !== value) {
      this.setState({
        virtual: value,
        both: false
      });
    } else if (target.name === 'inPerson' && this.state.virtual !== value) {
      this.setState({
        inPerson: value,
        both: false
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  render() {
    return (
      <div className="content tour">
        <div className="header">
          <h1 className="popupTitle">Schedule A Tour</h1>
          <p>
            Tours take place by appointment only.
          </p>
          <p>
            Complete the fields below and a membership advisor will reach out to you in the next 24 hours to schedule your visit.
          </p>
        </div>
        <div className="body">

          {!this.state.inputValid &&
            <div className='error'>
              ⚠️ Please fill out all required* fields below to schedule a tour
            </div>
          }

          {!this.state.emailValid &&
            <div className='error'>
              ⚠️ The email address you entered is not valid
            </div>
          }

          {/* This form can send data to formspree or MailChimp, not both... */}
          {/* Solution would be to use a back-end service to dispatch API calls */}
          <form>
          {/* <form method="POST" action="https://formspree.io/ckirkinis@gmail.com" id="inquiryForm"> */}

            <div className='half'>
              <input type="text" name="firstName" value={this.state.firstName}
                onChange={this.handleInputChange} placeholder="First Name*"
                className='left'
              />
              <input type="text" name="lastName" value={this.state.lastName}
                onChange={this.handleInputChange} placeholder="Last Name*"
              />
            </div>

            <input className='inline' type="text" name="email" onChange={this.handleInputChange} placeholder="Email*" />
            <input className='inline' type="text" name="phone" onChange={this.handleInputChange} placeholder="Phone Number*" />
            {/* <input type="hidden" name="_subject" value={"New Membership Inquiry: " + this.state.name} /> */}
            {/* <input type="hidden" name="_cc" value="solutions@sevenbellfitness.com" /> */}

            <label>
              <input
                name="virtual"
                type="checkbox"
                checked={this.state.virtual}
                onChange={this.handleInputChange} />
              Interested in Virtual Services
            </label>

            <label>
              <input
                name="inPerson"
                type="checkbox"
                checked={this.state.inPerson}
                onChange={this.handleInputChange} />
                Interested in In-Person Services
            </label>

            <label>
              <input
                name="both"
                type="checkbox"
                checked={this.state.both}
                onChange={this.handleInputChange} />
                Interested in Both
            </label>

            <label className='primaryInterest'>
              Primary Interest:
              <select name="interest" value={this.state.interest} onChange={this.handleInputChange}>
                <option disabled value='blank'>Select One</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Classes">Classes</option>
                <option value="Private Boxing">Private Boxing</option>
                <option value="Nutrition Guidance">Nutrition Guidance</option>
                <option value="Just Gym Access">Just Gym Access</option>
              </select>
            </label>

            {/* <input className='submitButton' type="submit" value="Send" onClick={() => this.handleFormSubmit()} /> */}

          </form>

          <button className='submitButton' onClick={this.handleFormSubmit}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default TourPopup;
