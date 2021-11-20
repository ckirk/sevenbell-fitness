import React, { useState, useEffect } from 'react';

import panoImage from '../../images/360_Pano.jpg'

// import Pannellum from '360-react-pannellum';
import Pannellum from 'pannellum';

class VirtualTour extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    // check if webGl is supported
    if (this.webGlSupported) {
      // insert panorama on load - target div w/ id: 'pano'
      pannellum.viewer('pano', {
        "type": "equirectangular",
        "panorama": panoImage,
        "autoLoad": true,
        "autoRotate": -1,
        "compass": false,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "showControls": false,
        "autoRotateInactivityDelay": 3000,
        "mouseZoom": false,
        "yaw": 20,
        "pitch": -12,
      });
    }
    // listen for scroll event (disabled)
    // window.addEventListener('scroll', this.handleScroll);
  }

  // test for WebGL support
  webGlSupported = () => {
    try {
      var canvas = document.createElement('canvas');
      return !!window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch(e) {
      return false;
    }
  };

  // handleScroll = (event) => {
  //   let currentYaw = this.state.pano.getYaw()
  //   console.log('yaw: ' + currentYaw)
  //
  //   let scrollTop = event.srcElement.body.scrollTop
  //   console.log('scrollTop: ' + scrollTop)
  //   console.log('------------')
  //   // let itemTranslate = Math.min(0, scrollTop/3 - 60)
  //
  //   // How to set Yaw
  //   this.state.pano.setYaw((scrollTop)/50, false)
  //
  //   this.setState({
  //     state: null
  //   });
  // };

  render() {
    return (
      <div id="tour" className="section">
        <div className="bkgImage cover">
          {/* Insert Panorama Here */}
          <div id="pano"></div>
        </div>
        <div className="title">
          <h2>360&deg; Tour</h2>
        </div>
        <button className="bigButton" onClick={this.props.toggleTourPopup}>
          Schedule A Tour
        </button>
        <div className="arrows">
          <i className="fa fa-fw fa-chevron-left" aria-hidden="true"></i>
          <i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default VirtualTour;
