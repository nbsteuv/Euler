var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import ConnectedSelectBy,{SelectBy} from 'SelectBy';

describe('SelectBy', () => {
  it('should exist', () => {
    expect(SelectBy).toExist();
  });

  it('should render each selectByOption', () => {
    var selectByOptions = ['One', 'Two', 'Three'];
    var selectByProp = 'One';
    var selectBy = TestUtils.renderIntoDocument(<SelectBy selectByOptions={selectByOptions} selectBy={selectByProp} />);
    var $el = $(ReactDOM.findDOMNode(selectBy));
    var numberOptions = $el.find('input').length;
    expect(numberOptions).toBe(3);
  });
});
