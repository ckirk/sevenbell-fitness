import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Export html file on build
// require('file?name=[name].[ext]!../index.html');

// Component Imports
import App from './app';

// Style Import
import './styles/global.scss';

ReactDOM.render(<App />, document.getElementById('app'))
