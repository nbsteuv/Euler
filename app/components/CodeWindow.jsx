var React = require('react');

var CodeInstructions = require('CodeInstructions');
var CodeSandbox = require('CodeSandbox');
var CodeResult = require('CodeResult');
var CodeError = require('CodeError');

//Trying a different pattern for conditional rendering in CodeResult component--conditional rendering happens within component, not within render method of parent.

var CodeWindow = React.createClass({
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
  setCodeResults: function(answer, seconds, code){
    this.setState({
      code: code
    });
    if(answer == 10){
      this.setState({
        answer: answer,
        seconds: seconds,
        error: undefined,
      });
    } else {
      this.setError('The return value of your answer (' + answer + ') does not match the correct answer for the problem (' + 10 + '). Please try again.')
    }
  },
  render: function(){
    var initialCode = this.state.code ? this.state.code : "Type your code here.";
    return (
      <div>
        <CodeInstructions />
        <CodeSandbox setCodeResults={this.setCodeResults} code={initialCode} />
        <CodeResult answer={this.state.answer} seconds={this.state.seconds} />
        <CodeError error={this.state.error} />
      </div>
    );
  }
});

module.exports = CodeWindow;
