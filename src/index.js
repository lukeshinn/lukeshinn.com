import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import About from './js/About'

import './js/revealer.js'
import './scss/revealer.scss'

ReactDOM.render(
    <About />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

