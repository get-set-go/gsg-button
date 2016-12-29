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
      <div className="button-eg-container">
        <h1>Get-Set-Go Button Component</h1>

        <p className="button-eg-group">
          <h4>Button Styles</h4>

          <Button>Default Button</Button>
          <Button bStyle="primary">Primary Button</Button>
          <Button bStyle="success">Success Button</Button>
          <Button bStyle="info">Info Button</Button>
          <Button bStyle="warning">Warning Button</Button>
          <Button bStyle="danger">Danger Button</Button>
          <Button bStyle="link">Link Button</Button>
        </p>

        <p className="button-eg-group">
          <h4>Button Types</h4>

          <Button bType="button">Button</Button>
          <Button bType="submit">Submit</Button>
          <Button bType="reset">Reset</Button>
        </p>

        <p className="button-eg-group">
          <h4>Button States</h4>

          <Button isActive>Enabled Button</Button>
          <Button isDisabled>Disabled Button</Button>
        </p>

        <p className="button-eg-group">
          <h4>Button Events</h4>

          <Button onClick={this.message}>Click Button</Button>
        </p>

        <p className="button-eg-group">
          <h4>Button Sizes</h4>

          <Button>Default Button</Button>
          <Button bSize="lg">Large Button</Button>
          <Button bSize="sm">Small Button</Button>
          <Button bSize="xs">Extra Small Button</Button>
        </p>

        <p className="button-eg-group">
          <h4>Button Blocks</h4>

          <Button isBlock>Block Button</Button>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
