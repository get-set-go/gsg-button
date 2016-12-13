import './GSGButton.less';

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
      <button
        type={_bType}
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
};

GSGButton.propTypes = {
  bType: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

GSGButton.defaultProps = {
  _bType: 'button',
  isDisabled: false
};
