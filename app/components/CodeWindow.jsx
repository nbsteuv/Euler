var React = require('react');
var {connect} = require('react-redux');

var CodeInstructions = require('CodeInstructions');

export var CodeWindow = React.createClass({
  render: function(){
    return (
      <div>
        <CodeInstructions />
      </div>
    );
  }
});

export default connect()(CodeWindow);
