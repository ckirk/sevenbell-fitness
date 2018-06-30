import React, { Component } from 'react';

const Popup = (props) => (
  <div id='formPopup' className={"popup" + (props.open ? ' open' : '')} onClick={props.handleClickOutside}>
    <div className="centered">
      <div className="close" onClick={props.closePopup}>
        <i className="fa fa-fw fa-times-circle" aria-hidden="true"></i>
      </div>
      {props.children}
    </div>
  </div>
)

export default Popup;
