var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CodeError = require('CodeError');

describe('Code Error', () => {
  it('should exist', () => {
    expect(CodeError).toExist();
  });

  it('should render error message when one exists', () => {
    var codeError = TestUtils.renderIntoDocument(<CodeError error="Test error" />);
    var $el = $(ReactDOM.findDOMNode(codeError));
    var errorText = $el.find('.code-error-text').text();
    expect(errorText).toBe("Test error");
  });
})
