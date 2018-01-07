import React, { Component } from 'react';
import '../css/style.css';
import keenImage from '../assets/keen.png';

export default class App extends Component {
  render () {
    return (
      <div>
        App from react.
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}
