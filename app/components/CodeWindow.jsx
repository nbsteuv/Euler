var React = require('react');
var {connect} = require('react-redux');

var CodeInstructions = require('CodeInstructions');
var CodeSandbox = require('CodeSandbox');
var CodeResult = require('CodeResult');
var CodeError = require('CodeError');

//Trying a different pattern for conditional rendering in CodeResult component--conditional rendering happens within component, not within render method of parent.

export var CodeWindow = React.createClass({
  getInitialState: function(){
    return {
      answer: undefined,
      seconds: undefined,
      error: undefined
    }
  },
  setError: function(error){
    this.setState({
      answer: undefined,
      seconds: undefined,
      error: error
    });
  },
  setCodeResults: function(answer, seconds){
    if(answer == 10){
      this.setState({
        answer: answer,
        seconds: seconds,
        error: undefined
      });
    } else {
      this.setError('The return value of your answer (' + answer + ') does not match the correct answer for the problem (' + 10 + '). Please try again.')
    }
  },
  render: function(){
    return (
      <div>
        <CodeInstructions />
        <CodeSandbox setCodeResults={this.setCodeResults} />
        <CodeResult answer={this.state.answer} seconds={this.state.seconds} />
        <CodeError error={this.state.error} />
      </div>
    );
  }
});

export default connect()(CodeWindow);
