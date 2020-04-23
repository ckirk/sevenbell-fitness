import React, { Component } from 'react';

// Used in componentDidMount for pages that require branded web tools (MindBody links and widgets)
// check for healcode.js - if found refresh page to kill it
// if not found, add it to the page
const loadHealcode = () => {
  if (document.querySelector('script[src="https://widgets.healcode.com/javascripts/healcode.js"]')) {
    // console.log('script found!')
    location.reload();
  } else {
    // console.log('script not found... fetching script')

    // load mindbody scedule embed script
    let script = document.createElement("script");
    script.src = "https://widgets.healcode.com/javascripts/healcode.js";
    script.type = 'text/javascript'
    script.async = true;
    document.body.appendChild(script);
  }
}

// Used in componentWillUnmount for pages that require branded web tools (MindBody links and widgets)
// when unmounting component check for healcode.js script
// if found refresh the page to kill/remove it
const removeHealcode = () => {
  if (document.querySelector('script[src="https://widgets.healcode.com/javascripts/healcode.js"]')) {
    location.reload();
  }
}

export {
  loadHealcode,
  removeHealcode
};
