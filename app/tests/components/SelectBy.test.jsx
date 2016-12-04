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

  it('should dispatch setSelectBy action on click', () => {
    var action = {
      type: 'SET_SELECTBY',
      selectBy: 'Three'
    }
    var selectByOptions = ['One', 'Two', 'Three'];
    var spy = expect.createSpy();
    var selectBy = TestUtils.renderIntoDocument(<SelectBy selectByOptions={selectByOptions} dispatch={spy} />);
    var option = TestUtils.scryRenderedDOMComponentsWithTag(selectBy, 'input')[2];
    TestUtils.Simulate.click(option);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
