var React = require('react');
var {connect} = require('react-redux');

var CodeInstructions = require('CodeInstructions');
var CodeSandbox = require('CodeSandbox');

export var CodeWindow = React.createClass({
  render: function(){
    return (
      <div>
        <CodeInstructions />
        <CodeSandbox />
      </div>
    );
  }
});

export default connect()(CodeWindow);
