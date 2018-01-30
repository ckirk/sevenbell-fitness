import React, { Component } from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: this.props.open }
  };

  close = () => {
    console.log('EVENT!');
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className={"modal" + (this.state.open ? ' open' : '')} onClick={this.close} >
        Modal Test
      </div>
    );
  }
}

export default Modal;
