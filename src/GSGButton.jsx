import '../node_modules/gsg-common-style/less/button/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGButton extends React.Component {
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

    let _bClass = {
      'btn': true,
      [`btn-${this.props.bStyle}`]: true
    };

    if (this.props.bSize) {
      _bClass = objectAssign(_bClass, {
        [`btn-${this.props.bSize}`]: true
      });
    }

    if (this.props.isBlock) {
      _bClass = objectAssign(_bClass, {
        'btn-block': true
      });
    }

    if (this.props.isActive) {
      _bClass = objectAssign(_bClass, {
        'active': true
      });
    }

    _bClass = classNames(_bClass);

    return(
      <button
        type={_bType}
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}
        className={_bClass}>{this.props.children}</button>
    );
  }
};

GSGButton.propTypes = {
  bType: PropTypes.string,
  bStyle: PropTypes.string,
  bSize: PropTypes.string,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  isBlock: PropTypes.bool,
  onClick: PropTypes.func
};

GSGButton.defaultProps = {
  bType: 'button',
  bStyle: 'default',
  isDisabled: false,
  isActive: false,
  isBlock: false,
};
