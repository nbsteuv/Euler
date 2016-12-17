var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CodeWindow = require('CodeWindow');
var CodeInstructions = require('CodeInstructions');
var CodeSandbox = require('CodeSandbox');
var CodeResult = require('CodeResult');
var CodeError = require('CodeError');

describe('CodeWindow', () => {
  it('should exist', () => {
    expect(CodeWindow).toExist();
  });

  it('should render four components', () => {
    var codeWindow = TestUtils.renderIntoDocument(<CodeWindow />);
    var codeInstructionComponents = TestUtils.scryRenderedComponentsWithType(codeWindow, CodeInstructions);
    var codeSandboxComponents = TestUtils.scryRenderedComponentsWithType(codeWindow, CodeSandbox);
    var codeResultComponents = TestUtils.scryRenderedComponentsWithType(codeWindow, CodeResult);
    var codeErrorComponents = TestUtils.scryRenderedComponentsWithType(codeWindow, CodeError);
    expect(codeInstructionComponents.length).toBe(1);
    expect(codeSandboxComponents.length).toBe(1);
    expect(codeResultComponents.length).toBe(1);
    expect(codeErrorComponents.length).toBe(1);
  });
});
