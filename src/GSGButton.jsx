import './GSGButton.css';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class GSGButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _bType = 'button';
    switch (this.props.bType) {
      case 'submit':
        _bType = 'submit';
      break;

      case 'reset':
        _bType = 'reset';
      break;
    }

    return(
      <button type={_bType}>{this.props.children}</button>
    );
  }
};

GSGButton.propTypes = {
  bType: PropTypes.string
};
