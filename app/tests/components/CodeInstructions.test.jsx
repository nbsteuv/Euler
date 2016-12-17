var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CodeInstructions = require('CodeInstructions');

describe('CodeInstructions', () => {
  it('should exist', () => {
    expect(CodeInstructions).toExist();
  });

  it('should render hardcoded instructions', () => {
    var codeInstructions = TestUtils.renderIntoDocument(<CodeInstructions />);
    var hardCodedInstructions = "Enter your code below. When run as a function, your code should return the answer.";
    var $el = $(ReactDOM.findDOMNode(codeInstructions));
    var renderedInstructions = $el.find('.code-instructions').text();
    expect(renderedInstructions).toBe(hardCodedInstructions);
  });
});
