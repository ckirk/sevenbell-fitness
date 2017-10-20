import React, { Component } from 'react';

class Memberships extends React.Component {
  constructor(props) {
    super(props);
    this.state = { state: null }
  };

  render() {
    return (
      <div id='memberships' className='supportPage'>

        {/* HERO */}
        <div className="hero"
          style={{
            background: 'url(../images/ropes.png) no-repeat center center',
            backgroundSize: 'cover'
          }}>
          <div className="gradient"></div>
          <div className="content">
            <h1>Memberships</h1>
            <p>
              Which one of our 3 memberships are right for you?
            </p>
            <button className='bigButton'>Schedule A Tour</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Memberships;
