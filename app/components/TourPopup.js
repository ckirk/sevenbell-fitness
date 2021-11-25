import React, { Component, useState, useEffect } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
import validator from 'validator';
import qs from 'qs';

const TourPopup = (props) => {
  const [test, setTest] = useState('test')

  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    virtual: false,
    inPerson: false,
    both: false,
    tour: props.mode == 'eval' ? false : true,
    eval: props.mode == 'eval' ? true : false,
    interest: '',
    inputValid: true,
    emailValid: true
  });

  const handleFormValidation = () => {
    console.log('Validating form input...')
    let inputValid = true
    let emailValid = true
    if (formData.firstName === '') {
      inputValid = false
    }
    if (formData.lastName === '') {
      inputValid = false
    }
    if (formData.email === '') {
      inputValid = false
    }
    if (formData.phone === '') {
      inputValid = false
    }
    if (!validator.isEmail(formData.email)) {
      inputValid = false
      emailValid = false
    }

    if (inputValid) {
      console.log('Input is valid!')
      // this.setState({
      //   inputValid: true
      // });
      setFormData({ ...formData, inputValid: true })
      sendFormData()
      props.closePopup()
    } else {
      console.log('Input contains errors')
      // this.setState({
      //   inputValid: false,
      //   emailValid: emailValid
      // });
      setFormData({
        ...formData,
        inputValid: false,
        emailValid: emailValid
      })
    }
  }

  const handlePostToSlack = (data) => {
    console.log('Posting To Slack...')

    const token = 'xoxb-81039659079-2769568474560-vshgxX3oA4gzIPHIFgo77Qgj'

    const channelId = 'C2JL1FZCZ'
    // hot leads channelId C2JL1FZCZ
    // test channel C02N53SMC3B

    const announce = '*New form submission just in!*\n'
    const name = `👤 ${data.firstName} ${data.lastName}\n`
    const email = `✉️ ${data.email}\n`
    const phone = `📞 ${data.phone}\n`
    const inPerson = data.inPerson ? '🏋️‍♂️ In Person\n' : ''
    const virtual = data.virtual ? '💻 Virtual\n' : ''
    const interest = data.interest != '' ? `💭 Interested In ${data.interest}` : ''

    const blocks = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `${announce}${name}${email}${phone}${inPerson}${virtual}${interest}`
        }
      }
    ]

    var data = qs.stringify({
      "token": token,
      // 'text': text, // use if just sending plain text
      "channel": channelId,
      "blocks": JSON.stringify(blocks)
    });

    axios({
      url: `https://slack.com/api/chat.postMessage`,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    }).then((response) => {
      console.log(response);
      window.location.href = 'https://formspree.io/thanks';
    })
  }

  const sendFormData = () => {
    console.log('Sending form data to Formspree!')

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      virtual: formData.virtual,
      inPerson: formData.inPerson,
      both: formData.both,
      interest: formData.interest,
      _subject: "New Membership Inquiry: " + formData.firstName + " " + formData.lastName,
      _cc: "members@sevenbellfitness.com"
    }

    // console.log('DATA:', data)
    // this.handlePostToSlack(data)

    axios({
      url: 'https://formspree.io/f/mgepnvqg',
      method: 'post',
      headers: {
        'Accept': 'application/json'
      },
      data: data
    }).then((response) => {
      console.log(response);
      // const formspreeRedirect = response.data
      // window.location.href = 'https://formspree.io/thanks';
      handlePostToSlack(data)
    })
  }

  const handleTest = (event) => {
    console.log('Change!')
    console.log(event.target.value)
    setFormData({ ...formData, test: event.target.value})
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log('value: ', value);
    // console.log('name: ', name);

    if (target.name === 'both') {
      // this.setState({
      //   virtual: value,
      //   inPerson: value,
      //   both: value
      // });
      setFormData({
        ...formData,
        virtual: value,
        inPerson: value,
        both: value
      })
    } else if (target.name === 'virtual' && formData.inPerson === value) {
      // this.setState({
      //   virtual: value,
      //   both: value
      // });
      setFormData({
        ...formData,
        virtual: value,
        both: value
      })
    } else if (target.name === 'inPerson' && formData.virtual === value) {
      // this.setState({
      //   inPerson: value,
      //   both: value
      // });
      setFormData({
        ...formData,
        inPerson: value,
        both: value
      })
    } else if (target.name === 'virtual' && formData.inPerson !== value) {
      // this.setState({
      //   virtual: value,
      //   both: false
      // });
      setFormData({
        ...formData,
        virtual: value,
        both: false
      })
    } else if (target.name === 'inPerson' && formData.virtual !== value) {
      // this.setState({
      //   inPerson: value,
      //   both: false
      // });
      setFormData({
        ...formData,
        inPerson: value,
        both: false
      })
    } else {
      // this.setState({
      //   [name]: value
      // });
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }


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

        {!formData.inputValid &&
          <div className='error'>
            ⚠️ Please fill out all required* fields below to schedule a tour
          </div>
        }

        {!formData.emailValid &&
          <div className='error'>
            ⚠️ The email address you entered is not valid
          </div>
        }

        {/* This form can send data to formspree or MailChimp, not both... */}
        {/* Solution would be to use a back-end service to dispatch API calls */}
        <form>
        {/* <form method="POST" action="https://formspree.io/ckirkinis@gmail.com" id="inquiryForm"> */}

          <div className='half'>
            <input type="text" name="firstName" value={formData.firstName}
              onChange={handleInputChange} placeholder="First Name*"
              className='left'
            />
            <input type="text" name="lastName" value={formData.lastName}
              onChange={handleInputChange} placeholder="Last Name*"
            />
          </div>

          <input className='inline' type="text" name="email" onChange={handleInputChange} placeholder="Email*" />
          <input className='inline' type="text" name="phone" onChange={handleInputChange} placeholder="Phone Number*" />


          <label>
            <input
              name="virtual"
              type="checkbox"
              checked={formData.virtual}
              onChange={handleInputChange} />
            Interested in Virtual Services
          </label>

          <label>
            <input
              name="inPerson"
              type="checkbox"
              checked={formData.inPerson}
              onChange={handleInputChange} />
              Interested in In-Person Services
          </label>

          <label>
            <input
              name="both"
              type="checkbox"
              checked={formData.both}
              onChange={handleInputChange} />
              Interested in Both
          </label>

          <label className='primaryInterest'>
            Primary Interest:
            <select name="interest" value={formData.interest} onChange={handleInputChange}>
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

        <button className='submitButton' onClick={() => handleFormValidation()}>
          Send
        </button>
        {/* <button onClick={() => this.handlePostToSlack()}>
          Test
        </button> */}
      </div>
    </div>
  );
}

export default TourPopup;
