var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CodeSandbox = require('CodeSandbox');
import AceEditor from 'react-ace';

describe('CodeSandbox', () => {
  it('should exist', () => {
    expect(CodeSandbox).toExist();
  });

  describe('Render', () => {
    it('should render Ace Editor', () => {
      var codeSandbox = TestUtils.renderIntoDocument(<CodeSandbox />);
      var aceEditors = TestUtils.scryRenderedComponentsWithType(codeSandbox, AceEditor);
      expect(aceEditors.length).toBe(1);
    });

    it('should render node with code-submit class', () => {
      var codeSandbox = TestUtils.renderIntoDocument(<CodeSandbox />);
      var $el = $(ReactDOM.findDOMNode(codeSandbox));
      var submitNode = $el.find('.code-submit');
      expect(submitNode.length).toBe(1);
    });
  });
});
