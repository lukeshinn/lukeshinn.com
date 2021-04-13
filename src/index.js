import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import Message from './js/Message'
import NavBar from './js/NavBar'
import './js/revealer.js'
import './js/anime.js'

import './css/style.css'
import './scss/revealer.scss'

ReactDOM.render(
    <Message />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)


if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

