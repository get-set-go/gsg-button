import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../dist/index.min';

ReactDOM.render(
  <div class="button-eg-container">
    <p class="button-eg-group">
      <h2>Button Type</h2>

      <Button bType="button">Button</Button>
      <Button bType="submit">Submit</Button>
      <Button bType="reset">Reset</Button>
    </p>

  </div>,
  document.getElementById('container')
);
