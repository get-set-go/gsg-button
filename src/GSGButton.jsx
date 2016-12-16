import '../node_modules/gsg-common-style/less/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

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

    let _bStyle = 'default';
    _bStyle = classNames({
      'btn': true,
      [`btn-${this.props.bStyle}`]: true
    });

    return(
      <button
        type={_bType}
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}
        className={_bStyle}>{this.props.children}</button>
    );
  }
};

GSGButton.propTypes = {
  bType: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  bStyle: PropTypes.string
};

GSGButton.defaultProps = {
  _bType: 'button',
  isDisabled: false,
  _bStyle: 'default'
};
