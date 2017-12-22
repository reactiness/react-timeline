import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import keenImage from '../assets/keen.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        Hello from reactaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
=======
        Hello from reactaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
>>>>>>> cce60057d6cd6fb80c435878c65980dff885e6b9
        <img src={ keenImage } alt='Commander Keen' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));