import React, { Component } from 'react';
import 'whatwg-fetch';

class TourPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      virtual: '',
      inPerson: '',
      both: '',
      tour: props.mode == 'eval' ? false : true,
      eval: props.mode == 'eval' ? true : false,
      interest: ''
    }
  };

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

  // handleSubmit = (event) => {
  //   alert('Name: ' + this.state.name +
  //     '\nEmail: ' + this.state.email +
  //     '\nPhone: ' + this.state.phone +
  //     '\nInterest: ' + this.state.interest +
  //     '\nWants Tour: ' + this.state.tour +
  //     '\nWants Evaluation: ' + this.state.eval);
  //
  //
  //   var form = document.querySelector('#inquiryForm');
  //   var actionURL = "https://formspree.io/inquiry@sevenbellfitness.com"
  //
  //   fetch(`${actionURL}`, {
  //     method: 'POST',
  //     body: new FormData(form)
  //   }).then(function(response) {
  //     console.log(response.headers.get('Content-Type'))
  //     console.log(response.headers.get('Date'))
  //     console.log(response.status)
  //     console.log(response.statusText)
  //   })
  //
  //   event.preventDefault();
  // }
  //
  // componentWillReceiveProps = (nextProps) => {
  //   // console.log('cwrp props: ' + nextProps)
  //   this.setState({
  //     tour: nextProps.mode == 'eval' ? false : true,
  //     eval: nextProps.mode == 'eval' ? true : false,
  //   });
  // }

  render() {
    return (
      <div className="content tour">
        <div className="header">
          <h1 className="popupTitle">Schedule A Visit</h1>
          <p>
            Complete the fields below and a membership advisor will reach out to you in the next 24 hours to schedule your visit.
          </p>
        </div>
        <div className="body">

          {/* This form can send data to formspree or MailChimp, not both... */}
          {/* Solution would be to use a back-end service to dispatch API calls */}
          <form method="POST" action="https://formspree.io/f/mgepnvqg">
          {/* <form method="POST" action="https://formspree.io/ckirkinis@gmail.com" id="inquiryForm"> */}

            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name" />
            <input className='inline' type="text" name="email" onChange={this.handleInputChange} placeholder="Email" />
            <input className='inline' type="text" name="phone" onChange={this.handleInputChange} placeholder="Phone Number" />
            <input type="hidden" name="_subject" value={"New Membership Inquiry: " + this.state.name} />
            <input type="hidden" name="_cc" value="solutions@sevenbellfitness.com" />

            {/* <label>
              <input
                name="tour"
                type="checkbox"
                checked={this.state.tour}
                onChange={this.handleInputChange} />
              Interested in Virtual Services
            </label> */}

            {/* <label>
              <input
                name="eval"
                type="checkbox"
                checked={this.state.in-person}
                onChange={this.handleInputChange} />
                I'd Like a Complimentary Fitness Evaluation
            </label> */}

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

            <input type="submit" value="Send" />

          </form>
        </div>
      </div>
    );
  }
}

export default TourPopup;
