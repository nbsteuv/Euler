var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CodeResult = require('CodeResult');

describe('CodeResult', () => {
  it('should exist', () => {
    expect(CodeResult).toExist();
  });

  it('should render component when answer and second props are provided', () => {
    var codeResult = TestUtils.renderIntoDocument(<CodeResult answer={45} seconds={23} />);
    var $el = $(ReactDOM.findDOMNode(codeResult));
    expect($el.length).toBe(1);
  });
});
