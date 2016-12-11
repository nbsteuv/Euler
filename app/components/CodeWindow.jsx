var React = require('react');
var {connect} = require('react-redux');

var CodeInstructions = require('CodeInstructions');
var CodeSandbox = require('CodeSandbox');
var CodeResult = require('CodeResult');

//Trying a different pattern for conditional rendering in CodeResult component--conditional rendering happens within component, not within render method of parent.

export var CodeWindow = React.createClass({
  getInitialState: function(){
    return {
      answer: undefined,
      seconds: undefined
    }
  },
  render: function(){
    return (
      <div>
        <CodeInstructions />
        <CodeSandbox />
        <CodeResult answer={this.state.answer} seconds={this.state.seconds} />
      </div>
    );
  }
});

export default connect()(CodeWindow);
