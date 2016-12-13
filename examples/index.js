import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../dist/index.min';

class Page extends React.Component {
  message() {
    alert('Hello World!');
  }

  render() {
    return (
      <div class="button-eg-container">

        <p class="button-eg-group">
          <h2>Button Type</h2>

          <Button bType="button">Button</Button>
          <Button bType="submit">Submit</Button>
          <Button bType="reset">Reset</Button>
        </p>

        <p class="button-eg-group">
          <h2>Button State</h2>

          <Button>Enabled Button</Button>
          <Button isDisabled="true">Disabled Button</Button>
        </p>

        <p class="button-eg-group">
          <h2>Button Events</h2>

          <Button onClick={this.message}>Click Button</Button>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
