import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/keen.png';

export default class App extends Component {
  render() {
    return (
      <div>
        App from reactaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}
