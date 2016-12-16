import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Button from '../src';

describe('<Button /> component', function() {

  it('should button exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Button />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
